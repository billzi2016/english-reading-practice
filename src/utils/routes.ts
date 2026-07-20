// 本文件意图：集中生成站内 URL，统一处理 Astro base path，避免 GitHub Pages 子路径在各组件里重复拼接。

// 标准化后的站点根路径。Astro 在 GitHub Pages 下可能给出不带尾斜杠的 BASE_URL，这里统一补齐。
const SITE_ROOT = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

// 生成站内路径。调用方只传业务路径，例如 "articles/ada-lovelace"，不关心部署子路径。
export function sitePath(path = ''): string {
  return `${SITE_ROOT}${path.replace(/^\/+/, '')}`;
}
