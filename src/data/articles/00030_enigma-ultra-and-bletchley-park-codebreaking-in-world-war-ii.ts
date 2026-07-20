import type { Article } from '../../types/index.ts';

// This file defines the article "Enigma, Ultra, and Bletchley Park: Codebreaking in World War II".
// The content is original and intended for reading practice.
const article: Article = {
  id: '00030',
  slug: 'enigma-ultra-and-bletchley-park-codebreaking-in-world-war-ii',
  title: 'Enigma, Ultra, and Bletchley Park: Codebreaking in World War II',
  subtitle: 'How Allied cryptographers cracked the German cipher and changed the war',
  summary: 'Explore how the Enigma machine, the secret Ultra intelligence, and the work at Bletchley Park reshaped WWII.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `During the Second World War, the battle of information was as decisive as any clash of armies. The German <span class="vocab" data-cn="恩尼格玛密码机">Enigma</span> machine produced a seemingly unbreakable stream of encrypted messages, while the British intelligence community created a secret channel known as <span class="vocab" data-cn="超密情报">Ultra</span>. At the heart of this effort lay a modest country house in Buckinghamshire called <span class="vocab" data-cn="布莱切利园">Bletchley Park</span>, where mathematicians, linguists and engineers worked around the clock to turn enemy ciphers into actionable intelligence.`,
    `The <span class="vocab" data-cn="恩尼格玛密码机">Enigma</span> was a portable <span class="vocab" data-cn="转子机器">rotor machine</span> that used a series of electrically powered rotors to scramble plaintext into ciphertext. Each rotor could be set to one of 26 positions, and the machine typically employed three or four rotors in succession, creating 26ⁿ possible configurations—an astronomical number for manual decryption. Moreover, the daily key sheet required operators to change plugboard connections, adding another layer of permutation that convinced German commanders their communications were secure.`,
    `The first breakthrough came not from Britain but from Poland, where cryptologists such as Marian Rejewski applied mathematical <span class="vocab" data-cn="密码分析">cryptanalysis</span> to reconstruct the internal wiring of Enigma's rotors. In July 1939, the Poles shared their findings and a replica device with British officials, providing a crucial foothold for further work at <span class="vocab" data-cn="布莱切利园">Bletchley Park</span>. Armed with this knowledge, the British team could begin to predict rotor settings rather than brute‑force every possibility.`,
    `The most famous of the machines built at Bletchley was the <span class="vocab" data-cn="波姆机">Bombe</span>, an electromechanical device conceived by Alan Turing and refined by Gordon Welchman. The Bombe simulated multiple Enigma configurations simultaneously, searching for logical contradictions that would reveal the daily key settings. By rapidly eliminating impossible rotor positions, a single Bombe could narrow down the correct configuration in minutes—a task that would have taken human codebreakers weeks of painstaking work.`,
    `Once an Enigma message was deciphered, its contents were transmitted to senior commanders under the codename Ultra. The intelligence derived from Ultra proved pivotal in several theatres: it helped reroute convoys away from German U‑boat wolf packs in the Atlantic, provided forewarning of Luftwaffe movements before the Battle of Britain, and even allowed Allied planners to adjust the timing of the Normandy landings based on intercepted weather reports. Remarkably, the existence of Ultra remained a tightly guarded secret for decades after the war.`,
    `The success at <span class="vocab" data-cn="布莱切利园">Bletchley Park</span> did more than win battles; it sowed the seeds of modern computing. The experience of designing and operating the Bombe, as well as later machines like the Colossus computer for breaking the Lorenz cipher, demonstrated that electronic automation could outpace human calculation in complex problem solving. These early ventures into <span class="vocab" data-cn="密码分析">cryptanalysis</span> laid a conceptual foundation for today's fields of cybersecurity and algorithmic research.`,
    `Today, the historic huts of <span class="vocab" data-cn="布莱切利园">Bletchley Park</span> serve as museums, reminding visitors that the war was won not only on battlefields but also in quiet rooms filled with wires, rotors and relentless curiosity. The legacy of the <span class="vocab" data-cn="恩尼格玛密码机">Enigma</span>, the brilliance of the <span class="vocab" data-cn="波姆机">Bombe</span> and the secrecy of <span class="vocab" data-cn="超密情报">Ultra</span> continue to inspire new generations of mathematicians, programmers and intelligence analysts who confront ever‑more sophisticated digital ciphers.`,
  ],
  vocabulary: [
    { word: 'Enigma', cn: '恩尼格玛密码机' },
    { word: 'Ultra', cn: '超密情报' },
    { word: 'Bletchley Park', cn: '布莱切利园' },
    { word: 'rotor machine', cn: '转子机器' },
    { word: 'cryptanalysis', cn: '密码分析' },
    { word: 'Bombe', cn: '波姆机' },
  ],
};

export default article;
