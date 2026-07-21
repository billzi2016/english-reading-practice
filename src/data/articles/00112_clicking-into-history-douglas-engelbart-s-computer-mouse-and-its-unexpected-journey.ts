import type { Article } from '../../types/index.ts';

// 文件意图：维护《Clicking Into History: Douglas Engelbart’s Computer Mouse and Its Unexpected Journey》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00112 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00112',
  slug: 'clicking-into-history-douglas-engelbart-s-computer-mouse-and-its-unexpected-journey',
  title: 'Clicking Into History: Douglas Engelbart’s Computer Mouse and Its Unexpected Journey',
  subtitle: 'How a humble wooden device sparked the modern era of pointing devices.',
  summary: 'From a prototype in a 1960s lab to today’s sleek optical mouse, explore the surprising path of Engelbert’s invention.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When you glide your hand across a <span class="vocab" data-cn="电脑鼠标">computer mouse</span> and click, it feels almost inevitable—yet the device’s origin is anything but ordinary. In the late 1960s, a modest wooden box with two perpendicular wheels sparked a revolution that would eventually reshape how billions interact with digital worlds.`,
    `The visionary behind this invention was <span class="vocab" data-cn="道格拉斯·恩格尔巴特">Douglas Engelbart</span>, a researcher at <span class="vocab" data-cn="斯坦福研究所（SRI International）">SRI International</span>. His ambition extended far beyond hardware; he dreamed of an <span class="vocab" data-cn="交互式计算系统">interactive computing system</span> that could augment human intellect. This vision culminated in the legendary 1968 demonstration, famously dubbed the “<span class="vocab" data-cn="全能演示">Mother of All Demos</span>.”`,
    `Engelbart’s original mouse was a simple yet ingenious contraption: a block of carved wood housing two metal wheels that rolled against a surface to translate motion into electrical signals. The device lacked the sleek plastic casing we recognize today, but its core principle—converting hand movement into cursor displacement—was groundbreaking. Engineers later referred to this mechanism as “ball‑and‑disk tracking,” a term that persisted through early commercial models.`,
    `Despite its ingenuity, the mouse faced an uphill battle for acceptance. Early computers were massive, batch‑oriented machines with limited graphical capabilities, making a pointing device seem superfluous. Moreover, the prototype’s production cost was prohibitive, and software to exploit its potential lagged behind. As a result, Engelbart’s invention lingered in obscurity, known only to a handful of researchers who appreciated its conceptual power.`,
    `The mouse’s unexpected journey began when engineers at <span class="vocab" data-cn="施乐帕洛阿尔托研究中心">Xerox PARC</span> revisited Engelbart’s work. Inspired by the “Mother of All Demos,” they integrated a refined version into their pioneering graphical user interface (GUI) platform, the Xerox Alto. This marriage of hardware and software demonstrated that a cursor could replace cryptic command lines, paving the way for commercial adoption. Apple later borrowed heavily from PARC’s designs, introducing the mouse with the Lisa in 1983 and the Macintosh in 1984, cementing its place in mainstream computing.`,
    `Since those early days, the mouse has undergone relentless evolution. The mechanical wheels gave way to <span class="vocab" data-cn="光学传感器">optical sensors</span> in the late 1990s, eliminating moving parts and improving reliability. Laser technology further enhanced precision on a variety of surfaces. Meanwhile, ergonomic research led to shapes that reduce strain, and wireless protocols liberated users from tangled cords. Even as touchpads and trackpoints emerged, the mouse remained a staple for tasks demanding fine control.`,
    `Today, Engelbart’s humble wooden prototype is celebrated not just as a peripheral but as a symbol of human‑computer synergy. Its legacy lives on in every click that opens a document, drags an image, or navigates a virtual world. By turning abstract ideas into tactile interaction, the <span class="vocab" data-cn="鼠标">mouse</span> proved that even the simplest tools can have profound impact when paired with visionary software.`,
  ],
  vocabulary: [
    { word: 'computer mouse', cn: '电脑鼠标' },
    { word: 'Douglas Engelbart', cn: '道格拉斯·恩格尔巴特' },
    { word: 'SRI International', cn: '斯坦福研究所（SRI International）' },
    { word: 'interactive computing system', cn: '交互式计算系统' },
    { word: 'Mother of All Demos', cn: '全能演示' },
    { word: 'optical sensor', cn: '光学传感器' },
  ],
};

export default article;
