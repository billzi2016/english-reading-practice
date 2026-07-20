// 本文件意图：集中维护只在浏览器运行的交互逻辑，Astro 页面只负责挂载初始化函数，避免内联脚本重复。

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
// 单一职责：读取/写入主题偏好，并同步更新 DOM class 与 localStorage。

// 初始化主题切换按钮；如果当前页面没有按钮则直接返回，保证同一函数可被多个页面安全复用。
export function initThemeToggle(): void {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!btn) return;

  // 将主题变更封装成一个函数，点击事件和初始状态恢复都走同一逻辑，减少分支重复。
  const applyTheme = (isDark: boolean): void => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (icon) icon.textContent = isDark ? '🌙' : '☀️';
  };

  // 默认深色：只有明确保存为 light 时才切到浅色，避免首次加载出现浅色闪烁。
  applyTheme(localStorage.getItem('theme') !== 'light');

  btn.addEventListener('click', () => {
    applyTheme(!document.documentElement.classList.contains('dark'));
  });
}

// ─── Reading Progress Bar ─────────────────────────────────────────────────────
// 单一职责：根据页面滚动位置更新 #progress-bar 宽度。

// 初始化阅读进度条；scrollable 为 0 时保护除法，避免短页面产生 NaN。
export function initProgressBar(): void {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  const update = (): void => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0) + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ─── Reading Time ─────────────────────────────────────────────────────────────
// 单一职责：根据正文词数估算阅读时间。

// 初始化阅读时间展示；按 200 words/minute 粗略估算，适合当前英语学习文章长度。
export function initReadingTime(): void {
  const body = document.querySelector<HTMLElement>('.article-body');
  const el   = document.getElementById('reading-time');
  if (!body || !el) return;

  const words = (body.textContent ?? '').trim().split(/\s+/).length;
  el.textContent = `${Math.max(1, Math.ceil(words / 200))} min · ${words} words`;
}

// ─── Category Filter ──────────────────────────────────────────────────────────
// 单一职责：根据 data-category 控制文章卡片显示/隐藏。

const ACTIVE_CLASSES   = ['bg-blue-600', 'text-white'] as const;
const INACTIVE_CLASSES = ['bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300'] as const;

// 统一维护筛选按钮状态，避免每个点击事件里重复 add/remove class。
function setFilterButtonState(btn: Element, active: boolean): void {
  if (active) {
    btn.classList.add(...ACTIVE_CLASSES);
    btn.classList.remove(...INACTIVE_CLASSES);
  } else {
    btn.classList.remove(...ACTIVE_CLASSES);
    btn.classList.add(...INACTIVE_CLASSES);
  }
}

// 初始化分类筛选；DOM 通过 data-filter 和 data-category 解耦，新增分类时不需要改选择器。
export function initFilter(): void {
  const btns  = document.querySelectorAll<HTMLElement>('[data-filter]');
  const cards = document.querySelectorAll<HTMLElement>('[data-category]');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter ?? 'all';
      btns.forEach(b => setFilterButtonState(b, b === btn));
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

// ─── Search ───────────────────────────────────────────────────────────────────
// 单一职责：在首页卡片文本中执行轻量级搜索。

// 初始化搜索框；当前实现只过滤已渲染卡片，避免引入额外状态管理。
export function initSearch(): void {
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  const cards = document.querySelectorAll<HTMLElement>('[data-category]');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    cards.forEach(card => {
      const text = (card.textContent ?? '').toLowerCase();
      card.style.display = (!query || text.includes(query)) ? '' : 'none';
    });
  });
}
