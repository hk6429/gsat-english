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

[
  "<b>解題關鍵：</b>close to an MRT station、within walking distance to a shopping center 都在說體育場所在的地點很方便。<br>(A) vacancy：空缺、空房，不是建築所在處；(B) procedure：程序；(C) residence：住所，體育場不是住家；(D) location：地點，a convenient location 搭配正確。<br>把答案放回去：新體育場位在交通與購物都便利的地點。",
  "<b>解題關鍵：</b>年輕鋼琴家贏得音樂比賽第一名，表示她演奏得非常出色。空格修飾 well，需要副詞。<br>(A) intimately：親密地；(B) remarkably：非凡、出色地，remarkably well 最符合首獎線索；(C) potentially：可能地，只表示潛力；(D) efficiently：有效率地，重點是速度資源而非表演品質。<br>把答案放回去：她表現極為出色，贏得首獎。",
  "<b>解題關鍵：</b>這些人從東南亞搬到台灣工作或結婚，並需要適應台灣社會，表示他們是移入新國家生活的人。<br>(A) immigrants：移民、新住民，符合；(B) messengers：傳遞訊息的人；(C) possessors：擁有者；(D) agencies：機構，不是人。<br>把答案放回去：數千名東南亞新住民來台後，我們應協助他們適應社會。",
  "<b>解題關鍵：</b>經理已為錯誤決策多次道歉，但 nothing he could do 表示事情已無法補救。to 後要接原形動詞。<br>(A) resign：辭職，不能直接修正錯誤；(B) retain：保留；(C) refresh：使恢復精神、重新整理；(D) remedy：補救、改正，remedy a mistake 搭配正確。<br>把答案放回去：他已無法補救自己的錯誤。",
  "<b>解題關鍵：</b>這個地區典型冬天是 warm and short，但去年卻有暴風雪與冰凍低溫，兩者反差表示情況不尋常。<br>(A) fundamental：基本、根本的；(B) extraordinary：異常、不尋常的，符合反差；(C) statistical：統計的；(D) individual：個別的。<br>把答案放回去：對一向冬暖而短的地區而言，去年的嚴寒非常異常。",
  "<b>解題關鍵：</b>偏鄉小校預算不足，因此彼此 share teaching and library resources，共同使用教學與圖書資源。<br>(A) cooperative：合作的，能說 cooperative programs；(B) objective：客觀的／目標，沒有共享意思；(C) relative：相對的、親屬的；(D) infinitive：不定詞，是文法名詞。<br>把答案放回去：小校建立合作方案，共享有限資源。",
  "<b>解題關鍵：</b>醫師仔細研究病人的身體表現後作出 diagnosis「診斷」，所以研究的是疾病症狀。<br>(A) confessions：供詞、坦白；(B) symptoms：症狀，是診斷依據；(C) protests：抗議；(D) qualifications：資格。<br>其他字本身可用，但不能提供疾病線索。把答案放回去：醫師研究症狀後才完成診斷。",
  "<b>解題關鍵：</b>宇宙充滿奇觀，人類長久以來對地球之外的奧祕抱有強烈興趣；be fascinated by 是「被……吸引、著迷」。<br>(A) notified：被通知，後常接 of/about；(B) complicated：變複雜；(C) fascinated：著迷，符合 mystery；(D) suspended：被暫停、懸掛。<br>把答案放回去：人們一直被地球外的神祕事物深深吸引。",
  "<b>解題關鍵：</b>演說 delivered 的同一時間，電視與廣播都要播出，讓更多人即時收聽；空格表示兩種媒體「同時」。<br>(A) comparatively：比較而言；(B) temporarily：暫時地；(C) simultaneously：同時地，符合 television and radio；(D) permanently：永久地。<br>把答案放回去：總統演說將在電視與廣播同步播出。",
  "<b>解題關鍵：</b>公司為拓展海外市場，要提供 more varieties，表示產品種類要變多、變得多樣化。<br>(A) exceed：超過，需有比較對象；(B) dismiss：解散、駁回；(C) retrieve：取回；(D) diversify：使多樣化，和 more varieties 同義呼應。<br>把答案放回去：公司決定增加產品種類，提供顧客更多選擇。",
  "<b>解題關鍵：</b>後兩句說未來手機可能藏在首飾或植入身體，表示它甚至不會被人看見。may not be 後需過去分詞形成被動。<br>(A) heard：被聽見；(B) sold：被販售；(C) changed：被改變，未說完全不變；(D) seen：被看見，符合 hidden、embedded。<br>把答案放回去：未來手機可能根本看不見。",
  "<b>解題關鍵：</b>文章在預測未來手機會有 additional features，並用 new ways 描述使用方式，空格應是「新奇的新功能」。<br>(A) remote：遙遠的／遙控的，只能描述特定功能；(B) scarce：稀少的；(C) novel：新穎、新奇的，符合未來科技；(D) accidental：意外的。<br>把答案放回去：未來手機會增加許多新穎功能。",
  "<b>解題關鍵：</b>破折號補充 phone 原義是 voice，但後句卻說語音通話可能不再是主要功能；「即使仍叫電話」也會如此，表示讓步。<br>(A) As long as：只要；(B) Even if：即使，正確；(C) Just as：正如；(D) Only when：只有當……才。<br>把答案放回去：即使仍稱為電話，語音通話也可能退居次要。",
  "<b>解題關鍵：</b>後面列遙控器、鑰匙、地圖、手電筒等不同身分，手機會「充當」這些工具。<br>(A) call for：需要、要求，主詞手機不是在要求工具；(B) get over：克服；(C) relate to：和……有關，只表示關聯，不能表代替功能；(D) serve as：充當、作為，能接多項名詞。<br>把答案放回去：未來手機可充當生活中許多工具，而不只是打電話。",
  "<b>解題關鍵：</b>前文已列出未來手機的許多整合功能，最後一句用一句話總結：它會成為生活遙控器。<br>(A) In short：簡言之、總之，適合總結；(B) As yet：到目前為止；(C) By the way：順帶一提，會轉離主題；(D) On the contrary：相反地，前後沒有相反。<br>把答案放回去：總之，未來手機將控制生活各面向。",
  "<b>解題關鍵：</b>第一句說果蔬顏色鮮明，後面卻說 not...only to attract attention，顏色還有保護功能，前後需要轉折副詞。<br>(A) almost：幾乎；(B) rarely：很少；(C) however：然而，前後逗號也符合插入用法；(D) relatively：相對地。<br>把答案放回去：這些鮮豔顏色然而不只為吸引注意。",
  "<b>解題關鍵：</b>句意是某些 substances「物質」造成這些顏色，而這些物質也保護植物。<br>(A) capable of：有能力，後應接 V-ing；(B) different from：與……不同；(C) inferior to：不如；(D) responsible for：造成、對……負責，可接 these colors。<br>把答案放回去：造成植物顏色的物質會保護植物免受化學傷害。",
  "<b>解題關鍵：</b>逗號後補充說明 the sun's ultraviolet light，後面缺主詞；需用非限定關係代名詞，也就是在逗號後補充前面名詞資訊。<br>(A) which：可指物並在非限定子句中作主詞；(B) that：不能接在逗號後；(C) what：本身等於「所……的事物」，前面不能已有名詞；(D) such：不是關係詞。<br>因此選 A。",
  "<b>解題關鍵：</b>句中 intensely colored plant 和 paler one 比較，than 已出現；顏色較深者通常含「更多」保護化學物質。<br>(A) more：更多，和 than 構成比較級；(B) less：更少，與後文吃深色蔬果有益相反；(C) most、(D) least 是最高級，通常不用 than。<br>把答案放回去：顏色較深的植物含更多保護物質。",
  "<b>解題關鍵：</b>藍莓的化學物質不只保護健康，研究還說可能幫助大腦 work「運作」得更好；空格修飾 work，需要副詞。<br>(A) obviously：明顯地；(B) diligently：勤奮地，通常形容人的努力；(C) efficiently：有效率地，符合腦功能改善；(D) superficially：表面地。<br>把答案放回去：這些物質可能使大腦運作更有效率。",
  "<b>解題關鍵：</b>gateway drugs 定義為會使人進一步使用更多毒品的物質。主詞 substances 是複數，take 後要接原形動詞。<br>(A) lead：引導，lead someone to V 結構正確；(B) leads 是單數；(C) leading 是 V-ing；(D) led 是過去式／過去分詞。<br>把答案放回去：入門毒品會引導人使用更多毒品。",
  "<b>解題關鍵：</b>酒精改變情緒的效果被社會接受，所以人容易喝過量，前因導致後果。<br>(A) applies to：適用於，不能說酒精適用於過量飲酒；(B) arrives at：到達；(C) results in：導致，後接 over drinking，因果最完整；(D) plans on：計畫，酒精不是人，不能計畫事情。<br>把答案放回去：酒精改變情緒的方式常導致過量飲酒。",
  "<b>解題關鍵：</b>習慣飲酒者起初感到刺激，但經過一段時間後覺得酒精不夠，才尋求更強物質。<br>(A) in advance：事先，會變成還沒喝就覺得不足；(B) after a while：一段時間後，符合耐受逐漸形成；(C) in the least：絲毫，常搭否定句；(D) at most：至多，用來限制數量。<br>把答案放回去：過一段時間，他們可能覺得酒精刺激不足。",
  "<b>解題關鍵：</b>前句完整描述「覺得酒精不夠、尋求更強刺激」的情況，後句用空格＋a circumstance 回指這整件事。<br>(A) Since、(B) As 都是連接詞，不能直接修飾名詞；(C) All a circumstance 結構錯；(D) Such：這樣的，Such a circumstance 表「這種情況」。<br>把答案放回去：這種情況會增加青少年接觸其他毒品的可能。",
  "<b>解題關鍵：</b>後文說酒精在多數社會容易取得，也常出現在運動聚會和宴會，表示能接觸到的青少年「族群範圍」很廣。<br>(A) population：人口、族群，the population of teenagers 合理；(B) popularity：受歡迎程度；(C) pollution：污染；(D) possibility：可能性，不能說它能影響的可能性很廣。<br>因此選 A。",
  "<b>解題關鍵：</b>句型 a way to V 表示「做某事的方法」，此處是紐約提供告別 2007 年的新方式。<br>(A) bid 是原形，但 way 後通常用 to 不定詞；(B) to bid：告別，結構完整；(C) bidding 是動名詞，不能直接接在 a way 後；(D) bidden 是過去分詞。<br>把答案放回去：清潔部門提供一種向 2007 告別的新方法。",
  "<b>解題關鍵：</b>廣場放置大型碎紙機，照片和成績單可切成碎片，象徵把揮之不去的壞回憶毀掉。<br>(A) destroy：摧毀，符合機器把物品切碎；(B) maintain：維持，會把壞回憶留著，與告別相反；(C) dislike：不喜歡，只是感受而非實際處理；(D) create：創造，和去除回憶相反。<br>把答案放回去：人們可用機器摧毀不想保留的回憶。",
  "<b>解題關鍵：</b>主辦者在活動開始以前便公告照片、成績單等都能拿來粉碎；空格後接名詞 the event。<br>(A) until：直到，需表示持續；(B) prior to：在……之前，可直接接名詞；(C) above all：最重要的是；(D) beforehand：事先，是副詞，後面不能直接接受詞。<br>把答案放回去：主辦者在活動前已公告可處理的物品。",
  "<b>解題關鍵：</b>可回收桶收的是人們想告別的物品，和 regrettable fashion mistakes 並列，因此 CD 也應是令人厭煩的。<br>(A) available：可取得的；(B) amusing：有趣的，沒有丟棄理由；(C) annoying：惱人的，符合壞回憶主題；(D) artificial：人造的。<br>把答案放回去：桶子也可丟棄惱人的 CD 與後悔買下的服飾。",
  "<b>解題關鍵：</b>前文只介紹一臺 huge paper-cutting machine，這句說得獎作品要送進那臺已知機器，需用定冠詞 the。<br>(A) machine 沒冠詞，單數可數名詞不能單獨出現；(B) machines 是複數，與只有一臺不符；(C) a machine 是任一臺，沒有回指；(D) the machine 回指前述碎紙機。<br>因此選 D。",
  "<b>解題關鍵：</b>運動員比賽時除了了解策略，還必須「遵守」運動規則。空格和 understand 並列，需要原形動詞。<br>(C) obey 是遵守，可直接接 rules；(A) conform 需搭 to，不能直接接受詞；(B) prevent 是預防，意思不合；(F) techniques 是名詞。<br>因此選 C。",
  "<b>解題關鍵：</b>後面把 baseball、basketball、soccer 和 golf、tennis、bowling 的 individual sports 對比；前三種需要多人合作。<br>(H) team 可修飾 sports，表示團隊運動；(G) professional 是職業的，下一格才談層級；(E) excellent 是優秀的，不是分類方式。<br>因此選 H。",
  "<b>解題關鍵：</b>句子比較從無薪高中運動到最高層級；後者由世界最佳選手競賽並在國際電視播出，屬職業運動。<br>(G) professional 是職業的，professional sports 正確；(H) team 已用於團體分類；(E) excellent 只說優秀，不能說明有薪職業層級。<br>因此選 G。",
  "<b>解題關鍵：</b>運動員每天練技巧、改善合作，帶領他們的人是 coach or sports instructor；under the guidance of 是「在……指導下」。<br>(D) guidance 是指導，固定搭配正確；(F) techniques 是技巧，是練習內容而非帶領者作用；(A) conform 是動詞，不能放在 the 後。<br>因此選 D。",
  "<b>解題關鍵：</b>運動員看錄影，一方面檢討自己的 performances，另一方面也檢討具體動作技巧。空格和 performances 並列，需要複數名詞。<br>(F) techniques 是技巧，符合；(D) guidance 是指導，不能說自己的指導；(E) excellent 是形容詞，無法在此作名詞。<br>因此選 F。",
  "<b>解題關鍵：</b>重量訓練有兩個目的：增加肌肉，以及降低受傷機會。to 後需要原形動詞。<br>(B) prevent 是預防，prevent injury 搭配正確；(C) obey 是遵守，不能接 injury；(I) at risk 表有風險，反而與訓練目的相反。<br>因此選 B。",
  "<b>解題關鍵：</b>後句說運動員在練習與比賽時把身體推得非常徹底，因而有終結職涯的受傷風險。<br>(J) to the limit 是「到極限」，push one's body to the limit 固定搭配；(I) at risk 要和 of 搭配；(E) excellent 不能修飾 push 的方向。<br>因此選 J。",
  "<b>解題關鍵：</b>即使小傷也可能使選手面臨被替換的危險；put someone at risk of V-ing 是「使某人有……風險」。<br>(I) at risk 可接後面的 of replacement；(J) to the limit 表到極限，不能接 of；(B) prevent 會變成預防替換，結構也不完整。<br>因此選 I。",
  "<b>解題關鍵：</b>競爭激烈、工作不穩，運動員全年訓練，是為保持優良姿勢、技巧與巔峰體能。空格修飾 form。<br>(E) excellent 是優良的，符合 maintain 的正面目標；(G) professional 是職業的，但不能把「職業姿勢」和 technique 並列；(H) team 也不適合形容個人姿勢。<br>因此選 E。",
  "<b>解題關鍵：</b>運動季期間，運動員必須遵照嚴格控制的飲食。conform to 是「遵從、符合」。<br>(A) conform 可和後面的 to 組成固定搭配；(C) obey 雖也有遵守意思，但 obey 後直接接受詞，不再加 to；(B) prevent 與 (F) techniques 都不能完成句型。<br>因此選 A。",
  "<b>解題關鍵：</b>第一段先描述巴黎不能沒有咖啡館，空格後馬上回答「巴黎最古老的咖啡館是 Le Procope」，因此中間應提出歷史起點問題。<br>(A) 法國咖啡館何時開始？能由後文 1686 年回答。<br>(C) 談現代，應放歷史回顧結束後；(D) 的 These 需先有多家咖啡館；(E) 需先介紹 Le Procope。<br>因此選 A。",
  "<b>解題關鍵：</b>前句介紹 Le Procope 於 1686 年開業及創辦人；後句轉到十八世紀末巴黎已有七百家，中間可補它早期的重要地位。<br>(E) 同名主詞 Le Procope 承接，說它吸引政文菁英並影響上流社會。<br>(D) These 應接七百家咖啡館；(C) 談現代；(B) 要引出人物觀察。<br>因此選 E。",
  "<b>解題關鍵：</b>前句說十八世紀末已有約七百家咖啡館，空格後再說 1840 年代增至三千家；中間要描述這些早期咖啡館的功能。<br>(D) These 回指七百家，說它們像男性俱樂部與政治討論中心。<br>(E) 只談單一 Le Procope，應更前面；(C) 現代轉場太早；(A) 歷史起點已回答。<br>因此選 D。",
  "<b>解題關鍵：</b>前文一路談十九、二十世紀藝術家與作家，空格後說現在藝術家或許不如從前偉大，表示此處應由歷史轉到今日。<br>(C) Nowadays 明確轉場，並說咖啡館仍是觀察當代生活的窗口。<br>(B) 是接下來邀讀者停留觀察；(D) 談早期政治中心；(E) 談最古老咖啡館。<br>因此選 C。",
  "<b>解題關鍵：</b>前句說今日咖啡館仍有值得看的面孔，後文馬上列老者、橘髮女子和學童等典型人物；空格要引出這些例子。<br>(B)「多停留一下，就會看見巴黎典型人物仍活躍」能自然接列舉。<br>(C) 已用來由歷史轉現代；(A) 問起源；(D)、(E) 都屬早期歷史。<br>因此選 B。",
  "<b>解題關鍵：</b>第一段直接說 Ole Kirk Christiansen 把丹麥語 Leg 和 Godt 的前兩字母合成 Lego，兩字意思是 play well。<br>(A) 文中另提拉丁、希臘巧合，但名稱不是兩種語言組合。<br>(B) 名稱由父親 Ole 創造。<br>(C) 1934 年命名，1947 年才做塑膠玩具。<br>(D) 來自丹麥語「玩」與「好」，符合。<br>因此選 D。",
  "<b>解題關鍵：</b>第二段說 1947 年開始做塑膠玩具，但最初銷售不佳；直到 1958 年現代互鎖設計 developed and patented，才成為具創造性的積木系統。<br>(A) 1958 是互鎖積木完成並取得專利的年份，正確。<br>(B) 1947 只是材質轉塑膠，還沒成為成功系統。<br>(C) 1934 是 Lego 名稱出現。<br>(D) 1932 是開始做木玩具。<br>因此選 A；題目問積木形式，不是公司起點。",
  "<b>解題關鍵：</b>這是找正確敘述。第三段提供明確數據：Every minute 33,824 Lego bricks are made，也就是每分鐘超過三萬顆。<br>(A) 是超過四億人今年會玩，不是五十億人擁有。<br>(B) 平均每人擁有 62 顆，不是每年花 62 元。<br>(C) 是每年玩五十億小時，不是四億。<br>(D) 每分鐘產量超過三萬，符合。<br>因此選 D。",
  "<b>解題關鍵：</b>末段直接說五十年前買的積木 still compatible with current bricks，並補充 that is probably the reason the toy has never fallen out of favor。<br>(A) 舊積木仍可接新積木，符合作者提出的原因。<br>(B) 名稱沒變不是文中因果。<br>(C) 沒以安全材質解釋流行。<br>(D) 全文沒有價格資料。<br>因此選 A。",
  "<b>解題關鍵：</b>第一段作者九年級患病時不只想瘦，還要成為最瘦；第二段說她以 starving「挨餓」製造虛弱感，康復後增重 38 磅。<br>(A) 不是無法表達感情，那是父親的問題。<br>(B) 不安全感是可能的背景感受，不是此病在文中的行為特徵。<br>(C) 情緒不穩太廣，無法解釋刻意不吃。<br>(D) 使人想停止進食、靠挨餓追求極瘦的疾病，符合。<br>因此選 D；答案須抓作者最具體的拒食行為。",
  "<b>解題關鍵：</b>第二段說父親常去歐洲，離開時她悲傷空虛；她挨餓讓自己像需要照顧的孩子，並直接想 maybe Daddy would take care of me。<br>(A) 父親沒叫她照顧自己。<br>(B) 最佳大學是父親期待，但不是她以挨餓製造脆弱感的主要情感原因。<br>(C) 想得到父親關注與照顧，符合直接內心話。<br>(D) 家庭貧窮未被提及。<br>因此選 C；證據來自她對父親可能照顧自己的期待。",
  "<b>解題關鍵：</b>末段作者說自己是 valuable person who strives to achieve and accomplish，並學會肯定應先來自自己，顯示她認同自己的努力與價值。<br>(A) 沒說她控制脾氣有問題。<br>(B) 她為努力追求成就而自豪，符合。<br>(C) 童年並非一直有自信，她曾靠父親認可。<br>(D) 她說無法改變父親表達感情的能力。<br>因此選 B。",
  "<b>解題關鍵：</b>文章以 now, however, fully recovered 開始回顧：九年級厭食、父女關係、挨餓動機，最後談康復後的自我接納，屬成長反思。<br>(A) 她承認無法改變父親，也理解自己要先認可自己，沒有以責怪為目的。<br>(B) 沒有身體虐待情節。<br>(C) 反思成長中的一個階段，能涵蓋患病到康復，正確。<br>(D) 文章呈現挨餓危害，不是在教減重。<br>因此選 C。",
  "<b>解題關鍵：</b>第二段直接說殖民地成為獨立國家後，these same borderlines were often maintained，也就是歐洲人畫的線仍被保留。<br>(A) 沒有隨殖民統治結束而消失。<br>(B) 後文衝突證明族群並未都尊重這些線。<br>(C) 保留下來後成為各國邊界，符合。<br>(D) 它們是政治疆界，不是戰爭紀念碑。<br>因此選 C。",
  "<b>解題關鍵：</b>第一段說歐洲人畫線時把同一族群 split into different colonies；第二段以 Somali 人分布四國為例，第三段說因此爆發衝突。<br>(A) 多數國家反而包含多族群。<br>(B) 同一族群被分割到不同國家，符合作者提出的原因。<br>(C) 殖民入侵是歷史背景，但題目問非洲人之間衝突原因。<br>(D) 沒說非洲國家為擴領土攻打歐洲。<br>因此選 B。",
  "<b>解題關鍵：</b>主旨題要涵蓋全文：歐洲殖民者不顧族群領域畫界，把同族拆散、敵對族群放一起；獨立後沿用界線，造成多地衝突。<br>(A) 太籠統，沒有指出邊界成因。<br>(B) Africa: Borderlines Misplaced「非洲：錯置的邊界」準確統整問題。<br>(C) 殖民只是一開始背景，全文重點是遺留疆界。<br>(D) 沒談重建復原。<br>因此選 B。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
