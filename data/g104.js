// 104 學年度學科能力測驗英文考科（單選題 56 題）
// 題目與答案取自大學入學考試中心官方試題、答案。
(function () {
  const explanations = {
    1: "員工可自行選擇六點到十一點間上班，屬於 flexible work schedule「彈性工時」。",
    2: "以獎勵良好行為、處罰不當行為教孩子是非，reward 表示「獎勵」。",
    3: "為遵守有限預算而捨棄昂貴產品，選較負擔得起的 affordable 電視。",
    4: "書中的美麗圖畫是 illustrations「插圖」，與有趣故事共同吸引讀者。",
    5: "機場因暴風雪關閉，延誤的是前往巴黎的出發 departure。",
    6: "感到地震後立刻跑出教室，swiftly 表示「迅速地」。",
    7: "電梯為安全不可超載，400 公斤是 maximum capacity「最大載重」。",
    8: "擁抱與親吻是親密行為 intimate behavior。",
    9: "藥品包裝上說明用法與時間的文字在 labels「標籤」上。",
    10: "航班無故取消使乘客憤怒地爭辯，furiously 表示「盛怒地」。",
    11: "正式上市前提供免費樣品，是為宣傳產品；promote 表示「推廣」。",
    12: "父親向說話者保證會協助規劃旅程，assure＋受詞＋that 子句表示「向某人保證」。",
    13: "食用油醜聞引發加強食品銷售管制的呼聲，regulation 表示「規範、管理」。",
    14: "下班後應多與親友互動，而不是獨自打電玩；interact with 表示「與……互動」。",
    15: "機場對疫區旅客進行伊波拉篩檢，screenings 表示「篩檢」。",
    16: "人們為健康效益而練習太極拳，practice 在此表示「練習、習練」。",
    17: "後面列舉兩個詩意招式名稱，like 表示「例如、像」。",
    18: "主詞 These movements 為複數，句子缺謂語，故用 allow；allow＋受詞＋to V 表示「讓……能夠」。",
    19: "前文是 physical，後文談身心溝通與心理效果，故與之並列的是 mental exercise。",
    20: "太極帶來平靜與信心，表示能減輕壓力；reduce stress 是自然搭配。",
    21: "前句說藍鳥是吉兆，接著啄木鳥也被視為吉兆，Similarly 表示「同樣地」。",
    22: "孔雀在印度、中日被視為幸運，其他地區卻受蔑視，因此並非普遍 universally 被視為幸運。",
    23: "羽毛上的眼睛被說能提醒孔雀有邪惡正在接近，approaching 作形容詞修飾 evil。",
    24: "統治家族以孔雀象徵身分與財富，represent 表示「代表、象徵」。",
    25: "孔雀羽毛的眼狀圖案被聯想到 evil eyes，因此被視為最不吉利 unlucky 的部位。",
    26: "from A to B 的 A、B 應為平行名詞結構；from early humans gathering... to the first cultivation...，故用 gathering。",
    27: "主句完整，with over 7,000 different kinds in existence 補充蘋果品種數量。",
    28: "雖有七千多品種，多數家蘋果仍可追溯同一祖先；variety 表示「多樣性」。",
    29: "蘋果在十七世紀由殖民者帶到北美，為過去特定時間的被動動作，故用 were brought。",
    30: "蘋果如今在世界各地經常被食用，regularly eaten 語意最自然。",
    31: "紙夾是用來夾住紙張的常見器具，device 表示「裝置、用具」。",
    32: "別針便宜而且容易取下，removable 表示「可移除的」。",
    33: "鋼線有彈性，可被拉伸並扭成各種夾狀物，twisted into 表示「扭成」。",
    34: "最常與紙夾發明聯繫的名字是 Johan Vaaler，associated with 表示「與……相關」。",
    35: "今日熟悉的內外雙環設計由英國公司發明，familiar 表示「熟悉的、常見的」。",
    36: "這種紙夾因此有時被稱為 Gem clip，be known as 表示「被稱為」。",
    37: "紙夾在二戰挪威成為團結象徵，扮演重要歷史角色，historical 最符合語境。",
    38: "納粹禁止挪威人佩戴任何國家團結的象徵，symbol of... 是「……的象徵」。",
    39: "挪威人佩戴紙夾是反抗占領、表達團結的抗議行動，in protest 表示「以示抗議」。",
    40: "戰後立巨型紙夾雕像是為紀念 Vaaler，honor 表示「向……致敬」。",
    41: "第二段明說創辦人 Camake Valaule 是體育老師，因此選 B。",
    42: "Camake 擔心 75 分鐘演出大多是沒有樂器伴奏的 a cappella，觀眾會睡著，因此選 B。",
    43: "孩子唱傳統歌謠後，父母才察覺自己不會唱；blurred memory 指父母對自身傳統的模糊理解，選 D。",
    44: "風災迫使學校與村落遷移，無法帶走山林房舍，卻能帶著文化，讓 Camake 更體認傳承的重要，選 C。",
    45: "全文以 Power 太太為例，說明過多檢查與治療可能造成身體和財務傷害，主旨選 C。",
    46: "即使檢查結果為陰性，原醫師仍繼續安排更多檢查，正是她遭遇的問題，選 C。",
    47: "Mr. Power 說很難判斷「他們」何時越界，前後談的都是安排過多治療的醫師，they 指 physicians，選 A。",
    48: "作者開頭即警告過度治療會造成傷害，案例也顯示不必要的檢查太多，態度最符合 A。",
    49: "父親靠紡織致富，但父母生活節儉得像家境貧窮，因此家庭富有卻非常節省，選 A。",
    50: "第四段明說非洲之旅激起 Cartier-Bresson 對攝影的興趣，選 B。",
    51: "他拍攝 Gandhi 遇刺後的死亡及其對印度的立即影響，完成珍貴攝影專題，選 C。",
    52: "他以手持相機捕捉日常生活稍縱即逝的影像，且反對後製；四個選項中符合的是 C。",
    53: "文章說明久坐如何改變代謝、升高血糖血壓並增加疾病風險，目的在解釋長時間坐著的健康威脅，選 D。",
    54: "sedentary lifestyle 與久坐、缺少活動相連，因此最接近 inactive「不活動的」，選 C。",
    55: "第二段指出全天經常以短暫輕度活動打斷久坐，便足以降低血糖與血壓，選 C。",
    56: "研究發現固定運動者在運動當天反而少活動約 30%，可推論他們那天較少站立或走動，選 B。"
  };
  const groups = {
    G1: {
      title: "Tai Chi Chuan",
      passage: `<p>Tai Chi Chuan is a type of ancient Chinese martial art. People 16 Tai Chi mainly for its health benefits. This centuries-old Chinese mind-body exercise is now gaining popularity in the United States.</p><p>The most familiar aspect of Tai Chi Chuan is the hand form, which is a series of slow-flowing movements with poetic names 17 “dragons stirring up the wind” and “wave hands like clouds.” These movements, forming an exercise system, 18 one to effortlessly experience the vital life force, or the Qi energy, in one’s body.</p><p>Tai Chi Chuan is not only a physical but also a 19 exercise. Psychologically, this exercise may increase communication between the body and the mind and enable one to deal with other people more effectively. It 20 stress and creates calmness and confidence. Relaxation and a feeling of joy are among the first noticeable differences in a Tai Chi student.</p>`
    },
    G2: {
      title: "Lucky and unlucky birds",
      passage: `<p>Much like the dove and robin, the bluebird is considered a very lucky sign in most cultures, particularly when seen in the spring. 21, a woodpecker, when seen near the home, is regarded as a good sign. In contrast, the peacock is not 22 seen as lucky. In places like India, the peacock is considered lucky because the great many “eyes” on its feathers are said to alert it to 23 evil. Peacocks are also highly valued in China and Japan, where they are kept as symbols by the ruling families to 24 their status and wealth. However, the peacock receives only scorn from the rest of the world. The feathers of peacocks are considered the most 25 part of the bird because the eye-shaped markings on them are associated with “evil eyes.” To bring the evil eye into the home is thus believed to invite trouble and sorrow.</p>`
    },
    G3: {
      title: "The history of apples",
      passage: `<p>Nutritional products that can be collected from trees include fruits, nuts, seeds, leaves, and bark. Tree products have been an important part of diets for thousands of years, from early humans 26 fruits and nuts to the first cultivation of important trees, such as mango and apple.</p><p>The apple is one of the world’s most cultivated fruit trees, 27 over 7,000 different kinds in existence. Despite their great 28, however, most domesticated apples can be traced back to a common ancestor, the wild apple of Central Asia, <i>Malus sieversii</i>. Apples have been grown for thousands of years in Asia and Europe, and 29 to North America by European colonists in the 17th century. Today, apples are 30 eaten the world over and form the basis for multi-million dollar industries. In 2005, at least 55 million tons of apples were grown worldwide, which generated a value of about $10 billion.</p>`
    },
    G4: {
      title: "The invention and symbolism of the paperclip",
      passage: `<p>A paperclip, made of steel wire bent into a hooped shape, is an instrument used to hold sheets of paper together. This common 31 is a wonder of simplicity and function. But where did this simple, cheap, and indispensable invention come from?</p><p>In the late 19th century, the most common way to hold papers together was by using a pin. Although the pin was an inexpensive tool and was easily 32, it would leave holes in the paper. Later, as steel wire became more common, inventors began to notice its elastic feature. With this feature, it could be stretched and 33 various clip-like objects. In the years just prior to 1900, quite a few paperclip designs emerged. The name most frequently 34 the paperclip invention is Johan Vaaler, a Norwegian inventor. However, Vaaler’s clips were not the same as the paperclips currently in use. Specifically, they did not have the interior loop we see today. The 35 looped design was invented by Gem Manufacturing Ltd. in England. This clip is therefore sometimes 36 the Gem clip.</p><p>Because of Vaaler, the paperclip played an important 37 role in Norway. During World War II, Norway was occupied by the Nazis. Norwegians were prohibited from wearing any 38 of their national unity, such as buttons with the initials of their king. Thus, in 39, they started wearing paperclips to show their solidarity. The reason for doing this was simple: Paperclips were a Norwegian invention whose original function was to bind together. After the war, a giant paperclip statue was erected in Oslo to 40 Vaaler—even though his design was never actually manufactured.</p>`
    },
    G5: {
      title: "Taiwu Elementary School Folk Singers",
      passage: `<p>In 2009, the Taiwu Elementary School Folk Singers were invited to perform in Belgium, France, Germany, and Luxemburg. In 2011, they were voted as one of the world’s top five performance groups by audiences of Japan Broadcasting Corporation’s Amazing Voice program.</p><p>Recalling the group’s first tour in Europe, Camake Valaule, a physical education teacher and the founder of the Taiwu Elementary School Folk Singers, admitted that he felt very nervous. He was worried that the audience would fall asleep since most of the 75-minute performance was a cappella, that is, singing without instrumental sound. Surprisingly, the audience listened with full focus and high spirits. Camake said, “They told me afterward that through our performance, they had a vision of our country, our village, without having to visit it. This experience greatly boosted our confidence.”</p><p>According to Camake Valaule, singing traditional ballads has helped students and their parents to re-understand their culture. “It used to be that the only ones who could sing these songs were tribal elders aged between 50 and 60. Now with the children performing the pieces, parents are beginning to ask, ‘Why do we not know how to sing these ballads?’ Many times nowadays, it is the children who teach the songs to their parents, putting back the pieces of a blurred memory.”</p><p>Winning international fame, however, was neither the original intention nor the main reason why Camake founded the group in 2006. The most important thing was to make children understand why they sing these songs and to preserve and pass on their culture. Referring to the relocation of Taiwu Elementary School and Taiwu Village following Typhoon Morakot in August 2009, Camake said, “We could not take the forest or our houses in the mountains with us; but we were able to bring our culture along. As long as the children are willing to sing, I will always be there for them, singing with them and leading them to experience the meaning of the ballads.”</p>`
    },
    G6: {
      title: "The dangers of medical overtreatment",
      passage: `<p>When it comes to medical care, many patients and doctors believe “more is better.” But what they do not realize is that overtreatment—too many scans, too many blood tests, too many procedures—may pose harm. Sometimes a test leads you down a path to more and more testing, some of which may be invasive, or to treatment for things that should be left alone.</p><p>Terrence Power, for example, complained that after his wife learned she had Wegener’s disease, an uncommon disorder of the immune system, they found it difficult to refuse testing recommended by her physician. The doctor insisted on office visits every three weeks, even when she was feeling well. He frequently ordered blood tests and X-rays, and repeatedly referred her to specialists for even minor complaints. Even when tests came back negative, more were ordered, and she was hospitalized as a precaution when she developed a cold. She had as many as 25 doctor visits during one six-month period. The couple was spending about $30,000 a year for her care.</p><p>After several years of physical suffering and near financial ruin from the medical costs, the couple began questioning the treatment after consulting with other patients in online support groups. “It’s a really hard thing to determine when they’ve crossed the line,” Mr. Power said. “You think she’s getting the best care in the world, but after a while you start to wonder: What is the objective?” Mr. Power then spoke with his own primary care doctor, who advised him to find a new specialist to oversee Mrs. Power’s care. Under the new doctor’s care, the regular testing stopped and Mrs. Power’s condition stabilized. Now she sees the doctor only four or five times a year.</p>`
    },
    G7: {
      title: "Henri Cartier-Bresson",
      passage: `<p>Henri Cartier-Bresson (1908–2004) is one of the most original and influential figures in the history of photography. His humane, spontaneous photographs helped establish photojournalism as an art form.</p><p>Cartier-Bresson’s family was wealthy—his father made a fortune as a textile manufacturer—but Cartier-Bresson later joked that due to his parents’ frugal ways, it often seemed as though his family was poor.</p><p>Educated in Paris, Cartier-Bresson developed an early love for literature and the arts. As a teenager, Cartier-Bresson rebelled against his parents’ formal ways of education. In his early adulthood, he even drifted toward communism. But it was art that remained at the center of his life.</p><p>Cartier-Bresson traveled to Africa in 1931 to hunt antelope and boar. And Africa fueled another interest in him: photography. He then wandered around the world with his camera, using a handheld camera to catch images from fleeting moments of everyday life.</p><p>Not long after World War II, Cartier-Bresson traveled east, spending considerable time in India, where he met and photographed Gandhi shortly before his assassination in 1948. Cartier-Bresson’s subsequent work to document Gandhi’s death and its immediate impact on the country became one of Life Magazine’s most prized photo essays.</p><p>Cartier-Bresson’s approach to photography remained much the same throughout his life. He made clear his dislike of images that had been improved by artificial light, darkroom effects, and even cropping. The naturalist in Cartier-Bresson believed that all editing should be done when the photo is taken. In 1952, his first book, <i>The Decisive Moment</i>, a rich collection of his work spanning two decades, was published. “There is nothing in this world that does not have a decisive moment,” he said.</p><p>In 1968, he began to turn away from photography and returned to his passion for drawing and painting.</p>`
    },
    G8: {
      title: "The sitting disease",
      passage: `<p>You’ve most likely heard the news by now: A car-commuting, desk-bound, TV-watching lifestyle can be harmful to our health. All the time that we spend rooted in the chair is linked to increased risks of so many deadly diseases that experts have named this modern-day health epidemic the “sitting disease.”</p><p>Sitting for too long slows down the body’s metabolism and the way enzymes break down our fat reserves, raising both blood sugar levels and blood pressure. Small amounts of regular activity, even just standing and moving around, throughout the day is enough to bring the increased levels back down. And those small amounts of activity add up—30 minutes of light activity in two or three-minute bursts can be just as effective as a half-hour block of exercise. But without that activity, blood sugar levels and blood pressure keep creeping up, steadily damaging the inside of the arteries and increasing the risk of diabetes, heart disease, stroke, and other serious diseases. In essence, fundamental changes in biology occur if you sit for too long.</p><p>But wait, you’re a runner. You needn’t worry about the harm of a sedentary lifestyle because you exercise regularly, right? Well, not so fast. Recent studies show that people spend an average of 64 hours a week sitting, whether or not they exercise 150 minutes a week as recommended by World Health Organization (WHO). Regular exercisers, furthermore, are found to be about 30 percent less active on days when they exercise. Overall, most people simply aren’t exercising or moving around enough to counteract all the harm that can result from sitting nine hours or more a day.</p><p>Scared straight out of your chair? Good. The remedy is as simple as standing up and taking activity breaks.</p>`
    }
  };

  const V=(no,answer,stem,options)=>({no,cat:"C1",tags:["語境搭配"],lang:"單題",textType:"詞彙題",answer,stem,options,explain:explanations[no]});
  const C=(no,answer,group,stem,options,tag="語境選詞")=>({no,cat:"C2",tags:[tag],lang:"題組",textType:"綜合測驗",answer,group,stem,options,explain:explanations[no]});
  const FILL={A:"familiar",B:"honor",C:"device",D:"removable",E:"known as",F:"protest",G:"symbol",H:"twisted into",I:"associated with",J:"historical"};
  const F=(no,answer,stem)=>({no,cat:"C2",tags:["文意選填"],lang:"題組",textType:"文意選填",answer,group:"G4",stem,options:FILL,explain:explanations[no]});
  const R=(no,answer,group,stem,options,tag="細節檢索")=>({no,cat:"C4",tags:[tag],lang:"題組",textType:"閱讀測驗",answer,group,stem,options,explain:explanations[no]});
  const questions=[
    V(1,"D","Nowadays many companies adopt a ______ work schedule which allows their employees to decide when to arrive at work—from as early as 6 a.m. to as late as 11 a.m.",{A:"relative",B:"severe",C:"primitive",D:"flexible"}),
    V(2,"C","To teach children right from wrong, some parents will ______ their children when they behave well and punish them when they misbehave.",{A:"settle",B:"declare",C:"reward",D:"neglect"}),
    V(3,"C","To stick to a tight budget, Robert bought a more ______ LED TV instead of a fancy, expensive 3D TV.",{A:"technical",B:"significant",C:"affordable",D:"expressive"}),
    V(4,"B","David’s new book made it to the best-seller list because of its beautiful ______ and amusing stories.",{A:"operations",B:"illustrations",C:"engagements",D:"accomplishments"}),
    V(5,"D","The airport was closed because of the snowstorm, and our ______ for Paris had to be delayed until the following day.",{A:"movement",B:"registration",C:"tendency",D:"departure"}),
    V(6,"A","The moment the students felt the earthquake, they ran ______ out of the classroom to an open area outside.",{A:"swiftly",B:"nearly",C:"loosely",D:"formally"}),
    V(7,"D","The ______ capacity of this elevator is 400 kilograms. For safety reasons, it shouldn’t be overloaded.",{A:"delicate",B:"automatic",C:"essential",D:"maximum"}),
    V(8,"A","An open display of ______ behavior between men and women, such as hugging and kissing, is not allowed in some conservative societies.",{A:"intimate",B:"ashamed",C:"earnest",D:"urgent"}),
    V(9,"C","When taking medicine, we should read the instructions on the ______ carefully because they provide important information such as how and when to take it.",{A:"medals",B:"quotes",C:"labels",D:"recipes"}),
    V(10,"B","The angry passengers argued ______ with the airline staff because their flight was cancelled without any reason.",{A:"evidently",B:"furiously",C:"obediently",D:"suspiciously"}),
    V(11,"C","To ______ the new product, the company offered some free samples before they officially launched it.",{A:"contribute",B:"impress",C:"promote",D:"estimate"}),
    V(12,"B","I was worried about my first overseas trip, but my father ______ me that he would help plan the trip so that nothing would go wrong.",{A:"rescued",B:"assured",C:"inspired",D:"conveyed"}),
    V(13,"C","The recent cooking oil scandals have led to calls for tougher ______ of sales of food products.",{A:"tolerance",B:"guarantee",C:"regulation",D:"distribution"}),
    V(14,"B","John should ______ more often with his friends and family after work, instead of staying in his room to play computer games.",{A:"explore",B:"interact",C:"negotiate",D:"participate"}),
    V(15,"A","To prevent the spread of the Ebola virus from West Africa to the rest of the world, many airports have begun Ebola ______ for passengers from the infected areas.",{A:"screenings",B:"listings",C:"clippings",D:"blockings"}),
    C(16,"A","G1","People ______ Tai Chi mainly for its health benefits.",{A:"practice",B:"consult",C:"display",D:"manage"}),
    C(17,"B","G1","The hand form is a series of slow-flowing movements with poetic names ______ “dragons stirring up the wind” and “wave hands like clouds.”",{A:"from",B:"like",C:"between",D:"regarding"}),
    C(18,"A","G1","These movements, forming an exercise system, ______ one to effortlessly experience the vital life force.",{A:"allow",B:"allows",C:"allowed",D:"allowing"},"時態語意"),
    C(19,"B","G1","Tai Chi Chuan is not only a physical but also a ______ exercise.",{A:"formal",B:"mental",C:"social",D:"global"}),
    C(20,"C","G1","It ______ stress and creates calmness and confidence.",{A:"imposes",B:"offends",C:"reduces",D:"disturbs"}),
    C(21,"D","G2","______, a woodpecker, when seen near the home, is regarded as a good sign.",{A:"Therefore",B:"Nevertheless",C:"Roughly",D:"Similarly"},"轉承語"),
    C(22,"C","G2","In contrast, the peacock is not ______ seen as lucky.",{A:"officially",B:"mutually",C:"universally",D:"eventually"}),
    C(23,"B","G2","The great many “eyes” on its feathers are said to alert it to ______ evil.",{A:"approach",B:"approaching",C:"approached",D:"be approaching"},"時態語意"),
    C(24,"D","G2","They are kept as symbols by the ruling families to ______ their status and wealth.",{A:"replace",B:"disguise",C:"distinguish",D:"represent"}),
    C(25,"A","G2","The feathers of peacocks are considered the most ______ part of the bird.",{A:"unlucky",B:"illogical",C:"impossible",D:"unnecessary"}),
    C(26,"D","G3","Tree products have been an important part of diets for thousands of years, from early humans ______ fruits and nuts to the first cultivation of important trees.",{A:"to gather",B:"gather",C:"gathered",D:"gathering"},"時態語意"),
    C(27,"B","G3","The apple is one of the world’s most cultivated fruit trees, ______ over 7,000 different kinds in existence.",{A:"all",B:"with",C:"around",D:"still"}),
    C(28,"A","G3","Despite their great ______, most domesticated apples can be traced back to a common ancestor.",{A:"variety",B:"harvest",C:"condition",D:"discovery"}),
    C(29,"C","G3","Apples have been grown for thousands of years in Asia and Europe, and ______ to North America by European colonists in the 17th century.",{A:"bring",B:"have brought",C:"were brought",D:"have been brought"},"時態語意"),
    C(30,"A","G3","Today, apples are ______ eaten the world over and form the basis for multi-million dollar industries.",{A:"regularly",B:"particularly",C:"permanently",D:"barely"}),
    F(31,"C","This common ______ is a wonder of simplicity and function."),
    F(32,"D","Although the pin was an inexpensive tool and was easily ______, it would leave holes in the paper."),
    F(33,"H","With this feature, it could be stretched and ______ various clip-like objects."),
    F(34,"I","The name most frequently ______ the paperclip invention is Johan Vaaler."),
    F(35,"A","The ______ looped design was invented by Gem Manufacturing Ltd. in England."),
    F(36,"E","This clip is therefore sometimes ______ the Gem clip."),
    F(37,"J","Because of Vaaler, the paperclip played an important ______ role in Norway."),
    F(38,"G","Norwegians were prohibited from wearing any ______ of their national unity."),
    F(39,"F","Thus, in ______, they started wearing paperclips to show their solidarity."),
    F(40,"B","After the war, a giant paperclip statue was erected in Oslo to ______ Vaaler."),
    R(41,"B","G5","Which of the following is true about Taiwu Elementary School Folk Singers?",{A:"The group was first established in 2009.",B:"The group was founded by a PE teacher.",C:"The singers usually sing popular folk songs.",D:"The singers learn to sing from their parents."}),
    R(42,"B","G5","On his first trip to Europe, why did Camake think the audience might fall asleep?",{A:"The average age of the audience was between fifty and sixty.",B:"Most of the performance was not accompanied by any instrument.",C:"Nobody could understand the language and the meaning of the songs.",D:"The audience could not visualize the theme sung by the school children."}),
    R(43,"D","G5","What does “the pieces of a blurred memory” in the third paragraph most likely refer to?",{A:"The children’s ignorance of their own culture.",B:"The fading memories about old tribal people.",C:"The broken pieces of knowledge taught at school.",D:"The parents’ vague understanding of their own tradition."},"語境推義"),
    R(44,"C","G5","What did Camake realize after the incident of Typhoon Morakot?",{A:"The significance of the relocation of Taiwu Elementary School.",B:"The need to respect nature to avoid being destroyed by it.",C:"The importance of passing on the traditional culture.",D:"The consequence of building houses in the forest."},"推論判讀"),
    R(45,"C","G6","What is the main idea of this passage?",{A:"Treatments do not always cause harmful side effects.",B:"Patients tend to believe more testing is better treatment.",C:"Too much medical care may not be beneficial to patients.",D:"Doctors generally recommend office visits that are necessary."},"主旨判讀"),
    R(46,"C","G6","Which of the following was a problem for Mrs. Power during her medical treatment?",{A:"She had to be hospitalized for three weeks whenever she had a cold.",B:"She didn’t have any insurance, so she went broke because of her illness.",C:"When test results showed she was fine, her doctor still ordered more tests.",D:"Her doctor asked her to consult other specialists due to her constant complaints."}),
    R(47,"A","G6","Who does “they” in the third paragraph most likely refer to?",{A:"Physicians.",B:"Other patients.",C:"Mr. and Mrs. Power.",D:"The online support groups."},"指涉判讀"),
    R(48,"A","G6","Which of the following best describes the author’s attitude toward medical tests?",{A:"More tests than necessary are too much.",B:"Medical tests are essential for disease prevention.",C:"Many tests are needed for confirmation of diagnosis.",D:"Doctors’ interpretations of test results are seldom wrong."},"推論判讀"),
    R(49,"A","G7","Which of the following best describes Cartier-Bresson’s family background?",{A:"His family was rich but was very economical.",B:"His father went to Paris to open a textile factory.",C:"His wealthy family went bankrupt and became poor.",D:"His parents were very liberal in their ways of education."}),
    R(50,"B","G7","Which of the following is true about Cartier-Bresson’s career in photography?",{A:"He devoted himself to photography all his life.",B:"He developed a passion for photography when he traveled to Africa.",C:"He quit photography right after the publication of The Decisive Moment.",D:"During World War II, he documented the everyday life of the Indian people."}),
    R(51,"C","G7","What significance did Cartier-Bresson have to Gandhi of India?",{A:"He witnessed Gandhi’s assassination in 1948.",B:"He was the first photographer to take Gandhi’s photo.",C:"He used photos to document the effect of Gandhi’s death on India.",D:"His photos told the world who was guilty of assassinating Gandhi."}),
    R(52,"C","G7","Which of the following is true about Cartier-Bresson’s approach to photography?",{A:"He never waited for a decisive moment to shoot photos.",B:"He preferred to edit his images carefully in his darkroom.",C:"Most of his photos described things that happen every day.",D:"He experimented with different ways and settled on being a naturalist."}),
    R(53,"D","G8","What is the purpose of this passage?",{A:"To point out the challenges of the modern lifestyle.",B:"To discuss how a modern epidemic may spread quickly.",C:"To explore the effects of regular exercise to our body.",D:"To explain the threat to our health from long hours of sitting."},"主旨判讀"),
    R(54,"C","G8","What does the word “sedentary” in the third paragraph most likely mean?",{A:"Modern.",B:"Risky.",C:"Inactive.",D:"Epidemic."},"語境推義"),
    R(55,"C","G8","What is the best way to bring down high blood sugar level and blood pressure?",{A:"Exercising for 150 minutes or more every week.",B:"Getting rid of the habit of car commuting and TV watching.",C:"Interrupting sitting time with light activity as often as possible.",D:"Standing or moving around for at least two or three minutes every day."}),
    R(56,"B","G8","Which of the following may be inferred about those who do serious exercise?",{A:"They often live longer than those who don’t exercise.",B:"They tend to stand or move around less on days they work out.",C:"They generally spend less time sitting than those who are inactive.",D:"They usually do not meet the standard of exercise recommended by WHO."},"推論判讀")
  ];
  window.BANK=window.BANK||[];
  window.BANK.push({year:104,era:"學測",groups,questions});
})();
