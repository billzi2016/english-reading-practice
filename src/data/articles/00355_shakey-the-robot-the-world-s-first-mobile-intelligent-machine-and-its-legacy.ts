import type { Article } from '../../types/index.ts';

// 文件意图：维护《Shakey the Robot: The World’s First Mobile Intelligent Machine and Its Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00355 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00355',
  slug: 'shakey-the-robot-the-world-s-first-mobile-intelligent-machine-and-its-legacy',
  title: 'Shakey the Robot: The World’s First Mobile Intelligent Machine and Its Legacy',
  subtitle: 'How a 1970s prototype paved the way for modern autonomous systems',
  summary: 'An engaging look at Shakey, the first robot that could reason about its own actions, and the lasting impact it left on AI and robotics.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1969, a modestly sized machine rolled onto the stage at Stanford Research Institute (SRI) and captured the imagination of both engineers and journalists. Named <span class="vocab" data-cn="沙基">Shakey</span>, it was billed as “the world’s first mobile intelligent robot.” Unlike earlier automatons that simply followed pre‑programmed tracks, Shakey could perceive its surroundings, formulate a plan, and then execute actions to achieve a goal. This blend of <span class="vocab" data-cn="移动机器人">mobile robotics</span> and early <span class="vocab" data-cn="人工智能">artificial intelligence</span> set a new benchmark for what machines could potentially do.`,
    `Shakey’s creation was the brainchild of a multidisciplinary team led by Charles Rosen, with key contributions from Nils Nilsson, Bertram Raphael, and Terry Winograd. The group operated within SRI’s Artificial Intelligence Center, which at the time was a hotbed for pioneering research in knowledge representation and problem solving. Their ambition went beyond building a clever toy; they wanted a platform that could test theories about how an intelligent agent might integrate perception, reasoning, and action in real‑world environments.`,
    `The robot’s hardware was deceptively simple yet ingeniously arranged. Mounted on a sturdy wheeled base, Shakey carried a television camera for visual input, a range‑finder (essentially an early laser scanner) to gauge distances, and several bump sensors that detected collisions. All of these components fed data into an onboard computer—an IBM 360/67 running the experimental operating system CP/CMS. This modest processing power forced the team to design highly efficient algorithms for every task, from image segmentation to motion control.`,
    `Behind the physical chassis lay a sophisticated software architecture. Central to Shakey’s intelligence was the <span class="vocab" data-cn="语义网络">semantic network</span>, a structured representation of objects, their properties, and relationships within the environment. For planning, the team implemented the pioneering STRIPS (Stanford Research Institute Problem Solver) system, which broke down high‑level goals into a sequence of executable actions using <span class="vocab" data-cn="逻辑推理">logic‑based reasoning</span>. This combination allowed Shakey to answer questions like “What must I do to move the red block onto the table?” and then generate a concrete plan.`,
    `One of the most celebrated demonstrations involved Shakey navigating a cluttered room to push a box from one corner to another. First, its camera captured an image that was processed into a map of walls, obstacles, and the target object. The perception module identified the box’s location, while the planner used STRIPS to devise a series of moves: approach the box, align with it, apply force, and retreat. As Shakey executed each step, feedback from its bump sensors refined the plan—a classic example of a <span class="vocab" data-cn="感知‑行动循环">perception‑action loop</span>. The robot’s success was not flawless, but it proved that a machine could close the gap between abstract reasoning and physical manipulation.`,
    `Shakey’s development faced numerous challenges. Integrating vision, planning, and motion control on limited hardware required clever compromises, such as simplifying visual scenes into geometric primitives. Moreover, the team had to grapple with uncertainty: sensor readings were noisy, and the world was not always predictable. Nevertheless, Shakey demonstrated that a robot could use symbolic knowledge to guide real‑world behavior—a breakthrough that inspired subsequent research in <span class="vocab" data-cn="计算机视觉">computer vision</span>, autonomous navigation, and AI planning.`,
    `The legacy of Shakey endures in many modern technologies. The STRIPS formalism became the foundation for later planning languages like PDDL (Planning Domain Definition Language), which power today’s autonomous drones and warehouse robots. Concepts pioneered by the SRI team—semantic representations, hierarchical task decomposition, and closed‑loop perception—are now standard components of self‑driving cars and service robots. In retrospect, Shakey was more than a historical curiosity; it was a proof‑of‑concept that the marriage of AI and robotics could yield machines capable of genuine problem solving in dynamic environments.`,
  ],
  vocabulary: [
    { word: 'Shakey', cn: '沙基（机器人名称）' },
    { word: 'mobile robot', cn: '移动机器人' },
    { word: 'artificial intelligence', cn: '人工智能' },
    { word: 'semantic network', cn: '语义网络' },
    { word: 'logic‑based reasoning', cn: '逻辑推理' },
    { word: 'perception‑action loop', cn: '感知‑行动循环' },
    { word: 'computer vision', cn: '计算机视觉' },
  ],
};

export default article;
