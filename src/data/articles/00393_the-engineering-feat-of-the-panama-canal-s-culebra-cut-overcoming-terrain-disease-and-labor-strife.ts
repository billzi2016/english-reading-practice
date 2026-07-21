import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Engineering Feat of the Panama Canal’s Culebra Cut: Overcoming Terrain, Disease, and Labor Strife》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00393 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00393',
  slug: 'the-engineering-feat-of-the-panama-canal-s-culebra-cut-overcoming-terrain-disease-and-labor-strife',
  title: 'The Engineering Feat of the Panama Canal’s Culebra Cut: Overcoming Terrain, Disease, and Labor Strife',
  subtitle: 'How engineers turned a deadly valley into a world‑changing passage.',
  summary: 'A narrative of the technical, medical, and social challenges that shaped the creation of the Culebra Cut.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the United States took over the Panama Canal project in 1904, the most daunting obstacle was a narrow, swamp‑filled valley known as the <span class="vocab" data-cn="库埃尔布拉切口">Culebra Cut</span>. The original French effort had already carved a jagged trench through volcanic ash and hard basalt, but frequent landslides threatened to fill it again. Engineers realized that simply digging deeper would not solve the problem; they needed a comprehensive plan that addressed both the geology and the climate of the region.`,
    `The American team, led by chief engineer John F. Stewart, introduced massive <span class="vocab" data-cn="蒸汽挖掘机">steam shovels</span> and coordinated large‑scale <span class="vocab" data-cn="炸药爆破">dynamite blasting</span>. By 1913 more than 100 million cubic yards of rock had been removed, a feat made possible only through meticulous surveying and the development of a robust <span class="vocab" data-cn="锁闸系统">lock system</span> that could accommodate ships even as the cut deepened. The excavation crews worked around the clock, using rail‑mounted carts to transport debris to the Atlantic side for reclamation.`,
    `While machines reshaped the earth, invisible enemies stalked the workers. Malaria and yellow fever, both transmitted by <span class="vocab" data-cn="蚊子">mosquitoes</span>, decimated labor forces, causing mortality rates as high as 30 percent in some camps. The appointment of Dr. William C. Gorgas as chief sanitary officer marked a turning point; his aggressive <span class="vocab" data-cn="灭蚊行动">mosquito eradication</span> program involved draining standing water, installing screened housing, and applying oil to breeding sites. Within two years the incidence of tropical disease fell dramatically, allowing construction to proceed at full speed.`,
    `Labor relations added another layer of complexity. The workforce comprised Caribbean immigrants, West Indian laborers, and a smaller contingent of American engineers. Wage disparities and harsh working conditions sparked several strikes in 1909 and again in 1915. To quell unrest, the Panama Canal Company introduced a profit‑sharing scheme and improved housing standards, but tensions remained high until the final phases of excavation when the promise of steady pay and the looming completion date quelled most dissent.`,
    `Geotechnical instability continued to test the engineers’ resolve. The cut’s steep walls were prone to sudden slips, especially after heavy rains. To mitigate this, a network of drainage tunnels was bored beneath the trench, allowing water to escape and reducing pore pressure in the rock mass. These <span class="vocab" data-cn="排水隧道">drainage tunnels</span> not only stabilized the slopes but also provided access for maintenance crews long after the canal opened.`,
    `By August 1914, the Culebra Cut was finally wide enough to accommodate the Panama Canal’s largest vessels. The successful completion of this section demonstrated how coordinated engineering, medical science, and labor management could overcome seemingly insurmountable natural barriers. It also set a precedent for future megaprojects, showing that tackling terrain, disease, and human factors together is essential for lasting success.`,
    `Today, the Culebra Cut remains a testament to early 20th‑century ingenuity. Modern engineers still study its construction techniques, especially the integration of large‑scale excavation with environmental control measures. The lessons learned—about respecting geological realities, protecting worker health, and fostering equitable labor practices—continue to inform projects ranging from subway tunnels to offshore wind farms, proving that history’s challenges can become tomorrow’s guidelines.`
  ],
  vocabulary: [
    { word: 'Culebra Cut', cn: '库埃尔布拉切口' },
    { word: 'steam shovel', cn: '蒸汽挖掘机' },
    { word: 'dynamite blasting', cn: '炸药爆破' },
    { word: 'lock system', cn: '锁闸系统' },
    { word: 'mosquito eradication', cn: '灭蚊行动' },
    { word: 'drainage tunnels', cn: '排水隧道' }
  ],
};

export default article;
