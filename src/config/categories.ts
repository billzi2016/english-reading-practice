// 本文件意图：集中维护文章分类的显示文案、筛选按钮文案和徽章样式，禁止在页面/组件里重复写分类配置。
import type { Category } from '../types/index.ts';

export interface CategoryConfig {
  badgeLabel: string;
  filterLabel: string;
  badgeClass: string;
}

// 新增分类只允许改这里和 Category 类型；其他页面必须消费这个配置，不要手写分类按钮或徽章文案。
export const CATEGORY_CONFIG: Record<Category, CategoryConfig> = {
  biography: {
    badgeLabel: '👤 Bio',
    filterLabel: '👤 Biography',
    badgeClass: 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300',
  },
  technology: {
    badgeLabel: '⚙️ Tech',
    filterLabel: '⚙️ Technology',
    badgeClass: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-300',
  },
  history: {
    badgeLabel: '📜 History',
    filterLabel: '📜 History',
    badgeClass: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300',
  },
};

export const CATEGORY_OPTIONS = Object.entries(CATEGORY_CONFIG).map(([value, config]) => ({
  value: value as Category,
  label: config.filterLabel,
}));
