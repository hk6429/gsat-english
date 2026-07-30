// 106 學年度學科能力測驗英文考科（單選題 56 題）
// 題目與答案均取自大學入學考試中心官方試卷及答案。
(() => {
  const explanations = {
    1: "<b>解題關鍵：</b>鬧鐘沒有設定卻會響，表示時鐘沒有「正常」運作。<br>(A) tenderly「溫柔地」；(B) properly「正常、正確地」最符合；(C) solidly「堅固地」；(D) favorably「有利地」。<br>把答案放回去：John 的時鐘運作不正常。",
    2: "<b>解題關鍵：</b>Michael 已下定決心成為教授，表示要「從事」物理職涯。<br>(A) pursue a career「追求、從事職涯」正確；(B) swear「發誓」；(C) reserve「保留」；(D) draft「起草」。<br>把答案放回去：他決定走物理這條職業道路。",
    3: "<b>解題關鍵：</b>連續好幾天可能見不到任何人，說明地點非常偏遠。<br>(A) native「本地的」；(B) tricky「棘手的」；(C) remote「偏遠的」正確；(D) vacant「空著的」，通常形容房間或職位。<br>把答案放回去：Peter 要到非洲偏遠地區健行。",
    4: "<b>解題關鍵：</b>居民把團體利益放在個人利益前，表示強烈認同所屬團體。<br>(A) appoint「任命」；(B) eliminate「消除」；(C) occupy「占據」；(D) identify with「認同」正確。<br>把答案放回去：人們傾向認同自己所屬的群體。",
    5: "<b>解題關鍵：</b>把陌生人認成演員還索取簽名，知道認錯後會令人尷尬。<br>(A) relaxing「令人放鬆」；(B) embarrassing「令人難堪」正確；(C) appealing「吸引人的」；(D) defending「防衛中的」，詞性也不合。<br>把答案放回去：這件事真的很尷尬。",
    6: "<b>解題關鍵：</b>薪水大多花在房租和食物，因此娛樂費「幾乎沒有」剩下。<br>(A) barely「幾乎不」正確；(B) fairly「相當地」；(C) merely「僅僅」；(D) readily「容易地」。<br>把答案放回去：Amelia 幾乎沒錢可花在娛樂上。",
    7: "<b>解題關鍵：</b>飛機和船神祕消失，固定說法 without a trace 是「沒有留下任何蹤跡」。<br>(A) guide「指南」；(B) trace「痕跡」正確；(C) code「密碼」；(D) print「印刷／印痕」，不使用此搭配。<br>把答案放回去：有些船和飛機消失得無影無蹤。",
    8: "<b>解題關鍵：</b>Tony 大聲招呼又揮牌，是在力勸路人進店買麵包；urge＋人＋to V 是「催促某人做……」。<br>(A) accessed「存取」；(B) edited「編輯」；(C) imposed「強加」；(D) urged「力勸」正確。<br>把答案放回去：Tony 招攬路人進店。",
    9: "<b>解題關鍵：</b>藝術家用細軟沙子「創作」的作品是沙雕。<br>(A) constitutions「憲法／構造」；(B) objections「反對」；(C) sculptures「雕塑」正確；(D) adventures「冒險」。<br>把答案放回去：這片沙灘吸引藝術家創作美麗沙雕。",
    10: "<b>解題關鍵：</b>雲層散開後，有一道光穿過窗戶照進教堂，固定搭配 a beam of light 是「一束光」。<br>(A) dip「下降」；(B) beam「光束」正確；(C) spark「火花」；(D) path「道路」。<br>把答案放回去：一束光落在教堂裡。",
    11: "<b>解題關鍵：</b>祖母不送禮物，而是把錢夾在生日卡中。<br>(A) enclosed「隨信附上、裝入」正確；(B) installed「安裝」；(C) preserved「保存」；(D) rewarded「獎勵」。<br>把答案放回去：祖母總會在生日卡裡附上一些錢。",
    12: "<b>解題關鍵：</b>奧運選手夢想贏得的「金牌」是 gold medal。<br>(A) signal「信號」；(B) glory「榮耀」，不能說 gold glory；(C) medal「獎牌」正確；(D) profit「利潤」。<br>把答案放回去：每位奧運選手都夢想贏得金牌。",
    13: "<b>解題關鍵：</b>小偷要大方走出正門，便把自己假扮成保全；disguise oneself as... 是「把自己偽裝成……」。<br>(A) balanced「使平衡」；(B) calculated「計算」；(C) disguised「偽裝」正確；(D) registered「登記」。<br>把答案放回去：他假扮保全離開。",
    14: "<b>解題關鍵：</b>因玩 Pokémon GO 發生多起事故，玩家被提醒要注意環境危險。<br>(A) be aware of「注意、察覺」正確；(B) ashamed「羞愧」；(C) doubtful「懷疑」；(D) guilty「有罪惡感」。<br>把答案放回去：玩家應留意周遭可能的危險。",
    15: "<b>解題關鍵：</b>福爾摩斯能從小細節推理，靠的是驚人的 powers of observation（觀察力）。<br>(A) innocence「清白」；(B) estimation「估計」；(C) assurance「保證」；(D) observation「觀察」正確。<br>把答案放回去：他的觀察力和雜學令讀者佩服。",
    16: "<b>解題關鍵：</b>為了看清下睫毛根部的小紅點，要「朝鏡子裡看」。<br>(A) check out「查看／退房」；(B) look into the mirror「照鏡子看」正確；(C) watch over「照顧」；(D) see through「看穿」。<br>把答案放回去：你照鏡子看到睫毛根部的紅點。",
    17: "<b>解題關鍵：</b>前文提到疼痛和紅點，這些是針眼開始形成的身體徵兆。<br>(A) incidents「事件」；(B) measures「措施」；(C) symptoms「症狀」正確；(D) explanations「解釋」。<br>把答案放回去：這些症狀可能是針眼的初期表現。",
    18: "<b>解題關鍵：</b>細菌原本在鼻子，手揉鼻後再碰眼睛，就會把細菌「轉移」到眼部；句子是被動。<br>(A) attracted「吸引」；(B) contributed「貢獻」；(C) exposed「暴露」；(D) transferred「轉移」正確。<br>把答案放回去：鼻中細菌很容易被帶到眼睛。",
    19: "<b>解題關鍵：</b>針眼「看起來不舒服」，卻「通常無害」，兩邊是雖然……但是……的讓步關係。<br>(A) As「因為／當」；(B) If「如果」；(C) Unless「除非」；(D) Although「雖然」正確。<br>關鍵句：雖然針眼外觀不好看，通常並無大礙。",
    20: "<b>解題關鍵：</b>溫熱毛巾要貼在眼皮上輕壓，固定搭配 press A against B 是「把 A 貼著 B 壓」。<br>(A) against「貼著」正確；(B) among「在一群之中」；(C) about「關於」；(D) after「在……之後」。<br>把答案放回去：用溫毛巾貼著眼皮輕壓。",
    21: "<b>解題關鍵：</b>貧困者連鞋都不容易取得，「更不用說」尺寸正確的鞋。<br>(A) except for「除了」；(B) provided with「被提供」；(C) far from「遠非」；(D) let alone「更不用說」正確。<br>把答案放回去：他們連鞋都難取得，更遑論合腳的鞋。",
    22: "<b>解題關鍵：</b>沒有合腳的新鞋，孩子只能「將就」穿太小的鞋。<br>(A) get done「完成」；(B) get lost「迷路」；(C) make do with「勉強使用、將就」正確；(D) make believe「假裝」。<br>把答案放回去：孩子只能將就穿不合腳的鞋。",
    23: "<b>解題關鍵：</b>孩子的腳會長大，這種鞋的特色是能跟著改變尺寸。<br>(A) adjust「調整」正確；(B) explore「探索」；(C) insert「插入」；(D) overlook「忽略」。<br>把答案放回去：孩子可隨腳長大調整鞋子尺寸。",
    24: "<b>解題關鍵：</b>come in＋尺寸／顏色表示商品「有某種規格可選」。<br>(A) by「藉由」；(B) in 正確，come in two sizes 是「有兩種尺寸」；(C) from「從」；(D) down「向下」。<br>把答案放回去：這種鞋有兩種尺寸。",
    25: "<b>解題關鍵：</b>前半說鞋跟與腳趾帶控制長度，後半說兩側帶控制寬度，兩組功能形成對照。<br>(A) whether「是否」；(B) while「而、同時」正確；(C) with「具有」；(D) for「因為／為了」。<br>關鍵句：前後鞋帶管長度，而側邊鞋帶管寬度。",
    26: "<b>解題關鍵：</b>前文說壞天氣使人焦慮疲累，接著提出人們「因此」認為生產力會降低，是因果承接。<br>(A) At most「最多」；(B) In contrast「相反地」；(C) Literally「照字面」；(D) Accordingly「因此」正確。<br>把答案放回去：因此，許多人相信壞天氣降低效率。",
    27: "<b>解題關鍵：</b>However 表示轉折，說人們的想法與天氣真正造成的效果不同；a gap between A and B 是「A、B 之間的落差」。<br>(A) gap「落差」正確；(B) link「連結」；(C) clue「線索」；(D) ratio「比率」。<br>把答案放回去：信念與實際效果有明顯落差。",
    28: "<b>解題關鍵：</b>研究用了兩種資料：實驗室實驗資料「以及」銀行現場觀察。<br>(A) out of「從……之中」；(B) as well as「以及」正確；(C) in case of「萬一」；(D) due to「由於」。<br>把答案放回去：研究同時使用實驗資料與實地觀察。",
    29: "<b>解題關鍵：</b>好天氣讓員工想到下班後能「參與」的戶外活動；engage in activities 是「參與活動」。<br>(A) break off「中斷」；(B) approve of「贊成」；(C) engage in「參與」正確；(D) take over「接管」。<br>把答案放回去：員工會想到工作外可從事的活動。",
    30: "<b>解題關鍵：</b>戶外活動照片使員工分心，thus 表示結果，所以生產力會「降低」。<br>(A) reform「改革」；(B) lower「使降低」正確；(C) switch「切換」；(D) demand「要求」。<br>把答案放回去：照片會分散注意力，因而降低生產力。",
    31: "<b>解題關鍵：</b>文章比較各文化後指出，古埃及人特別「推崇」洋蔥；空格需要過去式動詞。admired 是「欣賞、推崇」，符合主詞 Egyptians。symbols 是名詞，reflected 是「反映」，healing 是形容療效，都不合此句動作。<br>把答案放回去：古埃及人比其他文化更推崇洋蔥。",
    32: "<b>解題關鍵：</b>前文說洋蔥不只是食物或藥，後文談永生與葬禮，表示它還有宗教、精神上的意義。spiritual 是「精神／宗教上的」，可修飾 significance；historical 只表示歷史，healing 只談療效。<br>把答案放回去：洋蔥也具有重要的精神意義。",
    33: "<b>解題關鍵：</b>一圈又一圈、沒有終點的洋蔥構造被看成永生的「象徵」。symbols of eternal life 是「永生的象徵」；parts 是部位、paintings 是畫作，都不能表達抽象意義。<br>把答案放回去：洋蔥的圓環被視為永生象徵。",
    34: "<b>解題關鍵：</b>句子說洋蔥圓中有圓的構造「反映、象徵」永恆存在；空格要過去式動詞。reflected 最符合；admired 是欣賞，decorating 是裝飾且形式不合。<br>把答案放回去：洋蔥構造象徵生命永恆。",
    35: "<b>解題關鍵：</b>後文說埃及人把這種力量看成魔法而非醫療，指的是洋蔥的療癒能力。healing power 是「療癒能力」；spiritual power 偏精神力量，historical 也不合治病語境。<br>把答案放回去：他們相信洋蔥有療癒力量。",
    36: "<b>解題關鍵：</b>畫作是在金字塔和墓穴中「被發現」，空格修飾 paintings，要用過去分詞 discovered，白話就是「被人找到的」。decorating 表主動裝飾，reflected 是反映，均不合。<br>把答案放回去：墓穴中發現的許多畫作都有洋蔥。",
    37: "<b>解題關鍵：</b>洋蔥被放在祭壇上，是「當作」葬禮供品。functioned as 是「發揮……功能、作為……使用」；prompted 是促使，admired 是推崇，都不能接 offerings 說用途。<br>把答案放回去：洋蔥作為葬禮供品使用。",
    38: "<b>解題關鍵：</b>後文列出骨盆、胸部、耳朵、眼睛與腳，都是遺體的身體「部位」。parts of their bodies 搭配正確；symbols 是象徵，paintings 是畫作，無法接這份清單。<br>把答案放回去：洋蔥被放在遺體不同部位周圍。",
    39: "<b>解題關鍵：</b>洋蔥和洋蔥花放在木乃伊各部位，作用是「裝飾」；逗點後用 decorating 描述伴隨動作，白話是「同時裝飾著……」。discovered 表被發現，reflected 表反映，都不合擺放動作。<br>把答案放回去：洋蔥裝飾著木乃伊。",
    40: "<b>解題關鍵：</b>古埃及人相信強烈氣味會「促使」死者再次呼吸。prompt＋人＋to V 是「促使某人做……」；admire 是欣賞，function as 是作為，都不能接 dead 呼吸。<br>把答案放回去：氣味被認為能促使死者重新呼吸。",
    41: "<b>解題關鍵：</b>第三段依序說明 Dognition 的使用步驟：付款、填問卷、進行遊戲測試，最後取得認知報告。<br>(A) 不是公司歷史；(B)「評估流程」符合步驟排列；(C) 沒比較不同公司；(D) 不是只介紹遊戲種類。<br>所以本段在說如何完成狗的智能評估。",
    42: "<b>解題關鍵：</b>第二段說狗和人一樣具有多種智能，只是每隻狗較依賴的智能不同。<br>(A) 不同狗各有強項，符合；(B) 不是只有一種智能；(C) 沒說所有狗能力相同；(D) 文章也沒有說品種決定一切。<br>這是由「依賴不同智能」合理推出。",
    43: "<b>解題關鍵：</b>Dognition 被介紹為新成立的公司，文中又稱創辦人為 co-founder，因此 venture 在這裡不是「冒險」，而是新創事業。<br>(A) journey 是旅程；(B) risk 是風險；(C) experiment 是實驗；(D) new business「新事業」最接近。<br>所以選 D。",
    44: "<b>解題關鍵：</b>Charmer 型狗信任主人提供的資訊，甚至勝過自己眼睛看到的。<br>(A)(B)(D) 若只靠自己找或聞，不能表現對主人的信任；(C) 依主人指示找零食最符合。<br>所以 Charmer 最可能相信主人指出的位置。",
    45: "<b>解題關鍵：</b>全文從 Capoeira 的特色談到奴隸時期起源、遭政府禁止，最後獲得官方認可，依時間說明發展。<br>(A) 歷史能包住全文；(B) 招式只是開頭；(C) 音樂不是主軸；(D) 現代比賽也不是全文重點。<br>所以主旨是 Capoeira 的歷史。",
    46: "<b>解題關鍵：</b>這是 NOT 題，要找「不會」出現在 Capoeira 表演中的動作。第一段說它結合打鬥、鼓聲、歌唱與舞蹈，也使用手、腳、腿等身體部位；第二段更說早期格鬥不用武器。<br>(A) Singing with drums：配合鼓聲唱歌；第一段直接列出 drumming、singing，適合。<br>(B) Sweeping with the legs：用腿掃擊；原文明說技巧會使用 legs，符合徒手武術。<br>(C) Stabbing with swords：用劍刺擊；和 without weapons 相反，文章也沒提劍，因此是不適合的項目。<br>(D) Striking with the hands：用手擊打；原文明列 hands，適合。<br>所以答案選 (C)。",
    47: "<b>解題關鍵：</b>作者以史實介紹 Capoeira 的起源、遭禁和獲承認，沒有說自己喜歡或討厭，也沒有質疑資料。<br>(A) enthusiastic 太熱情；(B) objective「客觀的」正確；(C) doubtful 是懷疑；(D) critical 是批判。<br>所以作者態度客觀。",
    48: "<b>解題關鍵：</b>末段直接說 Mestre Bimba 努力說服巴西政府，讓 Capoeira 的文化價值受到承認，並使它成為正式格鬥方式與巴西國家運動。<br>(A) 文章說 Capoeira 影響 breaking、hip-hop 等現代舞，不是被現代舞影響，方向相反。<br>(B) 它原先由非洲奴隸發展成自衛與反抗壓迫者的武術，唱歌、拍手、跳舞是後來用來掩飾被禁格鬥，不是最初目的。<br>(C) 非洲部落格鬥可能為取得新娘而戰，但巴西的 Capoeira 主要用來自衛，不是保護新娘。<br>(D) Mestre Bimba 的努力促成巴西官方承認，符合原文。<br>所以答案選 (D)。",
    49: "<b>解題關鍵：</b>末段提到「這場為期兩週的展覽」、展出作品範圍並邀請觀眾前來欣賞，像展覽公告。<br>(A) 教科書不會用邀請口吻；(B) 美術館網站最合理；(C) 私人信件不會完整介紹展品；(D) 新聞報導通常不直接邀請。<br>所以文章最可能出現在美術館網站。",
    50: "<b>解題關鍵：</b>第一段說 Homer 在家鄉波士頓的印刷公司當學徒，並很快以插畫成名。<br>(A) 不是先當攝影師；(B) 沒說先去歐洲；(C) 成名不靠戰爭畫；(D) 先在家鄉建立插畫家聲譽，符合。<br>所以選 D。",
    51: "<b>解題關鍵：</b>第三段說他畫兒童、農村女孩和獵人的作品，成為十九世紀美國生活的經典圖像。<br>(A) 記錄當時美國日常生活，符合；(B) 沒說主要畫歐洲王室；(C) 不是抽象畫；(D) 也不是只畫戰爭。<br>所以選 A。",
    52: "<b>解題關鍵：</b>前句 Many of his works 指許多描繪美國生活的作品；接著 Others 形成「有些……另一些……」對照，所以指他的其他作品。<br>(A) 不是其他藝術家；(B) 不是其他國家；(C) other works 正確；(D) 不是其他主題本身。<br>所以選 C。",
    53: "<b>解題關鍵：</b>文章依序列出十七世紀王室飲茶、約 1800 年下午茶、十九世紀 high tea，再談今日習慣，順著年代前進。<br>(A) 不是空間；(B) 不是重要性；(C) chronological order「時間順序」正確；(D) 不是問題解決。<br>所以選 C。",
    54: "<b>解題關鍵：</b>a lasting British institution 不是「機構」，而是從過去延續至今、大家共同遵循的英國習慣。<br>(A) building 是建築；(B) long-lasting tradition「長久傳統」最接近；(C) law 是法律；(D) company 是公司。<br>所以這裡指長久的英國傳統。",
    55: "<b>解題關鍵：</b>第一段說十七世紀在工作場所之外喝茶 was beyond the means of the majority，並立刻解釋茶價格高、還要課稅；beyond the means 就是多數人負擔不起。<br>(A) 倫敦咖啡館確實供茶，但雇主也會在工作時給員工茶，並非只能在咖啡館喝。<br>(B) 原文只說 tea was taxed，沒有說按照酒精飲料課稅。<br>(C) 工作場所外喝茶不是被禁止，而是價格太高；「不能負擔」不等於法律禁止。<br>(D) 茶本身昂貴又有稅，多數人買不起，符合原文。<br>所以答案選 (D)。",
    56: "<b>解題關鍵：</b>afternoon tea 約在下午四點，是午餐與晚餐間的小餐；high tea 則是十九世紀勞工工作一整天回家後，配當天主餐飲用，所以時間更晚。<br>(A) High tea 比 afternoon tea 晚，符合兩段時間線索。<br>(B) 文章只說雇主在上午提供一次 tea break，沒有說十八世紀每天兩次。<br>(C) Catherine 從小在葡萄牙就愛喝茶，後來把喝茶習慣帶進英國宮廷；不是造訪葡萄牙後才帶茶回英國。<br>(D) 下午茶儀式由 Duchess of Bedford 開始；Earl of Sandwich 推廣的是夾餡薄片麵包。<br>所以答案選 (A)。"
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
