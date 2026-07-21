import type { Article } from '../../types/index.ts';

// 文件意图：维护《Harriet Quimby: Pioneering Woman Pilot Who Defied the Skies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00165 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00165',
  slug: 'harriet-quimby-pioneering-woman-pilot-who-defied-the-skies',
  title: 'Harriet Quimby: Pioneering Woman Pilot Who Defied the Skies',
  subtitle: 'How a journalist became America’s first licensed female aviator and an early airmail pioneer.',
  summary: 'The story of Harriet Quimby, her daring flights, historic achievements, and lasting legacy in early aviation.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the first powered machines began to lift off the ground at the turn of the twentieth century, most people imagined only men could tame those fragile <span class="vocab" data-cn="航空">aviation</span> marvels. Yet a young journalist from Michigan dared to rewrite that script, soaring above societal expectations and literal clouds alike.`,
    `Harriet Quimby was born in 1875 on a farm near Arcadia, Michigan. After graduating high school she moved to Chicago, where she earned a living as a newspaper reporter and later as a fashion editor for the *Chicago Daily News*. Her pen sharpened her curiosity about the world, but it was an article about the Wright brothers that sparked an obsession with <span class="vocab" data-cn="航空学">aeronautics</span> she could not ignore.`,
    `In 1910 Quimby attended a public demonstration by French aviator John Moisant in New York. Watching his sleek <span class="vocab" data-cn="双翼飞机">biplane</span> slice through the air, she felt an irresistible pull. Determined to experience flight herself, she enrolled in Moisant’s flying school at Garden City, Long Island, where she learned to read a <span class="vocab" data-cn="螺旋桨">propeller</span>, manage engine throttles, and trust the wind that lifted her craft.`,
    `On August 1, 1911 Quimby earned the United States’ first female <span class="vocab" data-cn="飞行执照">pilot’s license</span> (Certificate No. 322) from the Aero Club of America. The achievement was more than a personal triumph; it proved that women could master the technical and physical demands of early flight, challenging prevailing gender norms in both the press and the fledgling aviation community.`,
    `Only months later, on September 16, 1912, Quimby became the world’s first female <span class="vocab" data-cn="航空邮件">airmail</span> pilot. She flew a borrowed Moisant biplane from Governors Island in New York City to an airfield near Boston, carrying a small sack of letters that were stamped “Harriet Quimby – First Woman Airmail Pilot.” The journey demonstrated the practical potential of aircraft for rapid communication, a concept still being tested in wind tunnels and experimental routes across the United States.`,
    `The public response was electric. Newspapers hailed her as “the lady who conquered the sky,” and suffragists seized upon her image to argue that women deserved equal rights in all spheres, including technology and transportation. Quimby’s daring flights inspired a generation of young women to consider careers in engineering, mechanics, and piloting—fields previously thought inaccessible.`,
    `Tragically, Harriet’s soaring career was cut short on August 1, 1912, exactly one year after receiving her license. While performing at the Chicago Aviation Meet, she attempted a steep turn that caused her aircraft to stall and crash into Lake Michigan. She drowned before rescue crews could reach her, leaving the aviation world stunned by the loss of such a pioneering spirit.`,
    `Despite her brief life, Quimby’s legacy endures. Her name appears on plaques at the Smithsonian National Air and Space Museum, and she is commemorated in the International Women’s Air & Space Museum. Modern pilots still study her flight logs to understand early aircraft handling, and her story remains a testament to courage, curiosity, and the belief that the sky holds no gendered limits.`,
  ],
  vocabulary: [
    { word: 'aviation', cn: '航空' },
    { word: 'aeronautics', cn: '航空学' },
    { word: 'biplane', cn: '双翼飞机' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'pilot’s license', cn: '飞行执照' },
    { word: 'airmail', cn: '航空邮件' },
  ],
};

export default article;
