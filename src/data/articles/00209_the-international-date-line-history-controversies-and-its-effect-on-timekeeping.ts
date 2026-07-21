import type { Article } from '../../types/index.ts';

// 文件意图：维护《The International Date Line: History, Controversies, and Its Effect on Timekeeping》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00209 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00209',
  slug: 'the-international-date-line-history-controversies-and-its-effect-on-timekeeping',
  title: 'The International Date Line: History, Controversies, and Its Effect on Timekeeping',
  subtitle: 'How a thin imaginary line shapes our calendars and daily lives.',
  summary: 'Explore the origins, disputes, and practical impacts of the line that decides yesterday from today.',
  category: 'geography',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When you travel eastward across the Pacific Ocean and set your watch forward by one day, you are crossing the <span class="vocab" data-cn="国际日期变更线">International Date Line</span>. Unlike borders drawn on maps, this line is an imaginary construct that helps synchronize global <span class="vocab" data-cn="时区">time zones</span> and keep the world’s calendars in order. Its existence stems from the need to resolve a simple but perplexing question: if it is Monday in Tokyo, what day should be recorded in Honolulu?`,
    `The concept of a global reference for time began with the <span class="vocab" data-cn="本初子午线">prime meridian</span> established at Greenwich in 1884. At that conference, delegates agreed to divide the Earth into twenty‑four 15° longitudinal slices, each representing one hour’s difference from Greenwich Mean Time (GMT). However, they left a gap opposite the prime meridian—roughly along the 180° longitude—where no country claimed exclusive rights, creating an ideal spot for the date line. Early maps simply drew a dashed line through the Pacific, but its exact path was fluid and often adjusted to suit political or economic needs.`,
    `One of the earliest controversies involved the United States’ acquisition of Alaska in 1867. The U.S. government chose to place the line east of the Aleutian Islands, ensuring that all of Alaska shared the same calendar day as the rest of the country. Later, when the Philippines changed hands from Spain to the United States after the Spanish‑American War (1898), the date line was shifted westward so that Manila would align with Asian trading partners rather than American Pacific islands. These adjustments illustrate how the line can be moved for convenience, even though it is technically an imaginary construct.`,
    `The most famous modern dispute erupted in 1995 when Kiribati, a scattered island nation straddling the equator, decided to move its western side of the date line eastward by 12 hours. The change created the world’s earliest time zone—UTC+14—allowing all of Kiribati’s islands to share the same calendar day. Critics argued that this manipulation was primarily for tourism and economic branding (“the first country to see the new millennium”), but the move also simplified internal administration, as residents no longer had to calculate dates across two different days within a single nation.`,
    `Beyond politics, the date line influences everyday life in subtle ways. Airlines schedule flights based on <span class="vocab" data-cn="协调世界时">Coordinated Universal Time (UTC)</span>, which remains constant regardless of local adjustments. Pilots and crew must account for “lost” or “gained” days when crossing the line, especially on long‑haul routes that span multiple time zones. Similarly, software developers embed date‑line logic into operating systems to prevent calendar glitches; a famous bug in early versions of Microsoft Windows caused dates to jump incorrectly when users crossed the line virtually in simulation mode.`,
    `Scientists studying the Earth’s rotation also rely on the date line as a reference point. The length of a <span class="vocab" data-cn="太阳日">solar day</span>—the time between two successive noons—is measured against UTC, which is adjusted by occasional leap seconds to keep atomic clocks aligned with Earth’s irregular spin. If the International Date Line were shifted dramatically, it would not affect the physics of rotation, but it would require a massive overhaul of legal documents, financial contracts, and even historical records that depend on precise dating.`,
    `In popular culture, the date line often appears as a plot device in novels and movies, where characters “lose” a day or experience time loops by crossing it at midnight. While these stories exaggerate the drama, they underscore an essential truth: the International Date Line is a human‑made solution to a natural problem—how to label each moment on a rotating sphere with a single, shared calendar. Its history shows that geography, politics, and technology intertwine whenever we try to impose order on time itself.`,
    `Today, the line remains largely stable, skirting around island groups such as Samoa, Tokelau, and Fiji, which have occasionally shifted their own national dates for economic reasons. As global communication becomes ever faster, the need for a clear demarcation persists, reminding us that even an invisible line can shape economies, cultures, and our personal sense of “today.”`,
  ],
  vocabulary: [
    { word: 'International Date Line', cn: '国际日期变更线' },
    { word: 'time zones', cn: '时区' },
    { word: 'prime meridian', cn: '本初子午线' },
    { word: 'Coordinated Universal Time (UTC)', cn: '协调世界时' },
    { word: 'solar day', cn: '太阳日' },
    { word: 'leap second', cn: '闰秒' },
  ],
};

export default article;
