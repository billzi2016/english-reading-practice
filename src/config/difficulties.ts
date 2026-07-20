// 本文件意图：集中维护难度等级的点数、颜色和文案，禁止组件里重复写 difficulty 映射。
import type { Difficulty } from '../types/index.ts';

export interface DifficultyConfig {
  filledCount: number;
  colorClass: string;
  label: string;
}

export const TOTAL_DIFFICULTY_DOTS = 3;

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  beginner: { filledCount: 1, colorClass: 'bg-green-400', label: 'Beginner' },
  intermediate: { filledCount: 2, colorClass: 'bg-green-500', label: 'Intermediate' },
  advanced: { filledCount: 3, colorClass: 'bg-yellow-500', label: 'Advanced' },
};
