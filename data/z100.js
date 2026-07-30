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

[
  "<b>解題關鍵：</b>cotton 是棉，而句子談炎熱天氣中「穿在身上」最舒服的材料，所以空格要填布料。<br>(A) fabric「布料」可指棉布，最合理。<br>(B) coverage「覆蓋範圍」不是衣料。<br>(C) software「軟體」與穿著無關。<br>(D) wardrobe「衣櫃／全部衣物」不是棉本身的材料名稱。<br>把答案放回去：許多人認為棉是炎熱天氣最舒服的穿著布料。",
  "<b>解題關鍵：</b>新廂型車有引擎問題，公司為安全要把已上市車輛從市場收回檢查。<br>(A) recall「召回產品」最符合汽車瑕疵情境。<br>(B) clarify「釐清」通常接問題或說法。<br>(C) transform「改造」不是從市場收回。<br>(D) polish「擦亮／潤飾」也無法解決召回動作。<br>把答案放回去：汽車公司因引擎問題決定召回新車。",
  "<b>解題關鍵：</b>Peter 工作一整天後 hungry and sleepy，又餓又睏，可知走路時十分疲倦。<br>(A) splendidly「出色地」不描述疲累步伐。<br>(B) thoroughly「徹底地」不能自然修飾 walked back。<br>(C) wearily「疲倦地」與 tiring、sleepy 呼應。<br>(D) vaguely「模糊地」通常形容說明或記憶。<br>把答案放回去：Peter 疲憊地走回家。",
  "<b>解題關鍵：</b>In team sports 強調團隊合作，句型 more important than 比較整體合作與每位成員「各自」表現。<br>(A) frequently「經常地」談頻率。<br>(B) typically「典型地」談常態。<br>(C) individually「個別地」正好和 as a group 相對。<br>(D) completely「完全地」沒有團體與個人的對比。<br>把答案放回去：團隊合作比個別表現重要。",
  "<b>解題關鍵：</b>Despite 表示「儘管」，前面提到她失明，後面說仍贏得國際首獎，表示她克服許多阻礙。<br>(A) privacy「隱私」不是要克服的困難。<br>(B) ambition「抱負」反而能推動成功。<br>(C) fortunes「財富／運氣」語意不合。<br>(D) obstacles「障礙」可與 overcome 搭配，最合理。<br>把答案放回去：她克服所有障礙贏得首獎。",
  "<b>解題關鍵：</b>每顆行星都沿固定路線繞太陽，才能避免彼此碰撞；這條路線稱為軌道。<br>(A) entry「入口／進入」不是環繞路線。<br>(B) haste「匆忙」不能說行星在自己的匆忙中運行。<br>(C) orbit「軌道」可和 circle around the sun 呼應。<br>(D) range「範圍」太廣泛，沒有固定路徑意思。<br>把答案放回去：每顆行星沿自己的軌道運行。",
  "<b>解題關鍵：</b>王教授因經濟學貢獻聞名，所以政府請他加入改革計畫；句子是被動 has been...to help。<br>(A) recruited「被招募、延攬」符合專業人才受邀。<br>(B) contradicted「被反駁」不會接 to help 表目的。<br>(C) mediated「被調解」主詞與句型不合。<br>(D) generated「被產生」不能形容教授。<br>把答案放回去：王教授被延攬協助財政改革。",
  "<b>解題關鍵：</b>多數地震小到人感覺不到，所以需要能察覺微小震動的專業儀器。<br>(A) manual「手動的」不代表偵測能力高。<br>(B) sensitive「靈敏的」能接收細微訊號，最合理。<br>(C) portable「可攜式的」只談方便搬動。<br>(D) dominant「占主導的」不能形容儀器精密度。<br>把答案放回去：小地震只能由靈敏儀器偵測。",
  "<b>解題關鍵：</b>Wikileaks 正在公開各國祕密，因此各國擔心國安資料也會「被揭露」；空格是被動。<br>(A) relieved「被減輕／感到放心」與擔心相反。<br>(B) disclosed「被公開、揭露」最符合 secrets。<br>(C) condensed「被濃縮」不是安全風險。<br>(D) provoked「被激怒／引發」不能說資訊被引發。<br>把答案放回去：各國擔心國安資訊遭公開。",
  "<b>解題關鍵：</b>for 表示原因：目前證據和對方說法對不上，所以無法相信他的話。固定搭配 be consistent with 是「與……一致」。<br>(A) familiar with「熟悉」主詞通常是人。<br>(B) consistent with「一致」正確。<br>(C) durable「耐用的」形容物品。<br>(D) sympathetic with「同情」談感受。<br>把答案放回去：證據與你的說法不一致。",
  "<b>解題關鍵：</b>requests that... 表「要求……」，這類要求後的 that 子句用動詞原形；work 是「被更正」，還需被動 be corrected。<br>(A) is correct 變成「工作是正確的」，意思不同。<br>(B) to be correct 不能直接作 that 子句主要動詞。<br>(C) is corrected 用一般現在式，未呈現要求句型。<br>(D) be corrected 是原形被動，正確。<br>關鍵句：顧客要求工作內容被修正。",
  "<b>解題關鍵：</b>Most claims are approved 後用 However 轉折，表示有些調整要求不能核准，必須拒絕；句子是被動。<br>(A) retailed「被零售」與申訴無關。<br>(B) denied「被拒絕」符合轉折。<br>(C) appreciated「被感謝／欣賞」不是申訴處理結果。<br>(D) elaborated「被詳述」也不等於否決。<br>關鍵句：部分調整要求必須被拒絕。",
  "<b>解題關鍵：</b>業者可合理拒絕的情況之一，是顧客自己對商品問題負有責任。<br>(A) at fault「有過錯、該負責」最符合。<br>(B) on call「隨傳隨到」通常形容值班人員。<br>(C) in tears「流著眼淚」只說情緒。<br>(D) off guard「措手不及」不表示責任歸屬。<br>關鍵句：當顧客本身有過失時，業者拒絕調整是合理且必要的。",
  "<b>解題關鍵：</b>前半說拒絕訊息需要最好的溝通技巧，後半說它對收件者是壞消息；後半是在具體解釋原因。<br>(A) till「直到」表時間。<br>(B) unless「除非」表條件。<br>(C) because「因為」正確連接理由。<br>(D) therefore「因此」應接結果，而且通常以逗點隔開。<br>關鍵句：因為這對顧客是壞消息，所以業者需要良好溝通。",
  "<b>解題關鍵：</b>公司面對兩件同時要做到的事：拒絕申訴，卻仍保住這位顧客。<br>(A) by and large「大致上」不是兩事並行。<br>(B) over and over「一再地」談重複。<br>(C) at the same time「同時」能連起兩個目標。<br>(D) for the same reason「基於同一理由」文意沒有共同原因。<br>關鍵句：你必須拒絕申訴，同時留住顧客。",
  "<b>解題關鍵：</b>前文概述文化會影響表情，接著介紹日本研究學生觀看恐怖片，是用具體研究來舉例。<br>(A) as usual「像往常一樣」不引出例子。<br>(B) in some cases「在某些情況」太模糊。<br>(C) to be frank「坦白說」是說話態度。<br>(D) for example「例如」最適合承接。<br>關鍵句：例如，日本研究者觀察學生看恐怖片。",
  "<b>解題關鍵：</b>空格後 the teacher present 不是完整子句，意思是「老師在場的情況下」。with＋人＋形容詞是把情境一起帶入。<br>(A) of 表所屬。<br>(B) as 表身分。<br>(C) from 表來源。<br>(D) with the teacher present「有老師在場」正確。<br>關鍵句：日本學生在老師在場時觀看影片。",
  "<b>解題關鍵：</b>學生以為自己獨處，但其實祕密攝影機當時正在錄他們；故事用過去時，學生又是「被錄影」。<br>(A) were being taped 是過去進行被動，表示當時正在被拍。<br>(B) had taped 是主動過去完成，變成學生拍別人。<br>(C) are taping 是現在主動。<br>(D) have been taped 是現在完成被動，時間焦點不合。<br>關鍵句：他們其實正被祕密錄影。",
  "<b>解題關鍵：</b>研究談不同場合應如何「適當地」表達感受，後面又說有不成文規則，因此空格要表示合宜方式。<br>(A) rarely「很少」談頻率。<br>(B) similarly「相似地」談比較。<br>(C) properly「適當地」符合 rules。<br>(D) critically「批判地／嚴重地」不描述表情規範。<br>關鍵句：各場合有適當表達情緒的規則。",
  "<b>解題關鍵：</b>日本文化的規範是：權威人士在場時，把痛苦表情降到最低。空格要表示「在某人面前」。<br>(A) with the help of「在……幫助下」不是權威協助。<br>(B) in the presence of「在……面前」正確。<br>(C) on top of「在上面／除此之外」。<br>(D) in place of「代替」。<br>關鍵句：日本人在權威者面前會壓抑不安。",
  "<b>解題關鍵：</b>open doors into the... 是「打開通往……的大門」，文章說文字能創造從未看過的世界，因此目的地是未知事物。unknown 在 the 後可當名詞「未知世界」。<br>research 是研究，medium 是媒介，colors 是顏色，都無法和 open doors into 表達探索想像。<br>關鍵句：文字能帶人進入未知世界。",
  "<b>解題關鍵：</b>空格後列出 storytellers, poets, and singers，這些人是最早運用文字創作的人；the original 後需要複數名詞。users「使用者」符合。<br>offer 是動詞，research 雖是名詞但不是人，medium 是單數媒介；其他選項詞性或語意不合。<br>關鍵句：說書人、詩人和歌者是文字最早的使用者。",
  "<b>解題關鍵：</b>But now 與過去文字受尊重形成轉折；下一句又說即時影像超越想像，因此文字的浪漫正在消退。fading 是「逐漸淡去」，可接在 is 後。<br>replacing 是主動取代，主詞 romance 無法取代別人；rapid 是形容詞，colors、users 是名詞。<br>關鍵句：文字的浪漫如今正逐漸消逝。",
  "<b>解題關鍵：</b>電影、電視和 DVD 勝利前進，後面說視覺文化接管世界，可知它們正在「取代」說書人與書籍。replacing 接在 are 後形成現在進行式。<br>fading 是消退但不能接受詞 storytellers；gaining 要搭配 ground；offer 是原形，形式也不合。<br>關鍵句：影像媒體正在取代傳統文字。",
  "<b>解題關鍵：</b>視覺文化接管世界，代價是文字與識字能力衰退；固定搭配 at the expense of 是「以犧牲……為代價」。<br>expense「代價、費用」正確；medium 是媒介，research 是研究，unknown 是未知事物，都不能形成 at the...of 的意思。<br>關鍵句：視覺文化崛起是以文字為代價。",
  "<b>解題關鍵：</b>文章說識字、語文與溝通技巧都在 decline，空格要用形容詞修飾 decline，說明下降速度很快。rapid「快速的」正確。<br>fading 雖與衰退有關，但不能自然說 in fading decline；circular「圓形的」與能力無關；其他多為名詞或動詞。<br>關鍵句：我們的語文能力正在快速衰退。",
  "<b>解題關鍵：</b>唯一沒有衰退的小說類型是圖像小說，它在愈來愈視覺化的世界中逐漸擴大影響。gain ground 是「取得進展」，are gaining ground 正確。<br>replacing 後應接受詞；fading 表衰退，方向相反；rapid 是形容詞，無法接在 is 後完成動作。<br>關鍵句：圖像小說正在取得進展。",
  "<b>解題關鍵：</b>前文說許多人閱讀 graphic novels，後文說教育者開始了解「這種媒介」的力量。medium 是傳遞故事與圖像的媒介，this medium 回指圖像小說。<br>users 是使用者，colors 只是呈現方式，research 是研究，都不能回指作品形式。<br>關鍵句：教育者開始了解圖像小說這種媒介的力量。",
  "<b>解題關鍵：</b>句型 in black and white or multiple... 對比「黑白」與「多種顏色」，空格需複數名詞。colors 正確。<br>medium 是媒介，expense 是代價，research 是研究，都不能與 black and white 構成色彩選擇；rapid 等形容詞詞性也不合。<br>關鍵句：圖像小說可用黑白或多種顏色呈現。",
  "<b>解題關鍵：</b>空格後 the opportunity 是受詞，主詞 Graphic novels 為複數，需要原形動詞表示「提供機會」。offer 正確。<br>research 是研究，users 是使用者，medium 是媒介，都是名詞；replacing、gaining 雖為動詞形式，但意思與句型不合。<br>關鍵句：圖像小說提供檢視視覺傳播並探討議題的機會。",
  "<b>解題關鍵：</b>空格後立刻出現 That year，接著詳述 1999 年科羅拉多校園槍擊，因此前句必須先引出 1999 年事件。<br>(F) 說霸凌與校園暴力的連結在該悲劇後受到關注，時間與主題都完整。(B) 只談大城市校園，無法讓 That year 有明確年份；(A)(D) 屬後段受害者變霸凌者；(E)(C) 屬旁觀者冷漠段。<br>所以選 F。",
  "<b>解題關鍵：</b>上一段說霸凌造成校園暴力；空格後改談許多獨裁者以自己曾受霸凌替行為辯護，所以空格需先提出「受害者可能變霸凌者」。<br>(D) 以研究說明霸凌形成連鎖反應，正好連接兩邊。(A) Hitler 只是後面的具體例子；(F) 應放 1999 悲劇前；(E)(C) 是旁觀者主題；(B) 太泛。<br>所以選 D。",
  "<b>解題關鍵：</b>前句概括歷史上的獨裁者與侵略者常說自己曾遭霸凌；後句說許多最惡劣人物確實既是霸凌者又是受害者，中間適合放具體人物。<br>(A) Hitler 的童年傳聞正是例子。(D) 是本段開頭的研究總論；(E)(C) 談旁觀者；(F) 談校園悲劇；(B) 談現況。<br>所以選 A。",
  "<b>解題關鍵：</b>前句開始談 crowd behavior 和 passer-by behavior；後句 Many of them have suggested... 的 them 必須有複數人物先行詞。<br>(E) 提到研究城市犯罪旁觀者不行動的 psychologists，Many of them 就回指這些心理學家。(C) 的朋友同學不是提出研究的人；(A)(D) 屬霸凌者鏈條；(F)(B) 也不能提供 them。<br>所以選 E。",
  "<b>解題關鍵：</b>前句說不只霸凌者與受害者會對暴力麻木；後句總結霸凌也影響朋友、同學與社會，因此空格要補朋友同學的反應。<br>(C) 說雙方朋友同學可能把暴力視為正常，正好完成擴大影響的邏輯。(E) 談心理學家研究，應在前一空；(A)(D) 談受害者變霸凌者；(F)(B) 主題位置不合。<br>所以選 C。",
  "<b>解題關鍵：</b>第二段比較豬與狗：豬對松露氣味敏感，卻有吃掉任何可食物的天性；受過訓練的狗會把松露交出來換麵包與摸頭。<br>(A) 原文沒說狗爪較強。<br>(B) 狗通常不吃找到的松露，符合這項直接比較。<br>(C) 沒說狗嗅覺勝過豬，反而特別強調母豬敏感。<br>(D) 興奮程度不是選狗原因。<br>所以人們偏好訓練狗，是因狗較不會吃掉找到的珍貴松露，能保留成果。",
  "<b>解題關鍵：</b>第三段直接說，要享受最佳風味，必須在松露採收後不久，吃新鮮、未烹煮的松露，因為味道會隨時間快速減弱。<br>(A) 沒說與豬肉煮食。<br>(B) bland oil 是保存方法，不是把生松露配油吃。<br>(C) 採收後立刻吃新鮮松露，完全符合原句。<br>(D) 冷藏也是保存方法，不能勝過新鮮食用。<br>所以享受松露美味的最佳方法選 C，重點是新鮮。",
  "<b>解題關鍵：</b>第二段說 mature truffles 會在地下散發強烈氣味，豬與狗因此能隔著地表嗅到並協助人類定位。<br>(A) 松露是與樹根共生的菇類，不是樹根。<br>(B) 商人也會看 truffle flies 找到，不只靠豬狗。<br>(C) 成熟時散發強烈氣味，完全符合原文。<br>(D) 同一地點後續幾年仍能採收，與選項相反。<br>所以正確敘述是 C。",
  "<b>解題關鍵：</b>第一段直接說松露價格昂貴，接著解釋果體長在地下，This is why they are difficult to find；第二段也需動物或松露蠅協助定位。<br>(A) 玻璃罐是保存法，沒說無味。<br>(B) 沒說新鮮松露像水果。<br>(C) 從古代起也作藥，不只用於烹飪。<br>(D) 難以尋找可合理推論造成稀少高價。<br>所以答案選 D。",
  "<b>解題關鍵：</b>第一段承認動物實驗仍有必要；第三、四段則提出限制數量、用人體組織或電腦模型、分享失敗結果，目的都是減少重複犧牲動物。<br>(A) 文章不只追求實驗成功。<br>(B) 沒主張全面禁用，反而說仍需繼續。<br>(C) 應投入更多努力減少實驗動物，能完整統整全文。<br>(D) 分享結果只是其中一種方法。<br>所以主旨選 C，重點是減量而非全面禁止。",
  "<b>解題關鍵：</b>第二段比較各地統計，並說 Japan and China have even less comprehensive data than America，也就是資料更不完整。<br>(A) 美國官方 110 萬沒有算常見鼠類，實際更多。<br>(B) 歐洲多數實驗動物正是鼠類。<br>(C) 文中沒有英國與中國總數比較。<br>(D) 日本每年使用量資料有限，符合。<br>所以選 D。",
  "<b>解題關鍵：</b>第三段直接列出 Alternatives to animal testing, such as using human tissue or computer models。<br>(A) 統計研究沒被列為替代方案。<br>(B) computer models 明確出現在原文。<br>(C) 動物體內植入 DNA 仍會使用動物。<br>(D) 原文說 human tissue，沒有說一定取自死亡動物。<br>因此答案是 B。",
  "<b>解題關鍵：</b>第三段說科學家常只分享成功結果；若結果不符合假設，the work never sees the light of day，意思是不見天日、未公開。<br>(A) 不向公眾揭露，完全符合。<br>(B) 沒製成教學材料。<br>(C) 不是收藏等待未來發表，而是根本不公開。<br>(D) 選項談研究主題清單，原文沒提。<br>所以失敗實驗通常不會公開。",
  "<b>解題關鍵：</b>第一段介紹圓網用途與承受力，第二段詳細說幾何構造、錨定絲、捕捉螺旋，以及兩種蛛絲如何分工，核心是圓網如何被建構並維持。<br>(A) food network 食物網不是本文的蜘蛛網。<br>(B) orb webs 的構造與材料能完整統整全文。<br>(C) 幾何研究只是一項特徵。<br>(D) 風雨挑戰只在開頭說明需求。<br>所以主旨選 B。",
  "<b>解題關鍵：</b>第一段先說蛛網主要功能是 intercept and hold flying prey；下一句 In order to do so 說為了做到「這件事」，蛛絲必須承受撞擊。<br>(A) 捕捉並留住小型飛行生物，正是 so 的指涉。<br>(B) 找材料是後文。<br>(C) 沒談觀察蜘蛛行為。<br>(D) 動物建築之美是開場描述，不是 do so 的動作。<br>所以選 A。",
  "<b>解題關鍵：</b>第二段說 whole web is...held in place by anchor threads；錨定絲把外框連到周圍植物或物體，作用就是固定支撐。<br>(A) 中心是放射線起點，不負責連到外界。<br>(B) 黏膠用來黏獵物。<br>(C) anchor threads 支撐全網，符合文字與圖示。<br>(D) capture spiral 用來捕捉獵物。<br>所以選 C。",
  "<b>解題關鍵：</b>第一段說蛛網多數情況至少要撐一天，蛛絲也必須承受大型獵物撞擊與風雨等環境力量；這是原文明說的強度要求。<br>(A) 不是所有絲都黏且有彈性；第二段明確說有兩類功能不同的蛛絲。<br>(B) 通常夠強可維持一天，符合原文的時間資訊。<br>(C) 沒有去除昆蟲體內化學物。<br>(D) 蛛絲由蜘蛛製造，不是取自稀有植物。<br>所以正確敘述是 B。",
  "<b>解題關鍵：</b>第一段先提 1150 年巴黎授予早期博士，但接著明確說今日形式的博士制度 originated at Humboldt University；這所大學在德國。<br>(A) 法國是最早授予學位，不是現代制度起源。<br>(B) 德國符合 Humboldt University。<br>(C) 加拿大、(D) 美國都是後來採用德國做法。<br>所以選 B。",
  "<b>解題關鍵：</b>第二段說日本年輕人口縮減，卻 has churned out about 46% more PhDs；more PhDs 顯示這個片語是大量產出。<br>(A) Failed「失敗」與數量增加相反。<br>(B) Warned「警告」不能接受博士作產品。<br>(C) Demanded「要求」不是學校授予學位。<br>(D) Produced「產出」最接近。<br>所以選 D。",
  "<b>解題關鍵：</b>第三段提供比較數字：畢業五年後，斯洛伐克超過 60% 博士仍是臨時合約；西班牙則超過 45%，前者比例更高。<br>(A) 奧地利是三分之一做非相關工作，不是被禁止校外工作。<br>(B) 德國逾 45% 仍臨時，並非多數立刻永久。<br>(C) 美國教授職缺少，不能推教職較容易。<br>(D) 斯洛伐克取得永久職比西班牙難，符合數字。<br>所以選 D。",
  "<b>解題關鍵：</b>全文後半用 supply far outstripped demand、教授職缺不足、許多人仍拿臨時合約或做非相關工作，末句還問讀博士是否好選擇，顯示作者擔心供過於求。<br>(A) Concerned「憂慮的」符合。<br>(B) Supportive「支持的」忽略風險。<br>(C) Indifferent「漠不關心」與大量分析不合。<br>(D) Optimistic「樂觀的」也與質疑語氣相反。<br>所以選 A。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
