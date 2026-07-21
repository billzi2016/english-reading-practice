import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of Public‑Key Cryptography: Diffie, Hellman, and the Dawn of Secure Digital Communication》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00253 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00253',
  slug: 'the-invention-of-public-key-cryptography-diffie-hellman-and-the-dawn-of-secure-digital-communication',
  title: 'The Invention of Public‑Key Cryptography: Diffie, Hellman, and the Dawn of Secure Digital Communication',
  subtitle: 'How a bold idea solved the secret‑key distribution problem and reshaped digital security.',
  summary: 'Explore the breakthrough that introduced public‑key cryptography and its lasting impact on secure communication.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s, computer scientists faced a paradox: they needed to exchange secret keys over insecure telephone lines, yet any method of transmitting a key could be intercepted. Traditional symmetric systems required both parties to share the same secret in advance, a logistical nightmare for emerging networks. This “key distribution problem” haunted researchers and limited the potential of electronic messaging, prompting a search for a fundamentally new approach that could protect data without first sharing a secret.`,
    `The breakthrough arrived at Stanford University, where Whitfield Diffie and Martin Hellman began questioning the very foundations of cryptography. In their landmark 1976 paper, they proposed <span class="vocab" data-cn="公钥密码学">public‑key cryptography</span>, a paradigm in which each user possesses a pair of mathematically linked keys: one public, one private. The public key could be openly distributed, while the private key remained secret, allowing anyone to encrypt messages that only the intended recipient could decrypt.`,
    `To demonstrate their concept, Diffie and Hellman introduced the <span class="vocab" data-cn="Diffie‑Hellman 密钥交换">Diffie–Hellman key exchange</span>. The protocol relies on two mathematical ingredients: a large <span class="vocab" data-cn="素数模数">prime modulus</span> p and a generator g. Each participant selects a private exponent, raises g to that exponent modulo p, and exchanges the resulting value. Both sides can then combine their own secret with the received value to compute an identical shared secret. The security rests on the <span class="vocab" data-cn="离散对数问题">discrete logarithm problem</span>, which remains computationally infeasible for sufficiently large numbers, preventing eavesdroppers from deriving the private exponents.`,
    `The idea of separating encryption and decryption sparked a flurry of activity. In 1978, Rivest, Shamir, and Adleman built on Diffie‑Hellman's foundation to create <span class="vocab" data-cn="非对称加密">asymmetric encryption</span> with the RSA algorithm, which used the difficulty of factoring large integers instead of discrete logs. Together, these inventions enabled secure email, electronic banking, and later the development of protocols such as SSL that protected web traffic. For the first time, two strangers could establish a confidential channel without ever meeting in person.`,
    `Early adoption was swift among government agencies and academic institutions. The United States Department of Defense incorporated public‑key techniques into its Secure Network Architecture, while universities experimented with encrypted file transfers using the newly minted protocols. Although hardware at the time was limited, software implementations demonstrated that the mathematics could run on modest mainframes, proving the practicality of the theory beyond laboratory proofs.`,
    `However, the new system introduced fresh vulnerabilities. Without a way to verify that a public key truly belonged to its claimed owner, attackers could launch a <span class="vocab" data-cn="中间人攻击">man‑in‑the‑middle attack</span>, intercepting and substituting keys to read or alter messages. This weakness motivated the creation of <span class="vocab" data-cn="数字签名">digital signatures</span> and certificate authorities, which bind public keys to verified identities. The combination of key exchange, encryption, and authentication formed a complete <span class="vocab" data-cn="密码协议">cryptographic protocol</span> that underpins modern secure communications.`,
    `Today, the legacy of Diffie and Hellman is visible in every HTTPS connection, SSH session, and VPN tunnel. Their insight turned an abstract mathematical problem into a practical tool for protecting privacy on a global scale. As quantum computing threatens current assumptions about factorization and discrete logs, researchers are already designing post‑quantum alternatives, but the core principle—using mathematically linked public and private keys—remains a cornerstone of digital security.`,
  ],
  vocabulary: [
    { word: 'public‑key cryptography', cn: '公钥密码学' },
    { word: 'Diffie–Hellman key exchange', cn: 'Diffie‑Hellman 密钥交换' },
    { word: 'asymmetric encryption', cn: '非对称加密' },
    { word: 'discrete logarithm problem', cn: '离散对数问题' },
    { word: 'prime modulus', cn: '素数模数' },
    { word: 'digital signature', cn: '数字签名' },
    { word: 'man‑in‑the‑middle attack', cn: '中间人攻击' },
    { word: 'cryptographic protocol', cn: '密码协议' },
  ],
};

export default article;
