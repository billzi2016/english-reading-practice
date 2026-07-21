import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Creation of RSA Encryption: From Mathematical Theory to Securing the Digital Age》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00354 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00354',
  slug: 'the-creation-of-rsa-encryption-from-mathematical-theory-to-securing-the-digital-age',
  title: 'The Creation of RSA Encryption: From Mathematical Theory to Securing the Digital Age',
  subtitle: 'How a trio of MIT researchers turned abstract number theory into the backbone of modern security.',
  summary: 'Explore the birth, mathematics, and lasting influence of RSA encryption in the digital world.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1977, three young mathematicians—Ron Rivest, Adi Shamir, and Leonard Adleman—were gathered around a cluttered whiteboard in MIT’s Laboratory for Computer Science. Their conversation drifted from the recent breakthrough of Diffie‑Hellman key exchange to a daring question: could a cryptosystem be built where encryption and decryption keys were different yet mathematically linked? This idea, later called <span class="vocab" data-cn="公钥密码学">public‑key cryptography</span>, seemed impossible until they realized that certain problems in number theory might provide the one‑way function they needed.`,
    `The cornerstone of their design was a simple observation about <span class="vocab" data-cn="素数">prime numbers</span>. Multiplying two large primes, p and q, yields a composite number n that is easy to compute but extremely hard to factor back into its original components. This asymmetry mirrors the concept of a <span class="vocab" data-cn="单向函数">trapdoor function</span>: straightforward in one direction, infeasible in reverse without secret knowledge. The security of RSA therefore rests on the practical impossibility of solving the integer factorization problem for sufficiently large n.`,
    `To turn this insight into an algorithm, Rivest, Shamir, and Adleman defined a precise key‑generation procedure. First, they selected two random <span class="vocab" data-cn="大素数">large prime numbers</span> p and q and computed n = p × q. Next, they calculated the <span class="vocab" data-cn="欧拉函数">Euler’s totient function</span> φ(n) = (p‑1)(q‑1), which counts the integers less than n that are coprime to n. They then chose an integer e such that 1 < e < φ(n) and <span class="vocab" data-cn="互质">coprime</span> to φ(n). Finally, using the extended Euclidean algorithm, they derived d as the modular inverse of e modulo φ(n), satisfying e·d ≡ 1 (mod φ(n)). The public key became (e, n) while the private key was (d, n).`,
    `Encryption with RSA is elegantly simple: a sender converts a plaintext block m into a <span class="vocab" data-cn="密文">ciphertext</span> c by computing c ≡ m^e (mod n) using the recipient’s public key. Decryption reverses the process, calculating m ≡ c^d (mod n) with the private key. The mathematical guarantee that these two exponentiations are inverses of each other stems from <span class="vocab" data-cn="模幂运算">modular exponentiation</span> and the properties of φ(n). Even if an eavesdropper knows c, e, and n, recovering m without d would require factoring n—a task that grows exponentially harder as key sizes increase.`,
    `The impact was immediate. In 1991, Phil Zimmermann released Pretty Good Privacy (PGP), which employed RSA to encrypt email messages and sign documents, bringing strong cryptography to ordinary users for the first time. Around the same period, Netscape introduced Secure Sockets Layer (SSL), using RSA during the handshake phase to exchange symmetric session keys securely. These applications demonstrated that a mathematically elegant construct could protect real‑world communications, from banking transactions to software distribution.`,
    `However, RSA’s longevity is not guaranteed without vigilance. Early implementations used 512‑bit keys, which modern factoring efforts—especially the General Number Field Sieve (GNFS)—can break in weeks of coordinated computing power. Today, recommended key lengths are at least 2048 bits, providing a comfortable security margin against classical attacks. Looking ahead, quantum computers running Shor’s algorithm could theoretically factor large integers in polynomial time, threatening RSA’s foundation. Consequently, researchers are developing post‑quantum alternatives while many systems continue to rely on RSA with hybrid designs.`,
    `Nearly five decades after its inception, RSA remains a testament to the power of pure mathematics applied to practical problems. The algorithm transformed an abstract notion—using the difficulty of factoring—to become the invisible shield behind everyday digital interactions. Whether it will eventually be supplanted by quantum‑resistant schemes or continue to evolve alongside them, RSA’s story illustrates how curiosity-driven research can reshape the very fabric of modern society.`,
  ],
  vocabulary: [
    { word: 'public-key cryptography', cn: '公钥密码学' },
    { word: 'prime numbers', cn: '素数' },
    { word: 'trapdoor function', cn: '单向函数' },
    { word: 'Euler’s totient function', cn: '欧拉函数' },
    { word: 'coprime', cn: '互质' },
    { word: 'modular exponentiation', cn: '模幂运算' },
    { word: 'ciphertext', cn: '密文' },
    { word: 'large prime numbers', cn: '大素数' },
  ],
};

export default article;
