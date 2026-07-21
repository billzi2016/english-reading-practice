import type { Article } from '../../types/index.ts';

// 文件意图：维护《Howard Carter and the Discovery of Tutankhamun’s Tomb: Archaeology, Politics, and the Curse》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00485 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00485',
  slug: 'howard-carter-and-the-discovery-of-tutankhamun-s-tomb-archaeology-politics-and-the-curse',
  title: 'Howard Carter and the Discovery of Tutankhamun’s Tomb: Archaeology, Politics, and the Curse',
  subtitle: 'A Tale of Excavation, Imperial Rivalry, and Legendary Misfortune',
  summary: 'Explore how Howard Carter uncovered a boy‑king’s tomb, why politics mattered, and where the famous “curse” really came from.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In November 1922, British archaeologist <span class="vocab" data-cn="考古学">archaeology</span> entered a moment that would echo through popular culture for a century. Howard Carter, funded by the wealthy patron Lord Carnarvon, stood at the entrance of a sealed doorway in the <span class="vocab" data-cn="底比斯墓地">Theban Necropolis</span>, near Luxor. The stone lintel bore the name “Tutankhamun,” a pharaoh whose reign had been largely forgotten until that very night when Carter’s brush revealed a glittering golden death mask.</p>`,
    `Carter was not an accidental discoverer; his career had been shaped by years of meticulous work for the <span class="vocab" data-cn="埃及古物局">Egyptian Antiquities Service</span>. By the early 1900s, the Service, under the direction of Gaston Maspero and later Pierre Lacau, was increasingly wary of foreign treasure hunters. The political climate in Egypt—still a British protectorate until 1922—meant that any major find required careful negotiation between local authorities, colonial officials, and private sponsors.</p>`,
    `The excavation itself unfolded like a drama. After months of clearing sand and debris, Carter’s team uncovered a flight of steps leading down to the <span class="vocab" data-cn="墓室">burial chamber</span>. Inside lay four massive wooden coffins, each nested within the other, and walls adorned with vivid <span class="vocab" data-cn="象形文字">hieroglyphics</span> describing the young king’s lineage. The discovery was scientifically priceless: it offered a near‑complete snapshot of New Kingdom funerary practice, from the intricate jewelry to the still‑intact chariot.</p>`,
    `Yet the find did not occur in a vacuum. The British press, eager for sensational headlines, framed Carter as a heroic explorer while downplaying Egyptian contributions. Simultaneously, nationalist movements within Egypt seized upon the event to demand greater control over their heritage. In 1924, the newly independent Egyptian government passed stricter laws governing excavation permits, signaling that future discoveries would be subject to tighter local oversight.</p>`,
    `The legend of a “curse” attached to Tutankhamun’s tomb emerged almost immediately after Lord Carnarvon’s sudden death in April 1923. Newspapers sensationalized the idea that anyone who disturbed the pharaoh’s rest would suffer misfortune, citing the deaths of several members of Carter’s team. Modern scholars now view the curse narrative as a blend of media hype and Victorian fascination with the exotic. In reality, most of the alleged victims died from natural causes or infections common in early‑20th‑century fieldwork.</p>`,
    `Carter’s meticulous documentation helped dispel many myths. He recorded every artifact’s position, photographed the tomb’s interior, and published detailed drawings of the wall scenes. These records allowed later researchers to reconstruct the original layout even after the tomb was emptied for public display. Moreover, Carter’s respectful handling of the burial goods set a new standard for <span class="vocab" data-cn="发掘">exhume</span> practices, emphasizing preservation over treasure hunting.</p>`,
    `Today, the discovery continues to influence both scholarship and popular imagination. The golden mask remains an iconic symbol of ancient Egypt, while debates about cultural patrimony echo the political tensions that surrounded Carter’s work a century ago. By examining the intertwining threads of archaeology, colonial politics, and myth‑making, we gain a richer understanding of how a single tomb reshaped our view of history—and why the “curse” endures more as a cautionary tale than a factual warning.</p>`,
  ],
  vocabulary: [
    { word: 'archaeology', cn: '考古学' },
    { word: 'Theban Necropolis', cn: '底比斯墓地' },
    { word: 'Egyptian Antiquities Service', cn: '埃及古物局' },
    { word: 'burial chamber', cn: '墓室' },
    { word: 'hieroglyphics', cn: '象形文字' },
    { word: 'exhume', cn: '发掘' },
  ],
};

export default article;
