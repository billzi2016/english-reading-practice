// 本文件意图：集中维护文章派生逻辑，页面只消费结果，禁止在 articles.ts 手工维护上一篇/下一篇。
import type { Article, ArticleNavigation } from '../types/index.ts';

// 根据 articles 数组顺序自动生成导航，新增/调序文章时不需要维护 prevSlug/nextSlug 这类重复字段。
export function getArticleNavigation(articles: Article[], article: Article): ArticleNavigation {
  const index = articles.findIndex(item => item.slug === article.slug);
  const prev = index > 0 ? articles[index - 1] : undefined;
  const next = index >= 0 && index < articles.length - 1 ? articles[index + 1] : undefined;

  return {
    prev: prev ? { slug: prev.slug, title: prev.title } : undefined,
    next: next ? { slug: next.slug, title: next.title } : undefined,
  };
}
