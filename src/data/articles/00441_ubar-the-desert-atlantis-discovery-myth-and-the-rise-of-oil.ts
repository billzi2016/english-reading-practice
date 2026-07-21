import type { Article } from '../../types/index.ts';

// 文件意图：维护《Ubar – The Desert Atlantis: Discovery, Myth, and the Rise of Oil》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00441 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00441',
  slug: 'ubar-the-desert-atlantis-discovery-myth-and-the-rise-of-oil',
  title: 'Ubar – The Desert Atlantis: Discovery, Myth, and the Rise of Oil',
  subtitle: 'How a legendary city guided explorers from ancient trade routes to modern oil fields',
  summary: 'The story of Ubar intertwines myth, archaeology, and the birth of the Arabian petroleum industry.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When sandstorms sweep across the Rubʿ al Khali, locals still whisper about a city that vanished beneath the dunes—a place they call <span class="vocab" data-cn="失落的城市">Ubar</span>.  To many, it is the Arabian counterpart of Atlantis: a glittering metropolis swallowed by nature’s fury.  The legend persisted for centuries, shaping poetry and pilgrim tales, until modern explorers decided to test whether myth could be mapped onto real geography.`,
    `The earliest written reference appears in the Qur'an’s mention of “Iram of the Pillars,” a phrase that has been interpreted as describing a grand settlement built on stone columns.  Classical Arab geographers such as Al‑Maqdisi and Ibn Battuta recorded caravans stopping at a “city of frankincense” where merchants exchanged resin for gold, silk, and spices.  These accounts form the backbone of <span class="vocab" data-cn="神话学">mythology</span> that painted Ubar as both a commercial hub and a moral cautionary tale about hubris.`,
    `In the early twentieth century, British explorer Bertram Thomas trekked the empty quarter but found only scattered ruins.  It wasn’t until the 1990s that <span class="vocab" data-cn="考古学">archaeology</span> received a technological boost: Sir Ranulph Fiennes and documentary filmmaker Nicholas Clapp teamed up with geophysicists to analyze <span class="vocab" data-cn="卫星影像">satellite imagery</span> from NASA’s Landsat program.  The images revealed a rectangular pattern of ancient walls hidden beneath the sand, prompting an expedition that would locate the fabled site at Shisr in Oman.`,
    `The Shisr excavation uncovered collapsed stone arches, pottery shards stamped with dates ranging from the third to seventh centuries CE, and a sophisticated water‑management system.  Researchers concluded that the settlement thrived on the <span class="vocab" data-cn="石油">petroleum</span>-free economy of frankincense trade, channeling goods along a network of caravan <span class="vocab" data-cn="贸易路线">trade routes</span> that linked southern Arabia with the Mediterranean.  Carbon dating and stratigraphic analysis suggested that a sudden shift—perhaps a sand‑encroachment event or a change in regional climate—caused the city’s rapid decline, a process modern scholars describe as <span class="vocab" data-cn="淤积">siltation</span> of its oasis wells.`,
    `While Ubar faded into legend, the Arabian Peninsula was on the cusp of another transformation.  In the late 1930s, oil seepages discovered near Bahrain and Saudi Arabia sparked a scramble for <span class="vocab" data-cn="石油">petroleum</span> concessions.  The same desert that had hidden Ubar now revealed vast underground reservoirs, turning once‑remote dunes into centers of global energy production.  Oil companies even invoked the mythic city in marketing campaigns, portraying their ventures as a modern “rediscovery” of ancient wealth.`,
    `The intertwining of myth and resource exploitation illustrates how narratives can steer scientific inquiry.  The search for Ubar demonstrated that <span class="vocab" data-cn="地球物理学">geophysics</span>—through magnetic surveys and ground‑penetrating radar—can validate stories passed down through oral tradition.  Conversely, the oil boom reshaped regional identities, with former nomadic tribes becoming stakeholders in a lucrative industry that traced its roots back to the very trade routes once serviced by Ubar’s merchants.`,
    `Today, visitors to Oman can stand amid the ruins of Shisr and imagine a bustling market where frankincense smoke curled into the desert air.  The site serves as a reminder that legends are not merely fanciful tales; they are cultural maps that, when paired with modern science, can uncover hidden chapters of human history.  As scholars continue to probe the sands for clues about climate change and ancient economies, Ubar remains a beacon—an “Atlantis of the desert” whose story bridges myth, archaeology, and the rise of the petroleum age.`,
  ],
  vocabulary: [
    { word: 'Ubar', cn: '乌巴尔（传说中的沙漠城市）' },
    { word: 'mythology', cn: '神话学' },
    { word: 'archaeology', cn: '考古学' },
    { word: 'satellite imagery', cn: '卫星影像' },
    { word: 'petroleum', cn: '石油' },
    { word: 'trade routes', cn: '贸易路线' },
    { word: 'siltation', cn: '淤积' },
    { word: 'geophysics', cn: '地球物理学' },
  ],
};

export default article;
