#!/usr/bin/env python3
"""使用 Ollama 生成新的英语阅读文章模块。

文件意图：
- 调用 Ollama Python 库和 GPT-OSS 120B，把用户给的题目生成成项目可直接读取的文章文件。
- 长规则全部放在 system prompt，user prompt 只放“生成 xxx”，最大化提示词缓存复用。
- 写入前做格式检查，避免生成破坏自动文章索引的文件。
"""

from __future__ import annotations

import argparse
import json
import os
import sys

from ollama import chat

from ollama_article_utils import (
    PROJECT_ROOT, apply_article_identity, read_article_files, next_article_identity,
    slugify, strip_markdown_fence, validate_article_source,
)
from ollama_prompts import KNOWLEDGE_CUTOFF, SYSTEM_PROMPT, TOPIC_SYSTEM_PROMPT


DEFAULT_MODEL = "gpt-oss:120b"
MAX_RETRIES = 3


def retry(label: str, action):
    """对不稳定的 LLM 调用和格式校验做最多 3 次重试。"""
    last_error: Exception | None = None

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            return action()
        except Exception as error:
            last_error = error
            print(f"{label} 第 {attempt}/{MAX_RETRIES} 次失败：{error}", file=sys.stderr)

    raise RuntimeError(f"{label} 连续失败 {MAX_RETRIES} 次。") from last_error


def build_user_prompt(topic: str) -> str:
    """保持 user prompt 极短，只承载本次题目，便于 Ollama 复用 system prompt 缓存。"""
    return f"生成 {topic}"


def build_topic_prompt(count: int) -> str:
    """生成短 user prompt；已有题目作为输入数据，长规则仍在 system prompt。"""
    existing_topics = [article.title for article in read_article_files()]
    return json.dumps(
        {
            "task": f"生成 {count} 个故事题目",
            "existing_topics": existing_topics,
        },
        ensure_ascii=False,
    )


def generate_topics(count: int, model: str) -> list[str]:
    """调用 Ollama 生成一组不重复题目，并做最小 JSON 和 slug 校验。"""
    def action() -> list[str]:
        response = chat(
            model=model,
            messages=[
                {"role": "system", "content": TOPIC_SYSTEM_PROMPT},
                {"role": "user", "content": build_topic_prompt(count)},
            ],
            think="high",
            stream=False,
            options={"temperature": 0.1},
        )
        return parse_topics(strip_markdown_fence(response.message.content), count)

    return retry("自动选题", action)


def parse_topics(raw_content: str, count: int) -> list[str]:
    """解析并过滤模型返回的选题 JSON。"""
    try:
        topics = json.loads(raw_content)
    except json.JSONDecodeError as error:
        raise ValueError(f"选题结果不是合法 JSON：{error}") from error

    if not isinstance(topics, list) or not all(isinstance(topic, str) for topic in topics):
        raise ValueError("选题结果必须是字符串数组。")

    existing_slugs = {article.slug for article in read_article_files()}
    unique_topics: list[str] = []
    seen_slugs: set[str] = set()

    for topic in topics:
        clean_topic = topic.strip()
        if not clean_topic:
            continue
        slug = slugify(clean_topic)
        if slug in existing_slugs or slug in seen_slugs:
            continue
        seen_slugs.add(slug)
        unique_topics.append(clean_topic)

    if len(unique_topics) < count:
        raise ValueError(f"模型只给出 {len(unique_topics)} 个可用新题目，少于要求的 {count} 个。")

    return unique_topics[:count]


def generate_article(topic: str, model: str) -> str:
    """调用 Ollama chat，固定 temperature=0.1 和 think=high 生成文章源码。"""
    response = chat(
        model=model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": build_user_prompt(topic)},
        ],
        think="high",
        stream=False,
        options={"temperature": 0.1},
    )
    return response.message.content


def parse_args() -> argparse.Namespace:
    """解析命令行参数，支持指定题目或指定数量自动生成题目。"""
    parser = argparse.ArgumentParser(description="Generate one article file with Ollama GPT-OSS 120B.")
    parser.add_argument(
        "topics",
        nargs="*",
        help="Article topic(s), or one number such as 3 to auto-generate 3 topics",
    )
    parser.add_argument("--count", type=int, help="Auto-generate this many article topics before writing articles")
    parser.add_argument("--model", default=os.getenv("OLLAMA_MODEL", DEFAULT_MODEL), help="Ollama model name")
    parser.add_argument("--dry-run", action="store_true", help="Print generated content without writing the file")
    return parser.parse_args()


def resolve_topics(args: argparse.Namespace) -> list[str]:
    """把命令行输入转换成待生成题目列表。"""
    if args.count is not None:
        if args.count < 1:
            raise ValueError("--count 必须大于 0。")
        if args.topics:
            raise ValueError("使用 --count 自动选题时，不要再传入具体题目。")
        return generate_topics(args.count, args.model)

    if len(args.topics) == 1 and args.topics[0].isdigit():
        count = int(args.topics[0])
        if count < 1:
            raise ValueError("生成数量必须大于 0。")
        return generate_topics(count, args.model)

    if not args.topics:
        raise ValueError('请传入题目，例如 python3 llm/ollama_generate.py "Ada Lovelace"，或传入数量，例如 python3 llm/ollama_generate.py 3。')

    return args.topics


def create_article(topic: str, model: str, dry_run: bool) -> None:
    """为单个题目生成、校验并按当前最大编号写入文章文件。"""
    def action() -> tuple[str, object]:
        article_id, slug, output_path = next_article_identity(topic)
        raw_content = generate_article(topic, model)
        source = apply_article_identity(strip_markdown_fence(raw_content), article_id, slug, topic)
        errors = validate_article_source(source, article_id, slug)
        if errors:
            raise ValueError("生成结果校验失败：\n" + "\n".join(f"- {error}" for error in errors))
        return source, output_path

    source, output_path = retry(f"生成文章《{topic}》", action)

    if dry_run:
        print(f"----- {output_path.relative_to(PROJECT_ROOT)} -----")
        print(source)
        return

    output_path.write_text(source, encoding="utf-8")
    print(f"created {output_path.relative_to(PROJECT_ROOT)}")


def main() -> int:
    """生成、校验并写入一篇或多篇连续编号文章。"""
    args = parse_args()
    try:
        topics = resolve_topics(args)
        for topic in topics:
            create_article(topic, args.model, args.dry_run)
    except (FileExistsError, RuntimeError, ValueError) as error:
        print(error, file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
