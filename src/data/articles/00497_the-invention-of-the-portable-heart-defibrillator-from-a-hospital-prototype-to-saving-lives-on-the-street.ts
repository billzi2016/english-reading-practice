import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Portable Heart Defibrillator: From a Hospital Prototype to Saving Lives on the Street》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00497 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00497',
  slug: 'the-invention-of-the-portable-heart-defibrillator-from-a-hospital-prototype-to-saving-lives-on-the-street',
  title: 'The Invention of the Portable Heart Defibrillator: From a Hospital Prototype to Saving Lives on the Street',
  subtitle: 'How a Belfast doctor turned a bulky machine into a life‑saving handheld device.',
  summary: 'A narrative of the portable defibrillator’s journey from hospital labs to public streets, highlighting key breakthroughs and their impact on cardiac emergency care.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s, physicians knew that a sudden loss of heart rhythm—most often <span class="vocab" data-cn="心室纤颤">ventricular fibrillation</span>—could be reversed with an electric shock, but the machines required to deliver that shock were the size of a refrigerator and tethered to heavy power supplies.  These stationary <span class="vocab" data-cn="除颤仪">defibrillators</span> could only be used in operating theatres or intensive‑care units, leaving patients who collapsed outside the hospital with little hope.`,
    `The turning point arrived in Belfast when cardiologist <span class="vocab" data-cn="弗兰克·潘特里奇">Frank Pantridge</span> asked a simple question: could the life‑saving shock be delivered before the patient even reached the emergency department?  Working with engineers, he replaced the mains‑powered capacitor bank with a compact, rechargeable battery and a high‑voltage <span class="vocab" data-cn="电容器">capacitor</span> that could store enough energy for a single discharge.  By 1965 his team had built the first truly <span class="vocab" data-cn="可携带的">portable</span> defibrillator, weighing just under 15 kilograms—a size that could fit in the back of an ambulance.`,
    `Pantridge didn’t stop at miniaturization.  He paired the device with a set of protocols for rapid assessment, drug administration, and rhythm analysis, creating what he called a “mobile coronary care unit” (MCCU).  The MCCU rode alongside traditional ambulances, staffed by specially trained nurses who could diagnose <span class="vocab" data-cn="心室纤颤">ventricular fibrillation</span> on the spot and deliver an immediate shock.  Early field trials in Belfast showed a dramatic rise in survival rates—from less than 5 % for out‑of‑hospital cardiac arrests to over 30 % when the MCCU arrived within minutes.`,
    `The success of Pantridge’s prototype sparked interest worldwide.  In the United States, companies such as Physio‑Control and Cardiac Science began refining the technology in the late 1970s, focusing on reliability, user‑friendly interfaces, and lighter casings made from aluminum alloys.  By the early 1980s, a new generation of “ambulance‑grade” defibrillators could be carried by a single responder, and the devices were standard equipment on most emergency medical services (EMS) fleets.`,
    `A major leap occurred in the mid‑1990s with the introduction of the <span class="vocab" data-cn="自动体外除颤仪">automated external defibrillator (AED)</span>.  Unlike earlier models that required a trained clinician to interpret electrocardiograms, AEDs incorporated built‑in algorithms that could automatically detect shockable rhythms and guide laypeople through voice prompts.  The first public‑access AED was installed in a shopping mall in the United Kingdom in 1995, marking the moment when defibrillation moved from hospitals and ambulances onto sidewalks, schools, and airports.`,
    `The spread of AEDs has been supported by legislation and community programs.  In many countries, laws now protect “good Samaritans” who use an AED, while organizations such as the American Heart Association provide free training courses.  Studies published after 2000 consistently show that each minute of delay in delivering a shock reduces survival chances by about 10 %; with AEDs strategically placed in public spaces, average response times have dropped to under three minutes in many urban areas.`,
    `Today, the portable defibrillator is an integral part of both professional EMS kits and everyday life.  Modern devices weigh less than two kilograms, feature rechargeable lithium‑ion batteries that last for hundreds of shocks, and connect wirelessly to smartphones for real‑time data logging.  The journey from Pantridge’s bulky Belfast prototype to today’s sleek handheld units illustrates how engineering ingenuity, clinical insight, and public policy can combine to turn a life‑saving concept into a ubiquitous tool that saves thousands of lives each year.`,
    `Looking ahead, researchers are exploring wearable defibrillators that can monitor heart rhythm continuously and deliver therapy without user intervention.  While these technologies remain in early trials, the legacy of the portable defibrillator reminds us that even the most complex medical interventions can become simple, accessible tools when engineers and clinicians collaborate with a shared purpose: to bring the shock of life back into the hands of anyone who needs it.`
  ],
  vocabulary: [
    { word: 'defibrillator', cn: '除颤仪' },
    { word: 'ventricular fibrillation', cn: '心室纤颤' },
    { word: 'portable', cn: '可携带的' },
    { word: 'capacitor', cn: '电容器' },
    { word: 'automated external defibrillator (AED)', cn: '自动体外除颤仪' },
    { word: 'ambulance', cn: '急救车' }
  ],
};

export default article;
