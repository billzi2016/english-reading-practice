import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Mystery of the Nazca Lines: Ancient Geoglyphs and Modern Theories》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00202 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00202',
  slug: 'the-mystery-of-the-nazca-lines-ancient-geoglyphs-and-modern-theories',
  title: 'The Mystery of the Nazca Lines: Ancient Geoglyphs and Modern Theories',
  subtitle: 'Exploring Peru’s Desert Canvas Through Past Beliefs and New Technology',
  summary: 'A journey through the creation, theories, and modern research surrounding the enigmatic Nazca Lines.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `High on the arid plateau of southern Peru, a series of enormous designs stretch across the desert floor like a secret code waiting to be read. These markings were made by the <span class="vocab" data-cn="纳斯卡文化">Nazca culture</span> between roughly 200 BCE and 600 CE, long before modern mapping tools existed. From above, one can see spirals, monkeys, hummingbirds, and straight lines that run for kilometres, but on the ground they appear as faint ridges barely wider than a foot. The sheer scale of these images has sparked curiosity for centuries, prompting scholars to ask why an ancient people would invest so much labour into something visible only from the sky.`,
    `The technique used by the Nazca artisans was surprisingly simple yet effective. Workers removed the thin layer of reddish‑brown surface soil, exposing the darker volcanic ash underneath. This contrast created a permanent “negative” image that has survived for over a thousand years. Such creations are known as <span class="vocab" data-cn="地画">geoglyph</span>s—a term that distinguishes them from painted or carved art because they rely on the manipulation of the earth itself rather than pigments or stone. The shallow trenches, often only a few centimetres deep, were dug with wooden tools and guided by simple cords stretched between stakes.`,
    `Over the decades, several competing explanations have emerged to account for the purpose of these massive drawings. One influential school of thought is <span class="vocab" data-cn="考古天文学">archaeoastronomy</span>, which suggests that certain lines align with solstices or the rising points of bright stars, turning the desert into a giant astronomical calendar. Another hypothesis links the figures to water worship; in an environment where rain is scarce, the Nazca may have performed rituals to invoke rainfall, using the images as offerings to deities associated with rivers and aquifers. A third theory proposes that the lines served as pathways for ceremonial processions, guiding priests and participants through a sacred landscape during seasonal festivals.`,
    `In recent years, technology has given researchers new eyes on this ancient canvas. High‑resolution satellite imagery, combined with <span class="vocab" data-cn="激光雷达">LIDAR</span> (Light Detection and Ranging), allows scientists to map the lines in three dimensions without disturbing the fragile surface. <span class="vocab" data-cn="遥感技术">Remote sensing</span> techniques can detect subtle variations in soil composition, revealing previously unknown figures hidden beneath sand dunes. Drone surveys have also produced detailed orthophotos that help archaeologists test old hypotheses—such as whether certain lines truly point toward celestial bodies or simply follow natural topography.`,
    `Preserving the Nazca Lines has become a delicate balancing act. The desert climate is harsh but stable; however, modern threats like illegal mining, off‑road vehicle traffic, and even subtle shifts in groundwater levels can erode the surface. Changes to the underlying <span class="vocab" data-cn="含水层">aquifer</span>—the underground water reservoir that feeds nearby oases—may alter soil moisture, causing cracks that blur the contrast between the exposed ash and the surrounding earth. UNESCO’s designation of the site as a World Heritage property in 1994 has helped raise awareness, but enforcement remains challenging across such an expansive area.`,
    `For the people who live near the lines today, these ancient drawings are more than just scientific puzzles; they are cultural landmarks that connect present‑day communities to their ancestors. Local guides now lead tourists on flights over the desert, offering narratives that blend traditional legends with contemporary research findings. While some visitors still cling to sensational ideas—like extraterrestrial involvement—the growing body of rigorous scholarship emphasizes a human story: one of ingenuity, reverence for nature, and an enduring desire to leave a mark that transcends time.`,
    `The mystery of the Nazca Lines endures not because we lack data, but because each new discovery opens fresh questions about how ancient societies perceived their world. As technology continues to refine our view from above, scholars must balance high‑tech analysis with respect for the cultural context that birthed these enigmatic figures. Whether they served as calendars, prayers, or pathways, the lines remain a testament to humanity’s capacity to create art on a planetary scale—an invitation for future generations to keep looking up and wondering.`,
  ],
  vocabulary: [
    { word: 'Nazca culture', cn: '纳斯卡文化' },
    { word: 'geoglyph', cn: '地画' },
    { word: 'archaeoastronomy', cn: '考古天文学' },
    { word: 'LIDAR', cn: '激光雷达' },
    { word: 'remote sensing', cn: '遥感技术' },
    { word: 'aquifer', cn: '含水层' },
  ],
};

export default article;
