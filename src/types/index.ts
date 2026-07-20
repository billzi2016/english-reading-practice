// 本文件意图：定义文章领域模型，给页面、组件和数据源共享同一套类型边界，避免字段名和取值在各处重复硬编码。

// 分类只允许这三类；新增分类时需要同步组件映射，TypeScript 会提醒遗漏位置。
export type Category = 'biography' | 'technology' | 'history';

// 难度等级保持小集合，方便 DifficultyDots 用固定配置渲染。
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// 词汇条目用于文章末尾词汇表；正文内高亮词仍通过 HTML span 的 data-cn 表达。
export interface VocabEntry {
  word: string;
  cn: string;
}

export interface ArticleNavigationItem {
  slug: string;
  title: string;
}

export interface ArticleNavigation {
  prev?: ArticleNavigationItem;
  next?: ArticleNavigationItem;
}

// 预留的结构化段落类型；当前正文先使用 HTML 字符串，后续要拆分词汇标注时可迁移到这里。
export interface ArticleParagraph {
  text: string;
  vocab?: VocabEntry[];
}

// 首页卡片和文章页都需要的基础元数据，单独抽出可以让 ArticleCard 只依赖最小字段集合。
export interface ArticleMeta {
  id: string;          // e.g. "0001"
  slug: string;        // e.g. "ada-lovelace"
  title: string;
  subtitle: string;
  summary: string;
  category: Category;
  difficulty: Difficulty;
  readingMinutes: number;
  subtitle2?: string;  // optional second line (e.g. birth info)
}

// 完整文章模型：在基础元数据外追加正文、词汇表和前后篇导航信息。
export interface Article extends ArticleMeta {
  tip?: string;
  paragraphs: string[];   // raw HTML strings with <span class="vocab"> already embedded
  vocabulary: VocabEntry[];
}
