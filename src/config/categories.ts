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
  science: {
    badgeLabel: '🔬 Science',
    filterLabel: '🔬 Science',
    badgeClass: 'bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300',
  },
  business: {
    badgeLabel: '💼 Business',
    filterLabel: '💼 Business',
    badgeClass: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300',
  },
  culture: {
    badgeLabel: '🎭 Culture',
    filterLabel: '🎭 Culture',
    badgeClass: 'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300',
  },
  society: {
    badgeLabel: '🏛 Society',
    filterLabel: '🏛 Society',
    badgeClass: 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300',
  },
  nature: {
    badgeLabel: '🌿 Nature',
    filterLabel: '🌿 Nature',
    badgeClass: 'bg-lime-100 dark:bg-lime-900/50 text-lime-700 dark:text-lime-300',
  },
  health: {
    badgeLabel: '⚕ Health',
    filterLabel: '⚕ Health',
    badgeClass: 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300',
  },
  psychology: {
    badgeLabel: '🧠 Psychology',
    filterLabel: '🧠 Psychology',
    badgeClass: 'bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-300',
  },
  education: {
    badgeLabel: '🎓 Education',
    filterLabel: '🎓 Education',
    badgeClass: 'bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300',
  },
  ai: {
    badgeLabel: '🤖 AI',
    filterLabel: '🤖 AI',
    badgeClass: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300',
  },
  programming: {
    badgeLabel: '⌨ Programming',
    filterLabel: '⌨ Programming',
    badgeClass: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300',
  },
  space: {
    badgeLabel: '🚀 Space',
    filterLabel: '🚀 Space',
    badgeClass: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300',
  },
  engineering: {
    badgeLabel: '🛠 Engineering',
    filterLabel: '🛠 Engineering',
    badgeClass: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300',
  },
};

export const CATEGORY_OPTIONS = Object.entries(CATEGORY_CONFIG).map(([value, config]) => ({
  value: value as Category,
  label: config.filterLabel,
}));
