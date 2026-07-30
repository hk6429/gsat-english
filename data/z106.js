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
  "<b>解題關鍵：</b>since their quarrel 表示兩人吵架後，Martha 不想 continue the argument，因此一直設法不和室友碰面。<br>(A) overgrow：長得過大、蔓生；不能以人為受詞。<br>(B) bother：打擾；會增加衝突，不符合她想停止爭論。<br>(C) pursue：追求、追趕；意思和躲開相反。<br>(D) avoid：避開；avoid her roommate 正好符合不想再爭吵的目的。<br>把答案放回去：Martha 自從爭吵後便一直避開室友，以免繼續爭論。",
  "<b>解題關鍵：</b>David 喝完 delicious chicken soup，還舔嘴唇並發出聲音，這些動作顯示他很享受且滿足。<br>(A) contentment：滿足、知足；sounds of contentment 符合喝完美味湯品的反應。<br>(B) dominance：支配、優勢；不是吃東西後的感受。<br>(C) explosion：爆炸；不能描述滿意的聲音。<br>(D) affection：喜愛、感情；雖可喜愛食物，但 give out sounds of affection 不自然。<br>把答案放回去：他喝完最後一滴湯，滿足地舔唇並發出聲音。",
  "<b>解題關鍵：</b>拳擊手經過多回合激戰，擊中某人的臉、將他打倒並贏得比賽；被擊敗的是比賽對手。<br>(A) performer：表演者；拳賽參賽者不以此字表示敵手。<br>(B) attendant：服務員、出席者；不是和拳擊手交戰的人。<br>(C) opponent：對手；punch his opponent 完全符合拳賽情境。<br>(D) messenger：信差；題目沒有傳遞訊息。<br>把答案放回去：拳擊手一拳擊中對手臉部，把他擊倒而獲勝。",
  "<b>解題關鍵：</b>長椅剛上漆，fan the wet paint「對濕漆搧風」會讓水分較快散去，因此是加快乾燥。<br>(A) fasten：扣緊、固定；常用於安全帶或扣子，不表示加速。<br>(B) hasten：加速、促進；hasten its drying 是「加快它乾燥」。<br>(C) lengthen：延長；會使乾燥時間更久，方向相反。<br>(D) strengthen：加強；不能表示乾得更快。<br>把答案放回去：若想加快濕漆乾燥，可以對它搧風。",
  "<b>解題關鍵：</b>下一句建議睡不著時在睡前喝溫牛奶，表示溫牛奶會引起睡意。主詞 Warm milk 是單數，動詞用 -s。<br>(A) conceals：隱藏；不能隱藏睡意來幫助入睡。<br>(B) recruits：招募；受詞通常是人。<br>(C) absorbs：吸收；若吸收睡意反而無法解釋助眠。<br>(D) induces：引起、誘發；induce sleepiness 是自然搭配。<br>把答案放回去：溫牛奶會引起睡意，因此可在睡前飲用。",
  "<b>解題關鍵：</b>Alice 做了五年資料處理，已厭倦 routine「一成不變的例行工作」；and 後應放意思相近的生活單調。<br>(A) disturbance：打擾、混亂；與 routine 的穩定重複不同。<br>(B) salvation：救贖；不是她厭倦的生活特質。<br>(C) remainder：剩餘部分；不能表示生活乏味。<br>(D) monotony：單調、千篇一律；和 routine 前後呼應。<br>把答案放回去：她厭倦工作的例行模式與生活的單調。",
  "<b>解題關鍵：</b>Peter has never been on time 表示他每次會議或約會都遲到，是長期反覆發生的問題。空格修飾 late，需要副詞。<br>(A) chronically：長期地、習慣性地；chronically late 符合總是遲到。<br>(B) hysterically：歇斯底里地；描述情緒，不描述遲到頻率。<br>(C) simultaneously：同時地；沒有兩件事同時發生。<br>(D) resistantly：抗拒地；不是自然的副詞搭配。<br>把答案放回去：值得研究他為何長期習慣性遲到。",
  "<b>解題關鍵：</b>奧斯卡最佳導演獎是電影界最受重視的獎項之一，許多電影工作者都渴望獲得。<br>(A) populated：人口眾多的；通常形容地區。<br>(B) surpassed：被超越的；不能說最被超越的獎。<br>(C) coveted：令人夢寐以求的；coveted award 表示大家都想得到的獎項。<br>(D) rotated：旋轉的、輪替的；和獎項地位無關。<br>把答案放回去：《少年 Pi》為李安贏得電影界最令人嚮往的獎項之一。",
  "<b>解題關鍵：</b>主詞 earth，來源是 environmental scientists，談的是未來一世紀地球環境系統的重要變化。<br>(A) provincial：省級的、地方性的；地球變化不是單一地方。<br>(B) ecological：生態的；ecological changes 涵蓋生物與環境的改變。<br>(C) authentic：真實的；不能說地球經歷「真實變化」來指出類型。<br>(D) redundant：多餘的；與環境科學預測無關。<br>把答案放回去：科學家認為地球下個世紀可能經歷重大的生態變化。",
  "<b>解題關鍵：</b>關係子句說這些療法 use plants, plant parts, or a mixture of these，直接指出以植物為材料。<br>(A) herbal：草本的；herbal remedies 就是用草藥預防或治療疾病。<br>(B) frantic：慌亂的；通常形容人或活動狀態。<br>(C) magnetic：磁性的；題目沒有磁力治療。<br>(D) descriptive：描述性的；不能表示療法使用植物。<br>把答案放回去：傳統中醫包含使用植物或植物混合物的草藥療法。",
  "<b>解題關鍵：</b>下一句說違法的模特兒經紀公司會被罰款，員工甚至可能入獄，可知法案要把使用過瘦模特兒列為犯罪。<br>(A) forecast：預測；法案不是預測使用情況。<br>(B) represent：代表；不能帶出罰款與監禁。<br>(C) criminalize：使成為犯罪；和 violating the law 完整呼應。<br>(D) distinguish：區分；法律重點不是辨別模特兒。<br>把答案放回去：法國通過法案，將使用過瘦模特兒定為違法。",
  "<b>解題關鍵：</b>the measure aims to... 說明法案目的；dangerously thin models 被社會 glorification「美化」，政府要採取強硬行動制止。<br>(A) put up with：忍受；會變成政府容忍美化，與立法相反。<br>(B) crack down on：嚴厲取締；符合罰款與監禁措施。<br>(C) give in to：向……屈服；不合政府管制立場。<br>(D) look out for：留意、照顧；力度不足且語意不合。<br>把答案放回去：這項措施旨在嚴厲打擊對危險纖瘦身材的美化。",
  "<b>解題關鍵：</b>模特兒必須出示一份 medical ______，而且該文件能 proves they are healthy，空格需要「健康證明書」。<br>(A) coverage：報導、保險範圍；不能作為證明健康的文件。<br>(B) certificate：證明書；medical certificate 是醫療證明。<br>(C) operation：手術、運作；不能出示手術來證明健康。<br>(D) prescription：處方；是醫師開藥指示，不等於健康證明。<br>把答案放回去：模特兒工作前須提出證明健康的醫療證明。",
  "<b>解題關鍵：</b>legislation 規定模特兒需定期接受體重檢查；句型 will be ______ regular weight checks 需要能接名詞的片語。<br>(A) subject to：須服從、會受到；be subject to checks 是「須接受檢查」。<br>(B) accustomed to：習慣於；只說習慣，不能表示法律強制。<br>(C) blessed with：有幸擁有；檢查不是天賦好處。<br>(D) familiar with：熟悉；模特兒不是只需了解檢查。<br>把答案放回去：此外，模特兒將須接受定期體重檢查。",
  "<b>解題關鍵：</b>法案目標是防止 dangerously thin models，醫療報告要證明模特兒的身高體重比例不危害健康，因此填 healthy。<br>(A) healthy：健康的；healthy body mass-to-height ratio 符合法案目的。<br>(B) pleasant：令人愉快的；不能評量身高體重比例。<br>(C) frequent：頻繁的；比例不是事件頻率。<br>(D) distinctive：獨特的；法律要求健康而非與眾不同。<br>把答案放回去：經紀公司必須證明模特兒維持健康的身高體重比例。",
  "<b>解題關鍵：</b>前文說生物每天要進行無數維生反應，後面又強調 without enzymes「沒有酵素」時反應可能花數百年；因此沒有任何一項反應能在缺乏酵素下正常進行。<br>(A) Any：任何一個，放入會表示有些可行，和後文矛盾。<br>(B) All：全部，會說全部都可不用酵素，更不合。<br>(C) None：沒有任何；None...without enzymes 是完整否定。<br>(D) More：更多；缺乏比較基準。<br>把答案放回去：這些反應若沒有酵素，沒有一項能正常進行。",
  "<b>解題關鍵：</b>句子主要動詞是 work；空格片語修飾 chemical reactions，意思是「某些營養素發揮作用所需要的反應」。反應是「被需要」，用過去分詞。<br>(A) requires：單數動詞，但 reactions 是複數且本句已有 work。<br>(B) required：被需要的；required for... 正確修飾 reactions。<br>(C) requiring：主動表示反應需要別物，方向不符。<br>(D) to require：不定詞不能自然接在名詞後表被需要。<br>把答案放回去：酵素推動營養素發揮作用所需的化學反應。",
  "<b>解題關鍵：</b>沒有酵素時，反應物轉成可用產物可能需數百年，後面 if they are able to do so ______ 更加強語氣：「即使終究做得到的話」。<br>(A) at all：究竟、根本；if...at all 常用來懷疑事情是否能發生。<br>(B) at hand：在手邊；不合反應轉換。<br>(C) at first：起初；文章不是比較早晚階段。<br>(D) at ease：自在；只能形容人或狀態。<br>把答案放回去：缺少酵素時，反應即使能發生，也可能耗時數百年。",
  "<b>解題關鍵：</b>前兩段強調酵素對生命不可或缺；新段落卻說 do not always function perfectly「並不總是運作良好」，前後是轉折。<br>(A) hereafter：此後；是時間關係。<br>(B) instead：反而、取而代之；通常指出替代行動，此處沒有替代。<br>(C) likewise：同樣地；前後不是相同方向。<br>(D) however：然而；放在兩個逗號間正確表轉折。<br>把答案放回去：然而，酵素並不總能完美運作。",
  "<b>解題關鍵：</b>後文提到 enzyme defect 和 inborn error of metabolism，並列舉 PKU 等新生兒篩檢的健康異常；Garrod 首次把一種疾病歸因於酵素缺陷。<br>(A) disease：疾病；attribute a disease to a defect 語意正確。<br>(B) balance：平衡；不能歸因成健康異常。<br>(C) measure：措施；不是酵素缺陷造成。<br>(D) statement：陳述；也不能由缺陷引起。<br>把答案放回去：Garrod 首次把疾病的成因連結到酵素缺陷。",
  "<b>解題關鍵：</b>農夫嘗過自然保存的鴨蛋後，動手仿製，結果成為流傳數百年的 comfort food；空格前 a、後 that，需要單數名詞。<br>(C) delicacy：美食、珍饈；符合可品嘗且長久流傳的皮蛋。<br>容易混淆：(H) mixture 是製作時茶、石灰等混合物，出現在後段；(K) challenge 是品嘗前克服外觀的挑戰；(B) exotic 是形容詞，不能接 a。<br>把答案放回去：農夫的仿製成果成為流傳數百年的美食。",
  "<b>解題關鍵：</b>scientists estimate 與 more than 500 years to the Ming Dynasty 都在說皮蛋起源的時間；主詞 it 指皮蛋，空格需表示「可追溯到」。<br>(D) dates back：追溯至；date back...to 是時間起源的固定用法。<br>容易混淆：(I) goes by 是「以某名稱為人所知」，應接 names；(J) unchanged 是形容詞；(F) implies 是暗示，不表示存在時間。<br>把答案放回去：科學家估計皮蛋可追溯至五百多年前的明朝。",
  "<b>解題關鍵：</b>aside from 表示除今日少數量產技術外，傳統保存過程和過去大致相同；has remained 後需接形容詞。<br>(J) unchanged：未改變的；remained relatively unchanged 符合製程沿用。<br>容易混淆：(E) refreshed 是恢復精神，不能形容製程；(D) dates back 是動詞片語；(H) mixture 是名詞，會使句型不完整。<br>把答案放回去：除了現代量產技巧，皮蛋保存製程大致沒有改變。",
  "<b>解題關鍵：</b>前句把紅茶、石灰、鹽和木灰放進大桶；下一天把各種蛋加入同一內容物，空格前 the 回指這些材料混在一起的東西。<br>(H) mixture：混合物；add eggs to the mixture 指把蛋放入上述混合液。<br>容易混淆：(C) delicacy 是做好的美食；(G) appetizing 是形容詞；(B) exotic 也為形容詞，兩者都不能接在 the 後作此處名詞。<br>把答案放回去：隔天把鴨蛋、鵪鶉蛋或雞蛋放入混合物。",
  "<b>解題關鍵：</b>皮蛋實際浸泡七週到五個月，破折號後說 not for a century，表示名稱雖叫 century egg，卻不是真的泡一百年；名稱只是「暗示」如此。<br>(F) implies：暗示；as the name implies 是「如名稱所暗示」。<br>容易混淆：(I) goes by 是以某名稱流傳，主詞應是食物；(D) dates back 表起源；(A) provokes 是引發，均不能說名稱暗示時間。<br>把答案放回去：蛋只浸泡數週到數月，並不像名稱暗示的整整一世紀。",
  "<b>解題關鍵：</b>後面列出 hundred-year egg、thousand-year egg、millennium egg，都是皮蛋的其他名稱；空格後 many other names 需要「以……名稱為人所知」。<br>(I) goes by：以某名字出現；goes by many names 搭配正確。<br>容易混淆：(F) implies 是名稱暗示意義，用在前一格；(D) dates back 接時間；(L) favor 用於 fall out of favor。<br>把答案放回去：皮蛋也有百年蛋、千年蛋等許多名稱。",
  "<b>解題關鍵：</b>travelers 把皮蛋和 chicken feet、snake soup 放在同一類；對外地旅人而言，這些是不熟悉、具有異國特色的亞洲食物。空格是形容詞修飾 foods。<br>(B) exotic：異國的、奇特的；最符合旅人眼中的陌生食物。<br>容易混淆：(G) appetizing 是看起來可口，但下文反而說外觀不吸引；(C) delicacy 是名詞；(J) unchanged 不描述食物種類。<br>把答案放回去：旅人常把皮蛋與雞腳、蛇湯歸為奇特的亞洲食物。",
  "<b>解題關鍵：</b>下一句詳述皮蛋呈深褐、沼澤綠，還有刺鼻氣味，表示在品嘗之前，第一道難關是克服它的外觀。空格前 the first 需要名詞。<br>(K) challenge：挑戰、難關；符合需要克服的心理障礙。<br>容易混淆：(A) provokes 是動詞；(B) exotic 是形容詞；(C) delicacy 雖是名詞，但「第一道美食」無法承接外觀問題。<br>把答案放回去：要品嘗皮蛋，首先得跨過其外觀帶來的挑戰。",
  "<b>解題關鍵：</b>Instead of being white with a bright orange yolk 對比皮蛋的深褐與沼澤綠；less ______ 表示這顏色較不會讓人想吃。空格需形容詞。<br>(G) appetizing：令人有食慾的；less appetizing 說外觀較不誘人。<br>容易混淆：(B) exotic 是奇特，文中要表「看起來不好吃」；(E) refreshed 是精神恢復；(J) unchanged 是未改變，都不適合描述顏色帶來的食慾。<br>把答案放回去：皮蛋呈現較不誘人的深褐與沼澤綠。",
  "<b>解題關鍵：</b>While 形成對比：老一代與好奇旅人喜歡皮蛋，但年輕人對醃製發酵食物已感厭倦，皮蛋在年輕族群中逐漸不受歡迎。<br>(L) favor：喜愛、支持；fall out of favor 是「失寵、不再受歡迎」。<br>容易混淆：(C) delicacy 是美食，fall out of delicacy 不成立；(K) challenge 也無此搭配；(I) goes by 用來介紹名稱。<br>把答案放回去：皮蛋正逐漸失去年輕世代的喜愛。",
  "<b>解題關鍵：</b>空格前說海星失去手臂能長出新的；空格後又說蝸牛甚至能長回頭部，中間應補充其他動物也有同類能力。<br>(C) 提到龍蝦、蠑螈等也會發生 the same thing，能延續再生例子。<br>(B) 談人類能力，應接在人類 cannot 的轉折附近；(A)、(E) 是再生類型定義，文章稍後才介紹；(D) 只談渦蟲，應放在最後一段。<br>所以答案選 (C)，段落由海星擴展到更多動物，再帶出蝸牛。",
  "<b>解題關鍵：</b>空格前說人類不能長出新肢體，因此科學家研究能再生身體部位的動物；下一段開始說各種動物的再生類型。此處應補科學家的研究希望。<br>(F) They 指 scientists，hope to make regeneration possible in humans 呼應前面的「人類做不到」。<br>(B) 說人類仍有些再生能力，會削弱此處對比；(C) 是動物例子；(A)、(E) 是分類說明；(D) 應引出渦蟲。<br>所以答案選 (F)，收束研究目的後再進入分類。",
  "<b>解題關鍵：</b>前句說蟑螂能長回肢體，但斷肢不能自己生成完整蟑螂；後句用 on the other hand 轉到 bidirectional regeneration「雙向再生」。空格應先命名前一種單向再生。<br>(A) this 回指「身體長回部位，但部位不能長成個體」，正是 unidirectional regeneration。<br>(E) 講水螅海星的雙向例子，應放後面；(D) 談渦蟲；(B)、(C)、(F) 皆不負責定義對比。<br>所以答案選 (A)。",
  "<b>解題關鍵：</b>前句剛定義雙向再生：動物切開後，各部分都能成為完整個體；後兩句立刻用水螅切成二隻、四隻來示範。因此空格要先說哪些動物有這種能力。<br>(E) this type 指雙向再生，並列 hydras and sea stars，正好引出水螅例子。<br>(A) 是單向再生；(C) 是長回肢體的例子；(D) 引出渦蟲；(F) 談人類研究希望。<br>所以答案選 (E)。",
  "<b>解題關鍵：</b>空格後的 A single one 指某種單數動物，能被切成數百片，每片一週內長回完整個體；下一句又直接說 one planarian，故空格必須先介紹渦蟲。<br>(D) 明確說在再生能力上少有動物比得上 planarian，能自然引出其驚人例子。<br>(E) 的 hydras 已在前段示範；(A) 定義單向再生；(B)、(C)、(F) 都無法提供 one 的明確指涉。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>第一段說 Hadid 長期遭遇性別偏見、作品被嫌不實用；最後一段卻強調她的 daring and visionary designs，並持續突破建築界線。成功來自眼界與才華。<br>(A) 家庭旅行帶來靈感，但沒有說家人支持促成職涯成功。<br>(B) 伊拉克出身不是成功因素。<br>(C) 女性身分反而造成阻礙，教育也非重點。<br>(D) vision and talent 符合她的創新設計獲獎。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>定位第二段：她的設計被選中並建成後，earned her worldwide acclaim，接著委託案增加、獲得重要獎項；star began to rise 是「名聲開始上升」。<br>(A) 文中沒說她開始賺大錢。<br>(B) became more recognized 符合獲全球認可。<br>(C) 她的設計是當代創新，不是變成古典。<br>(D) ideas took shape 是想法成形，但此時重點是外界肯定。<br>所以答案選 (B)。",
  "<b>解題關鍵：</b>第三段回憶青少年時造訪古蘇美地區，沙、水、蘆葦、鳥、人與建築自然流動的景象一直留在她心中，並成為她想在當代建築重現的理念。<br>(A) 文章提到全家旅行，但沒有介紹家族的族群、習俗或文化背景。<br>(B) 景觀美只是段中證據，目的是說明這種景觀如何影響她的建築想法。<br>(C) 只回憶一次旅行，不是完整描寫她的青少年生活。<br>(D) 準確統整這段在追溯她建築哲學的根本靈感來源。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>最後一段直接形容她的設計是 daring and visionary experiments，且 continually pushes the boundaries；第二段也說她設計多種公共建設，不限博物館。<br>(A) 她設計的是 Cincinnati 的當代藝術中心，不在紐約，也非第一座中心。<br>(B) 專案包含交通、圖書館、歌劇院，不以都市博物館為主。<br>(C) boldly contemporary and innovative 符合大膽創新。<br>(D) 早期受拒因不實用或太激進，不是政治背景。<br>所以答案選 (C)。",
  "<b>解題關鍵：</b>這是 NOT mentioned。第一、二段直接說 Bol 是 retired businessman、母親是 school teacher，他把小書箱放在草坪作免費社區圖書館。需找文章沒說的內容。<br>(A) 母親曾是老師，有明說。<br>(B) businessman 表示從事商業，已提及。<br>(C) 提供免費借換書服務，可算服務社區。<br>(D) 他蓋的是外觀像校舍的書箱，不是真正 schoolhouse；此說法未提且扭曲原文。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>定位第二段：Bol 先做了 dollhouse-size structure，外觀像柱上的校舍，放在草坪當 free community library；下一句稱 Bol’s prototype，指的就是這個最早版本。<br>(A) 它不是社區中心建築。<br>(B) book exchange box 符合讓鄰居取書、留書的箱子。<br>(C) dollhouse on a post 只抓外觀，忽略實際功能；原文是「像校舍」，非玩偶屋。<br>(D) 非營利組織是由原型發展出的 LFL。<br>所以答案選 (B)。",
  "<b>解題關鍵：</b>定位第三段：owners can create their own library boxes，所以外觀通常獨特、possibilities 沒有限制；例子有舊酒箱、迷你階梯、鮮豔牆面。<br>(A) 形狀與顏色可由主人自由設計，符合原文。<br>(B) 書籍材料仍須 appropriate for neighborhood，不是毫無限制。<br>(C) 是先註冊，之後才被分配號碼。<br>(D) 概念是鄰居自由拿書或留書，不需館員辦借還。<br>所以答案選 (A)。",
  "<b>解題關鍵：</b>最後一段說路人因好奇和方便，更願意拿起書；小書箱也促使鄰居交談、互助。題目問 contribution，要找最直接且符合核心服務的貢獻。<br>(A) LFL Index 使用 GPS 座標列位置，沒有改善 GPS 技術。<br>(B) 簡單的自由換書機制促進閱讀與識讀，符合全文。<br>(C) 沒有加強各國圖書館協會。<br>(D) 好奇心促使拿書，不是滿足對鄰居位置的好奇。<br>所以答案選 (B)。",
  "<b>解題關鍵：</b>主旨要涵蓋兩個案件。第一案靠選字與拼字連結 Coleman；第二案靠句構、特殊用字等鎖定 Unabomber。共同點是分析文字能提供刑事偵查的重要證據。<br>(A) 只涵蓋 Leonard 一個案例。<br>(B) 文中是舉 FBI 案例，沒說 FBI 主要依賴語言專家。<br>(C) 能統整法庭語言學與兩案證據。<br>(D) 日常互動只在結尾類比，不是全文主旨。<br>所以答案選 (C)。",
  "<b>解題關鍵：</b>定位第二段：Fitzgerald 主張公開 Unabomber’s letter，破折號後直接解釋為 a lengthy declaration of the criminal’s philosophy。<br>(A) negro 是炸彈客用來稱非裔人士的舊詞，不是他不喜歡被這樣稱。<br>(B) 分析語言的是 Fitzgerald。<br>(C) 他在長篇書面聲明中宣告自己的哲學，符合原文。<br>(D) Kaczynski 是獨居的前數學家，住蒙大拿小屋，不是 Hofstra 教授。<br>所以答案選 (C)。",
  "<b>解題關鍵：</b>這是 NOT mentioned。第一案明說 word choice and spelling；第三段又列 sentence structure、parallel phrases、unusual words，分別對應選字、拼字、文法句構。<br>(A) sound pattern「聲音模式」沒有出現，文章分析的是書面文字。<br>(B) spelling 在第一段明說。<br>(C) word choice 兩案皆提及。<br>(D) sentence structure、parallel phrases 都屬文法結構模式。<br>所以答案選 (A)。",
  "<b>解題關鍵：</b>這是推論題。警方能把威脅信、塗鴉和嫌犯文章連在一起，是因同一人反覆使用相似拼字、選字、平行句式與罕見詞；由此可推知語言習慣相當穩定。<br>(A) 沒說寫作會扭曲意義。<br>(B) 證據用來辨認個人差異，不是人人共享相同特徵。<br>(C) 兩個嫌犯背景不足以推論多數罪犯高學歷。<br>(D) 人們傾向維持特定語言模式，符合案件推理基礎。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>這是 NOT mentioned。第二段介紹 hymn「祈禱性聖歌」與 march「進行曲」；第四段又說南中美洲國歌受義大利歌劇影響。需找未列為國歌創作基礎者。<br>(A) prayer songs 對應 hymns，已提。<br>(B) marching songs 對應 marches，已提。<br>(C) Italian opera music 明確影響南中美洲國歌。<br>(D) movie theme music 全文沒有提到。<br>所以答案選 (D)。",
  "<b>解題關鍵：</b>第二段從荷蘭、英國最早國歌談起，再說民族主義使國歌遍及歐洲，帝國主義又把歐洲聖歌、進行曲傳到殖民地；主軸是如何起源並擴散。<br>(A) 國歌的功能在第一段。<br>(B) 最古老國歌只是段首細節。<br>(C) origin and spread 能包含早期例子、民族主義及帝國傳播。<br>(D) 沒有分析各國「為何需要」國歌。<br>所以答案選 (C)。",
  "<b>解題關鍵：</b>定位第三段：1860 年代英國樂隊指揮 Fenton 指出日本沒有國歌；日本軍官選自平安時代詩歌作歌詞，Fenton wrote the melody。<br>(A) 十九世紀已開始創作，不是二十世紀。<br>(B) 軍官是選擇既有詩句，不是自己寫歌詞。<br>(C) 最初旋律由英國音樂家 Fenton 創作。<br>(D) 現行版受 Fenton 編曲及德國人 Eckert 的西方音階影響，不是幾乎沒受影響。<br>所以答案選 (C)。",
  "<b>解題關鍵：</b>這是推論題。第二段直接說歐洲帝國把音樂品味傳到各地，前殖民地獨立後仍常模仿昔日統治者，結果多數國歌採歐洲樂器演奏的聖歌或進行曲。<br>(A) 沒提人權為共同主題。<br>(B) 由共同模仿歐洲傳統可合理推出部分國歌音樂特徵相似。<br>(C) 是前殖民地自行模仿，不是統治國代選。<br>(D) 緬甸、斯里蘭卡仍用本土樂器，不能說地方傳統全被排除。<br>所以答案選 (B)。"
].forEach((explain, index) => {
  window.BANK.at(-1).questions[index].explain = explain;
});
