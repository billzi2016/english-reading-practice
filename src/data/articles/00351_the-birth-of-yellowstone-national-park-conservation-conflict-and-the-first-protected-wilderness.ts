import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Yellowstone National Park: Conservation, Conflict, and the First Protected Wilderness》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00351 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00351',
  slug: 'the-birth-of-yellowstone-national-park-conservation-conflict-and-the-first-protected-wilderness',
  title: 'The Birth of Yellowstone National Park: Conservation, Conflict, and the First Protected Wilderness',
  subtitle: 'How America’s first national park emerged from science, politics, and clash over land.',
  summary: 'A narrative of the scientific surveys, political battles, and cultural conflicts that led to the creation of Yellowstone in 1872.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1860s a handful of trappers and mountain men began whispering about a “vast wilderness” of steaming geysers, colorful hot springs, and roaming herds of <span class="vocab" data-cn="野牛">bison</span>. Their stories reached the ears of scientists like Ferdinand V. Hayden, who organized the famous 1871 <span class="vocab" data-cn="探险考察">Hayden Survey</span> to map the region and document its unique geology. The survey’s vivid photographs and detailed reports sparked public fascination and laid the scientific groundwork for protecting the area.`,
    `When Hayden presented his findings to Congress, he emphasized that Yellowstone’s “geothermal wonders” were unlike anything else on the continent. He argued that these features deserved preservation not only for their beauty but also for future study of <span class="vocab" data-cn="地热现象">geothermal</span> activity. The idea resonated with a growing national movement championed by figures such as John Muir and Gifford Pinchot, who were beginning to articulate the concept of <span class="vocab" data-cn="保护自然资源的理念">conservation</span>.`,
    `However, the path to protection was anything but smooth. Ranchers in nearby Montana and Idaho feared that a federal reserve would block their access to grazing lands, while some Native American tribes—particularly the Shoshone and Bannock—saw the proposed park as another encroachment on territories they still used for hunting. These groups voiced strong opposition during congressional hearings, framing the debate as a clash between “progress” and “preservation.”`,
    `Congressional supporters countered by invoking the newly minted idea of a <span class="vocab" data-cn="国家公园">National Park</span>—a public trust that would keep the land free from private exploitation. In March 1872, after intense lobbying by Hayden and his allies, President Ulysses S. Grant signed the Yellowstone National Park Protection Act into law. The act declared the area “forever reserved and protected,” making it the world’s first official national park.`,
    `The legislation immediately raised practical questions about how to manage such a vast wilderness. Early park superintendents struggled with limited funding, inadequate staffing, and the need to balance wildlife protection with visitor safety. They introduced rudimentary forms of <span class="vocab" data-cn="野生动物管理">wildlife management</span>, such as seasonal bans on hunting bison and elk, hoping to prevent the over‑exploitation that had devastated other frontier ecosystems.`,
    `Meanwhile, conflict persisted on the ground. In 1873 a group of cattlemen attempted to drive their herds through the park’s northern corridor, prompting a standoff with park officials who cited the new law. The incident highlighted the tension between private interests protected by the <span class="vocab" data-cn="宅地法">Homestead Act</span> and the public mandate to keep the land “unimpaired.” Over time, legal battles and occasional violent confrontations forced the government to clarify enforcement powers, gradually establishing a more robust framework for park protection.`,
    `By the end of the 19th century, Yellowstone had become both a symbol of American ingenuity and a laboratory for conservation policy. Its success inspired the creation of additional parks, such as Sequoia (1890) and Yosemite (1906), and cemented the idea that natural wonders could be preserved for future generations. The legacy of those early debates—between scientists, politicians, ranchers, and Indigenous peoples—continues to shape how we think about protected wilderness today.`,
  ],
  vocabulary: [
    { word: 'bison', cn: '野牛' },
    { word: 'Hayden Survey', cn: '探险考察' },
    { word: 'geothermal', cn: '地热现象' },
    { word: 'conservation', cn: '保护自然资源的理念' },
    { word: 'National Park', cn: '国家公园' },
    { word: 'wildlife management', cn: '野生动物管理' },
    { word: 'Homestead Act', cn: '宅地法' },
  ],
};

export default article;
