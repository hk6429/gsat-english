// 100 學年度指定科目考試英文考科（選擇題 51 題）
// 題文與答案取自大學入學考試中心正式題本及正式選擇題答案。
// originalNo/section/part 保留原卷結構；正式統計由共用統計資料另行匯入。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const section = "第壹部分：選擇題";
  const partOf = no => no <= 10 ? "詞彙題" : no <= 20 ? "綜合測驗" : no <= 30 ? "文意選填" : no <= 35 ? "篇章結構" : "閱讀測驗";
  const q = (no, cat, tags, lang, textType, answer, stem, options, group, extra = {}) => ({
    no,
    originalNo: no,
    section,
    part: partOf(no),
    cat,
    tags,
    lang,
    textType,
    ...(group ? { group } : {}),
    ...(extra.image ? { image: extra.image, imageAlt: extra.imageAlt } : {}),
    answer,
    stem,
    options
  });
  const wordOptions = {
    A: "expense",
    B: "fading",
    C: "colors",
    D: "research",
    E: "replacing",
    F: "offer",
    G: "users",
    H: "rapid",
    I: "gaining",
    J: "medium",
    K: "circular",
    L: "unknown"
  };
  const structureOptions = {
    A: "Hitler, for example, is claimed to have been a victim of bullying in his childhood.",
    B: "Campus bullying is becoming a serious problem in some high schools in big cities.",
    C: "The friends and classmates of the bully and the victim may accept the violence as normal.",
    D: "Research indicates that bullying may form a chain reaction and the victim often becomes the bully.",
    E: "Psychologists have been puzzled by the inactivity of crowds and bystanders in urban centers when crimes occur in crowded places.",
    F: "The link between bullying and school violence has attracted increasing attention since the 1999 tragedy at a Colorado high school."
  };
  const webImage = {
    image: "img/z100/q44.png",
    imageAlt: "Diagram of an orb spider web labeling the capture spiral, frame thread, anchor thread, radius, anchor point, and spider."
  };

  return {
    year: 100,
    era: "指考",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0j075811329103630585/02-100%e6%8c%87%e8%80%83%e8%8b%b1%e6%96%87%e9%81%b8%e6%93%87%e9%a1%8c%e7%ad%94%e6%a1%88-0712.pdf",
      sourceSha256: "7d93a6a75d6e16c4564f28b96cb44c824b1f6d5a9d8c89ae07162a76d0e93dbd",
      page: 1,
      subject: "英文考科",
      method: "manual-visual-and-text"
    },
    groups: {
      G1: {
        title: "Handling customer claims",
        passage: "<p>Handling customer claims is a common task for most business firms. These claims include requests to exchange merchandise, requests for refunds, requests that work <b>11</b>, and other requests for adjustments. Most of these claims are approved because they are legitimate. However, some requests for adjustment must be <b>12</b>, and an adjustment refusal message must be sent. Adjustment refusals are negative messages for the customer. They are necessary when the customer is <b>13</b> or when the vendor has done all that can reasonably or legally be expected.</p><p>An adjustment refusal message requires your best communication skills <b>14</b> it is bad news to the receiver. You have to refuse the claim and retain the customer <b>15</b>. You may refuse the request for adjustment and even try to sell the customer more merchandise or service. All this is happening when the customer is probably angry, disappointed, or inconvenienced.</p>"
      },
      G2: {
        title: "Cultural rules for showing emotion",
        passage: "<p>People may express their feelings differently on different occasions. Cultures sometimes vary greatly in this regard. A group of researchers in Japan, <b>16</b>, studied the facial reactions of students to a horror film. When the Japanese students watched the film <b>17</b> the teacher present, their faces showed only the slightest hints of reaction. But when they thought they were alone (though they <b>18</b> by a secret camera), their faces twisted into vivid mixes of anguished distress, fear, and disgust.</p><p>The study also shows that there are several unspoken rules about how feelings should be <b>19</b> shown on different occasions. One of the most common rules is minimizing the show of emotion. This is the Japanese norm for feelings of distress <b>20</b> someone in authority, which explains why the students masked their upset with a poker face in the experiment.</p>"
      },
      G3: {
        title: "The rise of graphic novels",
        passage: "<p>The history of the written word goes back 6,000 years. Words express feelings, open doors into the <b>21</b>, create pictures of worlds never seen, and allow adventures never dared. Therefore, the original <b>22</b> of words, such as storytellers, poets, and singers, were respected in all cultures in the past.</p><p>But now the romance is <b>23</b>. Imagination is being surpassed by the instant picture. In a triumphant march, movies, TV, videos, and DVDs are <b>24</b> storytellers and books. A visual culture is taking over the world—at the <b>25</b> of the written word. Our literacy, and with it our verbal and communication skills, are in <b>26</b> decline.</p><p>The only category of novel that is <b>27</b> ground in our increasingly visual world is the graphic novel. A growing number of adults and young people worldwide are reading graphic novels, and educators are beginning to realize the power of this <b>28</b>. The graphic novel looks like a comic book, but it is longer, more sophisticated, and may come in black and white or multiple <b>29</b> and appear in many sizes. In fact, some of the most interesting, daring, and most heartbreaking art being created right now is being published in graphic novels. Graphic novels <b>30</b> the opportunity to examine the increasingly visual world of communications today while exploring serious social and literary topics. The graphic novel can be used to develop a sense of visual literacy, in much the same way that students are introduced to art appreciation.</p>"
      },
      G4: {
        title: "The effects of bullying",
        passage: "<p>The effect of bullying can be serious and even lead to tragedy. Unfortunately, it is still a mostly unresearched area.</p><p><b>31</b> That year two shotgun-wielding students, both of whom had been identified as gifted and who had been bullied for years, killed 13 people, wounded 24 and then committed suicide. A year later an analysis by the US government found that bullying played a major role in more than two-thirds of the campus violence.</p><p><b>32</b> Numerous dictators and invaders throughout history have tried to justify their bullying behavior by claiming that they themselves were bullied. <b>33</b> Although it is no justification for bullying, many of the worst humans in history have indeed been bullies and victims of bullying.</p><p>Since bullying is mostly ignored, it may provide an important clue in crowd behavior and passer-by behavior. <b>34</b> Many of them have suggested bullying as one of the reasons of this decline in emotional sensitivity and acceptance of violence as normal. When someone is bullied, it is not only the bully and the victim who are becoming less sensitive to violence. <b>35</b> In this sense, bullying affects not only the bullied but his friends and classmates and the whole society.</p>"
      },
      G5: {
        title: "Truffles",
        passage: "<p>Since the times of the Greeks and Romans, truffles have been used in Europe as delicacies and even as medicines. They are among the most expensive of the world’s natural foods, often commanding as much as US$250 to US$450 per pound. Truffles are actually mushrooms, but unusual ones. They live in close association with the roots of specific trees and their fruiting bodies grow underground. This is why they are difficult to find.</p><p>Truffles are harvested in Europe with the aid of female pigs or truffle dogs, which are able to detect the strong smell of mature truffles underneath the surface of the ground. Female pigs are especially sensitive to the odor of the truffles because it is similar to the smell given off by male pigs. The use of pigs is risky, though, because of their natural tendency to eat any remotely edible thing. For this reason, dogs have been trained to dig into the ground wherever they find this odor, and they willingly exchange their truffle for a piece of bread and a pat on the head. Some truffle merchants dig for their prizes themselves when they see truffle flies hovering around the base of a tree. Once a site has been discovered, truffles can be collected in subsequent years.</p><p>To enjoy the wonderful flavor of what has been described as an earthly jewel, you must eat fresh, uncooked specimens shortly after they have been harvested. The strength of their flavor decreases rapidly with time, and much of it is lost before some truffles reach the market. To preserve them, gourmet experts suggest putting them in closed glass jars in a refrigerator. Another recommendation is to store them whole in bland oil.</p>"
      },
      G6: {
        title: "Reducing animal experimentation",
        passage: "<p>In an ideal world, people would not test medicines on animals. Such experiments are stressful and sometimes painful for animals, and expensive and time-consuming for people. Yet animal experimentation is still needed to help bridge vast gaps in medical knowledge. That is why there are some 50 to 100 million animals used in research around the world each year.</p><p>Europe, on the whole, has the world’s most restrictive laws on animal experiments. Even so, its scientists use some 12 million animals a year, most of them mice and rats, for medical research. Official statistics show that just 1.1 million animals are used in research in America each year. But that is misleading. The American authorities do not think mice and rats are worth counting and, as these are the most common laboratory animals, the true figure is much higher. Japan and China have even less comprehensive data than America.</p><p>Now Europe is reforming the rules governing animal experiments by restricting the number of animals used in labs. Alternatives to animal testing, such as using human tissue or computer models, are now strongly recommended. In addition, sharing all research results freely should help to reduce the number of animals for scientific use. At present, scientists often share only the results of successful experiments. If their findings do not fit the hypothesis being tested, the work never sees the light of day. This practice means wasting time, money, and animals’ lives in endlessly repeating the failed experiments.</p><p>Animal experimentation has taught humanity a great deal and saved countless lives. It needs to continue, even if that means animals sometimes suffer. Europe’s new measures should eventually both reduce the number of animals used in experiments and improve the way in which scientific research is conducted.</p>"
      },
      G7: {
        title: "The structure of orb spider webs",
        passage: "<p>Spider webs are one of the most fascinating examples of animal architecture. The most beautiful and structurally ordered are the orb webs. The main function of the web is to intercept and hold flying prey, such as flies, bees and other insects, long enough for the spider to catch them. In order to do so, the threads of the web have to withstand the impact forces from large and heavy prey as well as environmental forces from wind and rain for at least a day in most cases.</p><p>The orb web is found to have two main characteristics. The first is its geometry, which consists of an outer frame and a central part from which threads radiate outward. Enclosed in the frame are capture spirals winding round and round from the web center out to the frame. The whole web is in tension and held in place by anchor threads, which connect the frame to the surrounding vegetation or objects. The second and perhaps most important characteristic is the material with which it is built. Spider silk is a kind of natural composite that gives this lightweight fiber a tensile strength comparable to that of steel, while at the same time making it very elastic. Two types of silk threads are used in the web. One is highly elastic and can stretch to almost twice its original length before breaking and, for most types of spiders, is covered in glue. This type is used in the capture spiral for catching and holding prey. The other is stiffer and stronger, and is used for the radius, frames and anchor threads, which allows the web to withstand prey impact and to keep its structural strength through a wide range of environmental conditions.</p>"
      },
      G8: {
        title: "The growth and oversupply of PhDs",
        passage: "<p>Doctor of Philosophy, usually abbreviated as PhD or Ph.D., is an advanced academic degree awarded by universities. The first Doctor of Philosophy degree was awarded in Paris in 1150, but the degree did not acquire its modern status until the early 19th century. The doctorate of philosophy as it exists today originated at Humboldt University. The German practice was later adopted by American and Canadian universities, eventually becoming common in large parts of the world in the 20th century.</p><p>For most of history, even a bachelor’s degree at a university was the privilege of a rich few, and many academic staff did not hold doctorates. But as higher education expanded after the Second World War, the number of PhDs increased accordingly. American universities geared up first: By 1970, America was graduating half of the world’s PhDs in science and technology. Since then, America’s annual output of PhDs has doubled, to 64,000. Other countries are catching up. PhD production has sped up most dramatically in Mexico, Portugal, Italy, and Slovakia. Even Japan, where the number of young people is shrinking, has churned out about 46% more PhDs.</p><p>Researchers now warn that the supply of PhDs has far outstripped demand. America produced more than 100,000 doctoral degrees between 2005 and 2009, while there were just 16,000 new professorships. In research, the story is similar. Even graduates who find work outside universities may not fare all that well. Statistics show that five years after receiving their degrees, more than 60% of PhDs in Slovakia and more than 45% in Belgium, the Czech Republic, Germany, and Spain are still on temporary contracts. About one-third of Austria’s PhD graduates take jobs unrelated to their degrees.</p><p>Today, top universities around the world are still picking bright students and grooming them as potential PhDs. After all, it isn’t in their interests to turn the smart students away: The more bright students stay at universities, the better it is for academics. But considering the oversupply of PhDs, some people have already begun to wonder whether doing a PhD is a good choice for an individual.</p>"
      }
    },
    questions: [
      q(1,"C1",["詞義辨析"],"單題","詞彙題","A","Many people think cotton is the most comfortable _____ to wear in hot weather.",{A:"fabric",B:"coverage",C:"software",D:"wardrobe"}),
      q(2,"C1",["詞義辨析"],"單題","詞彙題","A","Because of the engine problem in the new vans, the auto company decided to _____ them from the market.",{A:"recall",B:"clarify",C:"transform",D:"polish"}),
      q(3,"C1",["詞義辨析"],"單題","詞彙題","C","After a day’s tiring work, Peter walked _____ back to his house, hungry and sleepy.",{A:"splendidly",B:"thoroughly",C:"wearily",D:"vaguely"}),
      q(4,"C1",["語境搭配"],"單題","詞彙題","C","In team sports, how all members work as a group is more important than how they perform _____.",{A:"frequently",B:"typically",C:"individually",D:"completely"}),
      q(5,"C1",["詞義辨析"],"單題","詞彙題","D","Despite her physical disability, the young blind pianist managed to overcome all _____ to win the first prize in the international contest.",{A:"privacy",B:"ambition",C:"fortunes",D:"obstacles"}),
      q(6,"C1",["詞義辨析"],"單題","詞彙題","C","Each of the planets in the solar system circles around the sun in its own _____, and this prevents them from colliding with each other.",{A:"entry",B:"haste",C:"orbit",D:"range"}),
      q(7,"C1",["語境搭配"],"單題","詞彙題","A","Professor Wang is well known for his contributions to the field of economics. He has been _____ to help the government with its financial reform programs.",{A:"recruited",B:"contradicted",C:"mediated",D:"generated"}),
      q(8,"C1",["語境搭配"],"單題","詞彙題","B","Most earthquakes are too small to be noticed; they can only be detected by _____ instruments.",{A:"manual",B:"sensitive",C:"portable",D:"dominant"}),
      q(9,"C1",["詞義辨析"],"單題","詞彙題","B","With Wikileaks releasing secrets about governments around the world, many countries are worried that their national security information might be _____.",{A:"relieved",B:"disclosed",C:"condensed",D:"provoked"}),
      q(10,"C1",["語境搭配"],"單題","詞彙題","B","I’m afraid we can’t take your word, for the evidence we’ve collected so far is not ____ with what you said.",{A:"familiar",B:"consistent",C:"durable",D:"sympathetic"}),

      q(11,"C2",["語境搭配"],"題組","綜合測驗","D","Choose the best answer for blank 11.",{A:"is correct",B:"to be correct",C:"is corrected",D:"be corrected"},"G1"),
      q(12,"C2",["語境選詞"],"題組","綜合測驗","B","Choose the best answer for blank 12.",{A:"retailed",B:"denied",C:"appreciated",D:"elaborated"},"G1"),
      q(13,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 13.",{A:"at fault",B:"on call",C:"in tears",D:"off guard"},"G1"),
      q(14,"C2",["邏輯關係"],"題組","綜合測驗","C","Choose the best answer for blank 14.",{A:"till",B:"unless",C:"because",D:"therefore"},"G1"),
      q(15,"C2",["語境搭配"],"題組","綜合測驗","C","Choose the best answer for blank 15.",{A:"by and large",B:"over and over",C:"at the same time",D:"for the same reason"},"G1"),
      q(16,"C2",["轉承語"],"題組","綜合測驗","D","Choose the best answer for blank 16.",{A:"as usual",B:"in some cases",C:"to be frank",D:"for example"},"G2"),
      q(17,"C2",["語境搭配"],"題組","綜合測驗","D","Choose the best answer for blank 17.",{A:"of",B:"as",C:"from",D:"with"},"G2"),
      q(18,"C2",["時態語意"],"題組","綜合測驗","A","Choose the best answer for blank 18.",{A:"were being taped",B:"had taped",C:"are taping",D:"have been taped"},"G2"),
      q(19,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 19.",{A:"rarely",B:"similarly",C:"properly",D:"critically"},"G2"),
      q(20,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 20.",{A:"with the help of",B:"in the presence of",C:"on top of",D:"in place of"},"G2"),

      q(21,"C2",["文意選填"],"題組","文意選填","L","Choose the best answer for blank 21.",wordOptions,"G3"),
      q(22,"C2",["文意選填"],"題組","文意選填","G","Choose the best answer for blank 22.",wordOptions,"G3"),
      q(23,"C2",["文意選填"],"題組","文意選填","B","Choose the best answer for blank 23.",wordOptions,"G3"),
      q(24,"C2",["文意選填"],"題組","文意選填","E","Choose the best answer for blank 24.",wordOptions,"G3"),
      q(25,"C2",["文意選填"],"題組","文意選填","A","Choose the best answer for blank 25.",wordOptions,"G3"),
      q(26,"C2",["文意選填"],"題組","文意選填","H","Choose the best answer for blank 26.",wordOptions,"G3"),
      q(27,"C2",["文意選填"],"題組","文意選填","I","Choose the best answer for blank 27.",wordOptions,"G3"),
      q(28,"C2",["文意選填"],"題組","文意選填","J","Choose the best answer for blank 28.",wordOptions,"G3"),
      q(29,"C2",["文意選填"],"題組","文意選填","C","Choose the best answer for blank 29.",wordOptions,"G3"),
      q(30,"C2",["文意選填"],"題組","文意選填","F","Choose the best answer for blank 30.",wordOptions,"G3"),

      q(31,"C3",["篇章結構"],"題組","篇章結構","F","Choose the sentence that best fits blank 31.",structureOptions,"G4"),
      q(32,"C3",["篇章結構"],"題組","篇章結構","D","Choose the sentence that best fits blank 32.",structureOptions,"G4"),
      q(33,"C3",["篇章結構"],"題組","篇章結構","A","Choose the sentence that best fits blank 33.",structureOptions,"G4"),
      q(34,"C3",["篇章結構"],"題組","篇章結構","E","Choose the sentence that best fits blank 34.",structureOptions,"G4"),
      q(35,"C3",["篇章結構"],"題組","篇章結構","C","Choose the sentence that best fits blank 35.",structureOptions,"G4"),

      q(36,"C4",["細節檢索"],"題組","閱讀測驗","B","Why do some people prefer using dogs than pigs in search of truffles?",{A:"Dogs have stronger paws to dig.",B:"Dogs usually won’t eat the truffles found.",C:"Dogs have a better sense of smell than pigs.",D:"Dogs are less likely to get excited than pigs."},"G5"),
      q(37,"C4",["細節檢索"],"題組","閱讀測驗","C","What is the best way to enjoy truffles as a delicacy?",{A:"Eating them cooked with pork.",B:"Eating them uncooked with bland oil.",C:"Eating them fresh right after being collected.",D:"Eating them after being refrigerated."},"G5"),
      q(38,"C4",["細節檢索"],"題組","閱讀測驗","C","Which of the following statements is true?",{A:"Truffles are roots of some old trees.",B:"Truffles can be found only by dogs and pigs.",C:"Truffles send out a strong odor when they mature.",D:"Truffles cannot be collected at the same place repeatedly."},"G5"),
      q(39,"C4",["推論判讀"],"題組","閱讀測驗","D","Which of the following can be inferred from the passage?",{A:"Truffles sold in glass jars are tasteless.",B:"Truffles taste like fruit when eaten fresh.",C:"Truffles are only used for cooking nowadays.",D:"Truffles are expensive because they are difficult to find."},"G5"),
      q(40,"C4",["主旨判讀"],"題組","閱讀測驗","C","What is the main idea of this passage?",{A:"The success of animal experiments should be ensured.",B:"Ban on the use of animals in the lab should be enforced.",C:"Greater efforts need to be taken to reduce the number of lab animals.",D:"Scientists should be required to share their research results with each other."},"G6"),
      q(41,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following statements is true about animals used in the lab?",{A:"America uses only about 1.1 million lab animals per year.",B:"Europe does not use mice and rats as lab animals at all.",C:"Britain does not use as many lab animals as China does.",D:"Japan has limited data on the number of lab animals used each year."},"G6"),
      q(42,"C4",["細節檢索"],"題組","閱讀測驗","B","Which of the following is mentioned as an alternative to replace animal experiments?",{A:"Statistical studies.",B:"Computer models.",C:"DNA planted in animals.",D:"Tissue from dead animals."},"G6"),
      q(43,"C4",["細節檢索"],"題組","閱讀測驗","A","What usually happens to unsuccessful animal experiments?",{A:"They are not revealed to the public.",B:"They are made into teaching materials.",C:"They are collected for future publication.",D:"They are not removed from the research topic list."},"G6"),
      q(44,"C4",["主旨判讀"],"題組","閱讀測驗","B","What is this passage mainly about?",{A:"The food network in nature.",B:"The construction of orb webs.",C:"The network of geometrical studies.",D:"The environmental challenges for spider webs."},"G7",webImage),
      q(45,"C4",["指涉判讀"],"題組","閱讀測驗","A","What does the word “so” in the first paragraph refer to?",{A:"To catch and keep small creatures.",B:"To find a good material for the web.",C:"To observe the behavior patterns of spiders.",D:"To present a fantastic architecture by animals."},"G7",webImage),
      q(46,"C5",["圖文整合"],"題組","閱讀測驗","C","Which part of the web is used for supporting the web itself?",{A:"The center of the web.",B:"The glue on the lines.",C:"The anchor threads.",D:"The capture spiral."},"G7",webImage),
      q(47,"C4",["細節檢索"],"題組","閱讀測驗","B","According to the passage, which statement is true about the silk threads?",{A:"They are all sticky and extendable.",B:"They are usually strong enough to last for a day.",C:"They remove harmful chemicals from insects.",D:"They are made of rare plants in the environment."},"G7",webImage),
      q(48,"C4",["細節檢索"],"題組","閱讀測驗","B","In which country did the modern practice of granting doctoral degrees start?",{A:"France.",B:"Germany.",C:"Canada.",D:"The U.S."},"G8"),
      q(49,"C4",["語境推義"],"題組","閱讀測驗","D","Which of the following words is closest in meaning to “churned out” in the second paragraph?",{A:"Failed.",B:"Warned.",C:"Demanded.",D:"Produced."},"G8"),
      q(50,"C4",["推論判讀"],"題組","閱讀測驗","D","Which of the following may be inferred from the third paragraph?",{A:"PhD graduates in Austria are not encouraged to work outside university.",B:"Most German PhDs work at permanent jobs immediately after graduation.",C:"It is much easier for American PhD holders to find a teaching position than a research job.",D:"It is more difficult for PhDs to get a permanent job five years after graduation in Slovakia than in Spain."},"G8"),
      q(51,"C4",["篇章理解"],"題組","閱讀測驗","A","Which of the following best describes the author’s attitude toward the increase of PhDs in recent years?",{A:"Concerned.",B:"Supportive.",C:"Indifferent.",D:"Optimistic."},"G8")
    ]
  };
})());
