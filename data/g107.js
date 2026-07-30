// 107 學年度學科能力測驗英文考科（單選題 56 題）
// 題目與答案取自大學入學考試中心官方試題、答案。
(function () {
  const explanations = {
    1: "芒果在臺灣主要於七月達到最甜的盛產期，seasonal fruit 指「季節性水果」。",
    2: "寫學期報告與口頭報告是大學生常見的課程要求，course requirements 搭配自然。",
    3: "努力實現夢想應用 fulfill one’s dreams，fulfill 表示「實現、完成」。",
    4: "承諾從未付諸行動，表示這些話空洞不實；hollow promises 是「空洞的承諾」。",
    5: "打網球造成腳踝受傷且仍疼痛，twist one’s ankle 表示「扭傷腳踝」。",
    6: "男女對婚姻意義有不同看法，beliefs 表示「信念、觀念」。",
    7: "同樣工作卻給更短期限，顯示新經理要求很高；demanding 表示「要求嚴格的」。",
    8: "孩子失蹤時夫妻焦急尋找，anxiously 表示「焦慮地」。",
    9: "得獎者演講後被索取簽名的粉絲包圍，be surrounded by 是「被……包圍」。",
    10: "面試者要讓面試官對自己的能力留下好印象，impress 表示「使留下深刻印象」。",
    11: "草地被一大片雪覆蓋可說 a blanket of snow，以「毯子」比喻覆蓋層。",
    12: "書頁邊緣可供寫筆記的空白處是 margins「頁邊空白」。",
    13: "遲交作業會以低分作為處罰，penalty 表示「懲罰」。",
    14: "研究在醫院中被執行，conduct a study 是「進行研究」，此處用被動 have been conducted。",
    15: "火勢猛烈且蔓延迅速，並已造成三十人死亡，massive firestorm 表示「大規模火災」。",
    16: "文章否定創造力只屬於少數天才，指出它更像人類天賦；less A than B 表示「與其說是 A，不如說是 B」。",
    17: "暫時離開問題可能激發頓悟時刻，spark 在此表示「引發、激起」。",
    18: "公司鼓勵員工參加放鬆活動，take part in 表示「參與」。",
    19: "the mind turns inward 描述一種心智狀態，where 引導關係副詞子句，意為「在此狀態中」潛意識可整理線索。",
    20: "突破常出現在人們跨出慣常作息或專業領域時，venture beyond 表示「冒險超越」。",
    21: "吸油特性對衛生未必好，對環境卻有益，While 在此引導讓步對比，表示「雖然」。",
    22: "人髮供應無限且可重複取得，被稱為終極可再生資源 renewable resource。",
    23: "收集頭髮與動物毛是為了清理每年發生的漏油，clean up after 表示「在……之後清理」。",
    24: "water 是被污染的，需用過去分詞 polluted 作形容詞修飾 waters。",
    25: "沙龍與牧場剪下後不再需要的毛髮可回收利用，unneeded 表示「不需要的」。",
    26: "know 後的名詞子句缺少 dreaming of 的受詞，what 同時作連接詞與介系詞 of 的受詞。",
    27: "清醒夢仍發生於睡眠中，因此人的身體是 asleep「睡著的」，與 daydream 時身體清醒形成對比。",
    28: "後文說清醒夢還能運用大腦潛能，故不只是清楚的夢；more than 表示「不只是」。",
    29: "後句換句話重述清醒夢能運用沉睡時的大腦潛能，In other words 表示「換言之」。",
    30: "夢中可成為超級英雄，不受現實身分限制；regardless of 表示「不論、不管」。",
    31: "關於幸運餅乾起源有多個彼此競爭、尚未證實的說法，competing stories 指「相互競逐的說法」。",
    32: "trace A back to B 表示「把 A 追溯至 B」，此說把起源追溯到十三、十四世紀中國。",
    33: "藏在月餅中的紙條記載推翻蒙古人的秘密計畫，secret plans 符合革命需保密的語境。",
    34: "革命最後促成明朝建立，表示行動成功，successful 最符合結果。",
    35: "此處把今日所知的幸運餅乾稱為 treats「點心、甜食」。",
    36: "前文列出多個起源說法，another account 表示「另一種說法」。",
    37: "每塊餅乾裡面都裝有一張聖經勵志語紙條，contained 表示「包含」。",
    38: "較廣為接受的說法認為幸運餅乾在 1907 或 1914 年首次出現，appeared 符合語意。",
    39: "將配方加甜是為迎合美國人的口味，tastes 在此指「口味、喜好」。",
    40: "中餐館把感謝紙條換成占卜籤語，replace A with B 表示「以 B 取代 A」。",
    41: "全文依序說明白宮的興建、開放傳統與名稱演變，主旨是白宮歷史，選 D。",
    42: "this practice 承接 Jefferson 開創、Lincoln 延續的總統就職開放參觀活動；人潮過大促成管制，因此選 A。",
    43: "第一段指出 Washington 宣布聯邦政府所在地、主持籌備並監督房屋興建，因此由他發起，選 C。",
    44: "設計師 James Hoban 是愛爾蘭出生的建築師，不是美國總統，所以 NOT 題選 B。",
    45: "文章從傳播與症狀談到 2012 年疫情，再分析氣候、經濟與政府作為等有利病毒蔓延的條件，選 C。",
    46: "第一段說症狀通常在蚊子叮咬後 3 至 14 天出現，也就是兩週內，選 A。",
    47: "第二段明說 Dallas 宣布緊急狀態，並以空中噴灑農藥消滅蚊子，選 A。",
    48: "第三段指出異常溫和的冬季讓更多蚊子存活，是 2012 年疫情嚴重的原因之一，選 D。",
    49: "Saudi Arabia 水資源有限，且與臺灣淡水充足形成對比，因此 arid 是「乾燥的」，選 C。",
    50: "第二段強調海水淡化需要大量能源、技術昂貴，核心是淡化成本高，選 A。",
    51: "第三段說海洋生物可能被吸入淡化廠，殺死幼魚與浮游生物並擾亂食物鏈，選 B。",
    52: "作者雖列出成本與環境障礙，末段仍說研究競賽已展開且不斷有可望成功的新成果，態度偏樂觀 hopeful，選 D。",
    53: "全文不只談搖籃曲哄睡，也說它能療癒嬰兒並讓母親抒發恐懼，最適合的標題是「搖籃曲的功能」，選 B。",
    54: "dark undertones 指歌詞表面之下帶有陰暗含意或訊息，messages 最接近，選 D。",
    55: "第二段直接以研究結果 Research has shown 支持搖籃曲能安撫、甚至幫助療癒嬰兒，選 A。",
    56: "搖籃曲的聲音與旋律安撫嬰兒，歌詞則讓母親表達焦慮並成為她的療癒，因此同時安慰兩者，選 C。"
  };
  const groups = {
    G1: {
      title: "Ways to increase creativity",
      passage: `<p>It has long been assumed that creativity is some unusual trait enjoyed by the few. However, according to a wide array of scientific and sociological research, creativity is 16 a sign of rare genius than a natural human potential. Thus, it can be nurtured and encouraged.</p><p>It is believed that taking breaks from a problem can help 17 a moment of insight or stimulate new ideas. Unconventional solutions can also be explored. That is why some of the most successful companies in the world, such as 3M and Google, encourage their employees to 18 all sorts of relaxing activities, such as playing pinball and wandering about the campus. During such breaks, the mind turns inward, 19 it can subconsciously puzzle over subtle meanings and connections.</p><p>Another way to increase creativity is to take risks. This is because many breakthroughs come up when people venture 20 their usual routines or areas of expertise. This can be done by, for example, learning new skills or traveling to new countries.</p>`
    },
    G2: {
      title: "Human hair helps clean up oil spills",
      passage: `<p>Hair usually gets greasy when it has not been washed because it soaks up oil—hence the need for shampoo! 21 this oil-absorbing feature might not always be so great for our hygiene, it can be great for the environment.</p><p>Matter of Trust, a nonprofit organization, has an innovative solution for removing the large-scale oil spill in the Gulf of Mexico in 2010, using the ultimate renewable 22: human hair, of which there is an unlimited supply. Since its founding in 1998, Matter of Trust has collected donations of human hair and animal fur to 23 the thousands of oil spills that happen each year. The hair and fur are made into mats and brooms and sent to 24 waters to absorb the oil.</p><p>Across the United States each day, 300,000 pounds of hair and fur are cut. Matter of Trust is helping organize the collection of this 25 hair and fur through thousands of salons, pet groomers, and ranchers. Individuals can also speak to local hair stylists and pet groomers about sending in leftover hair and fur.</p>`
    },
    G3: {
      title: "Lucid dreams",
      passage: `<p>You must have had this kind of experience: While in the middle of a normal dream, you suddenly realize that you are dreaming. This kind of dream is called a “lucid dream.” The term “lucid” means clear; lucid dreamers know that they are dreaming and 26 they are dreaming of. It is different from daydreaming. When a person is having a lucid dream, the person’s body is 27; when a person daydreams, his/her body is awake. Thus, daydreams are really just waking thoughts. In lucid dreams, however, we are completely immersed in the dream world.</p><p>Yet, lucid dreaming is 28 just having a clear dream. It is your chance to play around with the extraordinary abilities buried in unused parts of your brain. 29, it is a way for you to put the deepest areas of your brain to good use while you’re sleeping. You can be an everyday Jane Doe or John Smith while awake but a superhero while sleeping, 30 who you are in real life. All the obstacles of reality can be set aside and you are able to accomplish tasks that you could never manage in waking reality.</p>`
    },
    G4: {
      title: "Origins of the fortune cookie",
      passage: `<p>Fortune cookies, commonly served after meals at Chinese restaurants in the U.S., are characterized by a fortune, which is written on a small piece of paper tucked inside the cookie. There are several 31 stories about the origin of the fortune cookie. None of them, however, has been proven to be entirely true.</p><p>One of these stories 32 the cookie’s origin back to 13th- and 14th-century China, which was then occupied by the Mongols. According to the legend, notes of 33 plans for a revolution to overthrow the Mongols were hidden in mooncakes that would ordinarily have been stuffed with sweet bean paste. The revolution turned out to be 34 and eventually led to the formation of the Ming Dynasty. This story may sound highly credible, but there seems to be no solid evidence that it inspired the creation of the 35 we know of today as fortune cookies.</p><p>Another 36 claims that David Jung, a Chinese immigrant living in Los Angeles, created the fortune cookie in 1918. Concerned about the poor people he saw wandering near his shop, he made cookies and passed them out free on the streets. Each cookie 37 a strip of paper inside with an inspirational Bible quotation on it.</p><p>However, the more generally accepted story is that the fortune cookie first 38 in either 1907 or 1914 in San Francisco, created by a Japanese immigrant, Makoto Hagiwara. The fortune cookie was based on a Japanese snack, but Hagiwara sweetened the recipe to appeal to American 39. He enclosed thank-you notes in the cookies and served them to his guests with tea. Within a few years, Chinese restaurant owners in San Francisco had copied the recipe and 40 the thank-you notes with fortune notes. Such fortune cookies became common in Chinese restaurants in the U.S. after World War II.</p>`
    },
    G5: {
      title: "The history of the White House",
      passage: `<p>For more than two hundred years, the White House has stood as a symbol of the United States Presidency, the U.S. government, and the American people. In 1790, President George Washington declared that the federal government would reside in a district “not exceeding ten miles square … on the river Potomac.” As preparations began, a competition was held to find a builder of the “President’s House.” Nine proposals were submitted, and the Irish-born architect James Hoban won the gold medal for his practical and handsome design. Construction began when the first cornerstone was laid in October of 1792. Although President Washington oversaw the construction of the house, he never lived in it. It was not until 1800, when the White House was nearly completed, that its first residents, President John Adams and his wife Abigail, moved in.</p><p>American presidents can express their individual style in how they decorate the house and in how they receive the public. Thomas Jefferson held the first inaugural open house in 1805; many of those who attended the swearing-in ceremony at the U.S. Capitol simply followed him home. President Jefferson also opened the house for public tours, and it has remained open, except during wartime, ever since. In addition, Jefferson welcomed visitors to annual receptions on New Year’s Day and on the Fourth of July. Abraham Lincoln did the same, but then the inaugural crowds became far too large for the White House to accommodate comfortably, and this also created a security issue. It was not until Grover Cleveland’s first presidency that some effective crowd control measures were implemented to address the problem caused by this practice.</p><p>At various times in history, the White House has been known as the “President’s Palace,” the “President’s House,” and the “Executive Mansion.” President Theodore Roosevelt officially gave the White House its current name in 1901.</p>`
    },
    G6: {
      title: "The 2012 West Nile outbreaks",
      passage: `<p>West Nile is a tropical disease that begins in birds, which pass it on to mosquitoes that then go on to infect human beings with a bite. Most people who contract West Nile do not experience any symptoms at all, but, if they do, symptoms typically develop between 3 to 14 days after a mosquito bite. About 1 in 5 persons suffers fever, headaches, and body aches, usually lasting a week or so. A far less lucky 1 in 150 experiences high fever, tremors, paralysis, and coma. Some—especially the elderly and those with weak immune systems—die.</p><p>That is what made the major outbreaks of West Nile in the U.S. in the summer of 2012 so scary. The situation was particularly bad in Dallas, Texas, where the West Nile virus killed 10 people and sickened more than 200. The city declared a state of emergency and began aerial spraying of a pesticide to kill the mosquitoes, even though residents argued that the pesticide could be more dangerous than the disease.</p><p>Why was the summer of 2012 so hospitable to the West Nile virus and the mosquitoes that carry it? Blame the weather. An extremely mild winter allowed more mosquitoes than usual to survive, while the unusually high temperatures in that scorching summer further increased their number by speeding up their life cycle. The economic crisis may have also played a role: Homeowners who were not able to pay their bank loans were forced to abandon their properties, sometimes leaving behind swimming pools that made excellent mosquito breeding grounds.</p><p>The severity of tropical diseases is also a matter of whether governments are capable—and willing—to defend their populations against infections. Dallas County was not doing some of the key things to slow the spread of West Nile, such as testing dead birds and setting mosquito traps to test for the presence of the disease. Tropical infections are thus as much related to government inaction as they are to climate.</p>`
    },
    G7: {
      title: "Desalinating seawater",
      passage: `<p>Most parts of Taiwan have access to sufficient supplies of fresh water for drinking. But fresh water can be in short supply in many arid regions of the world such as Saudi Arabia, where there are limited water resources. As the world population continues to grow, shortages of fresh water will occur more often and the need for additional water supplies will become critical. Some may ask, “Since the ocean covers more than 70 percent of the Earth, why not just get drinking water from the ocean?”</p><p>To turn seawater into fresh water, we need to remove the salt in seawater, that is, to desalinate seawater. The problem is that the desalination of water requires a lot of energy. Salt dissolves very easily in water, forming strong chemical bonds, and those bonds are difficult to break. The energy and technology to desalinate water are both expensive, and this means that desalinating water can be costly.</p><p>There are environmental costs of desalination as well. Sea life can get sucked into desalination plants, killing small ocean creatures like baby fish and plankton, upsetting the food chain. Also, there is the problem of what to do with the separated salt, which is left over as a very concentrated brine. Pumping this super-salty water back into the ocean can harm local aquatic life. Reducing these impacts is possible, but it adds to the costs.</p><p>Despite the economic and environmental hurdles, desalination is becoming increasingly attractive as human beings are using up fresh water from other sources. At present, desalinating seawater is the only viable way to provide water to growing populations in rural areas of the Middle East and North Africa. Therefore, the race is on to find a cheaper, cleaner, and more energy-efficient way of desalinating seawater, and promising new findings are being reported.</p>`
    },
    G8: {
      title: "The functions of lullabies",
      passage: `<p>Four millennia ago, an ancient Babylonian wrote down what is possibly the first lullaby. It is a rather threatening lullaby, in which the baby is scolded for disturbing the house god with its crying and warned of terrifying consequences. It may have got the baby to sleep, but its message is far from comforting: If he/she does not stop crying, the demon will eat him/her. This lullaby may sound more scary than sleep-inducing, yet it is true that many lullabies—including those sung today—have dark undertones.</p><p>Research has shown that lullabies, when used correctly, can soothe and possibly even help to heal an infant; but it is the caretaker’s voice and the rhythm and melody of the music that babies respond to, not the content of the song. Then, what is the function of the content? According to studies, some lullabies provide advice, like the Babylonian lullaby, and quite a few others offer the space to sing the unsung, say the unsayable. Lyrics to those lullabies can indeed be interpreted as a reflection of the caregiver’s emotions.</p><p>Researchers believe that a large part of the function of lullabies is to help a mother vocalize her worries and concerns. The mother’s fear of loss especially makes sense since the infant/toddler years of life are fragile ones. Since there is a special physical bond between mother and child during this period, mothers feel they can sing to their child about their own fears and anxieties. Lullabies, therefore, serve as therapy for the mother. In addition, the songs are seemingly trying to work some magic—as if, by singing, the mother is saying, “Sadness has already touched this house; no need to come by again.”</p>`
    }
  };

  const V = (no, answer, stem, options, tag = "語境搭配") => ({ no, cat: "C1", tags: [tag], lang: "單題", textType: "詞彙題", answer, stem, options, explain: explanations[no] });
  const C = (no, answer, group, stem, options, tag = "語境選詞") => ({ no, cat: "C2", tags: [tag], lang: "題組", textType: "綜合測驗", answer, group, stem, options, explain: explanations[no] });
  const FILL = { A: "account", B: "appeared", C: "competing", D: "contained", E: "replaced", F: "secret", G: "successful", H: "tastes", I: "traces", J: "treats" };
  const F = (no, answer, stem) => ({ no, cat: "C2", tags: ["文意選填"], lang: "題組", textType: "文意選填", answer, group: "G4", stem, options: FILL, explain: explanations[no] });
  const R = (no, answer, group, stem, options, tag = "細節檢索") => ({ no, cat: "C4", tags: [tag], lang: "題組", textType: "閱讀測驗", answer, group, stem, options, explain: explanations[no] });

  const questions = [
    V(1, "C", "Mangoes are a ______ fruit here in Taiwan; most of them reach their peak of sweetness in July.", { A: "mature", B: "usual", C: "seasonal", D: "particular" }),
    V(2, "A", "Writing term papers and giving oral reports are typical course ______ for college students.", { A: "requirements", B: "techniques", C: "situations", D: "principles" }),
    V(3, "B", "If we work hard to ______ our dreams when we are young, we will not feel that we missed out on something when we get old.", { A: "distribute", B: "fulfill", C: "convince", D: "monitor" }),
    V(4, "C", "Few people will trust you if you continue making ______ promises and never make efforts to keep them.", { A: "chilly", B: "liberal", C: "hollow", D: "definite" }),
    V(5, "C", "Becky ______ her ankle while she was playing tennis last week. Now it still hurts badly.", { A: "slipped", B: "dumped", C: "twisted", D: "recovered" }),
    V(6, "B", "Research shows that men and women usually think differently. For example, they have quite different ______ about what marriage means in their life.", { A: "decisions", B: "beliefs", C: "styles", D: "degrees" }),
    V(7, "D", "The new manager is very ______. For instance, the employees are given much shorter deadlines for the same tasks than before.", { A: "persuasive", B: "tolerable", C: "suspicious", D: "demanding" }),
    V(8, "A", "While the couple were looking ______ for their missing children, the kids were actually having fun in the woods nearby.", { A: "anxiously", B: "precisely", C: "evidently", D: "distinctly" }),
    V(9, "D", "After delivering a very powerful speech, the award winner was ______ by a group of fans asking for her signature.", { A: "deposited", B: "reserved", C: "vanished", D: "surrounded" }),
    V(10, "B", "The interviewees were trying very hard to ______ the interviewers that they were very capable and should be given the job.", { A: "credit", B: "impress", C: "relieve", D: "acquire" }),
    V(11, "C", "After the first snow of the year, the entire grassland disappeared under a ______ of snow.", { A: "flake", B: "blossom", C: "blanket", D: "flash" }),
    V(12, "B", "Peter likes books with wide ______, which provide him with enough space to write notes.", { A: "angles", B: "margins", C: "exceptions", D: "limitations" }),
    V(13, "D", "At the beginning of the semester, the teacher told the students that late assignments would receive a low grade as a ______.", { A: "hardship", B: "comment", C: "bargain", D: "penalty" }),
    V(14, "A", "Various studies have been ______ in this hospital to explore the link between a high-fat diet and cancer.", { A: "conducted", B: "confirmed", C: "implied", D: "improved" }),
    V(15, "C", "Intense, fast-moving fires raged across much of California last week. The ______ firestorm has claimed the lives of thirty people.", { A: "efficient", B: "reliable", C: "massive", D: "adequate" }),

    C(16, "B", "G1", "Creativity is ______ a sign of rare genius than a natural human potential.", { A: "more", B: "less", C: "better", D: "worse" }, "邏輯關係"),
    C(17, "A", "G1", "Taking breaks from a problem can help ______ a moment of insight or stimulate new ideas.", { A: "spark", B: "carve", C: "drill", D: "grind" }),
    C(18, "C", "G1", "Successful companies encourage their employees to ______ all sorts of relaxing activities.", { A: "refer to", B: "answer for", C: "take part in", D: "put up with" }),
    C(19, "C", "G1", "During such breaks, the mind turns inward, ______ it can subconsciously puzzle over subtle meanings and connections.", { A: "if", B: "but", C: "where", D: "which" }, "篇章指涉"),
    C(20, "D", "G1", "Many breakthroughs come up when people venture ______ their usual routines or areas of expertise.", { A: "into", B: "without", C: "under", D: "beyond" }),
    C(21, "B", "G2", "______ this oil-absorbing feature might not always be so great for our hygiene, it can be great for the environment.", { A: "For", B: "While", C: "In case", D: "As long as" }, "邏輯關係"),
    C(22, "D", "G2", "Matter of Trust uses the ultimate renewable ______: human hair, of which there is an unlimited supply.", { A: "equipment", B: "ingredient", C: "product", D: "resource" }),
    C(23, "B", "G2", "Matter of Trust has collected donations of human hair and animal fur to ______ the thousands of oil spills that happen each year.", { A: "get away with", B: "clean up after", C: "run out of", D: "look down upon" }),
    C(24, "C", "G2", "The hair and fur are made into mats and brooms and sent to ______ waters to absorb the oil.", { A: "pollute", B: "polluting", C: "polluted", D: "pollution" }, "時態語意"),
    C(25, "A", "G2", "Matter of Trust is helping organize the collection of this ______ hair and fur.", { A: "unneeded", B: "overthrown", C: "excluded", D: "disconnected" }),
    C(26, "A", "G3", "Lucid dreamers know that they are dreaming and ______ they are dreaming of.", { A: "what", B: "why", C: "when", D: "which" }, "篇章指涉"),
    C(27, "D", "G3", "When a person is having a lucid dream, the person’s body is ______.", { A: "apart", B: "absent", C: "alone", D: "asleep" }),
    C(28, "C", "G3", "Yet, lucid dreaming is ______ just having a clear dream.", { A: "related to", B: "aside from", C: "more than", D: "nothing but" }, "邏輯關係"),
    C(29, "A", "G3", "______, it is a way for you to put the deepest areas of your brain to good use while you’re sleeping.", { A: "In other words", B: "By no means", C: "At any cost", D: "On the contrary" }, "轉承語"),
    C(30, "B", "G3", "You can be an everyday Jane Doe or John Smith while awake but a superhero while sleeping, ______ who you are in real life.", { A: "such as", B: "regardless of", C: "with respect to", D: "on behalf of" }),

    F(31, "C", "There are several ______ stories about the origin of the fortune cookie."),
    F(32, "I", "One of these stories ______ the cookie’s origin back to 13th- and 14th-century China."),
    F(33, "F", "According to the legend, notes of ______ plans for a revolution were hidden in mooncakes."),
    F(34, "G", "The revolution turned out to be ______ and eventually led to the formation of the Ming Dynasty."),
    F(35, "J", "There is no solid evidence that it inspired the creation of the ______ we know of today as fortune cookies."),
    F(36, "A", "Another ______ claims that David Jung created the fortune cookie in 1918."),
    F(37, "D", "Each cookie ______ a strip of paper inside with an inspirational Bible quotation on it."),
    F(38, "B", "The more generally accepted story is that the fortune cookie first ______ in either 1907 or 1914 in San Francisco."),
    F(39, "H", "Hagiwara sweetened the recipe to appeal to American ______."),
    F(40, "E", "Chinese restaurant owners had copied the recipe and ______ the thank-you notes with fortune notes."),

    R(41, "D", "G5", "What is this passage mainly about?", { A: "The design of the White House.", B: "The location of the White House.", C: "The importance of the White House.", D: "The history of the White House." }, "主旨判讀"),
    R(42, "A", "G5", "What does “this practice” refer to in the second paragraph?", { A: "Holding an inaugural open house.", B: "Accommodating the crowds comfortably.", C: "Decorating the White House.", D: "Joining in the swearing-in ceremony." }, "指涉判讀"),
    R(43, "C", "G5", "Who initiated the construction of the White House?", { A: "John Adams.", B: "James Hoban.", C: "George Washington.", D: "Thomas Jefferson." }),
    R(44, "B", "G5", "According to the passage, which of the following is NOT true about the White House?", { A: "The White House has had several names.", B: "The designer of the White House was an American president.", C: "People were not allowed to visit the White House during wartime.", D: "The White House is located in a district not larger than ten miles square." }),
    R(45, "C", "G6", "What is this passage mainly about?", { A: "West Nile and methods to fight it.", B: "West Nile and governmental efficiency.", C: "West Nile and the conditions its virus thrives in.", D: "West Nile and its relation to tropical diseases." }, "主旨判讀"),
    R(46, "A", "G6", "Which of the following statements is true about West Nile?", { A: "Its symptoms usually appear within two weeks.", B: "It is spread through air and water in tropical areas.", C: "Over 20% of people who contract it will suffer severe symptoms.", D: "It comes from direct human contact with birds infected with the virus." }),
    R(47, "A", "G6", "What did Dallas County do to fight off West Nile?", { A: "They sprayed pesticide from the air.", B: "They asked citizens to stay away from dead birds.", C: "They encouraged citizens to get vaccinations.", D: "They drained the swimming pools in the county." }),
    R(48, "D", "G6", "Which of the following is a reason why Dallas was hit most seriously in the U.S. in 2012?", { A: "The increasing population in Texas raised the risk of contracting the disease.", B: "The government did not issue a warning about the disease in time.", C: "The residents worried about the county’s decision and action.", D: "The weather of the previous winter was not as cold as usual." }, "推論判讀"),
    R(49, "C", "G7", "Which of the following is closest in meaning to “arid” in the first paragraph?", { A: "Occupied.", B: "Isolated.", C: "Dry.", D: "Remote." }, "語境推義"),
    R(50, "A", "G7", "What is the second paragraph mainly about?", { A: "The high cost of desalinating seawater.", B: "The major chemical characteristics of seawater.", C: "The urgent need to turn seawater into fresh water.", D: "The amount of energy produced in the desalination of seawater." }, "主旨判讀"),
    R(51, "B", "G7", "According to the passage, which of the following statements is true?", { A: "Mixing salt with water is not as easy as removing salt from seawater.", B: "Desalinating seawater may kill some sea creatures and disturb the food chain.", C: "Covering 70% of the Earth, the ocean has always satisfied human needs for water.", D: "The increasing population in Saudi Arabia has resulted in shortages of fresh water." }),
    R(52, "D", "G7", "Which of the following best describes the author’s attitude toward the future of desalination?", { A: "Amazed.", B: "Doubtful.", C: "Conservative.", D: "Hopeful." }, "推論判讀"),
    R(53, "B", "G8", "Which of the following titles best describes the main idea of this passage?", { A: "The Origin of Lullabies", B: "The Functions of Lullabies", C: "Threatening Lullabies", D: "Sleep-Inducing Lullabies" }, "主旨判讀"),
    R(54, "D", "G8", "Which of the following is closest in meaning to the word “undertones” in the first paragraph?", { A: "Consequences.", B: "Vocals.", C: "Whispers.", D: "Messages." }, "語境推義"),
    R(55, "A", "G8", "What does the author use to support the idea that lullabies can have a soothing effect?", { A: "Research reports.", B: "Examples found in history.", C: "Stories of caretakers.", D: "The author’s personal experiences." }),
    R(56, "C", "G8", "According to this passage, which of the following statements is true?", { A: "Scary lullabies better help babies fall asleep.", B: "Mothers prefer to sing lullabies with a joyful melody.", C: "Lullabies comfort not only the baby but also the mother.", D: "Babies react to both the music and the lyrics of lullabies." })
  ];

  window.BANK = window.BANK || [];
  window.BANK.push({ year: 107, era: "學測", groups, questions });
})();
