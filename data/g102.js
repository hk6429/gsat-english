// 102 學年度學科能力測驗英文考科（單選題 56 題）
// 題目與答案取自大學入學考試中心官方試題、答案。
(function () {
  const explanations = {
    1: "比賽因大雨延到下週六，postponed 表示「延期」；不是永久取消。",
    2: "網路成為最重要新聞來源，取代了報紙；replace A as B 表示「取代 A 成為 B」。",
    3: "Joy 存夠錢後預訂兩趟暑期旅行，book a trip 表示「預訂旅程」。",
    4: "尚未完全理解提案，無法加以評論；make a comment on 是「對……發表意見」。",
    5: "Betty 認為自己能想出更好點子，所以不情願接受朋友建議；reluctant 表示「不情願的」。",
    6: "銀行希望即時為顧客提供服務，prompt service 是「迅速、即時的服務」。",
    7: "在餐廳打工能為日後經營自己的餐廳做好準備，preparation for 是「為……做準備」。",
    8: "流行每季改變，constantly changing 表示「不斷變化」。",
    9: "海鷗的群體量詞是 a flock of seagulls「一群海鷗」。",
    10: "書讓人發笑並放鬆，表示內容有娛樂性；entertaining 是「有趣、娛樂人的」。",
    11: "整天用電腦造成頸肩僵硬到無法轉頭，stiff 表示「僵硬的」。",
    12: "流感疫苗讓身體建立對抗致病病毒的保護力，virus 表示「病毒」。",
    13: "統治者死後王國開始瓦解，隨即被鄰國接管；collapse 表示「崩潰、瓦解」。",
    14: "雖然去年落敗，他沒有感到挫折而繼續苦練；frustrated 表示「受挫的」。",
    15: "夫妻偏好會做飯的住家保母，preferably 表示「最好是、較理想地」。",
    16: "此處指「接收來電的號碼」，number 與 call 為被動關係，故用 being called。",
    17: "區碼同區時可能不用撥，另一方面本地號碼必須完整撥出；on the other hand 表示對照。",
    18: "號碼依 XYX 的格式建立，in the format of 是固定搭配。",
    19: "紐約被分配到 212 區碼，be assigned＋事物表示「被分配」。",
    20: "後文說同區電話費率通常較低，顯示區碼決定通話費用 cost。",
    21: "The＋比較級..., the＋比較級... 表示「越……，就越……」，故為 The rarer a coin is。",
    22: "千年古幣仍可能很便宜，說明稀有程度與硬幣年代 age 關係不大。",
    23: "千年古幣因數量多而便宜，1913 鎳幣因僅五枚而昂貴，while 表示兩者對比。",
    24: "收藏需求會大幅影響硬幣價格，greatly influence 表示「大大影響」。",
    25: "前者是 1798 dime，後者是 1916 dime；the latter 指後者。",
    26: "Binet 研究正常心智如何運作，而非精神疾病本質，normal 與 mental illness 形成對照。",
    27: "have＋受詞＋原形動詞是使役結構；he had children do tasks 表示「讓孩子執行任務」。",
    28: "智力量尺以所蒐集的法國兒童資料為基礎，based on 表示「根據」。",
    29: "若七成八歲兒童能通過，則在測驗中成功代表八歲智力水準，success 最符合語意。",
    30: "with＋名詞＋V-ing 構成附帶狀況，with 100 being the average 表示「以 100 為平均值」。",
    31: "珊瑚礁暗處讓魚產卵並躲避掠食者，escape from predators 表示「逃離天敵」。",
    32: "失去棲地的物種可能瀕危甚至完全消失，endangered 表示「瀕臨絕種的」。",
    33: "世上雖有數千珊瑚礁，令人遺憾的是如今面臨危險；sadly 表達負面評價。",
    34: "超過三分之一可能十年內死亡，有些甚至撐不了那麼久；last 表示「持續、存活」。",
    35: "尚有許多疑問，但三個主要原因已被確認，identified 表示「辨識、確認」。",
    36: "河川溪流把污染物帶進海洋，carry 表示「攜帶」。",
    37: "毒物使珊瑚變弱，對疾病的抵抗力下降；resistance to 是「對……的抵抗力」。",
    38: "藻類死亡後珊瑚失去顏色，最後也會死亡；eventually 表示「最終」。",
    39: "最後一項導致珊瑚礁消失的因素是人類，disappearance 表示「消失」。",
    40: "有人因珊瑚鮮豔美麗而折下收藏作紀念品，souvenirs 表示「紀念品」。",
    41: "文章從瑞士軍方需求、Elsener 設計到名稱流傳，目的在說明瑞士刀的起源，選 A。",
    42: "It was a lifesaver 承接軍方決定為每位士兵配發多功能刀，這項需求拯救了受德國進口品競爭的瑞士刀商，選 A。",
    43: "軍方認為新款的開瓶器並非生存必需，所以未配發給軍官，選 D。",
    44: "美軍覺得 Schweizer Offizier Messer 太難念，便直接稱為 Swiss army knife，因此選 C。",
    45: "1964 年停止運作、失去地面聯繫的 Vanguard I 衛星是第一件太空垃圾，選 D。",
    46: "Vanguard I 雖持續繞地球運行卻未造成任何後果，使科學家起初不擔心，選 C。",
    47: "太空垃圾可能撞擊運作中的衛星並損害太空船，因此會對太空梭造成問題，選 D。",
    48: "地面站已建成，用來監控較大型垃圾並避免碰撞；密切監看是已執行的措施，選 B。",
    49: "美國未滿 21 歲者體內只要有任何酒精便不得駕車，所以合法濃度是 0.000%，選 A。",
    50: "研究測量能量飲料酒精含量並比較不同時間的呼氣結果，目的是找出飲料與 ABT 結果的關係，選 B。",
    51: "受試者喝完整罐飲料後，分別在一分鐘與十五分鐘接受酒精呼氣測試，選 C。",
    52: "一分鐘內可能驗出，十五分鐘後全都驗不出，顯示測試時間是最重要因素，選 D。",
    53: "第一段說婚姻狀態只是一般解讀，這項習俗主要與印度教相關，因此最初是表達宗教信仰，選 B。",
    54: "第三眼向內聚焦於神，bindi 提醒信徒把神放在思想前端，意義是敬神，選 C。",
    55: "印度教相信紅色能為已婚夫婦帶來好運，因此傳統 bindi 採紅色，選 D。",
    56: "現代 bindi 有各種尺寸、顏色與貼紙形式，已更像時尚宣言與裝飾品，選 B。"
  };
  const groups = {
    G1: {
      title: "Telephone area codes",
      passage: `<p>An area code is a section of a telephone number which generally represents the geographical area that the phone receiving the call is based in. It is the two or three digits just before the local number. If the number 16 is in the same area as the number making the call, an area code usually doesn’t need to be dialed. The local number, 17, must always be dialed in its entirety.</p><p>The area code was introduced in the United States in 1947. It was created 18 the format of XYX, with X being any number between 2-9 and Y being either 1 or 0. Cities and areas with higher populations would have a smaller first and third digit, and 1 as the center digit. New York, being the largest city in the United States, was 19 the 212 area code, followed by Los Angeles at 213.</p><p>In countries other than the United States and Canada, the area code generally determines the 20 of a call. Calls within an area code and often a small group of neighboring area codes are normally charged at a lower rate than outside the area code.</p>`
    },
    G2: {
      title: "Factors determining a coin’s value",
      passage: `<p>For coin collectors who invest money in coins, the value of a coin is determined by various factors. First, scarcity is a major determinant. 21 a coin is, the more it is worth. Note, however, that rarity has little to do with the 22 of a coin. Many thousand-year-old coins often sell for no more than a few dollars because there are a lot of them around, 23 a 1913 Liberty Head Nickel may sell for over one million US dollars because there are only five in existence. Furthermore, the demand for a particular coin will also 24 influence coin values. Some coins may command higher prices because they are more popular with collectors. For example, a 1798 dime is much rarer than a 1916 dime, but the 25 sells for significantly more, simply because many more people collect early 20th century dimes than dimes from the 1700s.</p>`
    },
    G3: {
      title: "Alfred Binet and intelligence testing",
      passage: `<p>French psychologist Alfred Binet (1859-1911) took a different approach from most other psychologists of his day: He was interested in the workings of the 26 mind rather than the nature of mental illness. He wanted to find a way to measure the ability to think and reason, apart from education in any particular field. In 1905 he developed a test in which he 27 children do tasks such as follow commands, copy patterns, name objects, and put things in order or arrange them properly. He later created a standard of measuring children’s intelligence 28 the data he had collected from the French children he studied. If 70 percent of 8-year-olds could pass a particular test, then 29 on the test represented an 8-year-old’s level of intelligence. From Binet’s work, the phrase “intelligence quotient” (“IQ”) entered the English vocabulary. The IQ is the ratio of “mental age” to chronological age times 100, with 100 30 the average. So, an 8-year-old who passes the 10-year-old’s test would have an IQ of 10/8 times 100, or 125.</p>`
    },
    G4: {
      title: "Threats to coral reefs",
      passage: `<p>Often called “rainforests of the sea,” coral reefs provide a home for 25% of all species in the ocean. They are stony structures full of dark hideaways where fish and sea animals can lay their eggs and 31 from predators. Without these underwater “apartment houses,” there would be fewer fish in the ocean. Some species might even become 32 or disappear completely.</p><p>There are thousands of reefs in the world; 33, however, they are now in serious danger. More than one-third are in such bad shape that they could die within ten years. Many might not even 34 that long! Scientists are working hard to find out what leads to this destruction. There are still a lot of questions unanswered, but three main causes have been 35.</p><p>The first cause is pollution on land. The pollutants run with rainwater into rivers and streams, which 36 the poisons into the ocean. Chemicals from the poisons kill reefs or make them weak, so they have less 37 to diseases.</p><p>Global warming is another reason. Higher ocean temperatures kill the important food source for the coral—the algae, the tiny greenish-gold water plants that live on coral. When the algae die, the coral loses its color and it also dies 38. This process, known as “coral bleaching,” has happened more and more frequently in recent years.</p><p>The last factor contributing to the 39 of coral reefs is people. People sometimes crash into reefs with their boats or drop anchors on them, breaking off large chunks of coral. Divers who walk on reefs can also do serious damage. Moreover, some people even break coral off to collect for 40 since it is so colorful and pretty.</p><p>How can we help the reefs? We need to learn more about them and work together to stop the activities that may threaten their existence.</p>`
    },
    G5: {
      title: "The origin of the Swiss army knife",
      passage: `<p>The Swiss army knife is a popular device that is recognized all over the world. In Switzerland, there is a saying that every good Swiss citizen has one in his or her pocket. But the knife had humble beginnings.</p><p>In the late nineteenth century, the Swiss army issued its soldiers a gun that required a special screwdriver to dismantle and clean it. At the same time, canned food was becoming common in the army. Swiss generals decided to issue each soldier a standard knife to serve both as a screwdriver and a can opener.</p><p>It was a lifesaver for Swiss knife makers, who were struggling to compete with cheaper German imports. In 1884, Carl Elsener, head of the Swiss knife manufacturer Victorinox, seized that opportunity with both hands, and designed a soldier’s knife that the army loved. It was a simple knife with one big blade, a can opener, and a screwdriver.</p><p>A few years after the soldier’s knife was issued, the “Schweizer Offizier Messer,” or Swiss Officer’s Knife, came on the market. Interestingly, the Officer’s Knife was never given to those serving in the army. The Swiss military purchasers considered the new model with a corkscrew for opening wine not “essential for survival,” so officers had to buy this new model by themselves. But its special multi-functional design later launched the knife as a global brand. After the Second World War, a great number of American soldiers were stationed in Europe. And as they could buy the Swiss army knife at shops on military bases, they bought huge quantities of them. However, it seems that “Schweizer Offizier Messer” was too difficult for them to say, so they just called it the Swiss army knife, and that is the name it is now known by all over the world.</p>`
    },
    G6: {
      title: "Space junk",
      passage: `<p>Space is where our future is—trips to the Moon, Mars and beyond. Most people would think that aside from comets and stars there is little else out there. But, since our space journey started we have left so much trash there that scientists are now concerned that if we don’t clean it up, we may all be in mortal danger.</p><p>The first piece of space junk was created in 1964, when the American satellite Vanguard I stopped operating and lost its connection with the ground center. However, since it kept orbiting around the Earth without any consequences, scientists became increasingly comfortable abandoning things that no longer served any useful purpose in space.</p><p>It is estimated that there are currently over 500,000 pieces of man-made trash orbiting the Earth at speeds of up to 17,500 miles per hour. The junk varies from tiny pieces of paint chipped off rockets to cameras, huge fuel tanks, and even odd items like the million-dollar tool kit that astronaut Heidemarie Stefanyshyn-Piper lost during a spacewalk.</p><p>The major problem with the space trash is that it may hit working satellites and damage traveling spacecraft. Moreover, pieces of junk may collide with each other and break into fragments which fall back to the Earth. To avoid this, scientists have devised several ways for clearing the sky. Ground stations have been built to monitor larger pieces of space trash to prevent them from crashing into working satellites or space shuttles. Future plans include a cooperative effort among many nations to stop littering in space and to clean up the trash already there.</p>`
    },
    G7: {
      title: "Energy drinks and alcohol breath tests",
      passage: `<p>An alcohol breath test (ABT) is often used by the police to find out whether a person is drunk while driving. In the United States, the legal blood alcohol limit is 0.08% for people aged 21 years or older, while people under 21 are not allowed to drive a car with any level of alcohol in their body. A “positive” test result, a result over the legal limit, allows the police to arrest the driver. However, many people who tested positive on the test have claimed that they only drank a “non-alcoholic” energy drink. Can one of these energy drinks really cause someone to test positive on an ABT? Researchers in Missouri set up an experiment to find out.</p><p>First, the amount of alcohol in 27 different popular energy drinks was measured. All but one had an alcohol level greater than 0.005%. In nine of the 27 drinks, the alcohol level was at least 0.096%. The scientists then investigated the possibility that these small levels of alcohol could be detected by an ABT. They asked test subjects to drink a full can or bottle of an energy drink and then gave each subject an ABT one minute and 15 minutes after the drink was finished.</p><p>For 11 of the 27 energy drinks, the ABT did detect the presence of alcohol if the test was given within one minute after the drink was taken. However, alcohol could not be detected for any of the drinks if the test was given 15 minutes after the drink was consumed. This shows that when the test is taken plays a crucial role in the test result. The sooner the test is conducted after the consumption of these drinks, the more likely a positive alcohol reading will be obtained.</p>`
    },
    G8: {
      title: "The Indian bindi",
      passage: `<p>The majority of Indian women wear a red dot between their eyebrows. While it is generally taken as an indicator of their marital status, the practice is primarily related to the Hindu religion. The dot goes by different names in different Hindi dialects, and “bindi” is the one that is most commonly known. Traditionally, the dot carries no gender restriction: Men as well as women wear it. However, the tradition of men wearing it has faded in recent times, so nowadays we see a lot more women than men wearing one.</p><p>The position of the bindi is standard: center of the forehead, close to the eyebrows. It represents a third, or inner eye. Hindu tradition holds that all people have three eyes: The two outer ones are used for seeing the outside world, and the third one is there to focus inward toward God. As such, the dot signifies piety and serves as a constant reminder to keep God in the front of a believer’s thoughts.</p><p>Red is the traditional color of the dot. It is said that in ancient times a man would place a drop of blood between his wife’s eyes to seal their marriage. According to Hindu beliefs, the color red is believed to bring good fortune to the married couple. Today, people go with different colors depending upon their preferences. Women often wear dots that match the color of their clothes. Decorative or sticker bindis come in all sizes, colors and variations, and can be worn by young and old, married and unmarried people alike. Wearing a bindi has become more of a fashion statement than a religious custom.</p>`
    }
  };
  const V=(no,answer,stem,options)=>({no,cat:"C1",tags:["語境搭配"],lang:"單題",textType:"詞彙題",answer,stem,options,explain:explanations[no]});
  const C=(no,answer,group,stem,options,tag="語境選詞")=>({no,cat:"C2",tags:[tag],lang:"題組",textType:"綜合測驗",answer,group,stem,options,explain:explanations[no]});
  const FILL={A:"resistance",B:"identified",C:"last",D:"escape",E:"sadly",F:"eventually",G:"disappearance",H:"souvenirs",I:"endangered",J:"carry"};
  const F=(no,answer,stem)=>({no,cat:"C2",tags:["文意選填"],lang:"題組",textType:"文意選填",answer,group:"G4",stem,options:FILL,explain:explanations[no]});
  const R=(no,answer,group,stem,options,tag="細節檢索")=>({no,cat:"C4",tags:[tag],lang:"題組",textType:"閱讀測驗",answer,group,stem,options,explain:explanations[no]});
  const questions=[
    V(1,"B","It rained so hard yesterday that the baseball game had to be ______ until next Saturday.",{A:"surrendered",B:"postponed",C:"abandoned",D:"opposed"}),
    V(2,"C","As more people rely on the Internet for information, it has ______ newspapers as the most important source of news.",{A:"distributed",B:"subtracted",C:"replaced",D:"transferred"}),
    V(3,"A","Having saved enough money, Joy ______ two trips for this summer vacation, one to France and the other to Australia.",{A:"booked",B:"observed",C:"enclosed",D:"deposited"}),
    V(4,"D","Since I do not fully understand your proposal, I am not in the position to make any ______ on it.",{A:"difference",B:"solution",C:"demand",D:"comment"}),
    V(5,"C","Betty was ______ to accept her friend’s suggestion because she thought she could come up with a better idea herself.",{A:"tolerable",B:"sensitive",C:"reluctant",D:"modest"}),
    V(6,"B","The bank tries its best to attract more customers. Its staff members are always available to provide ______ service.",{A:"singular",B:"prompt",C:"expensive",D:"probable"}),
    V(7,"A","John’s part-time experience at the cafeteria is good ______ for running his own restaurant.",{A:"preparation",B:"recognition",C:"formation",D:"calculation"}),
    V(8,"D","Women’s fashions are ______ changing: One season they may favor pantsuits, but the next season they may prefer miniskirts.",{A:"lately",B:"shortly",C:"relatively",D:"constantly"}),
    V(9,"B","Standing on the seashore, we saw a ______ of seagulls flying over the ocean before they glided down and settled on the water.",{A:"pack",B:"flock",C:"herd",D:"school"}),
    V(10,"C","The book is not only informative but also ______, making me laugh and feel relaxed while reading it.",{A:"understanding",B:"infecting",C:"entertaining",D:"annoying"}),
    V(11,"C","After working in front of my computer for the entire day, my neck and shoulders got so ______ that I couldn’t even turn my head.",{A:"dense",B:"harsh",C:"stiff",D:"concrete"}),
    V(12,"D","Getting a flu shot before the start of flu season gives our body a chance to build up protection against the ______ that could make us sick.",{A:"poison",B:"misery",C:"leak",D:"virus"}),
    V(13,"A","The kingdom began to ______ after the death of its ruler, and was soon taken over by a neighboring country.",{A:"collapse",B:"dismiss",C:"rebel",D:"withdraw"}),
    V(14,"D","Though Kevin failed in last year’s singing contest, he did not feel ______. This year he practiced day and night and finally won first place in the competition.",{A:"relieved",B:"suspected",C:"discounted",D:"frustrated"}),
    V(15,"C","Emma and Joe are looking for a live-in babysitter for their three-year-old twins, ______ one who knows how to cook.",{A:"initially",B:"apparently",C:"preferably",D:"considerably"}),
    C(16,"B","G1","If the number ______ is in the same area as the number making the call, an area code usually doesn’t need to be dialed.",{A:"calling",B:"being called",C:"having called",D:"has been calling"},"時態語意"),
    C(17,"D","G1","The local number, ______, must always be dialed in its entirety.",{A:"in fact",B:"to illustrate",C:"at the same time",D:"on the other hand"},"轉承語"),
    C(18,"D","G1","It was created ______ the format of XYX.",{A:"for",B:"as",C:"by",D:"in"}),
    C(19,"B","G1","New York, being the largest city in the United States, was ______ the 212 area code.",{A:"reserved",B:"assigned",C:"represented",D:"assembled"}),
    C(20,"A","G1","The area code generally determines the ______ of a call.",{A:"cost",B:"format",C:"quality",D:"distance"}),
    C(21,"D","G2","______ a coin is, the more it is worth.",{A:"Rare as",B:"The rare",C:"Rarest",D:"The rarer"},"時態語意"),
    C(22,"A","G2","Rarity has little to do with the ______ of a coin.",{A:"age",B:"shape",C:"size",D:"weight"}),
    C(23,"B","G2","Many thousand-year-old coins often sell for no more than a few dollars because there are a lot of them around, ______ a 1913 Liberty Head Nickel may sell for over one million US dollars because there are only five in existence.",{A:"since",B:"while",C:"whether",D:"if"},"邏輯關係"),
    C(24,"C","G2","The demand for a particular coin will also ______ influence coin values.",{A:"merely",B:"hardly",C:"greatly",D:"roughly"}),
    C(25,"C","G2","A 1798 dime is much rarer than a 1916 dime, but the ______ sells for significantly more.",{A:"older",B:"better",C:"latter",D:"bigger"},"篇章指涉"),
    C(26,"B","G3","He was interested in the workings of the ______ mind rather than the nature of mental illness.",{A:"contrary",B:"normal",C:"detective",D:"mutual"}),
    C(27,"A","G3","In 1905 he developed a test in which he ______ children do tasks such as follow commands and copy patterns.",{A:"had",B:"kept",C:"wanted",D:"asked"},"時態語意"),
    C(28,"B","G3","He later created a standard of measuring children’s intelligence ______ the data he had collected.",{A:"composed of",B:"based on",C:"resulting in",D:"fighting against"}),
    C(29,"A","G3","If 70 percent of 8-year-olds could pass a particular test, then ______ on the test represented an 8-year-old’s level of intelligence.",{A:"success",B:"objection",C:"agreement",D:"discovery"}),
    C(30,"D","G3","The IQ is the ratio of “mental age” to chronological age times 100, with 100 ______ the average.",{A:"is",B:"are",C:"been",D:"being"},"時態語意"),
    F(31,"D","They are stony structures full of dark hideaways where fish and sea animals can lay their eggs and ______ from predators."),
    F(32,"I","Some species might even become ______ or disappear completely."),
    F(33,"E","There are thousands of reefs in the world; ______, however, they are now in serious danger."),
    F(34,"C","Many might not even ______ that long!"),
    F(35,"B","There are still a lot of questions unanswered, but three main causes have been ______."),
    F(36,"J","The pollutants run with rainwater into rivers and streams, which ______ the poisons into the ocean."),
    F(37,"A","Chemicals from the poisons kill reefs or make them weak, so they have less ______ to diseases."),
    F(38,"F","When the algae die, the coral loses its color and it also dies ______."),
    F(39,"G","The last factor contributing to the ______ of coral reefs is people."),
    F(40,"H","Some people even break coral off to collect for ______ since it is so colorful and pretty."),
    R(41,"A","G5","What is the main purpose of the passage?",{A:"To explain the origin of the Swiss army knife.",B:"To introduce the functions of the Swiss army knife.",C:"To emphasize the importance of the Swiss army knife.",D:"To tell a story about the designer of the Swiss army knife."},"主旨判讀"),
    R(42,"A","G5","What does “It” in the third paragraph refer to?",{A:"The Swiss army needed a knife for every soldier.",B:"Every good Swiss citizen had a knife in his pocket.",C:"Swiss knives were competing with imported knives.",D:"Canned food was becoming popular in the Swiss army."},"指涉判讀"),
    R(43,"D","G5","Why didn’t the Swiss army purchase the Swiss Officer’s Knife?",{A:"The design of the knife was too simple.",B:"The knife was sold out to American soldiers.",C:"The army had no budget to make the purchase.",D:"The new design was not considered necessary for officers to own."}),
    R(44,"C","G5","Who gave the name “the Swiss army knife” to the knife discussed in the passage?",{A:"Carl Elsener.",B:"Swiss generals.",C:"American soldiers.",D:"German businessmen."}),
    R(45,"D","G6","What was the first piece of man-made space trash?",{A:"A camera.",B:"A tool kit.",C:"A fuel tank.",D:"A broken satellite."}),
    R(46,"C","G6","Why were scientists NOT concerned about space trash in the beginning?",{A:"It no longer served any useful purpose.",B:"It was millions of miles away from the Earth.",C:"It did not cause any problems.",D:"It was regarded as similar to comets and stars."}),
    R(47,"D","G6","Which of the following statements is true about space junk?",{A:"It is huge, heavy machines.",B:"It never changes position.",C:"It floats slowly around the Earth.",D:"It may cause problems for space shuttles."}),
    R(48,"B","G6","What has been done about the space trash problem?",{A:"Scientists have cleaned up most of the trash.",B:"Large pieces of space trash are being closely watched.",C:"Many nations have worked together to stop polluting space.",D:"Ground stations are built to help store the trash properly in space."}),
    R(49,"A","G7","For a person who just turned 20, what is the legal alcohol level allowed while driving in the US?",{A:"0.000%.",B:"0.005%.",C:"0.080%.",D:"0.096%."}),
    R(50,"B","G7","What is the purpose of the Missouri experiment?",{A:"To introduce a new method of calculating blood alcohol levels.",B:"To discover the relation between energy drinks and ABT test results.",C:"To warn about the dangers of drinking energy drinks mixed with alcohol.",D:"To challenge the current legal alcohol limit for drivers in the United States."},"主旨判讀"),
    R(51,"C","G7","What were the participants of the experiment asked to do after they finished their energy drink?",{A:"To line up in the laboratory.",B:"To recall the drink brands.",C:"To take an alcohol breath test.",D:"To check their breath for freshness."}),
    R(52,"D","G7","What is the most important factor that affects the ABT test result for energy drink consumers?",{A:"The age of the person who takes the test.",B:"The place where the test is given.",C:"The equipment that the test uses.",D:"The time when the test is taken."}),
    R(53,"B","G8","Why did people in India start wearing a red dot on their forehead?",{A:"To indicate their social rank.",B:"To show their religious belief.",C:"To display their financial status.",D:"To highlight their family background."}),
    R(54,"C","G8","What is the significance of the third eye in Hindu tradition?",{A:"To stay in harmony with nature.",B:"To observe the outside world more clearly.",C:"To pay respect to God.",D:"To see things with a subjective view."}),
    R(55,"D","G8","Why was red chosen as the original color of the bindi?",{A:"The red dot represented the blood of God.",B:"Red stood for a wife’s love for her husband.",C:"The word “bindi” means “red” in some Hindi dialects.",D:"Red was supposed to bring blessings to a married couple."}),
    R(56,"B","G8","Which of the following statements is true about the practice of wearing a bindi today?",{A:"Bindis are worn anywhere on the face now.",B:"Bindis are now used as a decorative item.",C:"Most Indian women do not like to wear bindis anymore.",D:"Wearing a bindi has become more popular among Indian men."})
  ];
  window.BANK=window.BANK||[];
  window.BANK.push({year:102,era:"學測",groups,questions});
})();
