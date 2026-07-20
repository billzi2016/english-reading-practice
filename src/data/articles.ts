import type { Article } from '../types/index.ts';

// 文件意图：自动汇总拆分后的文章模块，为首页、详情页和导航提供唯一文章列表。
// 维护重点：新增文章只需要在 src/data/articles/ 下新增 000NN_slug.ts 这种文件；不要在这里手写 import 清单。

type ArticleModule = {
  default: Article;
};

// 自动索引：Vite 会在构建期展开 glob；文件名前缀负责稳定排序，避免新增文章时修改聚合入口。
const articleModules = import.meta.glob<ArticleModule>('./articles/*.ts', { eager: true });

export const articles: Article[] = Object.entries(articleModules)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, articleModule]) => articleModule.default);
