import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Digital Camera: Kodak’s 1975 Prototype and the Dawn of Pixels》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00258 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00258',
  slug: 'the-first-digital-camera-kodak-s-1975-prototype-and-the-dawn-of-pixels',
  title: 'The First Digital Camera: Kodak’s 1975 Prototype and the Dawn of Pixels',
  subtitle: 'How a modest lab project sparked the digital imaging revolution',
  summary: 'A behind‑the‑scenes look at Steven Sasson’s 1975 prototype that turned light into electronic data for the first time.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1975, a young engineer named Steven Sasson walked into Kodak’s Rochester research lab with a simple assignment: “Can we build a camera that records images electronically?” Little did he know that his answer would become the seed of an entire industry. At the time, Kodak dominated the world of film photography, but internal discussions hinted at a future where chemicals might be replaced by electrons. Sasson’s curiosity and willingness to experiment set the stage for what would later be called the <span class="vocab" data-cn="数字相机">digital camera</span>.`,
    `Sasson’s first <span class="vocab" data-cn="原型机">prototype</span> was a modest, black‑box device about the size of a toaster. Inside lay a newly invented <span class="vocab" data-cn="电荷耦合器件传感器">CCD sensor</span>, a silicon chip capable of converting light into an electrical charge pattern. The sensor measured just 100 × 100 pixels, each pixel representing a tiny square of the scene. When light struck the chip, it generated a corresponding voltage that could be read out row by row. This was the first time a camera captured an image without any film or chemicals.`,
    `Turning those raw voltages into something usable required a sophisticated <span class="vocab" data-cn="模拟-数字转换器">analog-to-digital converter</span>. The converter sampled each pixel’s charge and assigned it a binary number, effectively translating shades of gray into strings of 0s and 1s. Because storage technology was primitive, Sasson chose a compact cassette tape as the medium for saving the digital data. A tiny motor spun the tape at a steady speed while the converted bits were recorded in magnetic form, much like audio recordings of the era. The whole process took about 23 seconds to capture and store a single black‑and‑white image.`,
    `When Sasson finally played back the stored image on a television monitor, the result was astonishing: a grainy but recognizable picture composed of just 0.01 megapixels. Each <span class="vocab" data-cn="像素">pixel</span> formed a tiny dot of light or dark, and together they reconstructed the scene with enough clarity to identify faces and objects. The image’s <span class="vocab" data-cn="分辨率">resolution</span> was modest by today’s standards, yet it proved that electronic capture could replace chemical development. This breakthrough demonstrated a new workflow: capture → convert → store → display, all without ever exposing film.`,
    `Inside Kodak, reactions were mixed. Some executives saw the prototype as a curiosity, while others feared it threatened the company’s core business of film sales. A confidential memo circulated in 1976 warned that “digital imaging could eventually erode our market share,” yet the same document praised Sasson’s ingenuity and suggested further research. The lab continued to refine the technology, adding color filters, improving storage capacity, and writing more sophisticated <span class="vocab" data-cn="固件">firmware</span> to control exposure settings. Although Kodak never commercialized this early model, the knowledge gained laid groundwork for later products like the DCS series in the 1990s.`,
    `The ripple effects of Sasson’s work extended far beyond Kodak’s walls. By the late 1980s, Japanese manufacturers such as Sony and Canon began producing consumer‑grade digital cameras, leveraging advances in CCD technology and memory chips that had become cheaper and smaller. Photographers gradually embraced a workflow that eliminated darkrooms, allowing instant review on LCD screens. This shift also spurred new industries: photo‑sharing websites, image editing software, and eventually the smartphone camera boom that puts a <span class="vocab" data-cn="数字相机">digital camera</span> in billions of pockets worldwide.`,
    `Today, when we point a phone at a scene and watch millions of <span class="vocab" data-cn="像素">pixels</span> light up instantly, it is hard to imagine the humble 100 × 100‑pixel prototype that started it all. Sasson’s experiment proved that light could be quantified, stored, and reproduced without any chemical process—a concept that reshaped visual communication forever. The legacy of Kodak’s 1975 <span class="vocab" data-cn="原型机">prototype</span> lives on in every high‑resolution sensor, every image file format, and every moment captured with a click of a button.`,
  ],
  vocabulary: [
    { word: 'digital camera', cn: '数字相机' },
    { word: 'CCD sensor', cn: '电荷耦合器件传感器' },
    { word: 'pixel', cn: '像素' },
    { word: 'prototype', cn: '原型机' },
    { word: 'analog-to-digital converter', cn: '模拟-数字转换器' },
    { word: 'firmware', cn: '固件' },
  ],
};

export default article;
