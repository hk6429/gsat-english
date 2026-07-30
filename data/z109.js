// 109 學年度指定科目考試英文考科（選擇題 51 題）
// 題文與答案取自大學入學考試中心正式題本及正式選擇題答案。
// originalNo/section/part 保留原卷結構；正式統計由共用統計資料另行匯入。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const section = "第壹部分：選擇題";
  const partOf = no => no <= 10 ? "詞彙題" : no <= 20 ? "綜合測驗" : no <= 30 ? "文意選填" : no <= 35 ? "篇章結構" : "閱讀測驗";
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
    A: "keen",
    B: "breed",
    C: "release",
    D: "banned",
    E: "supportive",
    F: "imprisonment",
    G: "illness",
    H: "separated",
    I: "nickname",
    J: "effective",
    K: "pleaded",
    L: "privilege"
  };
  const structureOptions = {
    A: "Gladiators were recruited from different sources.",
    B: "The origins of gladiators were obscure and mysterious.",
    C: "Recent research findings suggest that this name was likely literal.",
    D: "There is evidence to suggest that females also participated in gladiator contests.",
    E: "Gladiators fought for the entertainment of Rome’s rich and mighty, as well as for the public.",
    F: "Also, there was little sign of meat or dairy products in the diet of almost all of these professional fighters."
  };

  return {
    year: 109,
    era: "指考",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0k220529276718137468/02-109%e6%8c%87%e8%80%83%e8%8b%b1%e6%96%87%e9%81%b8%e6%93%87%e9%a1%8c%e7%ad%94%e6%a1%88.pdf",
      sourceSha256: "01d2b3ebbe74cbb12ac1d8850937f85e922dc861fcbc81ecac3df34d9d956bd6",
      page: 1,
      subject: "英文考科",
      method: "manual-visual-and-text"
    },
    groups: {
      G1: {
        title: "Taiwan’s Consumer Protection Committee",
        passage: "<p>The Consumer Protection Act in Taiwan was enacted on January 11, 1994. The Act demonstrated the government’s efforts to protect consumers’ rights and interests. The Consumer Protection Commission, the current Consumer Protection Committee, <b>11</b> the supervisor and coordinator for the various consumer protection organizations that put this law into practice. In order to improve the well-being of consumers in Taiwan, the Committee advocates fair trade and <b>12</b> pricing for goods and services. The Committee also organizes educational programs to raise consumer awareness, and is active in assisting consumers involved in <b>13</b> with businesses or manufacturers.</p><p>Since its establishment, the Consumer Protection Committee has taken measures that emphasize product safety and sanitation. These measures also ensure that all labels and advertisements <b>14</b> to regulations. In addition, the Committee collaborates with various international consumer protection organizations to respond to problems involving cross-border trade and business. <b>15</b> its regulatory power and administrative resources, the Committee plays a crucial role in protecting consumers in Taiwan.</p>"
      },
      G2: {
        title: "Fleming’s accidental discovery of penicillin",
        passage: "<p>Scientific discovery can take various forms. One of them is “serendipity,” the luck of finding valuable things unintentionally. Serendipity was at work when Alexander Fleming discovered penicillin, the antibiotic miracle.</p><p>Fleming had long been known for having an untidy laboratory. One morning in 1928, this <b>16</b> proved very fortunate. It was his first day coming back to work after a long vacation. Before the vacation, he <b>17</b> in the sink a number of petri dishes in which he had been growing bacteria. While he was sorting through the long <b>18</b> dishes of germs that morning, he observed that some of the dishes were contaminated with a fungus, which had ruined his experiment. He was about to <b>19</b> the dishes, but he noticed that in one dish, the bacteria had failed to grow in the area around the fungus. This accidental finding gave rise to subsequent research that led to the discovery of penicillin—a drug that has since saved millions of lives.</p><p>Chance <b>20</b>, however, may not be enough to make key discoveries like this. The scientist must have a prepared and open mind to detect the importance of the unforeseen incident and to use it constructively.</p>"
      },
      G3: {
        title: "Robert Stroud, the Birdman of Alcatraz",
        passage: "<p>Robert Stroud (1890－1963) was an American prisoner who reared and sold birds and became an ornithologist while in prison. He became known as the “Birdman of Alcatraz.” Despite this <b>21</b>, he actually kept birds only at Leavenworth Prison, before he was transferred to Alcatraz.</p><p>Stroud is one of the most notorious criminals in American history. He was convicted of first-degree murder and sentenced to death by hanging in 1916. His mother desperately <b>22</b> for his life. Finally, in 1920, President Woodrow Wilson changed his death sentence to life <b>23</b> without parole. But because of Stroud’s unpredictable and violent outbursts, the warden directed that Stroud be placed in a <b>24</b> unit to live out his sentence in total isolation.</p><p>While at Leavenworth (1912－1942), Stroud developed a <b>25</b> interest in birds after finding an injured sparrow in the prison yard. He was given a special right to <b>26</b> birds and maintain a lab inside his two prison cells. It was felt that this activity would allow for productive use of his time. As a result of this <b>27</b>, Stroud was able to author two books on canaries and their diseases. He had raised nearly 300 birds in his cells, carefully studying their habits and physiology. He even developed and marketed medicines for various kinds of bird <b>28</b>. Although it is widely debated whether the remedies he developed were <b>29</b>, Stroud was able to make scientific observations that would later benefit research on the canary species.</p><p>In 1942, Stroud was transferred to Alcatraz. He spent the next seventeen years there, but was not allowed to keep pets. While there, he wrote two more manuscripts, but these were never published because it was <b>30</b> by the prison authorities. In 1963, he died in a medical center in Missouri.</p>"
      },
      G4: {
        title: "Roman gladiators",
        passage: "<p>Gladiators were combatants who fought against criminals, wild animals, and each other during the time of the Roman Empire. They were armed with deadly weapons and in most cases fought till either one of them accepted defeat or was killed. <b>31</b> Roman people enjoyed the sight of blood and violent death. They crowded into the arenas to watch gladiator games, just like we watch football, baseball, and tennis matches today.</p><p><b>32</b> Some were slaves bought from different lands under Roman control, and some were prisoners of war. Most of the others were volunteers, a group which once accounted for half of all gladiators. The majority of the gladiators were Thracians, Gauls, and Africans. These combatants were generally skilled fighters and were paid for their services. <b>33</b> All of the fighters, both male and female, were well looked after by their owners and rewarded after winning fights.</p><p>Roman historians sometimes called gladiators hordearii, a Latin term which means “barley eaters” in English. <b>34</b> Chemical analyses of the bones found in a gladiator graveyard indicated that the typical food eaten by gladiators was wheat, barley, and beans. <b>35</b> In addition to a plant-heavy diet, gladiators drank plant ashes to fortify the body after physical exertion and to promote better bone healing. The diet that gladiators followed may be unconventional by modern athletic standards, but in the days of the Romans, this was the diet of heroes.</p>"
      },
      G5: {
        title: "Modern wastewater treatment",
        passage: "<p>Early civilizations often built drainage systems in urban areas to handle rainwater that ran down the street during a storm. The Romans constructed elaborate systems that also drained wastewater from the public baths. However, as the population of the cities grew, the old drainage systems became overloaded. During the Industrial Revolution, manufacturing waste was added to sewage, which increased the need for more efficient sewage treatment. In the mid-19th century, the first steps were taken to treat wastewater.</p><p>Sewage or wastewater treatment in modern times is the process of removing harmful physical, chemical, and biological elements from wastewater and house sewage. The whole process starts with screening out large objects such as paper and wood, and removing heavy materials like dirt. The screened wastewater is then ready to go through a series of concrete tanks for further treatment. In the second step, the sewage passes into the primary tanks. Here, human waste, called sludge, settles to the bottom while oils and grease float to the top, where they are collected. At the same time, organic matter like eggshells or coffee grounds in the sewage is broken down into smaller substances. The remaining sewage then enters the secondary tanks for the third stage of treatment. The solids that were not treated in the primary tanks are removed here through decomposition, which digests the material. Then, the liquid sewage is filtered through sand. This filtering process gets rid of almost all bacteria, as well as other solid particles that remain in the water. Finally, the wastewater flows into the last tanks, where the chemical chlorine is added to kill the remaining bacteria. After the bacteria are destroyed, the chlorine is eliminated from the water, and the treated clean water is discharged into a river or the ocean.</p>"
      },
      G6: {
        title: "Persistent pollutants in the Mariana Trench",
        passage: "<p>The planet’s deepest point is in the Pacific Ocean’s Mariana Trench, which lies miles below the sea surface. According to a new study published in <i>Nature Ecology & Evolution</i>, even in this remote locale, creatures cannot escape pollution.</p><p>A team of researchers recently sent a remotely operated vehicle into the depths of the Mariana Trench. They found that extraordinarily high levels of forbidden industrial chemicals are contaminating marine life more than 7 miles deep in the trench. The small hard-shelled marine life that the robotic submarine brought to the surface was polluted with toxic chemicals, with toxin levels 50 times greater than those of the most heavily polluted rivers in the world.</p><p>These pollution levels were not the only alarming aspect of the discovery. The types of compounds found were all considered “persistent organic pollutants” (POPs), meaning they stick around in the environment for a very long time. Two of the most prevalent types are PCBs and PBDEs. PCBs were once used in many industrial applications, but were outlawed in the United States in the 1970s after being linked to cancer. Similarly, PBDEs were used in a wide range of products—from electronics to couch cushions. Neither chemical breaks down in the environment.</p><p>These compounds stick to the surface of materials like plastic. Many creatures mistakenly eat this colorful but toxic material, causing the POPs to build up in their bodies, lurking in their fat tissues. When these sea creatures die, their POP-riddled bodies sink to the ocean floor, where deep-sea marine life eat their remains. POPs are therefore transferred to other creatures along the food chain.</p><p>The Mariana Trench is many miles away from any industrial source. This suggests that these pollutants travel over long distances despite having been prohibited worldwide decades ago.</p>"
      },
      G7: {
        title: "The New Zealand haka",
        passage: "<p>The All Blacks, New Zealand’s national rugby team, is widely credited for bringing the “haka” to the world stage. Immediately before kick-off, the whole team will issue a warlike chant, stamping their feet, slapping their thighs, rolling their eyes, flicking their tongues, and making aggressive gestures in unison. This performance before each match, which is intended to heighten their morale and intimidate opponents, is a sight to behold. No other international sporting team possesses a pre-match ritual as powerful as the famed All Blacks haka.</p><p>What does “haka” mean? Haka is often thought of as a broad term for Māori war dances traditionally used to intimidate the enemy and prepare the warriors for battle. Most people believe it was performed either on the battlefield prior to engaging the enemy, or as the warriors were leaving their own village en route to a battle. But in the language of Māori, the word haka simply means a dance. The dance is accompanied by a chant that expresses emotions or tells ancient stories. While many haka should be performed by males, there are some haka that can be performed by anyone, male or female. There are even some women-only haka.</p><p>Thanks to the All Blacks, two of the haka have become widely renowned: Ka Mate and Kapa o Pango. The former was composed by a Māori chief in the early 1800s about how he outsmarted his enemies. It was first performed by the All Blacks in 1906. The latter was written specifically for the team in 2005. They are now performed interchangeably by the All Blacks.</p><p>Today, different varieties of haka are performed on various ceremonial occasions—from receiving distinguished guests to birthdays, weddings, or the funerals of chiefs and people of high status. Though the practice had traditionally been limited to Māori communities, it has now spread far beyond that. Māori and New Zealanders of European heritage alike view doing the haka with a sense of pride, both on the rugby field and outside it. The haka has become the most recognizable symbol of New Zealanders as a people.</p>"
      },
      G8: {
        title: "Assessment under the Every Student Succeeds Act",
        passage: "<p>In 2015, President Obama of the USA signed the Every Student Succeeds Act (ESSA), replacing the Bush-era No Child Left Behind (NCLB) that had been in effect since 2001. This new Act provides states with more decision-making power regarding curriculum, instruction, and assessment. Below are some big-picture ideas influencing many states as they approach the assessment task.</p><p>One important idea is flexibility. For years, states have used standardized K-12 assessments, similar to the SAT and ACT for college application, to measure student achievement. They are easy to use, but they fail to give a complete picture of how a student is progressing. Thus, states are rethinking one-size-fits-all standardized assessments and are instead considering personalized, student-centered assessments in schools. Obviously, the task is difficult and time-consuming. Fortunately, modern technology can help solve this dilemma. For instance, computer adaptive assessments can automatically adjust questions based on a student’s performances on the previous questions. This mechanism prevents the computer from giving questions that are obviously too easy or too difficult for the student. It thus allows teachers to quickly assess a student’s level of understanding and provide instant feedback to help in the learning process.</p><p>Another idea is multi-subject testing. Several states have started to incorporate subjects beyond the traditional math and reading items in their K-12 assessments. All 50 states include tests on science at least twice prior to senior high school, and some are now starting to include social studies, government, or economics. Some states are also moving toward assessing multiple subjects on one test, for example, reading and social studies.</p><p>A third idea is the emphasis on students’ learning process. In pursuit of a student-centered approach, many states are putting more emphasis on assessments throughout the learning process rather than on traditional end-of-year summative tests. Teachers are encouraged to accumulate data at different points in their students’ learning process. These data together present a more complete picture of a student’s learning.</p><p>The last idea regards the purpose of assessment. Assessment should be used to inform both teachers’ instruction and students’ learning. Teachers can modify their teaching based on students’ performance on tests; students can identify their own problems and make plans for improvement.</p>"
      }
    },
    questions: [
      q(1,"C1",["語境搭配"],"單題","詞彙題","C","When John proposes an idea, people in his office always lend their support. He feels lucky to have ______ like them.",{A:"villains",B:"executives",C:"colleagues",D:"intruders"}),
      q(2,"C1",["詞義辨析"],"單題","詞彙題","A","As last year’s MVP (Most Valuable Player), Joan is ______ to the basketball team. No other player can replace her.",{A:"indispensable",B:"comprehensible",C:"affordable",D:"permissible"}),
      q(3,"C1",["語境搭配"],"單題","詞彙題","B","The researcher warned that the results of the study needed to be interpreted with ______ because the sample size was not big enough to make firm conclusions.",{A:"metaphor",B:"caution",C:"enthusiasm",D:"impulse"}),
      q(4,"C1",["詞義辨析"],"單題","詞彙題","C","Although the small group of soldiers was greatly ______ by their enemy, they fought with great courage and finally won the battle.",{A:"initiated",B:"contradicted",C:"outnumbered",D:"triggered"}),
      q(5,"C1",["語境搭配"],"單題","詞彙題","D","Mr. Wise received an award for his ______ to the needy children and the elderly in the neighborhood.",{A:"competence",B:"prospect",C:"momentum",D:"devotion"}),
      q(6,"C1",["詞義辨析"],"單題","詞彙題","A","One simple yet good way to ______ your love for your family is to express it directly in words.",{A:"manifest",B:"resemble",C:"execute",D:"instruct"}),
      q(7,"C1",["詞義辨析"],"單題","詞彙題","C","Cloning animals has been very controversial. Some people consider it a medical breakthrough, while others think it is ______ and should be prohibited.",{A:"legitimate",B:"inclusive",C:"unethical",D:"nonmilitant"}),
      q(8,"C1",["詞義辨析"],"單題","詞彙題","D","Animals that stay in groups are more likely to find food and detect danger than a ______ animal—multiple pairs of eyes are better than one.",{A:"contagious",B:"rigid",C:"distinctive",D:"solitary"}),
      q(9,"C1",["語境搭配"],"單題","詞彙題","B","On the first page of her new book, the writer ______ all the people who helped in the publication of the book.",{A:"contemplates",B:"acknowledges",C:"inquires",D:"regulates"}),
      q(10,"C1",["語境搭配"],"單題","詞彙題","B","Due to the recession, it is not easy for people to get ______ paid jobs, even if they are highly educated and well-trained in the field.",{A:"compatibly",B:"decently",C:"relevantly",D:"virtually"}),

      q(11,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 11.",{A:"serves as",B:"fights for",C:"persists in",D:"corresponds to"},"G1"),
      q(12,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 12.",{A:"prominent",B:"essential",C:"reasonable",D:"intensive"},"G1"),
      q(13,"C2",["語境搭配"],"題組","綜合測驗","D","Choose the best answer for blank 13.",{A:"references",B:"shortages",C:"purchases",D:"disputes"},"G1"),
      q(14,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 14.",{A:"conform",B:"conformed",C:"conforming",D:"to conform"},"G1"),
      q(15,"C2",["邏輯關係"],"題組","綜合測驗","B","Choose the best answer for blank 15.",{A:"From",B:"With",C:"Despite",D:"Beyond"},"G1"),
      q(16,"C2",["篇章指涉"],"題組","綜合測驗","D","Choose the best answer for blank 16.",{A:"merit",B:"opinion",C:"scandal",D:"disorder"},"G2"),
      q(17,"C2",["時態語意"],"題組","綜合測驗","B","Choose the best answer for blank 17.",{A:"would pile",B:"had piled",C:"was piling",D:"might have piled"},"G2"),
      q(18,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 18.",{A:"disabled",B:"excluded",C:"unattended",D:"misunderstood"},"G2"),
      q(19,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 19.",{A:"toss out",B:"get off",C:"catch up",D:"carry on"},"G2"),
      q(20,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 20.",{A:"alone",B:"alike",C:"above",D:"ahead"},"G2"),

      q(21,"C2",["文意選填"],"題組","文意選填","I","Choose the best answer for blank 21.",wordOptions,"G3"),
      q(22,"C2",["文意選填"],"題組","文意選填","K","Choose the best answer for blank 22.",wordOptions,"G3"),
      q(23,"C2",["文意選填"],"題組","文意選填","F","Choose the best answer for blank 23.",wordOptions,"G3"),
      q(24,"C2",["文意選填"],"題組","文意選填","H","Choose the best answer for blank 24.",wordOptions,"G3"),
      q(25,"C2",["文意選填"],"題組","文意選填","A","Choose the best answer for blank 25.",wordOptions,"G3"),
      q(26,"C2",["文意選填"],"題組","文意選填","B","Choose the best answer for blank 26.",wordOptions,"G3"),
      q(27,"C2",["文意選填"],"題組","文意選填","L","Choose the best answer for blank 27.",wordOptions,"G3"),
      q(28,"C2",["文意選填"],"題組","文意選填","G","Choose the best answer for blank 28.",wordOptions,"G3"),
      q(29,"C2",["文意選填"],"題組","文意選填","J","Choose the best answer for blank 29.",wordOptions,"G3"),
      q(30,"C2",["文意選填"],"題組","文意選填","D","Choose the best answer for blank 30.",wordOptions,"G3"),

      q(31,"C3",["篇章結構"],"題組","篇章結構","E","Choose the sentence that best fits blank 31.",structureOptions,"G4"),
      q(32,"C3",["篇章結構"],"題組","篇章結構","A","Choose the sentence that best fits blank 32.",structureOptions,"G4"),
      q(33,"C3",["篇章結構"],"題組","篇章結構","D","Choose the sentence that best fits blank 33.",structureOptions,"G4"),
      q(34,"C3",["篇章結構"],"題組","篇章結構","C","Choose the sentence that best fits blank 34.",structureOptions,"G4"),
      q(35,"C3",["篇章結構"],"題組","篇章結構","F","Choose the sentence that best fits blank 35.",structureOptions,"G4"),

      q(36,"C4",["主旨判讀"],"題組","閱讀測驗","B","What is the passage mainly about?",{A:"The elements of sewage.",B:"The treatment of wastewater.",C:"The history of draining systems.",D:"The ways to control manufacturing waste."},"G5"),
      q(37,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is NOT a reason for developing more effective systems to deal with wastewater?",{A:"Population growth.",B:"Increasing manufacturing waste.",C:"Overloaded drainage systems.",D:"Heavy rainfall due to climate change."},"G5"),
      q(38,"C4",["細節檢索"],"題組","閱讀測驗","C","Which of the following can be removed in the primary tanks?",{A:"Wood.",B:"Heavy material.",C:"Grease.",D:"Organic matter."},"G5"),
      q(39,"C4",["細節檢索"],"題組","閱讀測驗","A","What is the main reason that liquid sewage needs to go through sand?",{A:"To eliminate bacteria.",B:"To drain water.",C:"To dissolve solid particles.",D:"To remove oil."},"G5"),
      q(40,"C4",["主旨判讀"],"題組","閱讀測驗","C","What is the passage mainly about?",{A:"The decrease of polluted creatures in the food chain.",B:"Using remote control in research on marine pollution.",C:"Pollution of the deep sea by persistent toxic chemicals.",D:"Types of chemical pollution caused by industrial applications."},"G6"),
      q(41,"C4",["語境推義"],"題組","閱讀測驗","B","Which of the following is closest in meaning to “POP-riddled” in paragraph 4?",{A:"Operated by POPs.",B:"Filled with POPs.",C:"Completed with POPs.",D:"Discarded by POPs."},"G6"),
      q(42,"C4",["細節檢索"],"題組","閱讀測驗","D","According to the passage, which of the following statements is true?",{A:"PCBs are often used in making electronic products.",B:"Chemicals washed down to the ocean stay on the surface.",C:"The deepest point of the Mariana Trench is free from pollution.",D:"A robotic vehicle was used to help study pollution in the Mariana Trench."},"G6"),
      q(43,"C4",["推論判讀"],"題組","閱讀測驗","A","Which of the following can be inferred from the passage?",{A:"Marine pollution poses a threat to human health.",B:"Strict regulations are being developed to stop ocean pollution.",C:"PCBs and PBDEs become less harmful over long periods of time.",D:"Chemical pollution is more serious in rivers than in industrial areas."},"G6"),
      q(44,"C4",["篇章理解"],"題組","閱讀測驗","D","Which of the following best describes the tone of this article?",{A:"Cynical.",B:"Humorous.",C:"Pessimistic.",D:"Respectful."},"G7"),
      q(45,"C4",["細節檢索"],"題組","閱讀測驗","C","According to the passage, for what purpose do the All Blacks perform the haka?",{A:"To anger their opponents.",B:"To gain public attention and fame.",C:"To boost their own spirits.",D:"To show respect to their ancestors."},"G7"),
      q(46,"C4",["語境推義"],"題組","閱讀測驗","B","Which of the following is closest in meaning to the word “practice” in the last paragraph?",{A:"Sport.",B:"Performance.",C:"Competition.",D:"Occupation."},"G7"),
      q(47,"C4",["細節檢索"],"題組","閱讀測驗","D","According to the passage, which of the following statements is true?",{A:"The traditional Māori haka is limited to use by male Māori warriors in battle.",B:"The original meaning of haka in Māori is a war dance accompanied by songs.",C:"The All Blacks have taken turns performing Ka Mate and Kapa o Pango since 1906.",D:"Haka are now used for important events by both Māori and non-Māori New Zealanders."},"G7"),
      q(48,"C4",["主旨判讀"],"題組","閱讀測驗","D","Which of the following is the best title for this passage?",{A:"Computers and Assessments",B:"The Four Components of ESSA",C:"Student-Centered Curriculum and Instruction",D:"From NCLB to ESSA, with a Focus on Assessment"},"G8"),
      q(49,"C4",["篇章指涉"],"題組","閱讀測驗","C","What does the word “dilemma” in paragraph 2 refer to?",{A:"The choice between SAT and ACT.",B:"The choice between NCLB and ESSA.",C:"Whether or not to use student-centered assessment.",D:"Whether or not to replace computer-based assessment."},"G8"),
      q(50,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is an emerging new subject in the ESSA assessment?",{A:"Math.",B:"Reading.",C:"Science.",D:"Economics."},"G8"),
      q(51,"C4",["篇章結構"],"題組","閱讀測驗","C","If the following sentences were to be included in the passage, which paragraph should they go to?<br><br>One good example is that many teachers today are asking students to keep a learning portfolio, which is a purposeful collection of student works at different points of time in the semester. This portfolio exhibits students’ effort, progress, and achievements in one or more areas of the course.",{A:"Paragraph 2.",B:"Paragraph 3.",C:"Paragraph 4.",D:"Paragraph 5."},"G8")
    ]
  };
})());

[
  "辦公室裡支持 John 提案的是與他共事的同事；colleagues 表示「同事」。",
  "MVP Joan 無人可取代，對球隊不可或缺；indispensable 表示「不可或缺的」。",
  "樣本數不足，研究結果需謹慎解讀；with caution 表示「審慎地」。",
  "少數士兵在人數上遠少於敵軍；outnumbered 表示「人數少於對方」。",
  "Wise 先生長期照顧弱勢兒童與長者，因其奉獻而獲獎；devotion 表示「奉獻」。",
  "直接用話語表達，是展現家人之愛的方法；manifest 表示「展現」。",
  "有人認為複製動物違反倫理，應被禁止；unethical 表示「不道德的」。",
  "群居動物與單獨動物相對；solitary 表示「獨居的、單獨的」。",
  "作者在書首頁向協助出版的人致謝；acknowledges 表示「公開致謝」。",
  "景氣衰退時，即使資格良好也難找到待遇不錯的工作；decently paid 表示「薪資優渥合理的」。",
  "消費者保護委員會擔任各保護組織的監督與協調者；serve as 表示「充當」。",
  "委員會提倡公平交易與合理定價；reasonable pricing 表示「合理定價」。",
  "協助消費者處理與企業或製造商的爭議；disputes 表示「爭端」。",
  "ensure that 後接完整子句，主詞 labels and advertisements 為複數，故用 conform to regulations。",
  "With its regulatory power and resources 表示憑藉監管權力與行政資源。",
  "Fleming 實驗室向來凌亂，這種 disorder 卻意外促成發現。",
  "培養皿是在休假前已堆在水槽裡，故用過去完成式 had piled。",
  "長時間無人照看的培養皿滋生真菌；unattended 表示「無人照管的」。",
  "他原本要把受污染的培養皿丟掉；toss out 表示「丟棄」。",
  "下文說還需具備有準備且開放的心智，表示單靠 chance alone 不足。",
  "「Birdman of Alcatraz」是 Stroud 廣為人知的綽號；nickname 表示「綽號」。",
  "母親為保住他的性命苦苦請求；plead for someone's life 表示「為某人求情」。",
  "死刑被改為不得假釋的終身監禁；life imprisonment 是固定搭配。",
  "因暴力爆發，他被安置在隔離單位獨居；separated 表示「隔離的」。",
  "發現受傷麻雀後，他對鳥產生濃厚興趣；keen interest 表示「強烈興趣」。",
  "他獲准在牢房繁殖鳥類並設實驗室；breed 表示「繁殖」。",
  "憑此特殊權利，他得以研究並出版兩本書；privilege 表示「特權」。",
  "他研發並販售治療各種鳥類疾病的藥物；illness 表示「疾病」。",
  "那些療法是否有效仍有爭議；effective 表示「有效的」。",
  "在 Alcatraz 寫的手稿未出版，是因獄方禁止；banned 表示「禁止」。",
  "前文說羅馬人喜愛血腥場面，此句說鬥士為權貴與大眾提供娛樂，銜接競技目的。",
  "後文列出奴隸、戰俘與志願者，前句應概括鬥士來自不同招募來源。",
  "後句說男女鬥士都受到照顧，因此前句需先指出有證據顯示女性也參賽。",
  "hordearii 意為「吃大麥者」，後文骨骼分析顯示常吃大麥，證實名稱可能是字面事實。",
  "前句列出小麥、大麥與豆類，接著補充幾乎沒有肉或乳製品，完整說明植物性飲食。",
  "全文依序說明現代廢水處理的篩除、沉澱、分解、過濾與消毒流程。",
  "人口增加、工業廢棄物及排水系統超載都促成改良，沒有提到氣候變遷造成豪雨。",
  "初級池讓油脂浮到上方收集；木頭與重物在進池前已篩除，有機物則被分解。",
  "液態污水經沙層過濾，是為去除幾乎所有細菌與殘餘固體。",
  "全文報導持久性有毒化學物如何污染馬里亞納海溝深海生物。",
  "POP-riddled bodies 指體內充滿持久性有機污染物，closest meaning 是 filled with POPs。",
  "研究團隊派遙控載具深入海溝並把生物帶回地表，故 D 正確。",
  "污染物沿食物鏈累積並轉移，可能進入人類食物來源，可推知海洋污染威脅人類健康。",
  "文章以理解與肯定的方式介紹毛利 haka 的傳統、演變與文化意義，語氣是尊重的。",
  "All Blacks 賽前表演 haka 是為提升自身士氣並震懾對手；boost their own spirits 符合文意。",
  "last paragraph 的 practice 指進行 haka 這項表演活動，與 performance 最接近。",
  "今日 haka 用於多種重要場合，毛利人與歐裔紐西蘭人都以表演它為榮。",
  "全文由 NCLB 轉向 ESSA，集中介紹各州評量的新方向，故 D 最完整。",
  "dilemma 指個人化、學生中心評量雖較完整，卻困難耗時，問題在是否採用此類評量。",
  "傳統評量已有數學、閱讀與科學，部分州正新增社會、政府或經濟學，故 economics 是新興科目。",
  "學習歷程檔案蒐集不同時間點的作品，正是第四段強調持續評量學習過程的例子。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
