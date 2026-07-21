import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Portable Heart Defibrillator: A Lifesaving Invention That Revolutionized Emergency Medicine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00456 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00456',
  slug: 'the-first-portable-heart-defibrillator-a-lifesaving-invention-that-revolutionized-emergency-medicine',
  title: 'The First Portable Heart Defibrillator: A Lifesaving Invention That Revolutionized Emergency Medicine',
  subtitle: 'How a Belfast doctor turned a bulky machine into a life‑saving handheld tool.',
  summary: 'A narrative of Dr. Frank Pantridge’s breakthrough that made emergency cardiac care possible outside the hospital.',
  category: 'medicine',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s, sudden cardiac arrest was almost always a death sentence outside the operating theatre. When a heart slips into chaotic electrical activity—known as <span class="vocab" data-cn="心室颤动">ventricular fibrillation</span>—the patient’s blood circulation stops within seconds. At that time, hospitals relied on massive, wall‑mounted machines that weighed hundreds of kilograms and required a steady power supply. Ambulances could transport victims quickly, but they lacked any means to restore a heart rhythm en route, leaving emergency physicians with little more than basic first aid.`,
    `Enter Dr. Frank Pantridge, a cardiologist at the Royal Victoria Hospital in Belfast. Inspired by the high mortality rates he observed among ambulance‑borne patients, Pantridge envisioned a mobile unit that could bring intensive cardiac care to the street. In 1963 he launched the world’s first “Mobile Coronary Care Unit” (MCCU), a specially equipped ambulance staffed with nurses trained in advanced life support. The MCCU was a bold experiment, but its success hinged on one missing piece: a portable way to deliver an electric shock to a fibrillating heart.`,
    `The existing defibrillation equipment of the era consisted of large capacitors, heavy transformers, and cumbersome leads—far from suitable for a cramped ambulance cabin. Pantridge’s breakthrough came when he partnered with engineers to design a battery‑powered device that could store enough energy in a compact capacitor bank and discharge it safely through the chest. By 1965 he had produced a prototype weighing less than 15 kilograms, complete with an <span class="vocab" data-cn="除颤仪">defibrillator</span> console, rechargeable batteries, and a simple control panel. This handheld unit could deliver a direct‑current shock of up to 200 joules, enough to terminate ventricular fibrillation without the need for a mains connection.`,
    `The first real‑world test occurred on a rainy night in February 1967 when an ambulance crew responded to a collapsed construction worker. The victim’s heart was in ventricular fibrillation; traditional CPR alone would have bought only precious seconds. Pantridge’s portable defibrillator was applied, delivering a swift shock that restored a normal rhythm within moments. The patient survived and later credited the device with saving his life. This dramatic success proved that immediate electrical therapy combined with <span class="vocab" data-cn="心肺复苏">cardiopulmonary resuscitation</span> could dramatically improve survival rates, prompting other cities to adopt similar mobile units.`,
    `News of the Belfast breakthrough spread quickly across Europe and North America. By the early 1970s, hospitals began equipping their ambulances with portable defibrillators, and manufacturers refined the technology—introducing lighter lithium‑ion batteries, automated rhythm analysis, and eventually the <span class="vocab" data-cn="双相波形">biphasic waveform</span> that reduced tissue damage while increasing shock efficacy. The concept also gave rise to the modern Automated External Defibrillator (AED), a device designed for laypeople with voice prompts and self‑diagnosing algorithms. Today, AEDs are stationed in schools, airports, and shopping malls, turning ordinary citizens into first responders capable of delivering life‑saving therapy within three minutes of collapse.`,
    `Dr. Pantridge’s invention reshaped the entire field of emergency medicine. He continued to advocate for rapid response systems, emphasizing the importance of <span class="vocab" data-cn="分诊">triage</span> and coordinated care from the moment a patient is found on the street. In recognition of his contributions, he received numerous honors, including the Lasker‑DeBakey Clinical Medical Research Award in 1995. More importantly, his portable defibrillator set a precedent: that life‑saving technology must be both effective and mobile. As we look at today’s wearable cardiac monitors and implantable cardioverter‑defibrillators, we can trace their lineage back to Pantridge’s modest battery‑powered box that proved a single shock could turn death into hope.`,
  ],
  vocabulary: [
    { word: 'defibrillator', cn: '除颤仪' },
    { word: 'ventricular fibrillation', cn: '心室颤动' },
    { word: 'cardiopulmonary resuscitation', cn: '心肺复苏' },
    { word: 'electrocardiogram', cn: '心电图' },
    { word: 'biphasic waveform', cn: '双相波形' },
    { word: 'triage', cn: '分诊' },
  ],
};

export default article;
