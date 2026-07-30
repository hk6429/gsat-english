import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, ".sources", "115");
const outDir = path.join(root, "data");

const answers = {
  1:"B",2:"C",3:"B",4:"A",5:"D",6:"A",7:"C",8:"B",9:"C",10:"D",
  11:"B",12:"C",13:"D",14:"D",15:"A",16:"A",17:"B",18:"D",19:"B",20:"C",
  21:"E",22:"G",23:"F",24:"D",25:"A",26:"J",27:"B",28:"I",29:"H",30:"C",
  31:"C",32:"E",33:"A",34:"B",35:"C",36:"D",37:"A",38:"C",39:"D",40:"A",
  41:"A",42:"B",43:"C",44:"D",45:"A",46:"D",49:"A,D,E"
};

const passages = {
  G1: `<p>From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, 11, do the same thing—only their choice of meeting place is a giant pile of poop.</p><p>A new study indicates that rhinos have a smelly way to 12. Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important 13 about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is 14 that they will fight.</p><p>The researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly 15 the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.</p>`,
  G2: `<p>The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to 16 the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum 17, for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.</p><p>Dim sum is more than just an example of Chinese cuisine. It is 18 an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and 19 were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as 20. Ultimately, dim sum—the food—is only a small part of the dim sum experience.</p>`,
  G3: `<p>Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means 21. In fact, you are giving your brain and your body some time to recharge and turn up refreshed.</p><p>Research has shown that napping is linked with brain size and 22; specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia 23 in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly 24 age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help 25 acquired knowledge and learned skills.</p><p>Understanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others 26 shorter naps, such as 15 to 20 minutes. The best nap length, however, may 27 a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly 28 benefits.</p><p>Furthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with 29 light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing 30, which can make your naps more effective.</p>`,
  G4: `<p>Smiling is a gesture that many people engage in dozens of times a day without thought. Most people believe that smiling is an expression of good feelings, a simple way to show happiness and friendliness. But does this hold true across time and cultures?</p><p>31 In the West, for example, portraits of men and women before the 1700s typically depicted them with a serious, unsmiling expression. The absence of smiles stemmed partly from the attempt to hide their decayed teeth caused by poor dental hygiene. More importantly, smiling and laughter had long been perceived in the society as manifestations of a lack of self-control and good manners. Paintings with white-toothed smiles emerged after the 1700s, with the gradual rise of a culture that valued perception and responsiveness.</p><p>Recent studies also show that interpretations of smiling may vary from culture to culture. While in most cultures smiling is associated with positive emotions, in certain cultures the same person can be judged as less intelligent when smiling. 32</p><p>The amount people smile is culturally influenced as well. People smile more when they are from countries that are high in individualism and low in population. These are often places where the needs and rights of the individual take precedence over those of the group. 33 Newcomers from different parts of the world are found to smile more. Without a shared language, they often resort to smiling to get along with others. For them, smiling is a straightforward way to indicate that one is reliable and trustworthy.</p><p>34 As many psychologists now point out, this simple gesture is in fact far more complicated than it may appear.</p>`,
  G5: `<p>In March 2022, the Endurance—the lost vessel of the famed polar explorer Ernest Shackleton—was found in Antarctica, 107 years after it sank. The news made headlines around the world, not only for the incredible achievement of the search team, but because the discovery marked the final chapter in a legendary story of extraordinary courage and perseverance.</p><p>On August 4, 1914, Sir Ernest Shackleton, along with a skilled crew of 27, set sail on the Endurance toward the South Pole, hoping to make the first land crossing over Antarctica. From Plymouth, UK, the team arrived in Buenos Aires, Argentina, and on November 5 reached South Georgia Island, the last settlement of civilization en route to Antarctica. There, the real challenge began. Two days after leaving South Georgia in December, the Endurance encountered floating ice, and was soon completely trapped in pack ice.</p><p>The worthy vessel held up for nine months, drifting down south slowly and then pushed northward by the ice. Gradually, the pressure from the ice buckled the planks. Freezing water rushed in and exacerbated the situation. On October 27, 1915, Shackleton ordered his crew to abandon the ship, pitching tents on the ice a mile and a half away. Weeks later, they watched the Endurance sink beneath the Weddell Sea.</p><p>The next five months, the crew camped out on the pack ice as it drifted north, surviving on penguins, seals, and seaweed. Finally, the ice broke up enough for them to escape in lifeboats. For seven days, they sailed more than a hundred miles to the uninhabited Elephant Island. But the crew couldn’t survive long there. So, Shackleton made a dangerous attempt to get help: With five crew members, he sailed 800 miles over 16 days across freezing, stormy seas to South Georgia Island. Then the group hiked for 36 hours across the island to reach a whaling station.</p><p>Help was almost at hand, but ice and bad weather hindered their return. On August 30, 1916, Shackleton finally got back to Elephant Island with a ship big enough to rescue the rest of his men. All the members of the expedition team survived, but the Endurance remained lost under the sea until its discovery in 2022.</p>`,
  G6: `<p>In many old castles in Europe, visitors often find a fantastic spiral staircase, which provides a captivating focal point as it winds up the building. This prominent structure actually has a long and rich heritage.</p><p>In the Old Testament, reference is made to spiral staircases in the Temple of Solomon, suggesting that they were already in use by around 1,000 BC. The oldest spiral staircase still standing today is at Trajan’s Column in Rome. The staircase was built in 113 AD, with a total of 185 steps carved in stone and marble. Around this time, spiral staircases began to find much wider use in Roman architecture and across Europe.</p><p>Throughout the Middle Ages, winding staircases became a well-established feature of European castles, mainly for their advantages in helping to defend against attackers. To begin with, these staircases were quite narrow, so attackers would have to ascend one at a time, making it impossible to launch a mass attack. Also, the stairs were designed to turn clockwise upwards. This means that ascenders would have their right hand tight against the narrowest part of the staircases, close to the central pole, and as a result were unable to use their sword effectively. The attackers’ challenge was further complicated by the uneven steps of the staircase, often strategically designed by the castle owners. The defenders, living in the castles, were familiar with the stair pattern and could retreat up them very swiftly; while the attackers were much more likely to stumble and fall, particularly in the dimly lit confines of the staircase.</p><p>Being associated with medieval castles and kings, spiral staircases gradually won popularity in European architecture, with new materials emerging to cope with customers’ needs. In Victorian times, cast iron spiral staircases were popular for public buildings and homes for the rich. In the latter half of the 20th century, steel frames became cost-effective, and thus affordable for a much wider staircase market. Then, steel spiral staircases as fire escape stairs appeared in many buildings. Today, spiral staircases come in a wide variety of materials: steel, wood, concrete, and recently even glass. The timeless appeal of their classical design makes spiral staircases a much-desired feature in luxury homes, offices, and public buildings nowadays.</p>`,
  G7: `<p>Have you ever wondered why north comes at the top of a map? Well, north may seem a natural choice for the top spot today, but that wasn’t always the case.</p><p>Documents from ancient times indicate that many maps in early ages were pointing to the east, where the sun rose. In ancient India, for example, maps were most likely oriented to the east. Though there is no physical evidence to support this, the word <i>dakshina</i> “south” in Indian languages also means “right,” suggesting that ancient Indians were oriented toward the east, and therefore south was on their right-hand side. Ample evidences from the Old Testament also suggest that east was at the top of maps in pre-Biblical and Biblical eras, a reason why east is still referred to as the “Orient” today.</p><p>In the oldest surviving maps, south is at the top, and north points down. Early Egyptian maps showed south on top, most likely because the Nile, vital to Egyptian livelihood, originated in the south. As rivers were believed to flow downward, “up” was therefore south. Map makers in Arabia also drew maps with south on top since the earliest Muslims lived north of Mecca, and a south-oriented map would show the followers looking up toward their holy city.</p><p>The preference for north arose during the European age of exploration. At the time, sailors relied on the North Star to find their way across the Mediterranean and later the Atlantic. By the 16th century, when Europe’s search for trading routes was at its peak, maps became Eurocentric, with north on top. The expansion of European imperialism in the following centuries further established the “north up” practice as the standard.</p><p>Today, map orientation is taking on a new perspective. In perhaps our most common interaction with maps—the use of GPS systems on our phones and in our cars, directions have ceased to be as important. The layouts are dynamic, oriented toward our travel path.</p><p>So, perhaps the north-on-top practice is less a rule and more a blip. After centuries of technological advancements, it seems we’ve ended up right where we began in ancient times: with ourselves in the middle, and our destinations at the top.</p>`,
  G8: `<p>Located along the sparkling coastline of the Pacific Ocean, Wonder Village is a famous indigenous district in eastern Taiwan. The historic village exhibits the traditional way of life of the tribe there. However, it does not live in the past. As numerous new restaurants and shops have sprung up in recent years, it has become not only a cultural center but also a unique commercial zone.</p><p><b>A. Oh Eco</b> sells environmentally friendly items such as reusable bottles, bamboo toothbrushes, and soy candles.</p><p><b>B. After Work</b> serves handcrafted beer and hand-made gourmet pizzas.</p><p><b>C. Aroma Paradise</b> creates fragrances customized to each shopper’s special preferences.</p><p><b>D. Something Different</b> is an antique store featuring traditional-style home accessories.</p><p><b>E. Beyond World</b> carries products only from local makers and small businesses owned by indigenous people.</p><p><b>F. The Pinery</b> serves innovative pineapple-themed menu items.</p>`
};

const groups = Object.fromEntries(Object.entries(passages).map(([id, passage], index) => [
  id,
  { title: [
    "White rhinoceroses communicate through communal dung piles",
    "The history and social culture of dim sum",
    "How to benefit from napping",
    "How smiling varies across time and cultures",
    "Shackleton and the Endurance expedition",
    "The history and design of spiral staircases",
    "How map orientation evolved",
    "Specialty stores in Wonder Village"
  ][index], passage }
]));

const sharedNap = {A:"retain",B:"depend on",C:"atmosphere",D:"delay",E:"unproductive",F:"risk",G:"function",H:"minimal",I:"dramatic",J:"point to"};
const sharedSmile = {
  A:"Another crucial factor is a society’s immigration diversity.",
  B:"Various factors have thus contributed to the phenomenon of smiling.",
  C:"For most of recorded human history, the open smile has been deeply unfashionable.",
  D:"A genuine smile indicates contentment, while a forced smile suggests underlying distress.",
  E:"In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”"
};

const rows = [
  [1,"C1","詞義辨析","詞彙題","單題","The mayor has such a ______ schedule that it takes weeks to arrange an interview with her.",{A:"hasty",B:"tight",C:"diligent",D:"routine"},"tight schedule 是「行程緊湊」，最符合要等數週才能排到訪談的語境。"],
  [2,"C1","詞義辨析","詞彙題","單題","Jane started as an ______ art designer, but now she has a professional studio of her own.",{A:"official",B:"instant",C:"amateur",D:"elementary"},"前後以 but 對比；由業餘的 amateur 設計師成長為擁有工作室的專業人士。"],
  [3,"C1","語境搭配","詞彙題","單題","The teaching ______ at the famous high school soon attracted more than a dozen well-qualified applicants.",{A:"career",B:"vacancy",C:"expectation",D:"inspiration"},"會吸引申請者的是職缺 vacancy；teaching vacancy 指教職空缺。"],
  [4,"C1","語境搭配","詞彙題","單題","Designed by a young engineer, the new product has created far more profit than ______ expected.",{A:"initially",B:"genuinely",C:"alternatively",D:"fundamentally"},"initially expected 表示「起初預期」，與實際利潤遠高於原先預期相呼應。"],
  [5,"C1","語境搭配","詞彙題","單題","It has been confirmed that a balanced ______ of fruit and vegetables is a key element to good health.",{A:"dimension",B:"integration",C:"provision",D:"consumption"},"consumption 表示攝取或食用；balanced consumption of fruit and vegetables 語意完整。"],
  [6,"C1","詞義辨析","詞彙題","單題","As a shy boy afraid of making public appearances, Timmy ______ the thought of speaking before large audiences.",{A:"dreads",B:"stresses",C:"wanders",D:"escapes"},"dread the thought of… 是「一想到……就害怕」，呼應害羞且怕公開露面。"],
  [7,"C1","語境搭配","詞彙題","單題","To the newly-crowned winner of the piano competition, music is his life’s ______, which he has devoted himself to whole-heartedly.",{A:"resource",B:"impact",C:"passion",D:"emphasis"},"devote himself whole-heartedly 呼應一生熱愛的 passion。"],
  [8,"C1","詞義辨析","詞彙題","單題","The drunk driver who shouted at passers-by and ______ them with glass bottles was quickly arrested by the police.",{A:"shattered",B:"assaulted",C:"overturned",D:"condemned"},"assaulted 指攻擊；用玻璃瓶攻擊路人後遭警方逮捕。"],
  [9,"C1","語境搭配","詞彙題","單題","There were so many people at the bus station that I had to ______ my way through the crowd to board the bus in time.",{A:"crash",B:"tumble",C:"elbow",D:"struggle"},"elbow one’s way through 指用手肘在人群中擠出路來。"],
  [10,"C1","詞義辨析","詞彙題","單題","Deadly shootings on US campuses have raised ______ concerns about how to prevent such tragic incidents from happening again.",{A:"swift",B:"brutal",C:"harsh",D:"grave"},"grave concerns 是「嚴重的憂慮」，符合致命槍擊事件的語氣。"],
  [11,"C2","轉承語","綜合測驗","題組","Choose the best answer for blank 11.",{A:"what is more",B:"it turns out",C:"in other words",D:"all in all"},"it turns out 引出令人意外的新發現：白犀牛也會聚集交換訊息。","G1"],
  [12,"C2","語境選詞","綜合測驗","題組","Choose the best answer for blank 12.",{A:"demonstrate",B:"immigrate",C:"communicate",D:"manipulate"},"下文說犀牛在糞便中留下訊息，因此是 communicate。","G1"],
  [13,"C2","語境選詞","綜合測驗","題組","Choose the best answer for blank 13.",{A:"doubts",B:"icons",C:"matches",D:"clues"},"糞便中的化學物質提供年齡、性別與健康狀況的線索 clues。","G1"],
  [14,"C2","邏輯關係","綜合測驗","題組","Choose the best answer for blank 14.",{A:"hardly surprising",B:"more acceptable",C:"truly important",D:"less likely"},"成員掌握彼此狀況可維持和平，因此打鬥的可能性較低 less likely。","G1"],
  [15,"C2","語境搭配","綜合測驗","題組","Choose the best answer for blank 15.",{A:"responsive to",B:"annoyed at",C:"considerate of",D:"tolerant with"},"公犀牛聞得更久且常回來，表示對帶有母犀牛訊息的氣味有反應 responsive to。","G1"],
  [16,"C2","語境選詞","綜合測驗","題組","Choose the best answer for blank 16.",{A:"accommodate",B:"compensate",C:"anticipate",D:"reinforce"},"茶館提供旅人休息，accommodate 有接待、容納之意。","G2"],
  [17,"C2","時態語意","綜合測驗","題組","Choose the best answer for blank 17.",{A:"would hardly develop",B:"had yet to develop",C:"was fast developing",D:"had almost developed"},"當時飲茶被認為不宜配食物，所以點心文化「尚未發展」had yet to develop。","G2"],
  [18,"C2","語境搭配","綜合測驗","題組","Choose the best answer for blank 18.",{A:"passed on to",B:"brought up as",C:"thought to have",D:"meant to be"},"dim sum 不只是一種料理，更是 meant to be 一種愉快的用餐體驗。","G2"],
  [19,"C2","篇章指涉","綜合測驗","題組","Choose the best answer for blank 19.",{A:"if so",B:"as such",C:"by then",D:"in that"},"前句說小份量原本只是「點心」，as such 指「以這樣的身分／因此」最順。","G2"],
  [20,"C2","主旨連貫","綜合測驗","題組","Choose the best answer for blank 20.",{A:"a widely known delicacy",B:"an intimate romantic dinner",C:"a joyful social activity",D:"an amazing local cuisine"},"大群人共享菜餚，重點是愉快的社交活動，而非只談食物。","G2"],
  ...Array.from({length:10},(_,i)=>[21+i,"C2","文意選填","文意選填","題組",`Choose the best answer for blank ${21+i}.`,sharedNap,[
    "前文說午睡不必感到罪惡，後文列出益處，所以午睡絕非 unproductive。",
    "brain size and function 是自然搭配，後文 cognition and memory 也說明腦功能。",
    "dementia risk 指罹患失智症的風險。",
    "午睡可維持腦容量，因此能 delay 與年齡相關的腦萎縮。",
    "retain acquired knowledge 指保留已習得的知識。",
    "有些研究 point to 較短的午睡時間，意為「指出」。",
    "最佳午睡長度可能 depend on 個人的身體狀況與疲勞程度。",
    "即使五分鐘午睡也可能帶來顯著的 dramatic 效益。",
    "適合午睡的是光線 minimal 的安靜空間。",
    "舒緩的自然聲能營造放鬆的 atmosphere。"
  ][i],"G3"]),
  ...Array.from({length:4},(_,i)=>[31+i,"C3","篇章結構","篇章結構","題組",`Choose the sentence that best fits blank ${31+i}.`,sharedSmile,[
    "下一句以西方 1700 年前肖像不露笑容為例，因此先總述歷史上開口笑曾長期不流行。",
    "前文談某些文化把微笑者看成較不聰明，俄羅斯諺語正好提供具體例證。",
    "後文立即談不同地區的移民與共同語言，故此處應引出移民多樣性。",
    "末段總結前述歷史、文化與人口因素，因此用 Various factors have thus contributed… 收束。"
  ][i],"G4"]),
  [35,"C4","主旨判讀","閱讀測驗","題組","What is this passage mainly about?",{A:"A renowned Antarctic explorer.",B:"The extreme weather in Antarctica.",C:"A challenging voyage to Antarctica.",D:"The amazing discovery of a sunken ship."},"全文重心是 Shackleton 團隊從受困、棄船到全員獲救的艱險南極航程，選 C。","G5"],
  [36,"C4","語境推義","閱讀測驗","題組","Which of the following idioms is closest in meaning to “exacerbated the situation” in the third paragraph?",{A:"Broke the ice.",B:"Cost an arm and a leg.",C:"Missed the boat.",D:"Added fuel to the fire."},"exacerbate 是使情況惡化；Added fuel to the fire（火上加油）語意最接近。","G5"],
  [37,"C4","細節檢索","閱讀測驗","題組","According to the passage, which of the following is true about Shackleton and his Antarctic expedition?",{A:"His journey lasted more than two years.",B:"He was the first man to cross over the Antarctic.",C:"His team camped out on Elephant Island for five months.",D:"He sent five crew members on a lifeboat to get help from a whaling station."},"航程自 1914 年 8 月開始，到 1916 年 8 月 30 日救援，超過兩年，故 A 正確。","G5"],
  [38,"C5","圖文整合","閱讀測驗","題組","Which route shows the correct course of the Endurance after leaving South Georgia?",{A:"",B:"",C:"",D:""},"船自 South Georgia 向南進入 Weddell Sea，受冰流推向北方，最後人員前往 Elephant Island，再折返 South Georgia 求援；圖 C 符合。","G5","img/115/q38.png"],
  [39,"C4","篇章理解","閱讀測驗","題組","Which question can the passage answer?",{A:"Where was the first spiral staircase constructed?",B:"Who was the first designer of the spiral staircase?",C:"What is the world’s most famous spiral staircase?",D:"Why is the spiral staircase popular in modern times?"},"末段說古典設計的持久吸引力使旋轉樓梯至今仍受歡迎，因此文章能回答 D。","G6"],
  [40,"C4","指涉判讀","閱讀測驗","題組","What does “them” in the third paragraph refer to?",{A:"Stairs.",B:"Confines.",C:"Attackers.",D:"Defenders."},"defenders could retreat up them 中，能沿著往上退的是 stairs。","G6"],
  [41,"C4","資訊排序","閱讀測驗","題組","According to the passage, which is a correct time sequence of the materials used in making spiral staircases?",{A:"stone → iron → steel → glass",B:"stone → wood → iron → steel",C:"iron → marble → wood → glass",D:"marble → wood → stone → concrete"},"文章依序提到古羅馬石材、維多利亞時代鑄鐵、20 世紀鋼材、近代玻璃，選 A。","G6"],
  [42,"C4","推論判讀","閱讀測驗","題組","Which statement can be inferred about spiral staircases in the Medieval Ages?",{A:"The staircase was too narrow to allow any quick retreat.",B:"The clockwise design favored right-handed castle defenders.",C:"The uneven steps made it easier to ascend than descend the stairs.",D:"The staircase was dark enough for defenders to hide from attackers."},"順時針向上的設計讓進攻者右手貼近中央，難以揮劍，因而有利熟悉地形的守軍，選 B。","G6"],
  [43,"C4","主旨判讀","閱讀測驗","題組","What is the passage mainly about?",{A:"Why east is referred to as the “Orient.”",B:"How maps differ from GPS in function.",C:"How map orientation evolved over time.",D:"Why maps were important during the age of exploration."},"文章依時序說明地圖頂端曾朝東、朝南、朝北，到 GPS 動態朝向，主旨是地圖方位的演變。","G7"],
  [44,"C4","指涉判讀","閱讀測驗","題組","What does “this” refer to in the second paragraph?",{A:"The word dakshina.",B:"Physical evidence.",C:"Ancient India.",D:"East-orientation of maps."},"Though there is no physical evidence to support this 的 this 指前句「古印度地圖朝東」。","G7"],
  [45,"C4","語境推義","閱讀測驗","題組","Which is closest in meaning to “a blip” in the last paragraph?",{A:"A temporary state.",B:"An urgent need.",C:"A critical decision.",D:"An advanced system."},"作者把北上方視為歷史中的短暫現象，a blip 即 temporary state。","G7"],
  [46,"C4","細節檢索","閱讀測驗","題組","Which of the following statements is true?",{A:"Sailors took the North Star as their final destination.",B:"The GPS system has a fixed direction for orientation.",C:"South was placed at the top of maps in the pre-Biblical era.",D:"Old Islamic maps put south at the top for religious purposes."},"早期穆斯林位於麥加北方，南上方的地圖讓信徒仰望聖城，屬宗教因素，選 D。","G7"],
  [49,"C5","多文本整合","混合題","題組","The Chen family wants (1) a 19th-century oil lamp, (2) recycled plastic sunglasses, and (3) an aboriginal wooden beads necklace. Which stores should they visit?",{A:"Oh Eco",B:"After Work",C:"Aroma Paradise",D:"Something Different",E:"Beyond World",F:"The Pinery"},"環保再生商品到 A、十九世紀古董到 D、原住民工藝品到 E，因此答案為 A、D、E。","G8",null,true]
];

const passRows = JSON.parse(fs.readFileSync(path.join(sourceDir, "pass-disc.json"), "utf8"));
const passMap = {};
for (const row of passRows) {
  const rawNo = row["115學年度學科能力測驗"];
  const no = Number(String(rawNo ?? "").replace("*", ""));
  if (!Number.isInteger(no) || !answers[no]) continue;
  passMap[no] = { pass: Number(row.__EMPTY) / 100, disc: Number(row.__EMPTY_9) / 100 };
}

const questions = rows.map(([no,cat,tag,textType,lang,stem,options,explain,group,image,multi]) => ({
  no, cat, tags:[tag], lang, textType, answer:answers[no],
  ...passMap[no], ...(group ? {group} : {}), stem, options, ...(image ? {image} : {}),
  ...(no === 38 ? {imageAlt:"四幅南極航線圖，標示 South Georgia、Elephant Island、Weddell Sea 與航線箭頭"} : {}),
  explain, ...(multi ? {multi:true} : {})
}));

if (questions.length !== 47) throw new Error(`Expected 47 questions, got ${questions.length}`);
for (const q of questions) {
  if (!q.answer || !Number.isFinite(q.pass) || !Number.isFinite(q.disc)) {
    throw new Error(`Missing official answer/statistics for question ${q.no}`);
  }
}

const answerText = fs.readFileSync(path.join(sourceDir, "answer.txt"), "utf8");
const officialAnswers = {};
for (const match of answerText.matchAll(/(?:^|\s)(\d{1,2})\s+(\/|[A-J]{1,6})(?=\s|$)/g)) {
  officialAnswers[Number(match[1])] = match[2];
}
for (const q of questions) {
  const expected = q.answer.replaceAll(",", "");
  if (officialAnswers[q.no] !== expected) {
    throw new Error(`Official answer text mismatch at question ${q.no}: expected ${expected}, got ${officialAnswers[q.no]}`);
  }
}

const optionRows = JSON.parse(fs.readFileSync(path.join(sourceDir, "options.json"), "utf8"));
const stats = {};
const letters = "ABCDEFGHIJ".split("");
for (let i = 0; i < optionRows.length; i++) {
  const row = optionRows[i];
  const rawNo = row["115學年度學科能力測驗"];
  const no = Number(String(rawNo ?? "").replace("*", ""));
  if (!Number.isInteger(no) || !answers[no] || row.__EMPTY !== "T") continue;
  const low = optionRows[i + 2];
  if (!low || low.__EMPTY !== "L") throw new Error(`Missing low group row for question ${no}`);
  const pick = r => Object.fromEntries(letters.flatMap((letter, index) => {
    const value = String(r[`__EMPTY_${index + 2}`] ?? "").replace("*", "");
    return value === "" ? [] : [[letter, Number(value)]];
  }));
  stats[`學測|115|${no}`] = {
    all: pick(row),
    low: pick(low),
    unanswered: {all:Number(row.__EMPTY_1), low:Number(low.__EMPTY_1)}
  };
}
if (Object.keys(stats).length !== 47) throw new Error(`Expected 47 option-stat rows, got ${Object.keys(stats).length}`);

fs.mkdirSync(outDir, {recursive:true});
const bank = {year:115, era:"學測", groups, questions};
fs.writeFileSync(path.join(outDir, "g115.js"),
  `// 115 學年度學科能力測驗英文考科（選擇題 47 題）\n` +
  `// 題目、答案、答對率、鑑別度與選項分析均取自大學入學考試中心官方資料；explain 為本站自製解析。\n` +
  `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank,null,2)});\n`);

const sources = {
  "學測|115": {
    page:"https://www.ceec.edu.tw/xmdoc/cont?sid=0Q056289672991900264&xsmsid=0J018604485538810196",
    question:"https://www.ceec.edu.tw/files/file_pool/1/0q054532302653501476/02-115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%A9%A6%E5%8D%B7.pdf",
    answer:"https://www.ceec.edu.tw/files/file_pool/1/0q040594609847120321/02-115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E7%AD%94%E6%A1%88.pdf",
    passDisc:"https://www.ceec.edu.tw/files/file_pool/1/0Q110276786224904029/42-46_%E5%90%84%E7%A7%91%E7%AD%94%E5%B0%8D%E7%8E%87%E5%8F%8A%E9%91%91%E5%88%A5%E5%BA%A6%E8%A1%A8115.xls",
    options:"https://www.ceec.edu.tw/files/file_pool/1/0Q110276786869873056/51-55_%E5%90%84%E7%A7%91%E9%81%B8%E6%93%87%E9%A1%8C%E9%81%B8%E9%A0%85%E5%88%86%E6%9E%90115.xls"
  }
};
fs.writeFileSync(path.join(outDir, "option-stats.js"),
  `// 大考中心官方選擇題選項分析：全體到考考生與低分組後 33% 的各選項畫記百分率。\n` +
  `window.OPTION_STATS_SOURCES=${JSON.stringify(sources)};\n` +
  `window.OPTION_STATS=${JSON.stringify(stats)};\n` +
  `for(const bank of (window.BANK||[])){const bankKey=bank.era+"|"+bank.year;for(const q of bank.questions){const s=window.OPTION_STATS[bankKey+"|"+q.no];if(!s)continue;q.opt=s.all;q.low={opt:s.low,unanswered:s.unanswered.low};q.optUnanswered=s.unanswered.all;q.optSource=window.OPTION_STATS_SOURCES[bankKey];}}\n`);

fs.writeFileSync(path.join(outDir, "bank.js"), fs.readFileSync(path.join(outDir, "g115.js")));
console.log(JSON.stringify({
  year:115,
  questions:questions.length,
  single:questions.filter(q=>!q.multi).length,
  multiple:questions.filter(q=>q.multi).length,
  answerVerified:questions.length,
  passDiscCoverage:questions.filter(q=>q.pass!=null&&q.disc!=null).length,
  optionStatsCoverage:Object.keys(stats).length
}, null, 2));
