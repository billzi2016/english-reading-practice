"""文章生成脚本的共享工具。

文件意图：
- 集中维护文章文件扫描、编号计算、slug 生成和结果校验逻辑。
- 让 `ollama_generate.py` 和 `ollama_list.py` 复用同一套规则，避免后续 AI 改两份重复代码。
"""

from __future__ import annotations

import re
import json
from dataclasses import dataclass
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = PROJECT_ROOT / "src" / "data" / "articles"
ARTICLE_FILE_PATTERN = re.compile(r"^(?P<id>\d{5})_(?P<slug>[a-z0-9]+(?:-[a-z0-9]+)*)\.ts$")


@dataclass(frozen=True)
class ArticleFile:
    """单篇文章文件的轻量索引信息。"""

    path: Path
    article_id: str
    slug: str
    title: str


def slugify(text: str) -> str:
    """把题目转成稳定 kebab-case slug，只保留 URL 友好的小写英文、数字和连字符。"""
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", text.strip().lower()).strip("-")
    slug = re.sub(r"-{2,}", "-", slug)
    if not slug:
        raise ValueError("题目无法转换为 slug，请使用包含英文或数字的题目。")
    return slug


def read_article_files() -> list[ArticleFile]:
    """读取现有文章文件，并按五位编号排序。"""
    articles: list[ArticleFile] = []

    for path in sorted(ARTICLES_DIR.glob("*.ts")):
        match = ARTICLE_FILE_PATTERN.match(path.name)
        if not match:
            continue

        content = path.read_text(encoding="utf-8")
        title_match = re.search(r"title:\s*'([^']+)'", content)
        articles.append(
            ArticleFile(
                path=path,
                article_id=match.group("id"),
                slug=match.group("slug"),
                title=title_match.group(1) if title_match else match.group("slug"),
            )
        )

    return articles


def next_article_identity(topic: str) -> tuple[str, str, Path]:
    """根据现有文章编号和用户题目，计算下一篇文章的 id、slug 和目标路径。"""
    articles = read_article_files()
    next_number = max((int(article.article_id) for article in articles), default=0) + 1
    article_id = f"{next_number:05d}"
    slug = slugify(topic)
    output_path = ARTICLES_DIR / f"{article_id}_{slug}.ts"

    if output_path.exists():
        raise FileExistsError(f"目标文章文件已存在：{output_path.relative_to(PROJECT_ROOT)}")

    if any(article.slug == slug for article in articles):
        raise ValueError(f"slug 已存在：{slug}")

    return article_id, slug, output_path


def strip_markdown_fence(content: str) -> str:
    """去掉模型可能包上的 Markdown 代码围栏，只保留 TypeScript 源码。"""
    text = content.strip()
    fence = re.fullmatch(r"```(?:ts|typescript)?\s*(.*?)\s*```", text, flags=re.S)
    return fence.group(1).strip() if fence else text


def parse_topics(raw_content: str, count: int) -> list[str]:
    """解析模型返回的选题 JSON，并过滤现有 slug 和批内重复。"""
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


def apply_article_identity(content: str, article_id: str, slug: str, title: str) -> str:
    """把系统提示词中的占位符替换为脚本计算出的稳定身份字段。"""
    return (
        content.replace("__ARTICLE_ID__", article_id)
        .replace("__ARTICLE_SLUG__", slug)
        .replace("__ARTICLE_TITLE__", title)
        .strip()
        + "\n"
    )


def validate_article_source(content: str, article_id: str, slug: str) -> list[str]:
    """校验生成结果是否符合项目文章模块格式，返回所有错误信息。"""
    errors: list[str] = []

    required_snippets = [
        "import type { Article } from '../../types/index.ts';",
        "const article: Article = {",
        "export default article;",
        f"id: '{article_id}'",
        f"slug: '{slug}'",
        "paragraphs: [",
        "vocabulary: [",
        '<span class="vocab"',
        "data-cn=",
    ]

    for snippet in required_snippets:
        if snippet not in content:
            errors.append(f"缺少必要片段：{snippet}")

    local_user_path_prefix = "/" + "Users/"
    forbidden_snippets = [
        "prevSlug",
        "nextSlug",
        "prevTitle",
        "nextTitle",
        local_user_path_prefix,
        "```",
        "__ARTICLE_",
    ]

    for snippet in forbidden_snippets:
        if snippet in content:
            errors.append(f"包含禁止片段：{snippet}")

    if len(re.findall(r"`[^`]+`", content, flags=re.S)) < 6:
        errors.append("正文段落数量看起来不足，至少应生成 6 个模板字符串段落。")

    if len(re.findall(r"\{\s*word:\s*'[^']+',\s*cn:\s*'[^']+'\s*\}", content)) < 6:
        errors.append("词汇表数量看起来不足，至少应生成 6 个词汇项。")

    return errors
