import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1907 Bengal Famine: Colonial Policies, Human Tragedy, and the Seeds of Indian Nationalism》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00400 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00400',
  slug: 'the-1907-bengal-famine-colonial-policies-human-tragedy-and-the-seeds-of-indian-nationalism',
  title: 'The 1907 Bengal Famine: Colonial Policies, Human Tragedy, and the Seeds of Indian Nationalism',
  subtitle: 'How a regional disaster exposed imperial neglect and sparked political awakening.',
  summary: 'An exploration of the 1907 Bengal famine, its causes, human cost, and its role in fueling early Indian nationalism.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1907 a severe shortage of rice struck the eastern districts of Bengal, where monsoon rains had failed for two consecutive years. The drought turned fertile paddies into cracked earth, and market prices for grain surged beyond what most tenant farmers could afford. Contemporary reports describe villages emptied of children, women carrying empty bowls, and entire families forced to abandon their homes in search of relief that never arrived.`,
    `The tragedy cannot be understood without examining the <span class="vocab" data-cn="英国在印度的统治机构">colonial administration</span> that governed Bengal. The British Raj relied heavily on the <span class="vocab" data-cn="1840年设立的永久定居制度，固定地主向政府缴纳固定税额">Permanent Settlement</span>, which fixed land revenue demands regardless of harvest yields. When crops failed, landlords still owed their dues, and they often evicted tenants who could not pay, accelerating the flow of destitution into the countryside.`,

    `Compounding the problem was the policy of exporting rice to other parts of the empire even as local stocks dwindled. Official correspondence from the Viceroy’s office shows that grain shipments continued to be sent to Hong Kong and Singapore under the justification of “maintaining trade balance.” This export‑oriented mindset reflected a broader imperial belief that Indian agriculture existed primarily to feed global markets, not its own people.`,

    `Human suffering was magnified by the lack of organized <span class="vocab" data-cn="政府提供的救济工程，如公共工程或粮食配给">relief works</span>. The limited famine relief committees set up in Calcutta were staffed by British officials unfamiliar with local conditions, and they often required able-bodied men to perform labor for meager wages before receiving food. Many of those who did manage to obtain work found the rations insufficient, leading to a secondary wave of malnutrition and disease, especially cholera and dysentery.`,

    `The famine’s impact resonated far beyond the fields. Newspapers such as The Statesman published harrowing eyewitness accounts, while Indian intellectuals used the crisis to critique imperial rule. Leaders like Surendranath Banerjee and Bipin Chandra Pal delivered speeches linking the famine to the broader exploitation inherent in British policies, arguing that “the very structure of revenue extraction breeds starvation.” Their rhetoric helped galvanize the emerging <span class="vocab" data-cn="强调本土生产和抵制外国商品的运动">Swadeshi</span> movement, which called for economic self‑reliance as a political strategy.`,

    `In response to public outcry, the British government established a temporary Famine Commission in 1908. The commission’s report acknowledged that “the rigidity of land revenue assessments and the neglect of local relief mechanisms contributed significantly to the disaster.” Although many recommendations were never fully implemented, the document marked one of the first official recognitions that colonial policy could directly cause humanitarian crises. This acknowledgment, however limited, provided Indian nationalists with concrete evidence to demand systemic change, laying a foundation for later mass movements such as the Non‑Cooperation Movement of the 1920s.`,
  ],
  vocabulary: [
    { word: 'colonial administration', cn: '英国在印度的统治机构' },
    { word: 'Permanent Settlement', cn: '1840年设立的永久定居制度，固定地主向政府缴纳固定税额' },
    { word: 'relief works', cn: '政府提供的救济工程，如公共工程或粮食配给' },
    { word: 'Swadeshi', cn: '强调本土生产和抵制外国商品的运动' },
    { word: 'Famine Commission', cn: '专门调查饥荒原因并提出建议的委员会' },
    { word: 'British Raj', cn: '英国在印度的统治时期' },
  ],
};

export default article;
