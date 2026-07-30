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
