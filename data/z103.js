// 103 學年度指定科目考試英文考科（選擇題 51 題）
// 題文與答案取自大學入學考試中心正式題本及正式選擇題答案。
// originalNo/section/part 保留原卷結構；正式統計由共用統計資料另行匯入。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const section = "第壹部分：選擇題";
  const partOf = no => no <= 10 ? "詞彙" : no <= 20 ? "綜合測驗" : no <= 30 ? "文意選填" : no <= 35 ? "篇章結構" : "閱讀測驗";
  const q = (no, cat, tags, lang, textType, answer, stem, options, group) => ({
    no,
    originalNo: no,
    section,
    part: partOf(no),
    cat,
    tags,
    lang,
    textType,
    ...(group ? { group } : {}),
    answer,
    stem,
    options
  });
  const wordOptions = {
    A: "replaced",
    B: "mortal",
    C: "spirit",
    D: "available",
    E: "journey",
    F: "luxurious",
    G: "collected",
    H: "purchase",
    I: "alive",
    J: "needs",
    K: "limited",
    L: "images"
  };
  const structureOptions = {
    A: "Eccentrics are also found to be healthier.",
    B: "According to a recent study in England, eccentrics are more creative.",
    C: "Or it could be our best friend’s brother who wears shorts to a formal dance.",
    D: "People may have eccentric taste in clothes, or have eccentric hobbies.",
    E: "Psychologists also find that eccentric people do not follow conventions.",
    F: "Such personal traits are found to play an important role in boosting the body’s immune system."
  };

  return {
    year: 103,
    era: "指考",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0j075814066172799113/02-103%e6%8c%87%e8%80%83%e8%8b%b1%e6%96%87%e9%81%b8%e6%93%87%e9%a1%8c%e7%ad%94%e6%a1%88%28%e5%ae%9a%e7%a8%bf%29.pdf",
      sourceSha256: "affb77f050b18db936df85027f665d1cc053d04515ee0d62a7cda081ffbd3246",
      page: 1,
      subject: "英文考科",
      method: "manual-visual-and-text"
    },
    groups: {
      G1: {
        title: "Caring for a toothbrush",
        passage: "<p>Brushing your teeth regularly will help you maintain a healthy smile. But that smile won’t last long if you don’t take proper care of your toothbrush and switch to a new one often. According to the American Dental Association (ADA), toothbrushes can harbor bacteria. These germs come from the mouth and can <b>11</b> in toothbrushes over time.</p><p>Many Americans replace their toothbrushes only once or twice a year. The ADA, however, recommends <b>12</b> a new toothbrush every three to four months. Children’s toothbrushes may need to be changed more <b>13</b>.</p><p>During those three to four months of use, there are several ways to keep a toothbrush clean. <b>14</b>, rinse your toothbrush thoroughly with tap water after use, making sure to remove any toothpaste and debris. Store your toothbrush in an upright position, and let <b>15</b> air dry. Most importantly, do not share toothbrushes.</p>"
      },
      G2: {
        title: "Chimpanzees learning to use tools",
        passage: "<p>Hiding herself among the trees near a chimpanzee habitat, Elizabeth Lonsdorf is using her camera to explore mysteries of learning. The chimpanzee she records picks up a thin flat piece of grass and then digs out tiny insects from a hole. Dinner is <b>16</b>! But how did the chimp develop this ingenious skill with tools? Do the chimp babies copy their parents in using tools? Do the mothers most skilled with tools have offspring who are also good at using tools? Here in Africa, Lonsdorf is conducting one of the world’s longest wildlife studies, trying to discover how learning is transferred <b>17</b> generations.</p><p>Lonsdorf has always been interested in animal learning and tool use, <b>18</b> the way young animals grow up and learn their way in the world. Her chimpanzee study shows a clear link between humans and the rest of the animal kingdom. The chimps make and use tools and have mother-child relationships very <b>19</b> to those of humans. Through observing chimpanzees’ learning process, researchers hope to gain insight into what the development of our earliest ancestors <b>20</b> like.</p><p>Lonsdorf hopes that by understanding the complexity of animal behavior, we can better appreciate and protect the diversity of life on this planet.</p>"
      },
      G3: {
        title: "Paper offerings in Chinese society",
        passage: "<p>The practice of burning paper money or paper model offerings at funerals in Chinese society can be traced back to the Tang dynasty (618-907 AD). Chinese people believe that when someone passes away, there is a death of the body, but the <b>21</b> continues to live in the next world. This “next world” is a mirror of the human world, where the “residents” need places to live, money to spend, daily necessities, and entertainment just like when they were <b>22</b>. Some of these necessities are buried with the deceased, while most others are “shipped” to them by burning paper models. As the ashes fly high, the offerings are <b>23</b> by the residents in the next world.</p><p>Relatives of the deceased want to see their beloved family members live comfortably in the next world, so the paper houses are big and the cars are very <b>24</b>, mostly Mercedes-Benzes. A complete package of paper offerings may include a couple of servants, cash, and credit cards so that the deceased will have all their <b>25</b> satisfied.</p><p>These traditional paper offerings were sold only at specialty stores in the past. The style and variety of the products were <b>26</b>. For example, “houses” looked all the same and were built by pasting paper around a bamboo frame, with <b>27</b> of a door, windows, and a roof printed on it. There were no trendy, modern supplies to choose from. Now, the <b>28</b> can be made on the Internet. And with the incorporation of new materials and designs, paper offerings come in many more varieties. The old one-style-fits-all houses have been <b>29</b> by buildings that are fully equipped with decorations, furniture, and household appliances. Digital cameras, iPhones, and even skin care products are also <b>30</b>. It seems that, with the help of a simple click, this old Chinese tradition has been given a face-lift.</p>"
      },
      G4: {
        title: "The benefits of eccentricity",
        passage: "<p>Eccentrics are people who have an unusual or odd personality, set of beliefs, or behavior pattern. They may or may not comprehend the standards for normal behavior in their culture. They simply don’t care about the society’s disapproval of their habits or beliefs.</p><p>Once considered socially unacceptable, eccentric people have been found to possess some positive characteristics. <b>31</b> They often have more curiosity about the world and, in many cases, are contentedly obsessed by hobbies and interests. <b>32</b> They live in a world of their own and do not worry about what others think of them. So they are usually less restricted and therefore more carefree in forming new ideas.</p><p><b>33</b> Statistics show they visit their doctors less—about once in eight to nine years, which is 20 times less than the average person. This could be partly due to their innate traits such as humor and happiness. <b>34</b> This may explain why eccentrics are, on the whole, healthier.</p><p>Psychologists therefore suggest that we pay attention to those who do not conform. It could be our aunt who has been raising pet lizards. <b>35</b> Their crazy hobby or strange sense of humor is what keeps them going. Eccentric people may seem odd, but they will likely live a happier and healthier life because they enjoy what they are doing. In fact, many of history’s most brilliant minds have displayed some unusual behaviors and habits.</p>"
      },
      G5: {
        title: "The Brooklyn Bridge",
        passage: "<p>Opened in 1883, the Brooklyn Bridge was the first long-span suspension bridge to carry motor traffic, and it quickly became the model for the great suspension bridges of the following century. Spanning New York’s East River, it provided the first traffic artery between Manhattan Island and Brooklyn. Before that, the only transportation was by ferries, which were slow and could be dangerous in winter.</p><p>The construction of a bridge over the East River had been discussed since the early 19th century, but the outbreak of the Civil War in 1861 deflected all consideration of the project. When the war ended in 1865, the bridge became an important issue once more. In 1867, the New York State legislature passed an act incorporating the New York Bridge Company for the purpose of constructing and maintaining a bridge between Manhattan Island and Brooklyn.</p><p>John Augustus Roebling was chosen to design the bridge. Born in Germany in 1806, he held radical views as a student and was listed by the German police as a dangerous liberal. He emigrated to America in 1830 to escape political discrimination.</p><p>Roebling proposed a bridge with a span of 1,500 feet (465 m), with two masonry towers in the East River serving as the main piers. The bridge that was actually built is longer—1,597 feet (486 m), the longest suspension bridge at that time.</p>"
      },
      G6: {
        title: "Social connection and heart health",
        passage: "<p>The Japanese have long puzzled public health researchers because they are such an apparent paradox: They have the world’s lowest rates of heart disease and the largest number of people that live to or beyond 100 years despite the fact that most Japanese men smoke—and smoking counts as one of the strongest risk factors for heart disease. So what’s protecting Japanese men?</p><p>Two professors at the University of California at Berkeley hoped to find out the answer. They investigated a pool of 12,000 Japanese men equally divided into three groups: One group had lived in Japan for all their lives, and the other two groups had emigrated to Hawaii or Northern California. It was found that the rate of heart disease among Japanese men increased five times in California and about half of that for those in Hawaii.</p><p>The differences could not be explained by any of the usual risk factors for heart disease, such as smoking, high blood pressure, or cholesterol counts. The change in diet, from sushi to hamburgers and fries, was also not related to the rise in heart disease. However, the kind of society they had created for themselves in their new home country was. The most traditional group of Japanese Americans, who maintained tight-knit and mutually supportive social groups, had a heart-attack rate as low as their fellow Japanese back home. But those who had adopted the more isolated Western lifestyle increased their heart-attack incidence by three to five times.</p><p>The study shows that the need to bond with a social group is so fundamental to humans that it remains the key determinant of whether we stay healthy or get ill, even whether we live or die. We need to feel part of something bigger to thrive. We need to belong, not online, but in the real world of hugs, handshakes, and pats on the back.</p>"
      },
      G7: {
        title: "Bitcoin",
        passage: "<p>Bitcoin is an experimental, decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority; that is, managing transactions and issuing money are carried out collectively through the network.</p><p>Any transaction issued with Bitcoin cannot be reversed; it can only be refunded by the person receiving the funds. That means you should do business with people and organizations you know and trust, or who have an established reputation. Bitcoin can detect typos and usually won’t let you send money to an invalid address by mistake.</p><p>All Bitcoin transactions are stored publicly and permanently on the network, which means anyone can see the balance and transactions of any Bitcoin address. However, the identity of the user behind an address remains unknown until information is revealed during a purchase or in other circumstances.</p><p>The price of a bitcoin can unpredictably increase or decrease over a short period of time due to its young economy, novel nature, and sometimes illiquid markets. Consequently, keeping your savings with Bitcoin is not recommended at this point. Bitcoin should be seen like a high risk asset, and you should never store money that you cannot afford to lose with Bitcoin. If you receive payments with Bitcoin, many service providers can convert them to your local currency.</p><p>Bitcoin is an experimental new currency that is in active development. Although it becomes less experimental as usage grows, you should keep in mind that Bitcoin is a new invention that is exploring ideas that have never been attempted before. As such, its future cannot be predicted by anyone.</p>"
      },
      G8: {
        title: "Genetically modified mosquitoes against malaria",
        passage: "<p>Scientists are trying to genetically modify the world in which we live. They are even trying to wipe out diseases via genetic modification. For example, researchers have tried to engineer mosquitoes to kill malaria parasites. The malaria parasite is carried by the female Anopheles mosquito. When transmitted to a human, the parasite travels first to the liver and then on to the bloodstream, where it reproduces and destroys red blood cells. An estimated 250 million people suffer from malaria each year, and about one million die—many of them children. There are currently no effective or approved malaria vaccines.</p><p>To “kill” malaria, scientists are genetically modifying a bacterium in mosquitoes so that it releases toxic compounds. These compounds are not harmful to humans or the mosquito itself, but they do kill off the malaria parasite, making the mosquito incapable of infecting humans with malaria.</p><p>Despite this achievement, scientists are faced with the challenge of giving the modified mosquitoes a competitive advantage so that they can eventually replace the wild population. Complete blockage of the malaria parasite is very important. If some of the parasites slip through the mechanism, then the next generation will likely become resistant to it. And if that happens, the scientists are back where they started.</p><p>Another challenge for scientists is to gain public approval for this genetic modification regarding mosquitoes and malaria control. Environmental activists have raised concerns about the release of genetically engineered organisms without any clear knowledge of their long-term effect on ecosystems and human health. There is still a long way to go before genetic modification techniques are put to use in disease control.</p>"
      }
    },
    questions: [
      q(1,"C1",["語境搭配"],"單題","詞彙題","D","When dining at a restaurant, we need to be ______ of other customers and keep our conversations at an appropriate noise level.",{A:"peculiar",B:"defensive",C:"noticeable",D:"considerate"}),
      q(2,"C1",["詞義辨析"],"單題","詞彙題","A","John shows ______ towards his classmates. He doesn’t take part in any of the class activities and doesn’t even bother talking to other students in his class.",{A:"indifference",B:"sympathy",C:"ambiguity",D:"desperation"}),
      q(3,"C1",["語境搭配"],"單題","詞彙題","C","To meet the unique needs of the elderly, the company designed a cell phone ______ for seniors, which has big buttons and large color displays.",{A:"necessarily",B:"relatively",C:"specifically",D:"voluntarily"}),
      q(4,"C1",["詞義辨析"],"單題","詞彙題","D","A well-constructed building has a better chance of ______ natural disasters such as typhoons, tornadoes, and earthquakes.",{A:"undertaking",B:"conceiving",C:"executing",D:"withstanding"}),
      q(5,"C1",["詞義辨析"],"單題","詞彙題","A","Our family doctor has repeatedly warned me that spicy food may ______ my stomach, so I’d better stay away from it.",{A:"irritate",B:"liberate",C:"kidnap",D:"override"}),
      q(6,"C1",["詞義辨析"],"單題","詞彙題","D","Because the new principal is young and inexperienced, the teachers are ______ about whether he can run the school well.",{A:"passionate",B:"impressive",C:"arrogant",D:"skeptical"}),
      q(7,"C1",["語境搭配"],"單題","詞彙題","B","Many universities offer a large number of scholarships as an ______ to attract outstanding students to enroll in their schools.",{A:"ornament",B:"incentive",C:"emphasis",D:"application"}),
      q(8,"C1",["詞義辨析"],"單題","詞彙題","C","Since Diana is such an ______ speaker, she has won several medals for her school in national speech contests.",{A:"authentic",B:"imperative",C:"eloquent",D:"optional"}),
      q(9,"C1",["語境搭配"],"單題","詞彙題","B","The candidate made energy ______ the central theme of his campaign, calling for a greater reduction in oil consumption.",{A:"evolution",B:"conservation",C:"donation",D:"opposition"}),
      q(10,"C1",["詞義辨析"],"單題","詞彙題","A","Concerned about mudslides, the local government quickly ______ the villagers from their homes before the typhoon hit the mountain area.",{A:"evacuated",B:"suffocated",C:"humiliated",D:"accommodated"}),

      q(11,"C2",["語境選詞"],"題組","綜合測驗","A","Choose the best answer for blank 11.",{A:"accumulate",B:"crumble",C:"establish",D:"radiate"},"G1"),
      q(12,"C2",["語境搭配"],"題組","綜合測驗","C","Choose the best answer for blank 12.",{A:"use",B:"to use",C:"using",D:"used"},"G1"),
      q(13,"C2",["語境選詞"],"題組","綜合測驗","B","Choose the best answer for blank 13.",{A:"essentially",B:"frequently",C:"typically",D:"objectively"},"G1"),
      q(14,"C2",["轉承語"],"題組","綜合測驗","D","Choose the best answer for blank 14.",{A:"In short",B:"Otherwise",C:"Nevertheless",D:"For example"},"G1"),
      q(15,"C2",["篇章指涉"],"題組","綜合測驗","A","Choose the best answer for blank 15.",{A:"it",B:"one",C:"the",D:"which"},"G1"),
      q(16,"C2",["語境選詞"],"題組","綜合測驗","D","Choose the best answer for blank 16.",{A:"proposed",B:"ordered",C:"digested",D:"served"},"G2"),
      q(17,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 17.",{A:"across",B:"beside",C:"upon",D:"within"},"G2"),
      q(18,"C2",["語境選詞"],"題組","綜合測驗","A","Choose the best answer for blank 18.",{A:"especially",B:"originally",C:"consequently",D:"fortunately"},"G2"),
      q(19,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 19.",{A:"casual",B:"similar",C:"direct",D:"grateful"},"G2"),
      q(20,"C2",["時態語意"],"題組","綜合測驗","C","Choose the best answer for blank 20.",{A:"is to be",B:"was to be",C:"might have been",D:"will have been"},"G2"),

      q(21,"C2",["文意選填"],"題組","文意選填","C","Choose the best answer for blank 21.",wordOptions,"G3"),
      q(22,"C2",["文意選填"],"題組","文意選填","I","Choose the best answer for blank 22.",wordOptions,"G3"),
      q(23,"C2",["文意選填"],"題組","文意選填","G","Choose the best answer for blank 23.",wordOptions,"G3"),
      q(24,"C2",["文意選填"],"題組","文意選填","F","Choose the best answer for blank 24.",wordOptions,"G3"),
      q(25,"C2",["文意選填"],"題組","文意選填","J","Choose the best answer for blank 25.",wordOptions,"G3"),
      q(26,"C2",["文意選填"],"題組","文意選填","K","Choose the best answer for blank 26.",wordOptions,"G3"),
      q(27,"C2",["文意選填"],"題組","文意選填","L","Choose the best answer for blank 27.",wordOptions,"G3"),
      q(28,"C2",["文意選填"],"題組","文意選填","H","Choose the best answer for blank 28.",wordOptions,"G3"),
      q(29,"C2",["文意選填"],"題組","文意選填","A","Choose the best answer for blank 29.",wordOptions,"G3"),
      q(30,"C2",["文意選填"],"題組","文意選填","D","Choose the best answer for blank 30.",wordOptions,"G3"),

      q(31,"C3",["篇章結構"],"題組","篇章結構","B","Choose the sentence that best fits blank 31.",structureOptions,"G4"),
      q(32,"C3",["篇章結構"],"題組","篇章結構","E","Choose the sentence that best fits blank 32.",structureOptions,"G4"),
      q(33,"C3",["篇章結構"],"題組","篇章結構","A","Choose the sentence that best fits blank 33.",structureOptions,"G4"),
      q(34,"C3",["篇章結構"],"題組","篇章結構","F","Choose the sentence that best fits blank 34.",structureOptions,"G4"),
      q(35,"C3",["篇章結構"],"題組","篇章結構","C","Choose the sentence that best fits blank 35.",structureOptions,"G4"),

      q(36,"C4",["細節檢索"],"題組","閱讀測驗","D","What was the purpose of building the Brooklyn Bridge?",{A:"To replace an old bridge.",B:"To set up a model for bridge construction.",C:"To build a suspension bridge for the Civil War.",D:"To provide faster and safer transportation than boats."},"G5"),
      q(37,"C4",["語境推義"],"題組","閱讀測驗","A","Which of the following is closest in meaning to “deflected” in the second paragraph?",{A:"Blocked.",B:"Detected.",C:"Engaged.",D:"Indicated."},"G5"),
      q(38,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is true about the Brooklyn Bridge?",{A:"It was built in 1865.",B:"It is shorter than originally planned.",C:"It was first proposed after the Civil War.",D:"It was built by the New York Bridge Company."},"G5"),
      q(39,"C4",["細節檢索"],"題組","閱讀測驗","D","According to the passage, which of the following correctly describes John Augustus Roebling?",{A:"He participated in the Civil War and was seriously wounded.",B:"He was chosen to design the bridge because of his radical views.",C:"He was the first person to propose the construction of the bridge.",D:"He moved to America because he was discriminated against in his home country."},"G5"),
      q(40,"C4",["主旨判讀"],"題組","閱讀測驗","B","What is the best title of this passage?",{A:"Heart Diseases and Their Causes",B:"The Power of Social Connection",C:"Differences in Japanese Americans",D:"The Sense of Belonging vs. Isolation"},"G6"),
      q(41,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is a finding of the two American professors’ study?",{A:"Many Japanese men that lived up to 100 years were smokers.",B:"Those who often ate hamburgers and fries were more likely to fall sick.",C:"Japanese immigrants to America usually formed a tight-knit community.",D:"Westernized social life was related to the heart-attack rate of Japanese Americans."},"G6"),
      q(42,"C4",["篇章理解"],"題組","閱讀測驗","A","Which of the following is an example of “something bigger” in the last paragraph?",{A:"A family.",B:"A stadium.",C:"The universe.",D:"The digital world."},"G6"),
      q(43,"C4",["細節檢索"],"題組","閱讀測驗","A","What is the ratio of heart disease between Japanese living in Japan and Japanese Americans in Hawaii?",{A:"1 to 2.5",B:"1 to 5",C:"3 to 5",D:"1.5 to 5"},"G6"),
      q(44,"C4",["主旨判讀"],"題組","閱讀測驗","A","What is the purpose of this article?",{A:"To introduce a new currency.",B:"To prove the value of a young economy.",C:"To explore ways to do online transactions.",D:"To explain how to build up a business network."},"G7"),
      q(45,"C4",["細節檢索"],"題組","閱讀測驗","C","Why is the value of Bitcoin not stable?",{A:"Because its use is illegal.",B:"Because it is not a valid investment.",C:"Because it is still developing.",D:"Because its circulation is limited to the youth."},"G7"),
      q(46,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is true about Bitcoin?",{A:"Bitcoin addresses are known only to their owners.",B:"Once a transaction is made, the Bitcoin cannot be refunded.",C:"Bitcoin user’s identity is always open to the general public.",D:"When a payment is received, the Bitcoin can be turned into local currency."},"G7"),
      q(47,"C4",["篇章理解"],"題組","閱讀測驗","B","What advice would the author give to those who are interested in keeping money in Bitcoin?",{A:"Better late than never.",B:"Look before you leap.",C:"Make hay while the sun shines.",D:"No pain, no gain."},"G7"),
      q(48,"C4",["主旨判讀"],"題組","閱讀測驗","D","What is the main idea of this passage?",{A:"Researchers have found an effective way to halt the spread of insect-borne diseases around the world.",B:"Many people are worried about the effects of genetically modified organisms on the environment.",C:"It takes time to gain public support for the application of genetic modification to disease control.",D:"Genetic engineering looks promising in reducing malaria, though there may be unknown consequences."},"G8"),
      q(49,"C4",["篇章結構"],"題組","閱讀測驗","B","Which of the following best shows the organization of this passage?",{A:"Introduction → Comparison → Contrast",B:"Problem → Solution → Potential difficulties",C:"Proposal → Arguments → Counter-arguments",D:"Definition → Examples → Tentative conclusions"},"G8"),
      q(50,"C4",["細節檢索"],"題組","閱讀測驗","C","According to the passage, which of the following is true about malaria parasites?",{A:"They are resistant to genetic modification and vaccines.",B:"They reproduce in the human liver and grow stronger there.",C:"They can be found in only one gender of a class of mosquitoes.",D:"They are transmitted to around one million children each year."},"G8"),
      q(51,"C4",["指涉判讀"],"題組","閱讀測驗","B","What does “that” in the third paragraph refer to?",{A:"Some malaria parasites escaping from the ecosystems.",B:"Malaria parasites becoming immune to the engineered bacterium.",C:"Modified mosquitoes becoming more competitive than the wild ones.",D:"Transmission of malaria being blocked from mosquitoes to humans."},"G8")
    ]
  };
})());

[
  "<b>解題關鍵：</b>餐廳是公共場所，後面要求控制談話音量，表示要顧慮其他顧客。<br>(A) peculiar：奇特的。<br>(B) defensive：防衛的。<br>(C) noticeable：引人注意的，反而可能太吵。<br>(D) considerate：體貼的，be considerate of others 是顧慮他人。<br>把答案放回去：用餐時要體貼其他顧客，維持適當音量。",
  "<b>解題關鍵：</b>John 不參加班級活動，甚至懶得和同學說話，這些行為顯示漠不關心。<br>(A) indifference：冷漠，show indifference toward 正確。<br>(B) sympathy：同情，和疏離行為不合。<br>(C) ambiguity：模稜兩可。<br>(D) desperation：絕望。<br>把答案放回去：John 對同學表現冷漠，完全不與大家互動。",
  "<b>解題關鍵：</b>To meet the unique needs 點出目的；大按鍵、大彩色螢幕都是「特別為長者」設計。<br>(A) necessarily：必然地。<br>(B) relatively：相對地，需要比較對象。<br>(C) specifically：專門、特別地，specifically for seniors 正確。<br>(D) voluntarily：自願地。<br>把答案放回去：公司專為長者設計這款手機。",
  "<b>解題關鍵：</b>well-constructed 表示建築堅固，因此面對颱風、龍捲風、地震時較能承受而不倒。<br>(A) undertaking：承擔工作。<br>(B) conceiving：構想、懷孕。<br>(C) executing：執行。<br>(D) withstanding：抵擋、承受，withstand disasters 正確。<br>把答案放回去：結構良好的建築較能抵擋天然災害。",
  "<b>解題關鍵：</b>醫師反覆警告辛辣食物會影響胃，所以後面才說最好遠離；空格是負面作用。<br>(A) irritate：刺激、使不適，irritate the stomach 正確。<br>(B) liberate：解放。<br>(C) kidnap：綁架。<br>(D) override：推翻、凌駕。<br>後三字雖可作動詞，受詞 the stomach 與警告語境都不合。把答案放回去：辛辣食物可能刺激胃部，因此最好少吃。",
  "<b>解題關鍵：</b>Because 後給原因：新校長年輕且沒經驗，所以老師不確定他能否把學校辦好。<br>(A) passionate：熱情的。<br>(B) impressive：令人印象深刻的。<br>(C) arrogant：傲慢的，不能接 about whether 表懷疑。<br>(D) skeptical：懷疑的，be skeptical about whether 正確。<br>把答案放回去：老師對他的管理能力抱持懷疑。",
  "<b>解題關鍵：</b>獎學金的目的由 to attract 說明：鼓勵優秀學生入學，因此它是一項誘因。<br>(A) ornament：裝飾品。<br>(B) incentive：誘因，as an incentive to attract 正確。<br>(C) emphasis：強調。<br>(D) application：申請。<br>把答案放回去：大學以大量獎學金作為吸引優秀學生的誘因。",
  "<b>解題關鍵：</b>Since 引出結果：Diana 在全國演講賽多次得牌，可反推她說話流暢、有說服力。<br>(A) authentic：真實的。<br>(B) imperative：必要的、命令式的。<br>(C) eloquent：口才流利的，能形容 speaker。<br>(D) optional：可選擇的。<br>把答案放回去：Diana 口才出眾，因此常在演講比賽獲獎。",
  "<b>解題關鍵：</b>calling for a greater reduction in oil consumption 是要求減少石油使用，核心概念是節約能源。<br>(A) evolution：演化。<br>(B) conservation：保存、節約，energy conservation 是節約能源。<br>(C) donation：捐贈。<br>(D) opposition：反對。<br>把答案放回去：候選人把能源節約列為競選主題。",
  "<b>解題關鍵：</b>政府擔心土石流，且動作發生在颱風抵達前，所以是先把居民移到安全處。<br>(A) evacuated：疏散，evacuate people from homes 正確。<br>(B) suffocated：使窒息。<br>(C) humiliated：羞辱。<br>(D) accommodated：提供住宿，沒有表達撤離危險區。<br>把答案放回去：政府在颱風前迅速疏散村民。",
  "<b>解題關鍵：</b>細菌來自口腔，over time 表示隨時間在牙刷中逐漸增加；can 後用原形動詞。<br>(A) accumulate：累積，符合 germs 變多。<br>(B) crumble：碎裂，主詞細菌不會碎掉。<br>(C) establish：建立，後面通常要有受詞。<br>(D) radiate：放射，不是細菌數量增加。<br>把答案放回去：口腔細菌會慢慢累積在牙刷上。",
  "<b>解題關鍵：</b>recommend 表「建議」時可接 V-ing，表示建議做某事；空格後有 a new toothbrush 作受詞。<br>(A) use 原形不能直接跟 recommend。<br>(B) to use 通常不用於 recommend 的此句型。<br>(C) using：recommend using 正確。<br>(D) used 過去分詞會變被動片段。<br>把答案放回去：牙醫協會建議每三至四個月換新牙刷。",
  "<b>解題關鍵：</b>前句說成人每三至四個月更換；Children’s toothbrushes may need to be changed more... 表示兒童牙刷可能要更常換。<br>(A) essentially：本質上。<br>(B) frequently：頻繁地，more frequently 正確。<br>(C) typically：通常地，不能形成更常更換的頻率比較。<br>(D) objectively：客觀地。<br>完整語意：兒童牙刷可能需要更頻繁更換。",
  "<b>解題關鍵：</b>前句說有 several ways 保持牙刷清潔，後面「徹底沖洗」是第一個具體方法，所以要用舉例語。<br>(A) In short：總之，應放總結。<br>(B) Otherwise：否則，需有不做某事的後果。<br>(C) Nevertheless：然而，沒有轉折。<br>(D) For example：例如，引出具體作法。<br>把答案放回去：例如，每次使用後要以自來水沖乾淨。",
  "<b>解題關鍵：</b>let 後要接「受詞＋原形動詞」；需要一個代名詞指前句單數 toothbrush。<br>(A) it：它，let it air dry 正確。<br>(B) one 表同類另一支牙刷，不是已提到的那支。<br>(C) the 只是冠詞，後面缺名詞。<br>(D) which 會引導子句，不能直接作 let 的受詞結構。<br>完整語意：把牙刷直立存放，讓它自然風乾。",
  "<b>解題關鍵：</b>黑猩猩用草片挖出小蟲作食物，所以 Dinner is... 是「晚餐準備好了」的固定口語。<br>(A) proposed：被提議。<br>(B) ordered：被點餐。<br>(C) digested：被消化，尚未吃下。<br>(D) served：端上、備妥，Dinner is served 正確。<br>把答案放回去：牠挖出昆蟲，晚餐就準備好了。",
  "<b>解題關鍵：</b>研究問題是幼猩猩是否模仿父母，亦即學習如何從上一代傳到下一代；固定說法 across generations。<br>(A) across：跨越，正確。<br>(B) beside：在旁邊，表位置。<br>(C) upon：在……之上，方向不合。<br>(D) within：在同一世代內，範圍太窄。<br>把答案放回去：她研究學習如何跨越不同世代傳遞。",
  "<b>解題關鍵：</b>前面概括她對 animal learning and tool use 有興趣，後面更具體聚焦幼獸如何成長學習，因此是特別強調。<br>(A) especially：尤其，能從一般收窄到特定面向。<br>(B) originally：起初。<br>(C) consequently：因此，非因果。<br>(D) fortunately：幸運地，非評價結果。<br>把答案放回去：她尤其關心幼獸的成長與學習。",
  "<b>解題關鍵：</b>研究顯示黑猩猩與人類的連結；母子關係和人類的關係「相似」。空格後已有 to。<br>(A) casual：隨意的，不能表兩者比較。<br>(B) similar：相似的，similar to 是固定搭配。<br>(C) direct：直接的，不接 to 表相似。<br>(D) grateful：感激的，應形容有感受者。<br>把答案放回去：黑猩猩的母子關係與人類非常相似。",
  "<b>解題關鍵：</b>研究者觀察現代黑猩猩，是為推測很久以前人類祖先的發展「可能是什麼樣子」；這是對過去不確定情況的推測。<br>(A) is to be 談現在／未來。<br>(B) was to be 表預定。<br>(C) might have been：過去可能是，正確。<br>(D) will have been 是未來完成。<br>完整語意：研究者希望了解早期祖先的發展可能如何。",
  "<b>解題關鍵：</b>前半說身體死亡，but 後說仍在另一世界繼續生活，因此不是身體而是靈魂延續。空格需名詞作主詞。<br>(C) spirit：靈魂，符合信仰內容。<br>(B) mortal 是凡人／會死的，與 continues to live 衝突；(I) alive 是形容詞；(E) journey 是旅程。<br>把答案放回去：人過世後，靈魂仍在另一世界生活。",
  "<b>解題關鍵：</b>另一世界像人間，居民需要住處金錢等，just like when they were... 指亡者生前還活著時。<br>(I) alive：活著的，be alive 正確。<br>(B) mortal 雖指凡人，但不能表「生前狀態」；(C) spirit 是名詞；(E) journey 也不合 be 動詞後。<br>完整語意：他們需要和活著時相同的生活用品。",
  "<b>解題關鍵：</b>紙紮焚燒後灰燼飛起，傳統信仰認為供品會被另一世界居民「收到」；are 後需過去分詞形成被動。<br>(G) collected：被收取，符合供品寄送比喻。<br>(A) replaced：被取代，沒有替代關係；(D) available 是可取得；(H) purchase 是購買名詞／動詞，結構不合。<br>完整語意：焚燒後，供品由另一世界居民收取。",
  "<b>解題關鍵：</b>親人希望亡者過得 comfortably，紙屋很大，紙車多是 Mercedes-Benz，表示車子豪華。空格修飾 cars。<br>(F) luxurious：豪華的，符合賓士例子。<br>(D) available：可取得的，不解釋品牌；(K) limited：有限的，和大房豪車意象相反；(B) mortal 不形容車。<br>把答案放回去：紙車做得很豪華，多半是賓士。",
  "<b>解題關鍵：</b>一套紙紮包含僕人、現金、信用卡，目的是讓亡者各種生活需求都獲滿足；all their 後需複數名詞。<br>(J) needs：需求，have all needs satisfied 正確。<br>(L) images 雖為複數，卻不能由現金僕人滿足；(H) purchase 是單數；(E) journey 不是多種需求。<br>完整語意：這些供品讓亡者所有需求都能被滿足。",
  "<b>解題關鍵：</b>過去只能在 specialty stores 買，後面又說樣式都一樣、沒有現代用品可選，證明種類受到限制。<br>(K) limited：有限的，修飾 style and variety。<br>(D) available 是可取得，與「種類」搭配不自然；(F) luxurious 和後文豪華車不同；(L) images 是名詞。<br>完整語意：過去紙紮樣式與種類都很有限。",
  "<b>解題關鍵：</b>紙屋以紙糊竹架，門、窗、屋頂不是實體，而是 printed on it，空格需複數名詞。<br>(L) images：圖像，images of a door...正確。<br>(G) collected 是過去分詞；(J) needs 雖是複數名詞，但「門窗屋頂的需求」不通；(D) available 是形容詞。<br>完整語意：紙上印著門、窗與屋頂的圖像。",
  "<b>解題關鍵：</b>Now 與 in the past 對比，現在 can be made on the Internet；能在網路上完成的是「購買」。<br>(H) purchase：購買，the purchase can be made 正確。<br>(E) journey 是旅程；(C) spirit 是靈魂；(G) collected 是動詞形式，均無法表網購行為。<br>把答案放回去：現在人們可以在網路上購買紙紮。",
  "<b>解題關鍵：</b>old one-style-fits-all houses 與後面的 fully equipped buildings 對比；have been...by 要表示舊款被新款取代。<br>(A) replaced：取代，be replaced by 正確。<br>(G) collected by 是被收集，非款式更新；(D) available by 搭配錯；(K) limited by 會變受到限制。<br>完整語意：單一舊式紙屋已被設備齊全的新式建築取代。",
  "<b>解題關鍵：</b>前面說產品種類變多，接著列數位相機、iPhone、保養品，表示這些現代紙紮也「買得到」。<br>(D) available：可取得的，be available 正確。<br>(F) luxurious 不能同時說明所有用品；(K) limited 和種類增加相反；(I) alive 只形容生物。<br>完整語意：各種現代用品的紙紮版本如今也能取得。",
  "<b>解題關鍵：</b>空格前說怪人具有正面特質，後句談好奇、沉迷興趣，皆是創意來源，所以此處要先提出「更有創造力」。<br>(B) 英國研究發現怪人更有創造力，後文接證據。<br>(E) 不循慣例應接活在自己世界；(A)(F) 談健康，屬後段；(C)(D) 是例子，應接末段。答案 B。",
  "<b>解題關鍵：</b>空格後說他們活在自己的世界、不在意別人看法，因此前句應概括「不遵循社會慣例」。<br>(E) Psychologists also find... 承接前項研究，內容直接被後句解釋。<br>(B) 創意已在前段；(A)(F) 健康段尚未開始；(C)(D) 是具體怪異例子，應在結尾。答案 E。",
  "<b>解題關鍵：</b>空格後立刻用看醫生頻率少二十倍，證明怪人的健康狀況較好，所以空格應是健康段主旨。<br>(A) 怪人也被發現更健康，最能統領後文。<br>(F) Such traits 需要前句先列 traits；(B)(E) 談創意與不從眾；(C)(D) 是人物行為例子。答案 A。",
  "<b>解題關鍵：</b>前句列 innate traits such as humor and happiness；空格的 Such personal traits 必須回指這些特質，再說它們增強免疫。<br>(F) 指涉與因果完整，後句 This may explain why healthier 又承接免疫提升。<br>(A) 健康總句已在前；(B)(E) 主題不合；(C)(D) 無法接 This。答案 F。",
  "<b>解題關鍵：</b>末段叫讀者注意不從眾者，先舉養蜥蜴的阿姨，空格需以 Or 再舉另一例。<br>(C) 穿短褲參加正式舞會的朋友哥哥，是另一個怪異行為例子。<br>(D) 只概括服裝嗜好，無法和 our aunt 的人物句型並列得如此自然；其餘選項談研究或健康。答案 C。",
  "<b>解題關鍵：</b>第一段指出建橋前只能搭 ferries，而且渡輪 slow、冬季 dangerous；橋提供第一條曼哈頓與布魯克林交通動脈。<br>(A) 未提舊橋。<br>(B) 成為模型是後來結果，不是原始目的。<br>(C) 內戰反而中斷計畫。<br>(D) 比渡輪更快更安全，直接回應建橋前的交通問題。目的題要區分「建造原因」與「後來影響」，答案 D。",
  "<b>解題關鍵：</b>第二段句型 the outbreak of Civil War deflected all consideration，接著說戰後議題才重新重要，表示內戰使討論停下。<br>(A) Blocked：阻擋，最接近。<br>(B) Detected：偵測。<br>(C) Engaged：使參與。<br>(D) Indicated：指出。<br>用「戰後才恢復」反推 deflected 是阻礙，答案 A。",
  "<b>解題關鍵：</b>1867 年州議會法案成立 New York Bridge Company，明寫目的為 constructing and maintaining a bridge。<br>(A) 1883 開放，非 1865 建成。<br>(B) 實際橋長 1,597 呎，比原計畫 1,500 呎長。<br>(C) 19 世紀初已討論，早於內戰。<br>(D) 公司為建橋而成立，正確。答案 D。",
  "<b>解題關鍵：</b>Roebling 生平段說他因 radical views 被德國警方列為危險自由派，1830 年 emigrated to America to escape political discrimination。<br>(A) 文中沒有他參戰受傷。<br>(B) 激進觀點不是獲選設計原因。<br>(C) 建橋討論早已存在，未說他第一個提出。<br>(D) 為逃離祖國政治歧視而移民，符合。答案 D。",
  "<b>解題關鍵：</b>全文先排除抽菸、血壓、膽固醇、飲食，最後指出維持緊密互助社群者心臟病較少，孤立者較多。<br>(A) 只談疾病原因，過廣且漏掉核心答案。<br>(B) 社會連結的力量，涵蓋研究結論與健康影響。<br>(C) 差異只是研究材料，並非作者真正要說明的結論。<br>(D) 不是比較兩概念，而是強調歸屬能保護健康。標題應抓作者最後證明的核心，答案 B。",
  "<b>解題關鍵：</b>研究結果定位第二段：usual risk factors 與飲食都無法解釋差異，真正相關的是在新國家建立的社會型態。<br>(A) 原文是多數日本男性抽菸，非百歲者數據。<br>(B) 漢堡薯條與心臟病上升無關。<br>(C) 並非所有移民都形成緊密群體，不能一概而論。<br>(D) 西化、孤立生活與心臟病率提高相關，正是教授研究發現。答案 D。",
  "<b>解題關鍵：</b>末段說需要 feel part of something bigger，下一句解釋要在真實世界擁有擁抱握手等歸屬；所以是比個人更大的社會群體。<br>(A) family 家庭能提供真實互動與歸屬。<br>(B) stadium 只是建築。<br>(C) universe 太抽象。<br>(D) digital world 被 not online 明確排除。答案 A。",
  "<b>解題關鍵：</b>以日本本土心臟病率為 1；加州日裔是 five times，即 5；夏威夷是加州 about half，5 ÷ 2 = 2.5。<br>(A) 1:2.5 符合計算。<br>(B) 1:5 是日本與加州。<br>(C) 3:5 沒有此基準。<br>(D) 1.5:5 也未出現。<br>考場將「half of California’s five」轉成 2.5，答案 A。",
  "<b>解題關鍵：</b>全文依序說 Bitcoin 是什麼、如何交易、公開地址與隱私、價格風險、仍在發展，屬新貨幣介紹。<br>(A) 介紹新貨幣，涵蓋全文各段資訊。<br>(B) 作者反而提醒價值不穩，未證明經濟價值。<br>(C) 只談一種線上交易方式，不是探索多種方法。<br>(D) 沒教建立商業網路，也未提出經營步驟。目的題應選能包住功能與風險的選項，答案 A。",
  "<b>解題關鍵：</b>價格段直接列 young economy、novel nature、illiquid markets；共同點是 Bitcoin 新且仍在發展。<br>(A) 文中未說使用違法。<br>(B) high risk 不等於 invalid investment。<br>(C) 仍在發展，能概括年輕經濟與新穎性。<br>(D) 沒有限定年輕人使用。答案 C。",
  "<b>解題關鍵：</b>TRUE 題逐項核對。文章明說收到 Bitcoin 付款後，多家服務商能 convert them to local currency。<br>(A) 位址餘額與交易公開，不只擁有人知道。<br>(B) 交易不能 reversed，但收款人可以 refund，並非絕不退款。<br>(C) 使用者身分通常未知，不是永遠公開。<br>(D) 可轉成本地貨幣，符合。答案 D。",
  "<b>解題關鍵：</b>作者稱 Bitcoin 是 high risk asset，勸讀者不要存入承受不起損失的錢，態度是行動前先評估風險。<br>(A) Better late than never：遲做勝過不做，不合。<br>(B) Look before you leap：三思而後行，符合。<br>(C) 把握時機、(D) 一分耕耘一分收穫都偏鼓勵投入，與警告相反。答案 B。",
  "<b>解題關鍵：</b>主旨要兼顧成果與疑慮：改造細菌能殺瘧原蟲，但仍有抗性、改造蚊競爭力、公眾接受與未知長期影響。<br>(A) 誇大成已有效阻止全球所有蟲媒病，文章其實說仍有很長的路要走。<br>(B) 只談環保疑慮，漏掉技術成果。<br>(C) 只談爭取支持，漏掉抗性與技術競爭問題。<br>(D) 技術可望減少瘧疾，卻可能有未知後果，正反兩面都完整涵蓋。答案 D。",
  "<b>解題關鍵：</b>逐段抓功能：第一段提出瘧疾大量感染死亡且無疫苗；第二段提出基因改造細菌解法；第三、四段列抗性、競爭力與公眾疑慮。<br>(A) 無比較對照。<br>(B) Problem → Solution → Potential difficulties 完全符合全文推進。<br>(C) 不是正反雙方辯論。<br>(D) 沒有先下定義再舉例。考場可在每段旁寫「問題、解法、困難」後比對，答案 B。",
  "<b>解題關鍵：</b>第一段明說 malaria parasite is carried by the female Anopheles mosquito，female 是該種蚊子的單一性別。<br>(A) 現在無有效疫苗，不等於寄生蟲抗基改。<br>(B) 先到肝再進血液，where reproduces 指 bloodstream，不是在肝繁殖變強。<br>(C) 只在雌性瘧蚊攜帶，符合。<br>(D) 每年約一百萬人死亡，不是傳給一百萬兒童。答案 C。",
  "<b>解題關鍵：</b>代名詞回看前一句：若少數寄生蟲逃過機制，next generation will likely become resistant to it；And if that happens 指「產生抗性」發生。<br>(A) 不是逃出 ecosystems，而是逃過殺蟲機制。<br>(B) 瘧原蟲對改造細菌機制免疫，正確。<br>(C) 是科學家另一項目標。<br>(D) 阻斷傳播是成功結果，不會讓研究回原點。答案 B。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
