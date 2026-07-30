// 106 學年度學科能力測驗英文考科（單選題 56 題）
// 題目與答案均取自大學入學考試中心官方試卷及答案。
(() => {
  const explanations = {
    1: "鬧鐘未設定也會響，表示時鐘沒有正常運作；properly 表示「正常地、適當地」。",
    2: "決心成為物理教授，表示要從事物理相關職涯；pursue a career 是「追求、從事某種職業」。",
    3: "數日可能遇不到其他人，顯示該地偏遠；remote 表示「遙遠、偏僻的」。",
    4: "把群體利益置於個人利益前，表示認同自己所屬群體；identify with 是「認同」。",
    5: "把陌生人誤認成名演員並索取簽名會令人尷尬，embarrassing 表示「令人難堪的」。",
    6: "薪水幾乎都花在房租與食物，娛樂費所剩無幾；barely 表示「幾乎不」。",
    7: "飛機和船神祕消失且沒有留下任何線索，without a trace 是「無影無蹤」。",
    8: "Tony 高喊並揮牌，是在催促路人進店購買麵包；urge＋受詞＋to V 表示「力勸」。",
    9: "藝術家以細沙創作的是沙雕，sculptures 表示「雕塑作品」。",
    10: "雲層散開後落在教堂上的一道光是 a beam of light「一束光」。",
    11: "祖母把錢放進生日卡內，enclose 表示「隨信附上、裝入」。",
    12: "奧運選手夢想贏得的是金牌 gold medal。",
    13: "竊賊假扮保全離開，disguise oneself as... 表示「把自己偽裝成……」。",
    14: "遊戲玩家被提醒留意周遭危險，be aware of 表示「察覺、注意到」。",
    15: "福爾摩斯能從細節推理，靠的是驚人的觀察力 powers of observation。",
    16: "眼皮疼痛時看進鏡子檢查睫毛根部，look into the mirror 表示「照鏡子查看」。",
    17: "疼痛與紅點是針眼剛形成時的症狀，symptoms 表示「症狀」。",
    18: "先揉鼻子再揉眼睛會把細菌轉移到眼部，be transferred to 表示「被傳到」。",
    19: "針眼外觀不佳，卻通常無害，前後為讓步關係，Although 表示「雖然」。",
    20: "以溫熱毛巾貼壓眼皮需用 press A against B，against 表示「貼著」。",
    21: "貧困者連鞋都不易取得，更不用說尺寸合適的鞋；let alone 表示「更遑論」。",
    22: "孩子只能勉強穿太小的鞋，make do with 表示「以現有之物將就」。",
    23: "可成長鞋讓孩子隨腳長大調整尺寸，adjust 表示「調整」。",
    24: "鞋款有兩種尺寸，come in＋尺寸／顏色表示「以……規格供應」。",
    25: "鞋跟與腳趾帶控制長度，兩側帶則控制寬度，while 在此表示對照。",
    26: "前文說壞天氣令人焦慮疲累，因此人們據此認為會降低生產力；Accordingly 表示「因此」。",
    27: "人們的既有看法與實際研究結果不同，a gap between A and B 表示「A、B 之間的落差」。",
    28: "研究同時使用實驗資料與銀行實地觀察，as well as 表示「以及」。",
    29: "好天氣使員工想到工作外可從事的活動，engage in activities 表示「參與活動」。",
    30: "戶外活動照片會分散注意力，因而降低生產力；lower 表示「使降低」。",
    31: "古埃及人對洋蔥的重視超過其他文化，admired 表示「欣賞、推崇」。",
    32: "洋蔥不只作食物或藥物，還具有重要精神意義，spiritual 表示「精神／宗教上的」。",
    33: "洋蔥一圈又一圈的構造被視為永生的象徵，symbols of eternal life 搭配完整。",
    34: "圓中有圓的構造映照存在的永恆，reflected 表示「反映、象徵」。",
    35: "古埃及人把洋蔥的療癒力量視為魔法而非醫療，healing power 是「療癒能力」。",
    36: "金字塔與墓穴內被發現的許多畫作描繪洋蔥，discovered 作過去分詞修飾 paintings。",
    37: "洋蔥在祭壇上發揮喪葬供品的功能，functioned as 表示「作為……使用」。",
    38: "洋蔥被放在遺體不同部位周圍，parts of their bodies 表示「身體部位」。",
    39: "洋蔥與洋蔥花裝飾木乃伊的骨盆、胸部、耳眼與腳，decorating 是現在分詞描述附帶狀態。",
    40: "強烈氣味被認為能促使死者再度呼吸，prompt＋受詞＋to V 表示「促使」。",
    41: "第三段依序說明付款後填問卷、進行遊戲式測試，最後取得認知報告，是評估流程，選 B。",
    42: "第二段指出狗和人一樣具有多種智能，差別在於較依賴哪一類，因此不同狗各有強項，選 A。",
    43: "Dognition 是新成立公司，co-founder 也顯示 venture 在此指新創事業，最接近 new business，選 D。",
    44: "Charmer 信任主人給的資訊勝過自己的眼睛，因此最可能依賴主人指出零食位置，選 C。",
    45: "全文依序介紹 Capoeira 的特色、奴隸時期起源、遭禁與取得官方認可的發展，主旨是其歷史，選 A。",
    46: "Capoeira 使用手腳、腿臂與頭部，且源自徒手格鬥；持劍刺擊不符合文中描述，NOT 題選 C。",
    47: "作者以史實與現況說明 Capoeira，沒有明顯讚美、懷疑或批判語氣，態度客觀，選 B。",
    48: "末段明說 Mestre Bimba 成功說服巴西政府承認其文化價值，使之成為正式格鬥與國家運動，選 D。",
    49: "末段以「這場兩週展覽」介紹展品範圍並邀請觀眾欣賞，最可能出現在美術館網站，選 B。",
    50: "第一段說 Homer 在波士頓印刷公司當學徒，以插畫迅速成名，故先在家鄉建立插畫家聲譽，選 D。",
    51: "第三段指出他的兒童、農村女孩與獵人作品成為十九世紀美國生活的經典圖像，選 A。",
    52: "前句的 Many of his works 描繪美國生活，後句 Others 則談普遍主題，因此 Others 指其他作品，選 C。",
    53: "文章按十七世紀王室飲茶、約 1800 年下午茶、十九世紀 high tea 到今日依序敘述，採時間順序，選 C。",
    54: "tea break 從當時延續成英國習慣，a lasting British institution 指長久傳統，選 B。",
    55: "第一段說社交場合飲茶超出多數英國人的負擔，因茶價高且另課稅，所以選 D。",
    56: "afternoon tea 約下午四點；high tea 是勞工工作一日返家後搭配主餐飲用，時間較晚，選 A。"
  };
  const q = (no, cat, tags, textType, answer, stem, options, group) => ({
    no, cat, tags, lang: group ? "題組" : "單題", textType, answer, stem, options,
    ...(group ? { group } : {}),
    ...(explanations[no] ? { explain: explanations[no] } : {})
  });
  const onionOptions = {
    A: "reflected", B: "parts", C: "admired", D: "functioned", E: "prompt",
    F: "decorating", G: "spiritual", H: "discovered", I: "symbols", J: "healing"
  };

  window.BANK = window.BANK || [];
  window.BANK.push({
    year: 106,
    era: "學測",
    groups: {
      G1: {
        title: "Eye styes",
        passage: "<p>You begin to notice a bit of pain on your eyelid each time you blink. You <b>16</b> the mirror to find a tiny red spot on the base of your lower lashes. These <b>17</b> are probably the beginning of an eye stye.</p><p>An eye stye is a small bump, resembling a pimple, that develops when an oil gland at the edge of an eyelid becomes infected by bacteria. These bacteria are found in the nose and are easily <b>18</b> to the eye when you rub your nose, then your eye. Pus will build up in the center of the stye, causing a yellowish spot. Usually a stye is accompanied by a swollen eye.</p><p><b>19</b> a stye can look unpleasant at times, it is usually harmless and doesn’t cause vision problems. Most styes heal on their own within a few days. You might speed up healing time by gently pressing a warm washcloth <b>20</b> your eyelid for 10 minutes, 3 or 4 times a day. Make sure you don’t squeeze or pop a stye like you would a pimple. Doing so may cause a severe eye infection.</p>"
      },
      G2: {
        title: "The Shoe That Grows",
        passage: "<p>Shoes are hugely important for protecting our feet, especially in places like Africa, where healthcare provision is limited. Unfortunately, shoes are not always readily available for people living in poverty, <b>21</b> shoes that are the right size. Almost as soon as a child receives shoes to wear, he/she is likely to have grown out of them. Then the child has to <b>22</b> with shoes that are too small. The Shoe That Grows, created by a charity called Because International, changes all this. It allows children to <b>23</b> their shoes’ size as their feet grow.</p><p>The innovative footwear resembles a common sandal and is made of leather straps and rubber soles, a material similar to that used in tires. They come <b>24</b> two sizes, and can expand in three places. The straps on the heel and toe control the length of the shoe, <b>25</b> the two on either side allow for different widths. With this special design, the shoes can “grow” up to five sizes and last for at least five years.</p>"
      },
      G3: {
        title: "Weather and workplace productivity",
        passage: "<p>Research has proven that weather plays a part in our moods: Warmer temperatures and exposure to sunshine increase positive thinking, whereas cold, rainy days bring anxiety and fatigue. <b>26</b>, many people believe that bad weather can reduce productivity and efficiency.</p><p>There is, however, a significant <b>27</b> between such beliefs and the actual effect of weather on people’s performance at work. Using empirical data from laboratory experiments <b>28</b> observations of a mid-sized Japanese bank in real life, researchers find that weather conditions indeed influence a worker’s focus. When the weather is bad, individuals tend to focus more on their work rather than thinking about activities they could <b>29</b> outside of work. But photos showing outdoor activities, such as sailing on a sunny day or walking in the woods, can greatly distract workers and thus <b>30</b> their productivity. The findings conclude that workers are actually most productive when the weather is lousy—and only if nothing reminds them of good weather.</p>"
      },
      G4: {
        title: "Onions in ancient Egypt",
        passage: "<p>The widespread popularity of onions is not limited to modern-day kitchens. There is evidence of onions being used for culinary and medicinal purposes all over the ancient world. Nonetheless, no culture <b>31</b> onions quite as much as the ancient Egyptians. For them, the onion was not just food or medicine; it held significant <b>32</b> meaning. Onions were considered to be <b>33</b> of eternal life. The circle-within-a-circle structure of an onion, for them, <b>34</b> the eternity of existence. According to certain documents, ancient Egyptians also used onions for medicinal purposes, but they likely would have viewed the <b>35</b> power of the vegetable as magical, rather than medical.</p><p>Onions are depicted in many paintings <b>36</b> inside pyramids and tombs that span the history of ancient Egypt. They <b>37</b> as a funeral offering shown upon the altars of the gods. The dead were buried with onions and onion flowers on or around various <b>38</b> of their bodies. Mummies have also been found with onions and onion flowers <b>39</b> their pelvis, chest, ears, eyes, and feet.</p><p>Some scholars theorize that onions may have been used for the dead because it was believed that their strong scent would <b>40</b> the dead to breathe again. Other researchers believe it was because onions were known for their special curative properties, which would be helpful in the afterlife.</p>"
      },
      G5: {
        title: "Dognition",
        passage: "<p>Is your dog an Einstein or a Charmer? For US $60, a recently-founded company called Dognition will help you learn more about your dog’s cognitive traits. It offers an online test telling you about the brain behind the bark.</p><p>Dognition’s test measures a dog’s intellect in several aspects—from empathy to memory to reasoning skills. But don’t expect it to measure your pet’s IQ. Dr. Hare, one of the venture’s co-founders, says a dog’s intelligence can’t be described with a single number. Just as humans have a wide range of intelligences, so do dogs. The question is what type your dog relies on more.</p><p>After you plunk your money down, Dognition’s website will take you through a questionnaire about your dog: For example, how excited does your dog get around other dogs, or children? Do fireworks scare your pup? Then, Dognition guides you through tests that are as fun as playing fetch or hide-and-seek. At the end, you get a report of your dog’s cognitive profile.</p><p>Your dog could fall into one of nine categories: Ace, Stargazer, Maverick, Charmer, Socialite, Protodog, Einstein, Expert, or Renaissance Dog. That can give you something to brag about on Dognition’s Facebook page. It also can shed new light on why dogs do the things they do. For example, a Charmer is a dog that trusts you so much that it would prefer to solve problems using information you give it rather than information it can get with its own eyes.</p><p>Dognition helps people understand their dogs in ways that they have never been able to do. This new understanding can enrich the relationship between dogs and their owners.</p>"
      },
      G6: {
        title: "Capoeira",
        passage: "<p>Capoeira is a martial art that combines elements of fight, acrobatics, drumming, singing, dance, and rituals. It involves a variety of techniques that make use of the hands, feet, legs, arms, and head. Although Capoeira appears dancelike, many of its basic techniques are similar to those in other martial arts.</p><p>Capoeira was created nearly 500 years ago in Brazil by African slaves. It is believed that the martial art was connected with tribal fighting in Africa, in which people fought body to body, without weapons, in order to acquire a bride or desired woman. In the sixteenth century, when the Africans were taken from their homes to Brazil against their will and kept in slavery, Capoeira began to take form among the community of slaves for self-defense. But it soon became a strong weapon in the life-or-death struggle against their oppressors. When the slave owners realized the power of Capoeira, they began to punish those who practiced it. Capoeiristas learned to camouflage the forbidden fights with singing, clapping, and dancing as though it were simply entertainment.</p><p>At first, Capoeira was considered illegal in Brazil. However, a man known as Mestre Bimba devoted a great deal of time and effort to convincing the Brazilian authorities that Capoeira has great cultural value and should become an official fighting style. He succeeded in his endeavor and transformed the martial art into Brazil’s national sport. He and Mestre Pastinha were the first to open schools, and the Capoeira tree grew, spreading its branches across the world. Nowadays, it is performed in movies and music clips. Capoeira is also believed to have influenced several dancing styles like breaking and hip-hop.</p>"
      },
      G7: {
        title: "Winslow Homer exhibition",
        passage: "<p>Winslow Homer (1836-1910) is regarded by many as the greatest American painter of the nineteenth century. Born and raised in Boston, he began his career at age eighteen in his hometown, working as an apprentice at a printing company. Skilled at drawing, he soon made a name for himself making illustrations for novels, sheet music, magazines, and children’s books.</p><p>He then moved to New York City, where he worked as a freelance illustrator with Harper’s Weekly, a popular magazine of the time, and began painting. Homer was assigned to cover the inauguration of President Lincoln and, later, the Civil War. His pictures of the Union troops won international recognition. Homer moved to England and, after a two-year stay, returned to America. He settled permanently in Maine in 1883.</p><p>From the late 1850s until his death in 1910, Winslow Homer produced a body of work distinguished by its thoughtful expression and its independence from artistic conventions. A man of multiple talents, Homer excelled equally in the arts of illustration, oil painting, and watercolor. Many of his works—depictions of children at play and in school, farm girls attending to their work, hunters and their prey—have become classic images of nineteenth-century American life. Others speak to more universal themes such as the primal relationship of humans to nature.</p><p>This two-week exhibition highlights a wide and representative range of Homer’s art. It shows his extraordinary career from the battlefields, farmland, and coastal villages of America, to the North Sea fishing village of Cullercoats, the rocky coast of Maine, the Adirondacks, and the Caribbean. The exhibition offers viewers an opportunity to experience and appreciate the breadth of his remarkable artistic achievement.</p>"
      },
      G8: {
        title: "Tea in Britain",
        passage: "<p>Tea, the most typical English drink, became established in Britain because of the influence of a foreign princess, Catherine of Braganza, the queen of Charles II. A lover of tea since her childhood in Portugal, she brought tea-drinking to the English royal court and set a trend for the beverage in the seventeenth century. The fashion soon spread beyond the circle of the nobility to the middle classes, and tea became a popular drink at the London coffee houses where people met to do business and discuss events of the day. Many employers served a cup of tea to their workers in the middle of the morning, thus inventing a lasting British institution, the “tea break.” However, drinking tea in social settings outside the workplace was beyond the means of the majority of British people. It came with a high price tag and tea was taxed as well.</p><p>Around 1800, the seventh Duchess of Bedford, Anne Maria, began the popular practice of “afternoon tea,” a ceremony taking place at about four o’clock. Until then, people did not usually eat or drink anything between lunch and dinner. At approximately the same time, the Earl of Sandwich popularized a new way of eating bread—in thin slices, with something (e.g., jam or cucumbers) between them. Before long, a small meal at the end of the afternoon, involving tea and sandwiches, had become part of the British way of life.</p><p>As tea became much cheaper during the nineteenth century, its popularity spread right through all corners of the British society. Thus, tea became Britain’s favorite drink. In working-class households, it was served with the main meal of the day, eaten when workers returned home after a day’s labor. This meal has become known as “high tea.”</p><p>Today, tea can be drunk at any time of the day, and accounts for over two-fifths of all beverages consumed in Britain—with the exception of water.</p>"
      }
    },
    questions: [
      q(1, "C1", ["語境搭配"], "詞彙題", "B", "John’s clock is not functioning _____. The alarm rings even when it’s not set to go off.", { A: "tenderly", B: "properly", C: "solidly", D: "favorably" }),
      q(2, "C1", ["語境搭配"], "詞彙題", "A", "Michael has decided to _____ a career in physics and has set his mind on becoming a professor.", { A: "pursue", B: "swear", C: "reserve", D: "draft" }),
      q(3, "C1", ["詞義辨析"], "詞彙題", "C", "Peter plans to hike in a _____ part of Africa, where he might not meet another human being for days.", { A: "native", B: "tricky", C: "remote", D: "vacant" }),
      q(4, "C1", ["語境搭配"], "詞彙題", "D", "People in this community tend to _____ with the group they belong to, and often put group interests before personal ones.", { A: "appoint", B: "eliminate", C: "occupy", D: "identify" }),
      q(5, "C1", ["詞義辨析"], "詞彙題", "B", "I mistook the man for a well-known actor and asked for his autograph; it was really _____.", { A: "relaxing", B: "embarrassing", C: "appealing", D: "defending" }),
      q(6, "C1", ["詞義辨析"], "詞彙題", "A", "After spending most of her salary on rent and food, Amelia _____ had any money left for entertainment and other expenses.", { A: "barely", B: "fairly", C: "merely", D: "readily" }),
      q(7, "C1", ["語境搭配"], "詞彙題", "B", "In the Bermuda Triangle, a region in the western part of the North Atlantic Ocean, some airplanes and ships were reported to have mysteriously disappeared without a _____.", { A: "guide", B: "trace", C: "code", D: "print" }),
      q(8, "C1", ["詞義辨析"], "詞彙題", "D", "Shouting greetings and waving a big sign, Tony _____ the passing shoppers to visit his shop and buy the freshly baked bread.", { A: "accessed", B: "edited", C: "imposed", D: "urged" }),
      q(9, "C1", ["語境搭配"], "詞彙題", "C", "With a continuous 3 km stretch of golden sand, the beach attracts artists around the world each summer to create amazing _____ with its fine soft sand.", { A: "constitutions", B: "objections", C: "sculptures", D: "adventures" }),
      q(10, "C1", ["語境搭配"], "詞彙題", "B", "The clouds parted and a _____ of light fell on the church, through the windows, and onto the floor.", { A: "dip", B: "beam", C: "spark", D: "path" }),
      q(11, "C1", ["詞義辨析"], "詞彙題", "A", "Instead of a gift, Tim’s grandmother always _____ some money in the birthday card she gave him.", { A: "enclosed", B: "installed", C: "preserved", D: "rewarded" }),
      q(12, "C1", ["語境搭配"], "詞彙題", "C", "While winning a gold _____ is what every Olympic athlete dreams of, it becomes meaningless if it is achieved by cheating.", { A: "signal", B: "glory", C: "medal", D: "profit" }),
      q(13, "C1", ["語境搭配"], "詞彙題", "C", "The thief went into the apartment building and stole some jewelry. He then _____ himself as a security guard and walked out the front gate.", { A: "balanced", B: "calculated", C: "disguised", D: "registered" }),
      q(14, "C1", ["語境搭配"], "詞彙題", "A", "Due to numerous accidents that occurred while people were playing Pokémon GO, players were advised to be _____ of possible dangers in the environment.", { A: "aware", B: "ashamed", C: "doubtful", D: "guilty" }),
      q(15, "C1", ["語境搭配"], "詞彙題", "D", "Sherlock Holmes, a detective in a popular fiction series, has impressed readers with his amazing powers of _____ and his knowledge of trivial facts.", { A: "innocence", B: "estimation", C: "assurance", D: "observation" }),

      q(16, "C2", ["語境搭配"], "綜合測驗", "B", "You _____ the mirror to find a tiny red spot on the base of your lower lashes.", { A: "check out", B: "look into", C: "watch over", D: "see through" }, "G1"),
      q(17, "C2", ["語境選詞"], "綜合測驗", "C", "These _____ are probably the beginning of an eye stye.", { A: "incidents", B: "measures", C: "symptoms", D: "explanations" }, "G1"),
      q(18, "C2", ["語境選詞"], "綜合測驗", "D", "These bacteria are found in the nose and are easily _____ to the eye", { A: "attracted", B: "contributed", C: "exposed", D: "transferred" }, "G1"),
      q(19, "C2", ["邏輯關係"], "綜合測驗", "D", "_____ a stye can look unpleasant at times, it is usually harmless", { A: "As", B: "If", C: "Unless", D: "Although" }, "G1"),
      q(20, "C2", ["語境搭配"], "綜合測驗", "A", "gently pressing a warm washcloth _____ your eyelid", { A: "against", B: "among", C: "about", D: "after" }, "G1"),

      q(21, "C2", ["邏輯關係"], "綜合測驗", "D", "shoes are not always readily available for people living in poverty, _____ shoes that are the right size.", { A: "except for", B: "provided with", C: "far from", D: "let alone" }, "G2"),
      q(22, "C2", ["語境搭配"], "綜合測驗", "C", "Then the child has to _____ with shoes that are too small.", { A: "get done", B: "get lost", C: "make do", D: "make believe" }, "G2"),
      q(23, "C2", ["語境搭配"], "綜合測驗", "A", "It allows children to _____ their shoes’ size as their feet grow.", { A: "adjust", B: "explore", C: "insert", D: "overlook" }, "G2"),
      q(24, "C2", ["語境搭配"], "綜合測驗", "B", "They come _____ two sizes, and can expand in three places.", { A: "by", B: "in", C: "from", D: "down" }, "G2"),
      q(25, "C2", ["邏輯關係"], "綜合測驗", "B", "The straps on the heel and toe control the length of the shoe, _____ the two on either side allow for different widths.", { A: "whether", B: "while", C: "with", D: "for" }, "G2"),

      q(26, "C2", ["邏輯關係"], "綜合測驗", "D", "_____, many people believe that bad weather can reduce productivity and efficiency.", { A: "At most", B: "In contrast", C: "Literally", D: "Accordingly" }, "G3"),
      q(27, "C2", ["語境選詞"], "綜合測驗", "A", "There is, however, a significant _____ between such beliefs and the actual effect of weather", { A: "gap", B: "link", C: "clue", D: "ratio" }, "G3"),
      q(28, "C2", ["邏輯關係"], "綜合測驗", "B", "Using empirical data from laboratory experiments _____ observations of a mid-sized Japanese bank", { A: "out of", B: "as well as", C: "in case of", D: "due to" }, "G3"),
      q(29, "C2", ["語境搭配"], "綜合測驗", "C", "activities they could _____ outside of work.", { A: "break off", B: "approve of", C: "engage in", D: "take over" }, "G3"),
      q(30, "C2", ["語境選詞"], "綜合測驗", "B", "photos showing outdoor activities can greatly distract workers and thus _____ their productivity.", { A: "reform", B: "lower", C: "switch", D: "demand" }, "G3"),

      ...[
        [31, "C", "no culture _____ onions quite as much as the ancient Egyptians."],
        [32, "G", "it held significant _____ meaning."],
        [33, "I", "Onions were considered to be _____ of eternal life."],
        [34, "A", "The circle-within-a-circle structure of an onion, for them, _____ the eternity of existence."],
        [35, "J", "the _____ power of the vegetable"],
        [36, "H", "Onions are depicted in many paintings _____ inside pyramids and tombs"],
        [37, "D", "They _____ as a funeral offering shown upon the altars of the gods."],
        [38, "B", "various _____ of their bodies."],
        [39, "F", "onions and onion flowers _____ their pelvis, chest, ears, eyes, and feet."],
        [40, "E", "their strong scent would _____ the dead to breathe again."]
      ].map(([no, answer, stem]) => q(no, "C2", ["文意選填"], "文意選填", answer, stem, onionOptions, "G4")),

      q(41, "C4", ["主旨判讀"], "閱讀測驗", "B", "What is the third paragraph mainly about?", { A: "The theory behind the questionnaire used in the Dognition test.", B: "The procedure for evaluating a dog’s intellect on Dognition.", C: "The products one can get by paying a fee to Dognition.", D: "The characteristics of the activities Dognition offers." }, "G5"),
      q(42, "C4", ["細節檢索"], "閱讀測驗", "A", "According to the passage, which of the following statements is true?", { A: "Different dogs display strengths in different intelligences.", B: "A dog’s cognitive profile is composed of nine cognitive skills.", C: "The purpose of Dognition’s testing is to control a dog’s behavior.", D: "A dog’s intelligence can be ranked based on the score of a Dognition’s test." }, "G5"),
      q(43, "C4", ["語境推義"], "閱讀測驗", "D", "Which of the following is closest in meaning to the word “venture” in the second paragraph?", { A: "Creative measurement.", B: "Risky attempt.", C: "Non-profit organization.", D: "New business." }, "G5"),
      q(44, "C4", ["推論判讀"], "閱讀測驗", "C", "According to the passage, what would a Charmer most likely do?", { A: "Stay away from people whenever possible.", B: "Imitate how other dogs solve problems.", C: "Rely on its owner to point out where a treat is.", D: "Follow its own senses to get what it wants." }, "G5"),

      q(45, "C4", ["主旨判讀"], "閱讀測驗", "A", "What is the passage mainly about?", { A: "The history of Capoeira.", B: "The values of Capoeira.", C: "The contribution of Capoeira.", D: "The techniques of Capoeira." }, "G6"),
      q(46, "C4", ["推論判讀"], "閱讀測驗", "C", "Which of the following will probably NOT be found in the performance of Capoeira?", { A: "Singing with drums.", B: "Sweeping with the legs.", C: "Stabbing with swords.", D: "Striking with the hands." }, "G6"),
      q(47, "C4", ["推論判讀"], "閱讀測驗", "B", "What is the author’s attitude toward Capoeira as a sport?", { A: "Admiring.", B: "Objective.", C: "Doubtful.", D: "Harsh." }, "G6"),
      q(48, "C4", ["細節檢索"], "閱讀測驗", "D", "According to the passage, which of the following statements is true about Capoeira?", { A: "It was greatly influenced by modern dancing styles.", B: "It was initially created as a type of dance and ritual.", C: "It was mainly performed to protect a bride or desired woman.", D: "It was officially recognized in Brazil through the effort of Mestre Bimba." }, "G6"),

      q(49, "C4", ["推論判讀"], "閱讀測驗", "B", "Where does this passage most likely appear?", { A: "On an ad featuring contemporary arts.", B: "On a website of an art gallery.", C: "In a booklet on American-born British artists.", D: "In an encyclopedia on the art of printing." }, "G7"),
      q(50, "C4", ["細節檢索"], "閱讀測驗", "D", "Which of the following is true about Homer’s career?", { A: "He achieved international fame with his vivid paintings of England.", B: "He is considered the greatest illustrator in the history of American art.", C: "He is better known for his watercolors than his illustrations and oil paintings.", D: "He first established his reputation as an illustrator in his hometown of Boston." }, "G7"),
      q(51, "C4", ["篇章理解"], "閱讀測驗", "A", "According to the passage, which of the following best characterizes Homer’s art?", { A: "His pictures vividly portrayed the life of nineteenth-century Americans.", B: "His art thoughtfully expressed the voices of people suffering from war.", C: "His style faithfully conformed to the artistic traditions of his time.", D: "His paintings constantly reflected his desire to escape from society." }, "G7"),
      q(52, "C4", ["指涉判讀"], "閱讀測驗", "C", "What does “Others” in the third paragraph refer to?", { A: "Other artists.", B: "Other themes.", C: "Other works.", D: "Other images." }, "G7"),

      q(53, "C4", ["篇章理解"], "閱讀測驗", "C", "How is this passage organized?", { A: "By cause and effect.", B: "In the order of importance.", C: "In the sequence of time.", D: "By comparison and contrast." }, "G8"),
      q(54, "C4", ["語境推義"], "閱讀測驗", "B", "What does the phrase “a lasting British institution” in the first paragraph mean?", { A: "The most popular British organization.", B: "A long-standing tradition in the UK.", C: "The last tea company in London.", D: "A well-established British business." }, "G8"),
      q(55, "C4", ["細節檢索"], "閱讀測驗", "D", "According to the passage, why was tea NOT a common drink of everyday life in the seventeenth century?", { A: "It was only served at coffee houses in London.", B: "It was taxed as an alcoholic drink.", C: "It was forbidden outside of the business setting.", D: "It was too expensive for most people." }, "G8"),
      q(56, "C4", ["細節檢索"], "閱讀測驗", "A", "According to the passage, which of the following is true?", { A: "High tea was served later in the day than afternoon tea in the nineteenth century.", B: "British people had tea breaks twice a day in the eighteenth century.", C: "Princess Catherine brought tea to England after visiting Portugal.", D: "The Earl of Sandwich started the afternoon tea ceremony." }, "G8")
    ]
  });
})();
