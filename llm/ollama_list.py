#!/usr/bin/env python3
"""列出当前项目里的所有文章题目。

文件意图：
- 给后续 AI 或维护者快速查看现有选题，避免重复写同一主题。
- 只读 `src/data/articles/` 下的单篇文章文件，不修改任何项目状态。
"""

from __future__ import annotations

from ollama_article_utils import read_article_files


def main() -> None:
    """打印文章编号、slug 和英文标题。"""
    articles = read_article_files()

    for article in articles:
        print(f"{article.article_id}  {article.slug:<24}  {article.title}")

    print(f"\nTotal: {len(articles)}")


if __name__ == "__main__":
    main()
