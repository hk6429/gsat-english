// 97 學年度指定科目考試英文考科（選擇題 56 題）
// 題文與答案取自大學入學考試中心正式題本及正式選擇題參考答案。
// originalNo/section/part 保留原卷結構；正式統計由共用統計資料另行匯入。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const section = "第壹部分：選擇題";
  const partOf = no => no <= 10 ? "詞彙" : no <= 30 ? "綜合測驗" : no <= 40 ? "文意選填" : no <= 45 ? "篇章結構" : "閱讀測驗";
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
    A: "conform",
    B: "prevent",
    C: "obey",
    D: "guidance",
    E: "excellent",
    F: "techniques",
    G: "professional",
    H: "team",
    I: "at risk",
    J: "to the limit"
  };
  const structureOptions = {
    A: "When did the cafés in France start?",
    B: "Linger a bit and you will see that the Parisian stereotypes are still alive and well.",
    C: "Nowadays in Paris cafés still play the role of picture windows for observing contemporary life.",
    D: "These were like all-male clubs, with many functioning as centers of political life and discussion.",
    E: "Le Procope attracted Paris’s political and literary elite, and thus played an important part among the upper class."
  };

  return {
    year: 97,
    era: "指考",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0j198570700894848091/97%e6%8c%87%e8%80%83%e6%95%b8%e4%b9%99%e5%9c%8b%e8%8b%b1%e6%95%b8%e7%94%b2%e9%81%b8%e6%93%87%e9%a1%8c%e5%8f%83%e8%80%83%e7%ad%94%e6%a1%88.pdf",
      sourceSha256: "d77dfdbfe90d2f9a350104a18e206701a1d86216510a07599d1d511aa1a5d2d0",
      page: 3,
      subject: "英文",
      method: "manual-visual-and-text"
    },
    groups: {
      G1: {
        title: "Future phones",
        passage: "<p>The telephone is widely considered as the most rapidly evolving technological device today. Many experts in the field believe that future phones will not only look very different—they may not even be <b>11</b>. They may be hidden in jewelry or accessories, or even embedded in the body. They will undoubtedly have a lot of additional features and <b>12</b> functions, and users may interact with them in new ways, too. <b>13</b> they are still called “phones”—a word meaning “voice” in Greek—making voice calls may no longer be their primary function. With advances in contemporary design and technology, the phones may <b>14</b> remote controls, house keys, Game Boys, maps, flashlights, health monitors, recorders, handguns, and so on. <b>15</b>, they will be “the remote-control for life.”</p>"
      },
      G2: {
        title: "The protective colors of plants",
        passage: "<p>The fruits and vegetables we eat often come in distinctive colors. The rich colors, <b>16</b>, are not there only to attract attention. They perform another important function for the plants.</p><p>Research shows that the substances <b>17</b> these colors actually protect plants from chemical damage. The colors come mainly from chemicals known as antioxidants. Plants make antioxidants to protect themselves from the sun’s ultraviolet (UV) light, <b>18</b> may cause harmful elements to form within the plant cells.</p><p>When we eat colorful fruits and vegetables, the coloring chemicals protect us, too. Typically, an intensely colored plant has <b>19</b> of these protective chemicals than a paler one does. Research on how chemicals in blueberries affect brain function even suggests that these chemicals may help our own brains work more <b>20</b>. In other words, eating richly colored fruits and vegetables makes us both healthier and smarter.</p>"
      },
      G3: {
        title: "Alcohol as a gateway drug",
        passage: "<p>Recent studies have shown that alcohol is the leading gateway drug for teenagers. Gateway drugs are substances people take that <b>21</b> them to take more drugs. Alcohol works directly on the central nervous system and alters one’s moods and limits judgment. Since its way of altering moods (changing one’s state of mind) is generally expected and socially acceptable, oftentimes it <b>22</b> over drinking. Habitual drinkers may find alcohol not stimulating enough <b>23</b> and want to seek other more stimulating substances. <b>24</b> a circumstance often preconditions teenagers to the possibility of taking other drugs such as marijuana, cocaine or heroin. Another reason why alcohol is the main gateway drug is that the <b>25</b> of teenagers it can affect is very wide. It is easily accessible in most societies and common in popular events such as sports gatherings and dinner parties.</p>"
      },
      G4: {
        title: "Shredding bad memories in Times Square",
        passage: "<p>A new year means a new beginning for most of us. On December 28th last year, the New York City sanitation department offered people a new way <b>26</b> farewell to 2007. For one hour on that day, a huge paper-cutting machine was set up in Times Square so people could <b>27</b> their lingering bad memories. Everything from photos of ex-lovers to lousy report cards could be cut into small pieces, as the organizers had announced <b>28</b> the event. Recycling cans were also provided for items such as <b>29</b> CDs and regrettable fashion mistakes. Former schoolteacher Eileen Lawrence won the event’s $250 award for the most creative memory destined for <b>30</b>. She had created a painting from a photo of her ex-boyfriend, who Lawrence was happy to say goodbye to.</p>"
      },
      G5: {
        title: "The work and risks of athletes",
        passage: "<p>Athletes and sports competitors compete in organized, officiated sports events to entertain spectators. When playing a game, athletes are required to understand the strategies of their game and <b>31</b> the rules and regulations of the sport. The events in which they compete include both <b>32</b> sports, such as baseball, basketball, and soccer, and individual sports, such as golf, tennis, and bowling. The level of play varies from unpaid high school athletics to <b>33</b> sports, in which the best from around the world compete in events broadcast on international television.</p><p>Being an athlete involves more than competing in athletic events. Athletes spend many hours each day practicing skills and improving teamwork under the <b>34</b> of a coach or a sports instructor. They view videotapes not only to critique their own performances and <b>35</b> but also to learn their opponents’ tendencies and weaknesses to gain a competitive advantage. Some athletes work regularly with strength trainers to gain muscle and to <b>36</b> injury. Many athletes push their bodies <b>37</b> during both practice and play, so career-ending injury always is a risk. Even minor injuries may put a player <b>38</b> of replacement. Because competition at all levels is extremely intense and job security is always unstable, many athletes train year round to maintain <b>39</b> form and technique and peak physical condition. Athletes also must <b>40</b> to strictly controlled diets during their sports season to supplement any physical training program.</p>"
      },
      G6: {
        title: "Parisian cafés",
        passage: "<p>It is impossible to imagine Paris without its cafés. The city has some 12,000 cafés varying in size, grandeur, and significance. The cafés are like an extension of the French living room, a place to start and end the day, to gossip and debate.</p><p><b>41</b> The oldest café in Paris is Le Procope. It was opened in 1686 by Francesco Procopio dei Coltelli, the man who turned France into a coffee-drinking society. <b>42</b> By the end of the 18th century, all of Paris was intoxicated with coffee and the city supported some 700 cafés. <b>43</b> By the 1840s the number of cafés had grown to 3,000. The men who gathered in these cafés and set the theme of the times included journalists, playwrights and writers. Around the turn of the 20th century, the sidewalk cafés became the meeting halls for artists and literary figures.</p><p><b>44</b> The artists gathered at the café may not be as great as those of the past, but faces worth watching are just the same. <b>45</b> You’ll see the old men in navy berets; ultra-thin, bronzed women with hair dyed bright orange; and schoolchildren sharing an afternoon chocolate with their mothers. The café in Paris has always been a place for seeing and being seen.</p>"
      },
      G7: {
        title: "The history and popularity of Lego",
        passage: "<p>The Lego Group had a very humble beginning in the workshop of Ole Kirk Christiansen, a carpenter from Denmark. Christiansen began creating wooden toys in 1932. Two years later, he stumbled on the Lego name by putting together the first two letters of the Danish words Leg and Godt, which mean “play well.” The name could be interpreted as “I put together” in Latin; it also corresponds to the Greek verb meaning “gather” or “pick up.”</p><p>In 1947, the company expanded to making plastic toys. At first, the use of plastic for toy manufacture was not highly regarded by retailers and consumers of the time. Many of the Lego Group’s shipments were returned, following poor sales. However, Christiansen’s son, Godtfred Kirk Christiansen, saw the immense potential in Lego bricks to become a system for creative play. As the junior managing director of the Lego Group, he spent years trying to improve the “locking” ability of the bricks and made the bricks more versatile. In 1958, the modern interlocking brick design was finally developed and patented.</p><p>Today Lego is sold in more than 130 countries. Every minute 33,824 Lego bricks are made, and kids around the world spend 5 billion hours a year playing with Lego. There will be more than 400 million people playing with Lego bricks this year. On average, every person in the world owns 62 Lego bricks, and about seven Lego sets are sold every second.</p><p>This year Lego fans all over the world are celebrating the 50th anniversary of the tiny building blocks. Though already 50 years old, Lego is still the same product it was in the 1950s. Bricks bought then are still compatible with current bricks and that is probably the reason the toy has never fallen out of favor.</p>"
      },
      G8: {
        title: "Recovering from anorexia nervosa",
        passage: "<p>During my ninth-grade year, I suffered from anorexia nervosa. It was not enough to be thin. I had to be the thinnest. Now, however, fully recovered, I can reflect back and realize that my wishes were more complex than fitting into size five pants. Many of my subconscious emotions were related to my relationship with my father. As I was growing up, his work always came first. Sometimes I would not see him for up to two weeks. Not only did he devote his whole self to his work, but he expected me to do the same (“You cannot get anywhere unless you go to the best universities!”). Though, consciously, I never felt pressure to please him, I began dieting after the first time he told me I looked fat.</p><p>At the time, all I knew was that I had to be skinny—skinnier than anyone else. Every month my father went to Europe for a week or so and on the days he left, sorrow and emptiness consumed me: Daddy was leaving. Then, I turned to focus on a mysterious weakness—a helpless childlike emotion that came from starving. I liked to know that I needed to be taken care of; maybe Daddy would take care of me.</p><p>Now, two years later and thirty-eight pounds heavier, I have come to realize that I cannot alter my father’s inability to express his feelings. Instead, I must accept myself. I know that I am a valuable person who strives to achieve and accomplish. But I cannot strive solely for others. By starving, I attempted to gain pride in myself by obtaining my father’s approval or acknowledgment of my value as a person. But the primary approval must come from me, and I feel secure now that I can live with that knowledge safely locked in my mind.</p>"
      },
      G9: {
        title: "Colonial borders and African ethnic groups",
        passage: "<p>Africa is a land of many ethnic groups, but when Europeans carved Africa into colonies, they gave no consideration to the territories of African ethnic groups. Some borderlines were drawn that split same groups into different colonies. Other borders threw different groups together. Sometimes the groups thrown together were enemies.</p><p>When the colonies became independent nations, these same borderlines were often maintained. Today, the Somali people remain split among Ethiopia, Kenya, Somalia, and Djibouti. On the other hand, almost every African nation is home to more than one ethnic group. In Nigeria, for example, live the Hausa, the Fulani, the Yoruba, the Ibo, and many smaller groups.</p><p>Conflicts have arisen over the way in which ethnic groups were split apart and thrown together. For example, a war between Somalia and Ethiopia was fought because Somalis wanted all their people to be a part of one nation. A civil war in Nigeria, on the other hand, was triggered partly by conflicts between ethnic groups within that nation. Similar conflicts between ethnic groups arose in Chad, Zaire, and Burundi as well. One principal goal among African nations today, therefore, is to help make it possible for their many ethnic groups to live together in peace.</p>"
      }
    },
    questions: [
      q(1,"C1",["語境搭配"],"單題","詞彙題","D","The new stadium was built at a convenient _______, close to an MRT station and within walking distance to a popular shopping center.",{A:"vacancy",B:"procedure",C:"residence",D:"location"}),
      q(2,"C1",["詞義辨析"],"單題","詞彙題","B","The young Taiwanese pianist performed _______ well and won the first prize in the music contest.",{A:"intimately",B:"remarkably",C:"potentially",D:"efficiently"}),
      q(3,"C1",["詞義辨析"],"單題","詞彙題","A","As thousands of new _______ from Southeastern Asia have moved to Taiwan for work or marriage, we should try our best to help them adjust to our society.",{A:"immigrants",B:"messengers",C:"possessors",D:"agencies"}),
      q(4,"C1",["語境搭配"],"單題","詞彙題","D","Although the manager apologized many times for his poor decision, there was nothing he could do to ______ his mistake.",{A:"resign",B:"retain",C:"refresh",D:"remedy"}),
      q(5,"C1",["詞義辨析"],"單題","詞彙題","B","Last winter’s snowstorms and freezing temperatures were quite _______ for this region where warm and short winters are typical.",{A:"fundamental",B:"extraordinary",C:"statistical",D:"individual"}),
      q(6,"C1",["語境搭配"],"單題","詞彙題","A","To overcome budget shortages, some small schools in rural areas have set up _______ programs to share their teaching and library resources.",{A:"cooperative",B:"objective",C:"relative",D:"infinitive"}),
      q(7,"C1",["詞義辨析"],"單題","詞彙題","B","After spending much time carefully studying the patient’s _______, the doctor finally made his diagnosis.",{A:"confessions",B:"symptoms",C:"protests",D:"qualifications"}),
      q(8,"C1",["詞義辨析"],"單題","詞彙題","C","The universe is full of wonders. Throughout history, people have been ______ by the mystery of what lies beyond our planet.",{A:"notified",B:"complicated",C:"fascinated",D:"suspended"}),
      q(9,"C1",["語境搭配"],"單題","詞彙題","C","The president’s speech will be broadcast _______ on television and radio so that more people can listen to it at the time when it is delivered.",{A:"comparatively",B:"temporarily",C:"simultaneously",D:"permanently"}),
      q(10,"C1",["詞義辨析"],"單題","詞彙題","D","In order to expand its foreign market, the company decided to _______ its products and provide more varieties to the customer.",{A:"exceed",B:"dismiss",C:"retrieve",D:"diversify"}),

      q(11,"C2",["語境選詞"],"題組","綜合測驗","D","Choose the best answer for blank 11.",{A:"heard",B:"sold",C:"changed",D:"seen"},"G1"),
      q(12,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 12.",{A:"remote",B:"scarce",C:"novel",D:"accidental"},"G1"),
      q(13,"C2",["邏輯關係"],"題組","綜合測驗","B","Choose the best answer for blank 13.",{A:"As long as",B:"Even if",C:"Just as",D:"Only when"},"G1"),
      q(14,"C2",["語境搭配"],"題組","綜合測驗","D","Choose the best answer for blank 14.",{A:"call for",B:"get over",C:"relate to",D:"serve as"},"G1"),
      q(15,"C2",["轉承語"],"題組","綜合測驗","A","Choose the best answer for blank 15.",{A:"In short",B:"As yet",C:"By the way",D:"On the contrary"},"G1"),
      q(16,"C2",["轉承語"],"題組","綜合測驗","C","Choose the best answer for blank 16.",{A:"almost",B:"rarely",C:"however",D:"relatively"},"G2"),
      q(17,"C2",["語境搭配"],"題組","綜合測驗","D","Choose the best answer for blank 17.",{A:"capable of",B:"different from",C:"inferior to",D:"responsible for"},"G2"),
      q(18,"C2",["篇章指涉"],"題組","綜合測驗","A","Choose the best answer for blank 18.",{A:"which",B:"that",C:"what",D:"such"},"G2"),
      q(19,"C2",["語境選詞"],"題組","綜合測驗","A","Choose the best answer for blank 19.",{A:"more",B:"less",C:"most",D:"least"},"G2"),
      q(20,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 20.",{A:"obviously",B:"diligently",C:"efficiently",D:"superficially"},"G2"),
      q(21,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 21.",{A:"lead",B:"leads",C:"leading",D:"led"},"G3"),
      q(22,"C2",["語境搭配"],"題組","綜合測驗","C","Choose the best answer for blank 22.",{A:"applies to",B:"arrives at",C:"results in",D:"plans on"},"G3"),
      q(23,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 23.",{A:"in advance",B:"after a while",C:"in the least",D:"at most"},"G3"),
      q(24,"C2",["篇章指涉"],"題組","綜合測驗","D","Choose the best answer for blank 24.",{A:"Since",B:"As",C:"All",D:"Such"},"G3"),
      q(25,"C2",["語境選詞"],"題組","綜合測驗","A","Choose the best answer for blank 25.",{A:"population",B:"popularity",C:"pollution",D:"possibility"},"G3"),
      q(26,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 26.",{A:"bid",B:"to bid",C:"bidding",D:"bidden"},"G4"),
      q(27,"C2",["語境選詞"],"題組","綜合測驗","A","Choose the best answer for blank 27.",{A:"destroy",B:"maintain",C:"dislike",D:"create"},"G4"),
      q(28,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 28.",{A:"until",B:"prior to",C:"above all",D:"beforehand"},"G4"),
      q(29,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 29.",{A:"available",B:"amusing",C:"annoying",D:"artificial"},"G4"),
      q(30,"C2",["篇章指涉"],"題組","綜合測驗","D","Choose the best answer for blank 30.",{A:"machine",B:"machines",C:"a machine",D:"the machine"},"G4"),

      q(31,"C2",["文意選填"],"題組","文意選填","C","Choose the best answer for blank 31.",wordOptions,"G5"),
      q(32,"C2",["文意選填"],"題組","文意選填","H","Choose the best answer for blank 32.",wordOptions,"G5"),
      q(33,"C2",["文意選填"],"題組","文意選填","G","Choose the best answer for blank 33.",wordOptions,"G5"),
      q(34,"C2",["文意選填"],"題組","文意選填","D","Choose the best answer for blank 34.",wordOptions,"G5"),
      q(35,"C2",["文意選填"],"題組","文意選填","F","Choose the best answer for blank 35.",wordOptions,"G5"),
      q(36,"C2",["文意選填"],"題組","文意選填","B","Choose the best answer for blank 36.",wordOptions,"G5"),
      q(37,"C2",["文意選填"],"題組","文意選填","J","Choose the best answer for blank 37.",wordOptions,"G5"),
      q(38,"C2",["文意選填"],"題組","文意選填","I","Choose the best answer for blank 38.",wordOptions,"G5"),
      q(39,"C2",["文意選填"],"題組","文意選填","E","Choose the best answer for blank 39.",wordOptions,"G5"),
      q(40,"C2",["文意選填"],"題組","文意選填","A","Choose the best answer for blank 40.",wordOptions,"G5"),

      q(41,"C3",["篇章結構"],"題組","篇章結構","A","Choose the sentence that best fits blank 41.",structureOptions,"G6"),
      q(42,"C3",["篇章結構"],"題組","篇章結構","E","Choose the sentence that best fits blank 42.",structureOptions,"G6"),
      q(43,"C3",["篇章結構"],"題組","篇章結構","D","Choose the sentence that best fits blank 43.",structureOptions,"G6"),
      q(44,"C3",["篇章結構"],"題組","篇章結構","C","Choose the sentence that best fits blank 44.",structureOptions,"G6"),
      q(45,"C3",["篇章結構"],"題組","篇章結構","B","Choose the sentence that best fits blank 45.",structureOptions,"G6"),

      q(46,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is true about the name Lego?",{A:"It is a combination of Greek and Latin words.",B:"It was created by Ole Kirk Christiansen’s son.",C:"It was created in 1947 for naming the plastic toys.",D:"It came from Danish words meaning “play” and “well.”"},"G7"),
      q(47,"C4",["細節檢索"],"題組","閱讀測驗","A","When did the Lego brick become as a creative form of toy?",{A:"1958",B:"1947",C:"1934",D:"1932"},"G7"),
      q(48,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is true in describing the popularity of Lego?",{A:"More than 5 billion people in the world own Lego sets.",B:"Children spend an average of 62 dollars on Lego bricks each year.",C:"People in the world spend 400 million hours playing with Lego every year.",D:"The Lego Group now produces more than 30 thousand toy bricks every minute."},"G7"),
      q(49,"C4",["推論判讀"],"題組","閱讀測驗","A","What is most likely the reason why Lego still remains popular?",{A:"Old Lego bricks may still be connected to new ones.",B:"The company hasn’t changed its name since 1947.",C:"The material for the bricks has proved to be safe.",D:"The price of the toy is relatively reasonable."},"G7"),
      q(50,"C4",["語境推義"],"題組","閱讀測驗","D","What is “anorexia nervosa” as mentioned in the first paragraph?",{A:"It is an inability to express one’s feelings.",B:"It describes a situation of feeling insecure.",C:"It refers to people who are emotionally unstable.",D:"It is an illness that makes one want to stop eating."},"G8"),
      q(51,"C4",["細節檢索"],"題組","閱讀測驗","C","Why did the writer suffer from anorexia nervosa?",{A:"She was told by her father to take care of herself.",B:"She wanted to go to the best university.",C:"She wanted her father’s attention.",D:"She grew up in a poor family."},"G8"),
      q(52,"C4",["細節檢索"],"題組","閱讀測驗","B","Which of the following statements is true about the writer?",{A:"She has problems controlling her tempers.",B:"She is proud of herself for working hard to succeed.",C:"She has had great confidence in herself since childhood.",D:"She has changed her father’s way of expressing himself."},"G8"),
      q(53,"C4",["篇章理解"],"題組","閱讀測驗","C","What’s the writer’s purpose of writing this passage?",{A:"To blame her father.",B:"To report a case of child abuse.",C:"To reflect on a stage of growing up.",D:"To teach people how to lose weight."},"G8"),
      q(54,"C4",["細節檢索"],"題組","閱讀測驗","C","What happened to the territorial lines drawn in Africa by the Europeans?",{A:"They disappeared as the Europeans no longer ruled the colonies.",B:"They were respected by different ethnic groups.",C:"They became borders between countries.",D:"They became war memorials."},"G9"),
      q(55,"C4",["細節檢索"],"題組","閱讀測驗","B","What does the author think to be a reason for conflicts among the Africans?",{A:"Most ethnic groups have established their own countries.",B:"One ethnic group is broken up among different countries.",C:"Some Europeans invaded Africa to increase their colonies.",D:"African nations fought the Europeans to expand their territories."},"G9"),
      q(56,"C4",["主旨判讀"],"題組","閱讀測驗","B","What is the best title for the passage?",{A:"War and Peace in Africa",B:"Africa: Borderlines Misplaced",C:"European Colonization of Africa",D:"Africa Recovered and Reconstructed"},"G9")
    ]
  };
})());
