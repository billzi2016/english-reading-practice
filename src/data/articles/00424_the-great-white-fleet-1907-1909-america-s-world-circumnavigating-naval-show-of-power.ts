import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great White Fleet (1907–1909): America’s World‑Circumnavigating Naval Show of Power》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00424 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00424',
  slug: 'the-great-white-fleet-1907-1909-america-s-world-circumnavigating-naval-show-of-power',
  title: 'The Great White Fleet (1907–1909): America’s World‑Circumnavigating Naval Show of Power',
  subtitle: 'How a fleet of gleaming battleships sailed around the globe to announce the United States as a rising sea power.',
  summary: 'A narrative of Theodore Roosevelt’s bold naval expedition that combined technology, diplomacy, and national ambition.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, the United States stood at a crossroads between continental expansion and overseas ambition. President <span class="vocab" data-cn="西奥多·罗斯福">Theodore Roosevelt</span> believed that a visible display of naval strength could both deter potential rivals and reassure an increasingly restless American public. Inspired by Alfred Thayer Mahan’s doctrine that “sea power is the basis of national greatness,” Roosevelt ordered a worldwide cruise that would showcase the nation’s growing industrial might and signal its entry onto the stage of global politics.`,
    `The resulting armada, later christened the <span class="vocab" data-cn="大白舰队">Great White Fleet</span>, consisted of sixteen <span class="vocab" data-cn="战列舰">battleships</span> and accompanying cruisers, all painted a pristine white to emphasize cleanliness and modernity. Each ship was powered by a massive <span class="vocab" data-cn="燃煤蒸汽机">coal‑fired steam engine</span>, capable of propelling the steel hulls at speeds up to 18 knots. Names such as USS *Connecticut*, USS *Kansas*, and USS *Virginia* evoked state pride, while the fleet’s uniform appearance turned every port into a floating exhibition hall for American engineering.`,
    `The fleet slipped out of Hampton Roads on December 16, 1907, under the watchful eyes of journalists and crowds lining the waterfront. Its itinerary was meticulously plotted: from the Caribbean to South America, across the Atlantic to Europe, down the African coast, through the Indian Ocean, and finally across the Pacific back to San Francisco. Along the way, the ships stopped at more than thirty foreign harbors, each visit carefully timed to coincide with diplomatic events or national holidays, turning the cruise into a moving embassy of American resolve.`,
    `Every stop became an exercise in <span class="vocab" data-cn="海军外交">naval diplomacy</span>. In Brazil, the fleet was welcomed with parades that highlighted shared hemispheric interests; in Britain’s Portsmouth Dockyard, British admirals inspected the American hulls and exchanged courteous remarks about mutual security. Yet not all reactions were friendly: Japanese officials, still wary after the Russo‑Japanese War, viewed the presence of a powerful foreign navy as a subtle reminder of <span class="vocab" data-cn="帝国主义">imperialism</span>. The United States, for its part, used these encounters to reassure allies and signal that it could protect its growing overseas possessions without overt aggression.`,
    `Logistics proved the most demanding aspect of the voyage. Because the fleet relied on <span class="vocab" data-cn="燃煤蒸汽机">coal‑fired steam engines</span>, regular coaling stations were essential. The United States had few such facilities abroad, so Roosevelt negotiated temporary rights with colonial powers and commercial ports to replenish supplies. The lack of a transoceanic shortcut—remember that the <span class="vocab" data-cn="巴拿马运河">Panama Canal</span> would not open until 1914—meant the ships had to round Cape Horn, exposing them to treacherous weather and lengthening the journey by thousands of miles. Nevertheless, the fleet completed its circumnavigation without a single combat incident, a testament to careful planning and disciplined seamanship.`,
    `Back home, the successful cruise sparked a surge of national pride and reinforced the idea that a strong navy was essential for security. Congress responded with increased appropriations for shipbuilding, leading to the construction of newer dreadnoughts in the 1910s. The public’s fascination with the white hulls also inspired popular culture: postcards, songs, and newspaper cartoons celebrated the fleet as a symbol of American vigor. More importantly, the expedition demonstrated that the United States could project power far beyond its shores—a lesson that would shape strategic thinking throughout both World Wars.`,
    `Today, historians view the <span class="vocab" data-cn="大白舰队">Great White Fleet</span> as more than a theatrical display; it was an early experiment in what modern militaries call “power projection.” By combining cutting‑edge technology, meticulous logistics, and diplomatic outreach, Roosevelt’s fleet set a precedent for future naval operations, from carrier strike groups to humanitarian missions. The voyage reminds us that the sight of ships on the horizon can convey messages louder than any speech—a visual language of strength, resolve, and national identity.`,
  ],
  vocabulary: [
    { word: 'Theodore Roosevelt', cn: '西奥多·罗斯福' },
    { word: 'Great White Fleet', cn: '大白舰队' },
    { word: 'battleship', cn: '战列舰' },
    { word: 'coal‑fired steam engine', cn: '燃煤蒸汽机' },
    { word: 'naval diplomacy', cn: '海军外交' },
    { word: 'imperialism', cn: '帝国主义' },
    { word: 'Panama Canal', cn: '巴拿马运河' },
  ],
};

export default article;
