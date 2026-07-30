// 106 學年度指定科目考試英文考科（選擇題 51 題）
// 題文與答案取自大學入學考試中心正式題本及正式選擇題答案。
// originalNo/section/part 保留原卷結構；正式統計由共用統計資料另行匯入。
window.BANK = window.BANK || [];
window.BANK.push((() => {
  const section = "第壹部分：選擇題";
  const partOf = no => no <= 10 ? "詞彙" : no <= 20 ? "綜合測驗" : no <= 30 ? "文意選填" : no <= 35 ? "篇章結構" : "閱讀測驗";
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
    A: "provokes",
    B: "exotic",
    C: "delicacy",
    D: "dates back",
    E: "refreshed",
    F: "implies",
    G: "appetizing",
    H: "mixture",
    I: "goes by",
    J: "unchanged",
    K: "challenge",
    L: "favor"
  };
  const structureOptions = {
    A: "Scientists call this unidirectional regeneration.",
    B: "Humans aren’t completely without regenerative talents.",
    C: "The same thing happens for lobsters, salamanders, and many other animals.",
    D: "When it comes to regeneration, few animals can equal the magic of the planarian.",
    E: "This type of regeneration is demonstrated in a few animals, such as hydras and sea stars.",
    F: "They hope that this line of research will make regeneration possible in humans someday."
  };

  return {
    year: 106,
    era: "指考",
    answerVerification: {
      source: "https://www.ceec.edu.tw/files/file_pool/1/0j075816212031757742/02-106%e6%8c%87%e8%80%83%e8%8b%b1%e6%96%87%e9%81%b8%e6%93%87%e9%a1%8c%e7%ad%94%e6%a1%88.pdf",
      sourceSha256: "9dd43b53b65b64d06424fd8d17d04b2057261961a3d74ea664df315876042d45",
      page: 1,
      subject: "英文考科",
      method: "manual-visual-and-text"
    },
    groups: {
      G1: {
        title: "France’s law against excessively skinny models",
        passage: "<p>France, home to such major fashion houses as Chanel, Dior, and Yves Saint Laurent, has joined Italy, Spain, and Israel in adopting laws against super-skinny models on catwalks or in ads.</p><p>The French government has passed a bill that will <b>11</b> the use of excessively skinny models. Modeling agencies violating the law can receive a fine of up to US$81,000, with up to six months in jail for staff involved. According to French officials, the measure aims to <b>12</b> the glorification of dangerously thin models.</p><p>Under the approved legislation, models will have to present a medical <b>13</b> that proves they are healthy before being allowed to work in the fashion industry. Moreover, they will be <b>14</b> regular weight checks. Modeling agencies will have to produce a medical report showing that their models have maintained a <b>15</b> body mass-to-height ratio. This bill is expected to change young women’s view on the ideal female form.</p>"
      },
      G2: {
        title: "The role of enzymes",
        passage: "<p>One factor that separates a living thing from an inanimate object is the organism’s ability to carry out chemical reactions that are crucial for its survival. Imagine the infinite amount of reactions that a large organism such as human carries out every single day. <b>16</b> of these reactions are possible without enzymes.</p><p>Enzymes consist of various types of proteins that work to drive the chemical reactions <b>17</b> for certain types of nutrients to take effect. Enzymes can either launch a reaction or speed it up. In the absence of enzymes, reactants may take hundreds of years to convert into a usable product, if they are able to do so <b>18</b>. This is why enzymes are crucial in the sustenance of life on earth.</p><p>Enzymes, <b>19</b>, do not always function perfectly. In 1902 Sir Archibald Garrod was the first to attribute a <b>20</b> to an enzyme defect, which he later referred to as an “inborn error of metabolism.” Today, newborns are routinely screened for certain enzyme defects such as PKU (phenylketonuria) and galactosemia, an error in the handling of the sugar galactose.</p>"
      },
      G3: {
        title: "The century egg",
        passage: "<p>Hundreds of years ago, a savory idea—called the century egg—was hatched in rural China. As the story goes, a farmer found naturally preserved duck eggs in a muddy pool of water and slaked lime. After surviving a tasting, he set out to replicate them manually, resulting in a <b>21</b> that would endure for centuries as a comfort food in Hong Kong, China and parts of Southeast Asia.</p><p>Though details of the century egg’s discovery are undocumented, scientists estimate that it <b>22</b> more than 500 years to the Ming Dynasty. And aside from some techniques used for large-scale production today, the egg preservation process has remained relatively <b>23</b>.</p><p>To make the eggs, a vat is typically filled with a combination of strong black tea, lime, salt and freshly burned wood ashes, and left to cool overnight. The next day, duck, quail, or chicken eggs are added to the <b>24</b>. Then they soak anywhere from seven weeks to five months—not for a century as the name <b>25</b>.</p><p>The century egg also <b>26</b> many other names, such as hundred-year egg, thousand-year egg, or millennium egg. But no matter what it’s called, this common snack has a rather uncommon taste and is often grouped by travelers with other <b>27</b> Asian foods such as chicken feet or snake soup. Getting beyond the egg’s appearance is the first <b>28</b>. Instead of being white with a bright orange yolk, the jelly-like egg takes on a less <b>29</b> dark brown and swampy green hue. There’s also a pungent ammonia-like odor to contend with, which has earned the snack yet another nickname: the “horse urine egg.”</p><p>While the century egg draws a following from older generations and curious travelers, it is falling out of <b>30</b> with the younger set, who are weary of China’s preserved and fermented foods. The future of the humble snack is uncertain, but chefs in Chinese restaurants are still trying to preserve this nostalgic bite of culinary heritage.</p>"
      },
      G4: {
        title: "Regeneration in animals",
        passage: "<p>One of the most difficult things for a human to face is the loss of a limb. If a person loses an arm or a leg, he/she must be fitted with an artificial limb.</p><p>The situation is very different for a starfish. If a starfish loses an arm, it can grow a new one. <b>31</b> Snails can even regrow their heads—imagine what the world would be like if humans could do that. But we can’t. Nor can we grow new limbs or even fingers. That’s why scientists are studying animals that can regrow body parts, that is, regenerate. <b>32</b></p><p>Many different kinds of animals show some form of regeneration. Most of them are, however, limited to the sort a lizard is capable of, like regrowing a lost tail. A cockroach can grow back a missing limb, but the limb itself can’t generate a new cockroach. <b>33</b> Bidirectional regeneration, on the other hand, refers to a situation in which splitting of an animal will result in separate fully functional animals. <b>34</b> Cut a hydra in half, and you’ll get two hydras. Cut it into four pieces, and you’ll get four.</p><p><b>35</b> A single one can be cut into hundreds of pieces and each will grow back into a whole in a week or so. Because of this remarkable ability, one planarian can be created over and over, giving it a sort of immortality. Whether this phenomenon can be achieved in humans will likely require years of research.</p>"
      },
      G5: {
        title: "Architect Zaha Hadid",
        passage: "<p>Often named as the most prominent contemporary female architect, Zaha Hadid, an Iraqi-born British woman, is significant for her intellectual toughness and her refusal to compromise on her artistic ideas. For many years, her designs filled the pages of architecture journals but were dismissed as impractical or too radical. Also, being female in a male-dominated field didn’t help her succeed.</p><p>Despite these setbacks, her star began to rise when her design for Cincinnati’s new Center for Contemporary Art was selected and built, earning her worldwide acclaim. The New York Times described the building as “the most important new building in America since the Cold War.” Once her talent was recognized, commissions started coming in to design a variety of projects, including public transportation, libraries, and opera houses. In 2004, Hadid became the first woman to win the prestigious Pritzker Prize. She also won the Stirling Prize in 2010 and 2011.</p><p>Hadid’s interest in architecture had roots in a trip her family took to the ancient Sumer region in southern Iraq, the site of one of the world’s oldest civilizations, when she was a teenager. She recalled: “The beauty of the landscape—where sand, water, reeds, birds, buildings, and people all somehow flowed together—has never left me. I’m trying to discover—invent, I suppose—an architecture, and forms of urban planning, that do something of the same thing in a contemporary way.”</p><p>Nature’s forms appear as a recurrent source of inspiration for Hadid’s architecture. Her designs are daring and visionary experiments with space and with the relationships of buildings to their urban surroundings. She consistently pushes the boundaries of architecture and urban design in the pursuit of a visionary aesthetic that expresses her ideals.</p>"
      },
      G6: {
        title: "Little Free Library",
        passage: "<p>Todd Bol, a retired businessman, could never have expected that a wooden container he built on his deck one day in 2009 would have the global impact it does today.</p><p>Bol built a dollhouse-size structure that looked like a schoolhouse on a post, and he put it on his lawn as a free community library to commemorate his mother, who was a book lover and school teacher. Bol’s prototype gave birth to Little Free Library (LFL), a nonprofit organization that seeks to place small, accessible book exchange boxes in neighborhoods around the world. The concept is simple: Neighbors are invited to share a book, leave a book, or both. Today, there are over 50,000 of these libraries registered in 70 countries.</p><p>Almost everyone can register with LFL and start a library as long as the person keeps it in good shape and makes sure that book materials are appropriate for his/her neighborhood. Library owners can create their own library boxes; therefore, the libraries are usually unique in appearance, and there seems to be no limit to the possibilities. One library in California was built out of a used wine crate; another in Texas had tiny stairs and bright colored walls. Once registered, libraries are assigned a number at LFL’s website. The LFL Index lists the locations of all libraries with GPS coordinates and other information. Owners receive a sign that reads “Little Free Library.”</p><p>People say they have been more inclined to pick up a book when walking by a Little Free Library, out of curiosity and because it’s convenient. Some sidewalk librarians say they have met more neighbors since having a little library in their front yard. Bol is also most proud of the way Little Free Library is bringing communities together. “It’s started a neighborhood exchange. It gets people talking and more comfortable with their neighbors,” he says. “This leads to them helping each other.”</p>"
      },
      G7: {
        title: "Forensic linguistics in criminal investigations",
        passage: "<p>The term “forensic linguistics,” in its broadest sense, covers all areas of study where language and law intersect. A famous example of its application is the case of Chris Coleman, who was suspected of killing his family in 2009. Robert Leonard, the head of the forensic linguistics program at Hofstra University, presented some important linguistic evidence in the trial against Coleman. Relying heavily on word choice and spelling, Leonard suggested that the same person had written the threatening e-mails and sprayed the graffiti, and that those samples bore similarities to Coleman’s writing style. Coleman was later found guilty of the murder.</p><p>Robert Leonard was not the first one who resorted to linguistic evidence in criminal investigation. The field of forensic linguistics was brought to prominence by his colleague James Fitzgerald in 1996 with his work in the case of the Unabomber, who had sent a series of letter bombs to college professors over several years, causing serious casualties. Working for the FBI, Fitzgerald urged the publication of the Unabomber’s letter—a lengthy declaration of the criminal’s philosophy.</p><p>After the letter was published, many people called the FBI to say they recognized the writing style. By analyzing sentence structure, word choice, and other linguistic patterns, Fitzgerald narrowed down the range of possible authors and finally linked the letter to the writings of Ted Kaczynski, a solitary former mathematician. For instance, Kaczynski tended to use extensive parallel phrases, which were frequently found in the bomber’s letter. Both Kaczynski and the bomber also showed a preference for dozens of unusual words, such as “chimerical” and “anomic.” The bomber’s use of the terms “broad” for women and “negro” for African Americans also enabled Fitzgerald to roughly calculate the suspect’s age. The linguistic evidence was strong enough for the judge to search Kaczynski’s isolated cabin in Montana; what was found there put him in prison for life.</p><p>On some level, finding hidden meanings from linguistic evidence is what we all do intuitively in our daily language interaction. This is exactly the same work forensic professionals do. As one forensic-linguistics firm, Testipro, puts it in its online promotional ad, the field can be regarded as “the basis of the entire legal system.”</p>"
      },
      G8: {
        title: "The origins and styles of national anthems",
        passage: "<p>During the past three hundred years, when a country gains its freedom or independence, one of the first things established is a national anthem. National anthems are generally played and sung at formal state occasions and other events which celebrate or support the country’s national identity.</p><p>Holland’s 16th-century hymn “Het Wilhelmus” is widely considered the world’s oldest national anthem, followed by the U.K.’s “God Save the King/Queen”—also a hymn, popularized in the 1740s. As nationalism spread throughout Europe in the 18th and 19th centuries, so did anthems. Many countries, such as the independent states that are today part of Germany, took “God Save the King/Queen” as a model and adopted hymns (songs of prayer typically addressed to a deity or VIP). Others, notably Spain and France, chose marches (songs with a strong, regular rhythm often performed by military bands)—which expressed a martial rather than monarchic spirit. With imperialism, Europeans spread their musical taste. Even when former colonies gained independence, they often imitated the traditions of their former rulers. The result is that most anthems are either hymns or marches, played on European instruments.</p><p>Japan’s anthem makes for a good case study of European influence. In the 1860s a British bandmaster living in Japan, John William Fenton, noted that the country did not have a national anthem. A local military officer, Ōyama Iwao, selected the lyrics from a Heian era poem and Fenton wrote the melody. About a decade later, a Japanese committee chose a replacement melody by a court musician—one that had been composed for traditional Japanese instruments, but in a mixed style influenced by Fenton’s arrangement. The version in use today was also altered by German Franz Eckert to fit a Western scale.</p><p>In addition to hymns and marches, British composer Michael Bristow identifies a couple of more minor categories. National anthems in South and Central America are often operatic, with long, elaborate orchestral introductions. These were influenced by 19th-century Italian opera. Burma and Sri Lanka are both in a folk group, as they rely more on indigenous instruments.</p>"
      }
    },
    questions: [
      q(1,"C1",["語境搭配"],"單題","詞彙題","D","Martha has been trying to ______ her roommate since their quarrel last week, as she doesn’t want to continue the argument.",{A:"overgrow",B:"bother",C:"pursue",D:"avoid"}),
      q(2,"C1",["詞義辨析"],"單題","詞彙題","A","As David finished the last drop of the delicious chicken soup, he licked his lips and gave out sounds of ______.",{A:"contentment",B:"dominance",C:"explosion",D:"affection"}),
      q(3,"C1",["詞義辨析"],"單題","詞彙題","C","After several rounds of intense fighting, the boxer punched his ______ right in the face, knocked him out, and won the match.",{A:"performer",B:"attendant",C:"opponent",D:"messenger"}),
      q(4,"C1",["詞義辨析"],"單題","詞彙題","B","Watch out! The bench has just been painted. You can fan the wet paint if you want to ______ its drying.",{A:"fasten",B:"hasten",C:"lengthen",D:"strengthen"}),
      q(5,"C1",["語境搭配"],"單題","詞彙題","D","Warm milk ______ sleepiness. So if you have trouble falling asleep, try drinking some warm milk before going to bed.",{A:"conceals",B:"recruits",C:"absorbs",D:"induces"}),
      q(6,"C1",["詞義辨析"],"單題","詞彙題","D","Having worked five years as a data processor in a small town, Alice is tired of the routine of her job and the ______ of her life.",{A:"disturbance",B:"salvation",C:"remainder",D:"monotony"}),
      q(7,"C1",["語境搭配"],"單題","詞彙題","A","Peter has never been on time to meetings or appointments. It would be interesting to look into reasons why he is ______ late.",{A:"chronically",B:"hysterically",C:"simultaneously",D:"resistantly"}),
      q(8,"C1",["詞義辨析"],"單題","詞彙題","C","The film Life of Pi won Ang Lee an Oscar in 2013 for Best Director—one of the most ______ awards in the movie industry.",{A:"populated",B:"surpassed",C:"coveted",D:"rotated"}),
      q(9,"C1",["詞義辨析"],"單題","詞彙題","B","According to environmental scientists, the earth is likely to experience significant ______ changes within the next century.",{A:"provincial",B:"ecological",C:"authentic",D:"redundant"}),
      q(10,"C1",["語境搭配"],"單題","詞彙題","A","Traditional Chinese medical practices include ______ remedies, which use plants, plant parts, or a mixture of these to prevent or cure diseases.",{A:"herbal",B:"frantic",C:"magnetic",D:"descriptive"}),

      q(11,"C2",["語境選詞"],"題組","綜合測驗","C","Choose the best answer for blank 11.",{A:"forecast",B:"represent",C:"criminalize",D:"distinguish"},"G1"),
      q(12,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 12.",{A:"put up with",B:"crack down on",C:"give in to",D:"look out for"},"G1"),
      q(13,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 13.",{A:"coverage",B:"certificate",C:"operation",D:"prescription"},"G1"),
      q(14,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 14.",{A:"subject to",B:"accustomed to",C:"blessed with",D:"familiar with"},"G1"),
      q(15,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 15.",{A:"healthy",B:"pleasant",C:"frequent",D:"distinctive"},"G1"),
      q(16,"C2",["邏輯關係"],"題組","綜合測驗","C","Choose the best answer for blank 16.",{A:"Any",B:"All",C:"None",D:"More"},"G2"),
      q(17,"C2",["語境搭配"],"題組","綜合測驗","B","Choose the best answer for blank 17.",{A:"requires",B:"required",C:"requiring",D:"to require"},"G2"),
      q(18,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 18.",{A:"at all",B:"at hand",C:"at first",D:"at ease"},"G2"),
      q(19,"C2",["轉承語"],"題組","綜合測驗","D","Choose the best answer for blank 19.",{A:"hereafter",B:"instead",C:"likewise",D:"however"},"G2"),
      q(20,"C2",["語境搭配"],"題組","綜合測驗","A","Choose the best answer for blank 20.",{A:"disease",B:"balance",C:"measure",D:"statement"},"G2"),

      q(21,"C2",["文意選填"],"題組","文意選填","C","Choose the best answer for blank 21.",wordOptions,"G3"),
      q(22,"C2",["文意選填"],"題組","文意選填","D","Choose the best answer for blank 22.",wordOptions,"G3"),
      q(23,"C2",["文意選填"],"題組","文意選填","J","Choose the best answer for blank 23.",wordOptions,"G3"),
      q(24,"C2",["文意選填"],"題組","文意選填","H","Choose the best answer for blank 24.",wordOptions,"G3"),
      q(25,"C2",["文意選填"],"題組","文意選填","F","Choose the best answer for blank 25.",wordOptions,"G3"),
      q(26,"C2",["文意選填"],"題組","文意選填","I","Choose the best answer for blank 26.",wordOptions,"G3"),
      q(27,"C2",["文意選填"],"題組","文意選填","B","Choose the best answer for blank 27.",wordOptions,"G3"),
      q(28,"C2",["文意選填"],"題組","文意選填","K","Choose the best answer for blank 28.",wordOptions,"G3"),
      q(29,"C2",["文意選填"],"題組","文意選填","G","Choose the best answer for blank 29.",wordOptions,"G3"),
      q(30,"C2",["文意選填"],"題組","文意選填","L","Choose the best answer for blank 30.",wordOptions,"G3"),

      q(31,"C3",["篇章結構"],"題組","篇章結構","C","Choose the sentence that best fits blank 31.",structureOptions,"G4"),
      q(32,"C3",["篇章結構"],"題組","篇章結構","F","Choose the sentence that best fits blank 32.",structureOptions,"G4"),
      q(33,"C3",["篇章結構"],"題組","篇章結構","A","Choose the sentence that best fits blank 33.",structureOptions,"G4"),
      q(34,"C3",["篇章結構"],"題組","篇章結構","E","Choose the sentence that best fits blank 34.",structureOptions,"G4"),
      q(35,"C3",["篇章結構"],"題組","篇章結構","D","Choose the sentence that best fits blank 35.",structureOptions,"G4"),

      q(36,"C4",["細節檢索"],"題組","閱讀測驗","D","According to the passage, what is a major factor in Hadid’s success?",{A:"Her family support.",B:"Her ethnic origin.",C:"Her gender and education.",D:"Her vision and talent."},"G5"),
      q(37,"C4",["語境推義"],"題組","閱讀測驗","B","What does the author mean by “…her star began to rise…” in the second paragraph?",{A:"She started to make a fortune.",B:"She became more recognized.",C:"Her designs became classical.",D:"Her ideas started to take shape."},"G5"),
      q(38,"C4",["主旨判讀"],"題組","閱讀測驗","D","What is the third paragraph mainly about?",{A:"The cultural background of Hadid’s family.",B:"The beautiful landscape of Hadid’s hometown.",C:"A vivid recollection of Hadid’s life as a teenager.",D:"A fundamental source of Hadid’s architectural philosophy."},"G5"),
      q(39,"C4",["細節檢索"],"題組","閱讀測驗","C","According to the passage, which of the following is true about Hadid’s career in architecture?",{A:"She built the first Center for Contemporary Art in New York.",B:"Her architecture projects mainly involve museums in urban areas.",C:"Her works can be characterized as boldly contemporary and innovative.",D:"Her early designs were often rejected because of her political background."},"G5"),
      q(40,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following statements is NOT mentioned about Todd Bol?",{A:"His mother used to be a school teacher.",B:"He was engaged in trade and commerce.",C:"He provided a great service to his neighborhood.",D:"He built a schoolhouse to pay tribute to his mother."},"G6"),
      q(41,"C4",["指涉判讀"],"題組","閱讀測驗","B","What does “prototype” refer to in the second paragraph?",{A:"A community center.",B:"A book exchange box.",C:"A dollhouse on a post.",D:"A nonprofit organization."},"G6"),
      q(42,"C4",["細節檢索"],"題組","閱讀測驗","A","Which of the following is true about the operation of a Little Free Library?",{A:"The library can come in any shape and color.",B:"There is no limit to the selection of its materials.",C:"The owner must first be assigned a number from the LFL website.",D:"The librarian is in charge of checking the books in and out of the library."},"G6"),
      q(43,"C4",["篇章理解"],"題組","閱讀測驗","B","What is a contribution of Little Free Library?",{A:"The LFL Index can improve GPS functions.",B:"It promotes reading and literacy in a simple way.",C:"It helps to strengthen library associations around the world.",D:"Its location satisfies people’s curiosity about their neighbors."},"G6"),
      q(44,"C4",["主旨判讀"],"題組","閱讀測驗","C","What is the main idea of the passage?",{A:"Robert Leonard has provided linguistic evidence in court cases.",B:"The FBI relies mainly on language experts to solve its crime cases.",C:"Studying texts can provide critical evidence in criminal investigations.",D:"Finding hidden meanings in language use is important for daily interactions."},"G7"),
      q(45,"C4",["細節檢索"],"題組","閱讀測驗","C","Which of the following is true about the Unabomber?",{A:"He didn’t like to be called negro.",B:"He was good at analyzing the use of language.",C:"He declared his philosophy in a written statement.",D:"He was a professor of mathematics living on Hofstra campus."},"G7"),
      q(46,"C4",["細節檢索"],"題組","閱讀測驗","A","What type of language feature is NOT mentioned in the passage?",{A:"Sound pattern.",B:"Spelling of words.",C:"Selection of words.",D:"Grammatical pattern."},"G7"),
      q(47,"C4",["推論判讀"],"題組","閱讀測驗","D","What can be inferred from the passage?",{A:"Meaning can be distorted in the process of writing.",B:"Some features in language use are shared by everyone.",C:"Crimes are usually committed by people who are highly educated.",D:"People tend to stick to certain habitual patterns in their use of language."},"G7"),
      q(48,"C4",["細節檢索"],"題組","閱讀測驗","D","Which of the following is NOT mentioned as a basis to compose national anthems?",{A:"Prayer songs.",B:"Marching songs.",C:"Italian opera music.",D:"Movie theme music."},"G8"),
      q(49,"C4",["主旨判讀"],"題組","閱讀測驗","C","What is the second paragraph mainly about?",{A:"The function of national anthems.",B:"The world’s oldest national anthem.",C:"The origin and spread of national anthems.",D:"Reasons why many countries have national anthems."},"G8"),
      q(50,"C4",["細節檢索"],"題組","閱讀測驗","C","Which of the following is true regarding Japan’s national anthem?",{A:"It was not written until the 20th century.",B:"The lyrics was written by a Japanese officer.",C:"The melody was first composed by a British musician.",D:"The current version is barely influenced by western music."},"G8"),
      q(51,"C4",["推論判讀"],"題組","閱讀測驗","B","What can be inferred about the influence of European imperialism on national anthems?",{A:"Human rights are a common theme in national anthems.",B:"National anthems of some countries share similar musical features.",C:"Many national anthems were chosen by ruling European countries.",D:"Local traditions were excluded in the composition of national anthems."},"G8")
    ]
  };
})());

[
  "室友爭吵後，Martha 不想繼續爭論，所以一直設法避開她；avoid 表示「避開」。",
  "這道湯帶來溫暖與滿足感；contentment 表示「滿足、知足」。",
  "比賽中要擊敗的是對手；opponent 表示「對手」。",
  "把衣服鋪開能加快乾燥；hasten 表示「加速、促進」。",
  "藥物會引起睡意，因此服用後不宜開車；induce 表示「引起」。",
  "工作內容單調重複，使她感到乏味；monotony 表示「單調」。",
  "他總是遲到，chronically 表示「長期地、習慣性地」。",
  "奧斯卡獎是演員渴望獲得的榮譽；coveted 表示「令人嚮往的」。",
  "植物與動物分布改變屬於生態變化；ecological 表示「生態的」。",
  "草藥療法使用植物治療疾病；herbal remedies 表示「草藥療法」。",
  "法國法案要把使用過瘦模特兒定為違法；criminalize 表示「使成為犯罪」。",
  "措施旨在打擊對危險纖瘦身材的美化；crack down on 表示「嚴厲取締」。",
  "模特兒工作前須出示證明健康的醫療證明；certificate 表示「證明書」。",
  "模特兒將接受定期體重檢查；be subject to 表示「須接受」。",
  "醫療報告須證明模特兒維持健康的身高體重比例；healthy 符合語意。",
  "生物維生所需的化學反應若無酵素便無法進行；None 與 without enzymes 構成完整否定。",
  "required for... 是過去分詞片語，修飾維持營養作用所需要的化學反應。",
  "if they are able to do so at all 表示「即使終究能做到」，強調缺乏酵素時反應極慢。",
  "前段強調酵素不可或缺，後段改說酵素並非總能正常運作；however 表轉折。",
  "Garrod 首次把一種疾病歸因於酵素缺陷；disease 符合後文先天代謝異常。",
  "農夫仿製保存蛋，形成流傳數百年的美食；delicacy 表示「珍饈、美食」。",
  "科學家推估皮蛋可追溯至五百多年前的明朝；date back 表示「追溯至」。",
  "除了量產技術外，保存蛋的製程大致維持不變；unchanged 符合語意。",
  "鴨蛋、鵪鶉蛋或雞蛋被放進前述茶、石灰、鹽與灰燼的混合物；mixture 符合指涉。",
  "浸泡時間並非名稱所暗示的一百年；imply 表示「暗示」。",
  "皮蛋也以許多其他名稱為人所知；go by 表示「以……名稱出現」。",
  "雞腳、蛇湯與皮蛋都被旅客歸為異國、少見的亞洲食物；exotic 符合語意。",
  "要品嘗皮蛋，首先得克服其外觀帶來的心理障礙；challenge 表示「挑戰」。",
  "深褐與沼澤綠的色澤較不誘人；appetizing 表示「令人有食慾的」。",
  "年輕世代逐漸不再喜愛醃製與發酵食品；fall out of favor 表示「失寵」。",
  "前句以海星再生手臂為例，接著補充龍蝦、蠑螈等動物也有相同能力，故選 C。",
  "科學家研究能再生肢體的動物，目的正是希望有朝一日讓人類也能再生，故選 F。",
  "蟑螂能長回肢體，但肢體不能生成整隻蟑螂，這正是單向再生的定義，故選 A。",
  "下句以水螅切成多段仍各自長成完整個體為例，故先以 E 引出雙向再生的動物。",
  "末段描述渦蟲切成數百片仍可各自長成完整個體，D 最能引出其驚人的再生能力。",
  "文章指出 Hadid 憑藝術理念、實驗性設計與建築成就獲得肯定，關鍵是她的眼界與才華。",
  "her star began to rise 指她的設計獲選興建後得到全球讚譽，也就是逐漸受到認可。",
  "第三段以童年造訪蘇美地區的景觀經驗，說明 Hadid 建築哲學的根本靈感來源。",
  "她的設計大膽、富想像力且不斷突破建築界線，可概括為當代且創新。",
  "Bol 建造的是「外觀像校舍」的書箱，而非真正蓋一間校舍紀念母親，故 D 未被提及。",
  "prototype 指 Bol 最初設置在草坪上的社區圖書箱，也是小小免費圖書館的原型。",
  "圖書箱可由主人自行設計，文中舉酒箱、階梯和彩牆為例，顯示外形與顏色不限。",
  "路人因方便與好奇而拿書閱讀，簡單的交換機制因而促進閱讀與識讀。",
  "兩個案件都說明分析文字的用字、拼字與句法模式能成為刑事偵查的關鍵證據。",
  "炸彈客以一封長篇文字公開自己的哲學主張，故 C 符合文意。",
  "文章提到拼字、選詞、句構與平行語句，沒有提到聲音模式。",
  "警方能藉反覆出現的特殊用字與句式鎖定作者，可推知人們常保有習慣性的語言模式。",
  "文章列出聖歌、進行曲、歌劇與民俗樂器，未提電影主題曲。",
  "第二段由最早國歌談到民族主義與帝國主義下各類國歌的擴散，主旨是國歌的起源與傳播。",
  "日本國歌最初的旋律由居日英國樂隊指揮 Fenton 創作，故 C 正確。",
  "前殖民地獨立後仍常仿效昔日統治者的音樂傳統，因此一些國歌具有相似的歐洲音樂特徵。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
