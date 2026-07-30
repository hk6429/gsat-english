// 84 學年度學科能力測驗英文考科（選擇題 50 題）
// 題目取自大考中心正式英文題本；答案由多科參考答案掃描 PDF 第 1 頁英文欄目視核對。
// part / section / originalNo 保留原卷結構；無正式統計資料，故不填統計欄位。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const part = "第一部分：單一選擇題";
  const sectionOf = no => no <= 10 ? "一、對話" : no <= 20 ? "二、詞彙" : no <= 40 ? "三、綜合測驗" : "四、閱讀測驗";
  const q = (no, cat, tags, lang, textType, answer, stem, options, extra = {}) => ({
    no,
    originalNo: no,
    part,
    section: sectionOf(no),
    cat,
    tags,
    lang,
    textType,
    answer,
    ...(extra.group ? { group: extra.group } : {}),
    ...(extra.multi ? { multi: true } : {}),
    stem,
    options,
    explain: extra.explain
  });

  return {
    year: 84,
    era: "學測",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0j199319368887614370/84%e5%b9%b4%e5%ad%b8%e6%b8%ac%e7%ad%94%e6%a1%88.pdf",
      sourceSha256: "58c31efb947055f546df7fe388d782cddb37b788a7b8d2cd28e1a02d2d1ec497",
      page: 1,
      subject: "英文",
      method: "manual-visual"
    },
    groups: {
      G1: {
        title: "Julia and May resume their conversation",
        passage: "<p><i>(Julia and May are sitting on the sofa talking.)</i></p><p><b>Julia:</b> Would you excuse me for a moment? My mom is on the line.<br><b>May:</b> <b>1</b>.<br><i>(twenty minutes later)</i><br><b>Julia:</b> Sorry to keep you waiting. Now, <b>2</b>.<br><b>May:</b> We were just talking about going out to a show, <b>3</b> we might have to do it some other time.</p>"
      },
      G2: {
        title: "Occupations at a party",
        passage: "<p><i>(John, Bill, and Sue are at a party.)</i></p><p><b>John:</b> Where do you work, Bill?<br><b>Bill:</b> I'm in foreign trade. <b>4</b>.<br><b>John:</b> I'm an English teacher.<br><b>Bill:</b> And you, Sue? <b>5</b>.<br><b>Sue:</b> I'm a flight attendant.<br><b>Bill:</b> Really?<br><b>John:</b> Yes, she travels all over the world.</p>"
      },
      G3: {
        title: "Leaving a telephone message",
        passage: "<p><i>(Maria and Jane are talking over the telephone.)</i></p><p><b>Maria:</b> Hello. May I speak to Eric Sung?<br><b>Jane:</b> <b>6</b>.<br><b>Maria:</b> I see. When do you expect him back?<br><b>Jane:</b> <b>7</b>.<br><b>Maria:</b> Yes. Just tell him Maria Moskovik called.<br><b>Jane:</b> I'm sorry, I didn't catch your last name.<br><b>Maria:</b> <b>8</b>.<br><b>Jane:</b> O.K. I'll give him the message.</p>"
      },
      G4: {
        title: "Lost tourists ask for help",
        passage: "<p><i>(Tom and Jack are lost on their tour in England.)</i></p><p><b>Tom:</b> Well, it looks like we're lost.<br><b>Jack:</b> <b>9</b>.<br><b>Tom:</b> Who do you ask in a strange town?<br><b>Jack:</b> <b>10</b>.<br><b>Tom:</b> Where can we find one?<br><b>Jack:</b> See, there is one over there.</p>"
      },
      G5: {
        title: "Social messages that encourage drinking",
        passage: "<p>America encourages its young people to drink. <b>21</b>, our society makes drinking a part of every celebration. Our personal celebrations, <b>22</b> weddings, promotions, graduations, and anniversaries, are <b>23</b> linked with drinking. <b>24</b> children can attend any family affair without seeing the adults enjoying their liquor. Drinking is part of our national celebrations as well. The Fourth of July means beer and New Year's Eve is an entire night dedicated to the proposition that everyone must get <b>25</b>. Secondly, the shows young people watch on television encourage them to drink. On <b>26</b> every soap opera, the characters drink casually and often. The rock videos young people watch over and over again feature alcohol, too. <b>27</b> on the videos sit in bars, nightclubs, and roadhouses. Drinking, the message goes, is cool. The strongest encouragement to drink that young people receive, <b>28</b>, comes from advertisers. Beer companies often sponsor the sports events young people watch. In addition, advertisements for liquor, on TV and in print, show situations that are <b>29</b> to the young. People hoist their glasses <b>30</b> they are sitting around ski lodges, sailing, dancing, or enjoying a football game. We may say we don't want our children to drink, but our messages say just the opposite.</p>"
      },
      G6: {
        title: "Summer attractions in Grants Pass",
        passage: "<p>Although Grants Pass, Oregon, is a fairly small town, it offers much to amuse summer visitors. Water sports are <b>31</b> the most popular tourist attraction. Visitors can go rafting down the Rogue River <b>32</b> swimming in the Applegate River. Fishing in the area is another popular activity. Lots of people also go hunting for wild berries that grow along the roadsides. <b>33</b>, there are lovely, clean campgrounds where campers can park their vehicles. <b>34</b> those who prefer to stay in town, Grants Pass offers several nice hotels. In town, tourists can browse through <b>35</b> number of interesting shops, such as antique stores and the shop that sells items <b>36</b> from Oregon's beautiful myrtlewood. Another fun <b>37</b> is shopping at the open market where local folks sell produce grown in their gardens. And <b>38</b>, Grants Pass has a lot of places to eat, ranging from a low-calorie dessert place to lovely restaurants, some of which offer good food and gorgeous views.</p><p><b>39</b> you can see, Grants Pass offers a lot to do in the summer. <b>40</b> you want to give your family a nice, wholesome vacation, try visiting this charming town.</p>"
      },
      G7: {
        title: "Teenage hackers and computer crime",
        passage: "<p>Breaking into the computer codes (known as 'hacking') of banks, large companies or even government departments is the latest game for super-intelligent teenagers. One young hacker said, \"Hacking is just intellectual. It's your brain against the computer. It's like climbing Mount Everest—it's something you have to do. You don't even need a very expensive computer—but you must understand everything about all kinds of computers.\"</p><p>At the moment most of these games are just fun for young people. But how long will it be before criminal gangs, like the Mafia, start to use computer experts to help them in their crimes? Future bank robbers will not need explosives to blow open bank safes—all they will need is someone who can break computer codes. Already in Britain people say that computer crimes are costing companies between 500 million pounds and 2.5 billion pounds a year.</p>"
      },
      G8: {
        title: "The dangers of oversized automobiles",
        passage: "<p>There is increasing scientific evidence that large cars cause more highway accidents than small cars. In the news recently was the story of a woman who died of a heart attack while driving her station wagon. The car was moving so fast that it went through the highway-dividing fence, resulting in a collision in which five people died. Those unnecessary deaths are attributable in part to the woman's choice of a large automobile. A lighter and smaller car probably wouldn't have gone through the fence, its remaining energy would have been much less, and this would have reduced the chances of serious injury or death. Because of its small size, it might have missed the other car completely. The present design of the oversized automobile is largely responsible not only for increasing death toll on the highways but also for the rapid depletion of our resources of petroleum, for the pollution of our environment, and for the congestion and inconvenience of our cities.</p>"
      },
      G9: {
        title: "Three rescued pilot whales",
        passage: "<p>Three pilot whales are believed to be swimming freely off the Atlantic Coast today. Their names are Tag, Notch, and Baby. These seagoing mammals are among the lucky survivors of a whale-stranding last December at Cape Cod.</p><p>As many as 60 pilot whales swam ashore. Scientists are still trying to find out why whales have this self-destructive behavior. Many of the whales died on the beach—crushed by their own weight. Whale experts found Tag, Notch, Baby alive. The three were believed to be too young to survive on their own of returned to sea.</p><p>The three whales were taken in a van to the New England Aquarium in Boston, Mass. They were kept in a 60,000-gallon tank for seven months. Only a few people worked with the whales so that they would not become too accustomed to human beings.</p><p>Early this past summer the three whales were pronounced fit enough to be returned to the Atlantic Ocean. A month after their release, the whales were spotted. They were found in a group of 50 whales about 60 miles from where they had seen set free.</p>"
      }
    },
    questions: [
      q(1, "C2", ["語境選詞"], "題組", "綜合測驗", "A", "Choose the best answer for blank 1.", {A:"Certainly.",B:"Not at all.",C:"What's the matter?",D:"All right."}, {group:"G1",explain:"Certainly 表示同意對方暫時離開接電話。"}),
      q(2, "C2", ["篇章指涉"], "題組", "綜合測驗", "D", "Choose the best answer for blank 2.", {A:"Shall we continue our discussion?",B:"What are you going to say?",C:"What did you say?",D:"Where were we?"}, {group:"G1",explain:"談話中斷後以 Where were we? 詢問剛才談到哪裡。"}),
      q(3, "C2", ["邏輯關係"], "題組", "綜合測驗", "A", "Choose the best answer for blank 3.", {A:"but I'm afraid",B:"so I think",C:"unless it seems",D:"as you know"}, {group:"G1",explain:"想去看表演與恐怕要改天之間是轉折，故選 but I'm afraid。"}),
      q(4, "C2", ["語境選詞"], "題組", "綜合測驗", "D", "Choose the best answer for blank 4.", {A:"Do you speak English?",B:"Are you a worker, too?",C:"How do you like it?",D:"How about you?"}, {group:"G2",explain:"Bill 說完自己的工作後反問 John，How about you? 最恰當。"}),
      q(5, "C2", ["語境選詞"], "題組", "綜合測驗", "C", "Choose the best answer for blank 5.", {A:"Do you know each other?",B:"Where have you been?",C:"What do you do?",D:"How are you?"}, {group:"G2",explain:"Sue 回答職業，前句應問 What do you do?。"}),
      q(6, "C2", ["語境選詞"], "題組", "綜合測驗", "D", "Choose the best answer for blank 6.", {A:"Hold on. I'll connect you.",B:"Sure. Wait a moment, please.",C:"I'm sorry, he's not come yet.",D:"I'm sorry, he's out at this moment."}, {group:"G3",explain:"下句詢問 Eric 何時回來，表示他目前外出。"}),
      q(7, "C2", ["語境選詞"], "題組", "綜合測驗", "C", "Choose the best answer for blank 7.", {A:"I'm not sure. May I leave a message?",B:"Any moment. Do you want to talk to him?",C:"I'm not sure. Can I take a message?",D:"I'm sorry, his line is busy."}, {group:"G3",explain:"Jane 不確定 Eric 何時回來，接著主動問是否要留言。"}),
      q(8, "C2", ["語境選詞"], "題組", "綜合測驗", "B", "Choose the best answer for blank 8.", {A:"That's all right.",B:"Moskovik, M-O-S-K-O-V-I-K.",C:"It's an unusual name.",D:"Don't worry. Eric and I are old friends."}, {group:"G3",explain:"對方沒聽清楚姓氏，應重述並拼出 Moskovik。"}),
      q(9, "C2", ["語境選詞"], "題組", "綜合測驗", "A", "Choose the best answer for blank 9.", {A:"Don't worry. All we have to do is ask.",B:"What should we see next?",C:"I'm scared. Let's go home.",D:"Yes, we just lost a tire."}, {group:"G4",explain:"下句追問要問誰，故此處先提議問路。"}),
      q(10, "C2", ["語境選詞"], "題組", "綜合測驗", "B", "Choose the best answer for blank 10.", {A:"Who knows!",B:"You ask a policeman.",C:"There is a police station there.",D:"I don't see any police station."}, {group:"G4",explain:"後句問哪裡能找到一位，指的是 policeman。"}),

      q(11, "C1", ["詞義辨析"], "單題", "詞彙題", "D", "I sometimes take John's coat for my own, because the two of them look so _____.", {A:"original",B:"cheerful",C:"curious",D:"similar"}, {explain:"兩件外套容易混淆，是因為看起來 similar「相似」。"}),
      q(12, "C1", ["語境搭配"], "單題", "詞彙題", "A", "George at first had difficulty swimming across the pool, but he finally succeeded on his fourth _____.", {A:"attempt",B:"process",C:"instance",D:"display"}, {explain:"on his fourth attempt 表示在第四次嘗試時成功。"}),
      q(13, "C1", ["詞義辨析"], "單題", "詞彙題", "D", "Several motorists were _____ waiting for the light to change.", {A:"impossibly",B:"impracticably",C:"importantly",D:"impatiently"}, {explain:"駕駛「不耐煩地」等待紅綠燈；副詞 impatiently 修飾 waiting 的動作。"}),
      q(14, "C1", ["語境搭配"], "單題", "詞彙題", "A", "Mary wrote a letter of _____ to the manufacturer after her new car broke down three times in the same week.", {A:"complaint",B:"repair",C:"depression",D:"madness"}, {explain:"letter of complaint 是「投訴信」的固定搭配。"}),
      q(15, "C1", ["詞義辨析"], "單題", "詞彙題", "B", "John's poor math score must have _____ him a lot, because he is not attending the class any more.", {A:"expelled",B:"discouraged",C:"impressed",D:"finished"}, {explain:"低分使 John discouraged「感到挫折」，所以不再上課。"}),
      q(16, "C1", ["詞義辨析"], "單題", "詞彙題", "B", "The issue of environmental protection has not received much attention until very _____.", {A:"seriously",B:"recently",C:"amazingly",D:"dangerously"}, {explain:"until very recently 表示直到最近才受到注意。"}),
      q(17, "C1", ["詞義辨析"], "單題", "詞彙題", "D", "The old man could _____ swallow because his throat was too dry.", {A:"actually",B:"strictly",C:"exactly",D:"hardly"}, {explain:"喉嚨太乾，所以幾乎無法吞嚥，選 hardly。"}),
      q(18, "C1", ["語境搭配"], "單題", "詞彙題", "B", "We are more than willing to _____ our ties with those countries that are friendly to us.", {A:"appeal",B:"strengthen",C:"expect",D:"connect"}, {explain:"strengthen our ties 表示加強彼此關係。"}),
      q(19, "C1", ["詞義辨析"], "單題", "詞彙題", "B", "The artist is famous for his genius and great _____.", {A:"fragrance",B:"originality",C:"sculptor",D:"therapy"}, {explain:"藝術家以天分與 originality「原創性」聞名。"}),
      q(20, "C1", ["詞義辨析"], "單題", "詞彙題", "C", "Although some things are _____, they nevertheless exist.", {A:"important",B:"intelligible",C:"invisible",D:"interesting"}, {explain:"雖然有些事物 invisible「看不見」，卻仍然存在。"}),

      q(21, "C2", ["邏輯關係"], "題組", "綜合測驗", "C", "Choose the best answer for blank 21.", {A:"For example",B:"Afterwards",C:"For one thing",D:"On the whole"}, {group:"G5",explain:"下文先列社會慶典，再以 Secondly 列第二點，故先用 For one thing。"}),
      q(22, "C2", ["語境搭配"], "題組", "綜合測驗", "B", "Choose the best answer for blank 22.", {A:"so as",B:"such as",C:"as such",D:"such that"}, {group:"G5",explain:"such as 用來列舉 weddings、promotions 等慶典。"}),
      q(23, "C2", ["語境搭配"], "題組", "綜合測驗", "C", "Choose the best answer for blank 23.", {A:"simply",B:"clumsily",C:"closely",D:"carefully"}, {group:"G5",explain:"be closely linked with 表示與飲酒密切相連。"}),
      q(24, "C2", ["語境選詞"], "題組", "綜合測驗", "A", "Choose the best answer for blank 24.", {A:"Few",B:"Little",C:"Small",D:"Many"}, {group:"G5",explain:"children 是可數複數，且語意為很少有孩子看不到成人飲酒，選 Few。"}),
      q(25, "C2", ["語境搭配"], "題組", "綜合測驗", "D", "Choose the best answer for blank 25.", {A:"drink",B:"to drink",C:"drinking",D:"drunk"}, {group:"G5",explain:"get drunk 表示喝醉。"}),
      q(26, "C2", ["語境搭配"], "題組", "綜合測驗", "A", "Choose the best answer for blank 26.", {A:"almost",B:"mostly",C:"altogether",D:"hardly"}, {group:"G5",explain:"almost every soap opera 表示幾乎每一齣肥皂劇。"}),
      q(27, "C2", ["篇章指涉"], "題組", "綜合測驗", "C", "Choose the best answer for blank 27.", {A:"Stories",B:"Drinks",C:"Characters",D:"Messages"}, {group:"G5",explain:"會坐在酒吧、夜店中的應是影片裡的 characters。"}),
      q(28, "C2", ["轉承語"], "題組", "綜合測驗", "D", "Choose the best answer for blank 28.", {A:"furthermore",B:"consequently",C:"moreover",D:"however"}, {group:"G5",explain:"此處轉而指出最強的鼓勵來自廣告商，用 however。"}),
      q(29, "C2", ["語境搭配"], "題組", "綜合測驗", "C", "Choose the best answer for blank 29.", {A:"attentive",B:"attributive",C:"attractive",D:"accustomed"}, {group:"G5",explain:"廣告展示對年輕人 attractive「有吸引力的」情境。"}),
      q(30, "C2", ["邏輯關係"], "題組", "綜合測驗", "B", "Choose the best answer for blank 30.", {A:"where",B:"while",C:"what",D:"why"}, {group:"G5",explain:"while 引導同時發生的情境：人們從事活動時舉杯。"}),

      q(31, "C2", ["語境搭配"], "題組", "綜合測驗", "B", "Choose the best answer for blank 31.", {A:"far from",B:"by far",C:"a bit far",D:"as far"}, {group:"G6",explain:"by far 用來強調最高級；by far the most popular 意為「遠遠是最受歡迎的」。"}),
      q(32, "C2", ["邏輯關係"], "題組", "綜合測驗", "D", "Choose the best answer for blank 32.", {A:"also",B:"but",C:"for",D:"or"}, {group:"G6",explain:"rafting 與 swimming 是可選擇的兩種水上活動，用 or。"}),
      q(33, "C2", ["轉承語"], "題組", "綜合測驗", "A", "Choose the best answer for blank 33.", {A:"In addition",B:"In due time",C:"For instance",D:"By and large"}, {group:"G6",explain:"接續補充露營地資訊，用 In addition。"}),
      q(34, "C2", ["語境搭配"], "題組", "綜合測驗", "B", "Choose the best answer for blank 34.", {A:"About",B:"For",C:"With",D:"In"}, {group:"G6",explain:"For those who prefer... 表示對偏好住城裡的人而言。"}),
      q(35, "C2", ["語境搭配"], "題組", "綜合測驗", "C", "Choose the best answer for blank 35.", {A:"the",B:"this",C:"a",D:"that"}, {group:"G6",explain:"a number of 表示許多。"}),
      q(36, "C2", ["語境搭配"], "題組", "綜合測驗", "C", "Choose the best answer for blank 36.", {A:"to make",B:"make",C:"made",D:"making"}, {group:"G6",explain:"items made from... 是過去分詞片語修飾 items。"}),
      q(37, "C2", ["語境選詞"], "題組", "綜合測驗", "A", "Choose the best answer for blank 37.", {A:"activity",B:"advice",C:"proposal",D:"sport"}, {group:"G6",explain:"在露天市場購物是另一項有趣的 activity。"}),
      q(38, "C2", ["轉承語"], "題組", "綜合測驗", "D", "Choose the best answer for blank 38.", {A:"fairly",B:"happily",C:"gorgeously",D:"finally"}, {group:"G6",explain:"finally 引出最後一項旅遊資訊：用餐地點。"}),
      q(39, "C2", ["語境搭配"], "題組", "綜合測驗", "A", "Choose the best answer for blank 39.", {A:"As",B:"Since",C:"Until",D:"Then"}, {group:"G6",explain:"As you can see 表示「如你所見」。"}),
      q(40, "C2", ["邏輯關係"], "題組", "綜合測驗", "C", "Choose the best answer for blank 40.", {A:"Where",B:"What",C:"If",D:"That"}, {group:"G6",explain:"If 引導條件：若想給家人美好假期，就造訪此鎮。"}),

      q(41, "C4", ["語境推義"], "題組", "閱讀測驗", "C", "The preceding passage refers to the word 'hacking' in the context of", {A:"climbing Mount Everest.",B:"a game for young individuals.",C:"breaking into computer codes.",D:"physically dismantling a solid object."}, {group:"G7",explain:"首句直接將 hacking 解釋為 breaking into computer codes。"}),
      q(42, "C4", ["細節檢索"], "題組", "閱讀測驗", "B", "According to the passage, breaking into computer codes of banks, large companies, and government departments is", {A:"a widespread criminal practice.",B:"a game for computer literate individuals.",C:"being studied by the Mafia for fun.",D:"soon to replace coding bank safes."}, {group:"G7",explain:"文章稱這是聰明青少年的最新遊戲，且需熟悉電腦。"}),
      q(43, "C4", ["細節檢索"], "題組", "閱讀測驗", "D", "Based on the passage, in order to break into computer codes, one needs", {A:"an elaborate and expensive multi-media computer.",B:"a group of computer science students.",C:"the help and financial support from the Mafia.",D:"a thorough understanding of a variety of computers."}, {group:"G7",explain:"駭客指出不需昂貴電腦，但必須了解各種電腦。"}),
      q(44, "C4", ["細節檢索"], "題組", "閱讀測驗", "A", "For the five highway deaths, the author blames", {A:"a large heavy station wagon.",B:"the lack of more smaller vehicles.",C:"the woman's ill-timed heart attack.",D:"a weak highway-dividing fence."}, {group:"G8",explain:"作者將死亡部分歸因於女子選擇大型汽車。"}),
      {
        ...q(45, "C4", ["主旨判讀"], "題組", "閱讀測驗", "B", "What is the author's main point in the passage above?", {A:"Large cars should be banned by the government.",B:"Large cars are less safe and less economical than small cars.",C:"Small cars are safer for the occupants than large cars.",D:"A woman's heart attack caused the death of five people."}, {group:"G8",explain:"正式參考答案明列 B 或 C；兩項皆掌握作者對大型車安全性問題的核心主張。"}),
        acceptedAnswers: ["B", "C"]
      },
      q(46, "C4", ["推論判讀"], "題組", "閱讀測驗", "A", "The author's statement about the highway fence's ability to retain a smaller and lighter car", {A:"is the author's assumption.",B:"derives from scientific evidence.",C:"rests upon fact.",D:"can never be verified."}, {group:"G8",explain:"作者使用 probably 與 might，顯示這是推測而非已證實事實。"}),
      q(47, "C4", ["細節檢索"], "題組", "閱讀測驗", "B", "The 60 pilot whales swam ashore as a result of", {A:"a large winter storm off the coast of Cape Cod.",B:"a behavior currently unknown to scientists.",C:"a genetic phenomenon currently being studied by whale experts.",D:"the return to their annual spawning ground near Cape Cod."}, {group:"G9",explain:"文中說科學家仍在探究鯨魚為何有這種自毀行為。"}),
      q(48, "C4", ["篇章理解"], "題組", "閱讀測驗", "C", "The pilot whales died on the beaches of Cape Cod due to", {A:"the lack of salt water to facilitate their respiration.",B:"the lack of nutrition to maintain their enormous body weight.",C:"their body structure unable to support their body weight out of water.",D:"a phenomenon yet to be figured out by scientists."}, {group:"G9",explain:"牠們在沙灘上被自身重量壓死，表示離水後身體無法承受體重。"}),
      q(49, "C4", ["細節檢索"], "題組", "閱讀測驗", "C", "The three whales Tag, Notch, and Baby were rescued because", {A:"younger whales have a greater chance of survival than the others.",B:"amongst the many whales found beached, these three were deemed the healthiest.",C:"they were alive when the rescue team found them.",D:"the rescue crew liked them very much."}, {group:"G9",explain:"文章直接說 whale experts found Tag, Notch, Baby alive。"}),
      q(50, "C4", ["篇章理解"], "題組", "閱讀測驗", "D", "Which of the following is NOT true?", {A:"Scientists are studying the suicidal behavior of pilot whales.",B:"Tag, Notch, and Baby were too young to survive by themselves in the sea.",C:"Pilot Whales are mammals that can become used to human beings.",D:"After their release, Tag, Notch, and Baby were never seen again."}, {group:"G9",explain:"三隻鯨魚放生一個月後曾被發現，因此 D 不正確。"})
    ]
  };
})());
