export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Difficulty = "normal" | "competitiv" | "olimpic";

export interface DifficultyInfo {
  key: Difficulty;
  label: string;
  description: string;
  color: string;
  bgGradient: string;
  shadowColor: string;
  borderColor: string;
}

type Fact = {
  prompt: string;
  answer: string;
  wrong: [string, string, string];
  explanation: string;
};

export const QUESTIONS_PER_QUIZ = 20;
export const QUESTIONS_PER_LEVEL = 100;

export const difficulties: DifficultyInfo[] = [
  {
    key: "normal",
    label: "Normal",
    description: "20 de intrebari alese aleatoriu dintr-o banca de 100 de itemi de baza.",
    color: "text-sky-600",
    bgGradient: "from-sky-500 to-teal-500",
    shadowColor: "shadow-sky-200",
    borderColor: "border-sky-200",
  },
  {
    key: "competitiv",
    label: "Competitiv",
    description: "20 de intrebari alese aleatoriu dintr-o banca de 100 de itemi mediu-avansati.",
    color: "text-amber-600",
    bgGradient: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-200",
    borderColor: "border-amber-200",
  },
  {
    key: "olimpic",
    label: "Olimpic",
    description: "20 de intrebari alese aleatoriu dintr-o banca de 100 de itemi avansati.",
    color: "text-rose-600",
    bgGradient: "from-rose-500 to-red-600",
    shadowColor: "shadow-rose-200",
    borderColor: "border-rose-200",
  },
];

const normalFacts: Fact[] = [
  { prompt: "Care este capitala Republicii Moldova?", answer: "Chisinau", wrong: ["Balti", "Cahul", "Soroca"], explanation: "Chisinau este capitala si cel mai mare centru urban al Republicii Moldova." },
  { prompt: "Care este cel mai lung rau care traverseaza Republica Moldova?", answer: "Nistru", wrong: ["Prut", "Raut", "Bic"], explanation: "Nistrul este cel mai lung rau asociat teritoriului Republicii Moldova." },
  { prompt: "Ce tip de clima predomina in Republica Moldova?", answer: "Temperat-continentala", wrong: ["Ecuatoriala", "Polara", "Musonica"], explanation: "Clima Moldovei are veri calde, ierni relativ reci si influente continentale." },
  { prompt: "Care este cel mai mare continent ca suprafata?", answer: "Asia", wrong: ["Africa", "Europa", "Australia"], explanation: "Asia este cel mai intins continent al Terrei." },
  { prompt: "Care este cel mai mare ocean al Terrei?", answer: "Oceanul Pacific", wrong: ["Oceanul Atlantic", "Oceanul Indian", "Oceanul Arctic"], explanation: "Pacificul are cea mai mare suprafata dintre oceane." },
  { prompt: "Care este cel mai lung rau din Europa?", answer: "Volga", wrong: ["Dunarea", "Rinul", "Loara"], explanation: "Volga curge prin Rusia europeana si se varsa in Marea Caspica." },
  { prompt: "Ce mare se afla intre Europa si Africa?", answer: "Marea Mediterana", wrong: ["Marea Baltica", "Marea Nordului", "Marea Caspica"], explanation: "Mediterana separa sudul Europei de nordul Africii." },
  { prompt: "Care este cel mai mare desert cald din lume?", answer: "Sahara", wrong: ["Gobi", "Kalahari", "Atacama"], explanation: "Sahara este cel mai mare desert cald de pe Glob." },
  { prompt: "Care este cel mai populat continent?", answer: "Asia", wrong: ["Europa", "Africa", "America de Sud"], explanation: "Asia concentreaza cea mai mare parte a populatiei mondiale." },
  { prompt: "Ce lant muntos este considerat limita naturala dintre Europa si Asia?", answer: "Muntii Ural", wrong: ["Alpii", "Carpatii", "Pirineii"], explanation: "Muntii Ural sunt folositi frecvent ca limita fizico-geografica intre Europa si Asia." },
  { prompt: "Care este capitala Romaniei?", answer: "Bucuresti", wrong: ["Iasi", "Cluj-Napoca", "Brasov"], explanation: "Bucuresti este capitala Romaniei." },
  { prompt: "Care este capitala Frantei?", answer: "Paris", wrong: ["Lyon", "Marsilia", "Nisa"], explanation: "Paris este capitala Frantei." },
  { prompt: "Care este capitala Italiei?", answer: "Roma", wrong: ["Milano", "Napoli", "Torino"], explanation: "Roma este capitala Italiei." },
  { prompt: "Care este capitala Germaniei?", answer: "Berlin", wrong: ["Munchen", "Hamburg", "Frankfurt"], explanation: "Berlin este capitala Germaniei." },
  { prompt: "Care este capitala Spaniei?", answer: "Madrid", wrong: ["Barcelona", "Sevilla", "Valencia"], explanation: "Madrid este capitala Spaniei." },
  { prompt: "Care ocean se afla la vestul Europei?", answer: "Oceanul Atlantic", wrong: ["Oceanul Pacific", "Oceanul Indian", "Oceanul Arctic"], explanation: "Tarmurile vestice ale Europei sunt scaldate de Atlantic." },
  { prompt: "Ce rau formeaza o parte din hotarul de vest al Republicii Moldova?", answer: "Prut", wrong: ["Nistru", "Raut", "Ichel"], explanation: "Prutul marcheaza o parte importanta a hotarului cu Romania." },
  { prompt: "Care este principala activitate economica traditionala a Republicii Moldova?", answer: "Agricultura", wrong: ["Mineritul", "Constructia de nave", "Extractia petrolului"], explanation: "Agricultura are un rol major datorita solurilor fertile si climei favorabile." },
  { prompt: "Ce sol fertil este raspandit in Republica Moldova?", answer: "Cernoziomul", wrong: ["Podzolul", "Lateritul", "Solul aluvial polar"], explanation: "Cernoziomurile sunt soluri foarte fertile, importante pentru agricultura." },
  { prompt: "Care este cel mai adanc lac din lume?", answer: "Baikal", wrong: ["Victoria", "Superior", "Chad"], explanation: "Lacul Baikal din Siberia este cel mai adanc lac al Terrei." },
  { prompt: "Pe ce continent se afla Brazilia?", answer: "America de Sud", wrong: ["Africa", "Europa", "Asia"], explanation: "Brazilia ocupa o mare parte din America de Sud." },
  { prompt: "Pe ce continent se afla Egiptul?", answer: "Africa", wrong: ["Asia", "Europa", "Australia"], explanation: "Egiptul este in nord-estul Africii, cu Peninsula Sinai in Asia." },
  { prompt: "Pe ce continent se afla Japonia?", answer: "Asia", wrong: ["Europa", "America de Nord", "Africa"], explanation: "Japonia este un stat insular din Asia de Est." },
  { prompt: "Ce forma de relief este caracterizata prin altitudini mari si versanti abrupti?", answer: "Muntele", wrong: ["Campia", "Delta", "Platoul jos"], explanation: "Muntii au altitudini ridicate si relief puternic fragmentat." },
  { prompt: "Ce forma de relief se formeaza la varsarea unui rau prin depunere de aluviuni?", answer: "Delta", wrong: ["Canion", "Vulcan", "Ghetar"], explanation: "Delta apare unde raul depune sedimente la varsare." },
];

const competitivFacts: Fact[] = [
  { prompt: "Care este punctul cel mai inalt al Republicii Moldova?", answer: "Dealul Balanesti", wrong: ["Dealul Magura", "Dealul Tiganca", "Dealul Rautului"], explanation: "Dealul Balanesti are aproximativ 429 m si este cel mai inalt punct din tara." },
  { prompt: "Ce roci predomina in structura geologica a Republicii Moldova?", answer: "Roci sedimentare", wrong: ["Roci vulcanice", "Roci magmatice intrusive", "Roci metamorfice alpine"], explanation: "Teritoriul tarii este acoperit in mare parte de depozite sedimentare." },
  { prompt: "Ce proces modeleaza frecvent versantii din Republica Moldova?", answer: "Alunecarile de teren", wrong: ["Glaciatiunea actuala", "Vulcanismul", "Abrasiunea marina"], explanation: "Alunecarile apar pe versanti argilosi si fragmentati." },
  { prompt: "Ce port ofera Republicii Moldova acces la Dunare?", answer: "Giurgiulesti", wrong: ["Ungheni", "Soroca", "Rezina"], explanation: "Portul Giurgiulesti este situat in sudul tarii, la contactul cu Dunarea." },
  { prompt: "Care este cel mai mare rau din Africa?", answer: "Nilul", wrong: ["Congo", "Niger", "Zambezi"], explanation: "Nilul este recunoscut ca unul dintre cele mai lungi fluvii ale lumii." },
  { prompt: "Ce curent oceanic incalzeste clima Europei de Vest?", answer: "Curentul Golfului", wrong: ["Curentul Labrador", "Curentul Humboldt", "Curentul Benguelei"], explanation: "Curentul Golfului transporta ape calde spre Atlanticul de Nord." },
  { prompt: "Care este cel mai activ vulcan european?", answer: "Etna", wrong: ["Vezuviu", "Hekla", "Elbrus"], explanation: "Etna, din Sicilia, are eruptii frecvente." },
  { prompt: "Ce platou este numit adesea acoperisul lumii?", answer: "Platoul Tibetan", wrong: ["Platoul Deccan", "Platoul Braziliei", "Podisul Central Moldovenesc"], explanation: "Platoul Tibetan are altitudini medii foarte mari." },
  { prompt: "Ce stramtoare leaga Marea Neagra de Marea Marmara?", answer: "Bosfor", wrong: ["Gibraltar", "Dardanele", "Messina"], explanation: "Bosforul face legatura directa dintre Marea Neagra si Marea Marmara." },
  { prompt: "Ce tara este cel mai mare producator traditional de cafea?", answer: "Brazilia", wrong: ["Norvegia", "Mongolia", "Republica Moldova"], explanation: "Brazilia este lider mondial in productia de cafea." },
  { prompt: "Care este statul european complet inconjurat de Italia si aflat in Apenini?", answer: "San Marino", wrong: ["Monaco", "Andorra", "Liechtenstein"], explanation: "San Marino este o enclava in interiorul Italiei." },
  { prompt: "Care este capitala Ucrainei?", answer: "Kyiv", wrong: ["Odesa", "Lviv", "Harkiv"], explanation: "Kyiv este capitala Ucrainei." },
  { prompt: "Ce fluviu trece prin Viena, Bratislava si Budapesta?", answer: "Dunarea", wrong: ["Rinul", "Sena", "Tamisa"], explanation: "Dunarea traverseaza mai multe capitale si tari europene." },
  { prompt: "Ce unitate de relief domina centrul Republicii Moldova?", answer: "Podisul Codrilor", wrong: ["Campia Amazonului", "Alpii Dinarici", "Delta Nistrului"], explanation: "Codrii reprezinta o zona deluroasa si impadurita din centrul tarii." },
  { prompt: "Ce zona naturala este specifica sudului Republicii Moldova?", answer: "Stepa", wrong: ["Tundra", "Taigaua", "Padurea ecuatoriala"], explanation: "Sudul este mai arid si are trasaturi de stepa." },
  { prompt: "Ce factor favorizeaza eroziunea solului in Moldova?", answer: "Pantele si ploile torentiale", wrong: ["Ghetarii montani", "Mareele oceanice", "Lava vulcanica"], explanation: "Pantele cultivate si ploile intense accelereaza scurgerea si eroziunea." },
  { prompt: "Ce mare este legata de Oceanul Atlantic prin stramtoarea Gibraltar?", answer: "Marea Mediterana", wrong: ["Marea Caspica", "Marea Aral", "Marea Rosie"], explanation: "Gibraltarul este poarta dintre Atlantic si Mediterana." },
  { prompt: "Care este capitala Canadei?", answer: "Ottawa", wrong: ["Toronto", "Vancouver", "Montreal"], explanation: "Ottawa este capitala Canadei." },
  { prompt: "Care este capitala Australiei?", answer: "Canberra", wrong: ["Sydney", "Melbourne", "Perth"], explanation: "Canberra este capitala administrativa a Australiei." },
  { prompt: "Care este cel mai intins stat al lumii?", answer: "Rusia", wrong: ["Canada", "China", "Brazilia"], explanation: "Rusia are cea mai mare suprafata dintre state." },
  { prompt: "Ce tip de relief creeaza raurile prin adancirea vaii?", answer: "Canion", wrong: ["Atol", "Duna litorala", "Mlastina"], explanation: "Canioanele se formeaza prin eroziune fluviala intensa." },
  { prompt: "Ce vant local cald si uscat apare pe versantul adapostit al muntilor?", answer: "Foehn", wrong: ["Muson", "Briza", "Crivat"], explanation: "Foehnul se incalzeste la coborarea pe versantul opus." },
  { prompt: "Ce proces descrie transportul materialelor de catre vant?", answer: "Deflatia", wrong: ["Gleizarea", "Lateritizarea", "Subductia"], explanation: "Deflatia este indepartarea particulelor fine de catre vant." },
  { prompt: "Ce oras este cunoscut ca important centru nordic al Republicii Moldova?", answer: "Balti", wrong: ["Comrat", "Cahul", "Leova"], explanation: "Balti este un centru urban major in nordul Republicii Moldova." },
  { prompt: "Ce rau este principalul afluent intern al Nistrului in Republica Moldova?", answer: "Raut", wrong: ["Prut", "Dunarea", "Trotus"], explanation: "Rautul este un afluent important al Nistrului." },
];

const olimpicFacts: Fact[] = [
  { prompt: "Ce platforma geologica include fundamentul Republicii Moldova?", answer: "Platforma Est-Europeana", wrong: ["Scutul Canadian", "Platforma Africana", "Orogenul Alpin"], explanation: "Fundamentul vechi al regiunii apartine Platformei Est-Europene." },
  { prompt: "Ce proces formeaza cernoziomurile fertile?", answer: "Humificarea vegetatiei ierboase", wrong: ["Lateritizarea tropicala", "Podzolirea coniferelor", "Acumularea de lava"], explanation: "Cernoziomurile apar prin acumulare de humus in conditii de stepa si silvostepa." },
  { prompt: "Ce fenomen climatic inseamna incalzirea anormala a apelor din Pacificul ecuatorial estic?", answer: "El Nino", wrong: ["La Nina", "Foehn", "Bora"], explanation: "El Nino perturba circulatia atmosferica si regimul precipitatiilor la scara globala." },
  { prompt: "Ce tip de miscare tectonica a format Himalaya?", answer: "Coliziunea continentala", wrong: ["Rift oceanic", "Hotspot izolat", "Expansiune divergenta"], explanation: "Himalaya s-a format prin coliziunea placii indiene cu placa eurasiatica." },
  { prompt: "Care este cel mai adanc punct oceanic cunoscut?", answer: "Challenger Deep", wrong: ["Groapa Tonga de Nord", "Dorsala Medio-Atlantica", "Platforma Sunda"], explanation: "Challenger Deep se afla in Fosa Marianelor." },
  { prompt: "Ce lege explica schimbarea vegetatiei odata cu altitudinea?", answer: "Etajarea altitudinala", wrong: ["Deriva continentala", "Izostazia", "Deflatia"], explanation: "Temperatura si umiditatea se modifica pe verticala, creand etaje de vegetatie." },
  { prompt: "Ce bilant hidric caracterizeaza frecvent Republica Moldova?", answer: "Deficitar", wrong: ["Excedentar tropical", "Glaciar", "Oceanic permanent"], explanation: "Evapotranspiratia poate depasi precipitatiile, mai ales in sud." },
  { prompt: "Ce fenomen provoaca brume tarzii in depresiuni?", answer: "Inversiunea termica", wrong: ["Mareea", "Subductia", "Eruptia efuziva"], explanation: "Aerul rece se acumuleaza in zone joase, crescand riscul de inghet." },
  { prompt: "Ce tip de ciclon tropical se formeaza in vestul Pacificului de Nord?", answer: "Taifun", wrong: ["Tornada", "Foehn", "Mistral"], explanation: "Termenul taifun este folosit pentru cicloni tropicali din vestul Pacificului de Nord." },
  { prompt: "Ce proces ridica sau coboara scoarta pentru echilibru gravitational?", answer: "Izostazia", wrong: ["Deflatia", "Gleizarea", "Condensarea"], explanation: "Izostazia descrie echilibrul vertical al blocurilor crustale." },
  { prompt: "Ce tip de limita tectonica creeaza dorsale oceanice?", answer: "Divergenta", wrong: ["Coliziune continentala", "Transformanta fara extensie", "Subductie continentala pura"], explanation: "La limite divergente se formeaza crusta oceanica noua." },
  { prompt: "Ce rau colecteaza apele unei parti mari din estul Republicii Moldova?", answer: "Nistru", wrong: ["Siret", "Olt", "Mures"], explanation: "Nistrul este axa hidrografica majora din estul tarii." },
  { prompt: "Ce unitate fizico-geografica este asociata cu paduri si relief deluros central in Moldova?", answer: "Codrii", wrong: ["Baragan", "Pusta", "Camargue"], explanation: "Codrii au relief deluros, fragmentat si mai impadurit." },
  { prompt: "Ce forma de relief apare prin dizolvarea calcarelor?", answer: "Relief carstic", wrong: ["Relief glaciar", "Relief vulcanic", "Relief eolian exclusiv"], explanation: "Carstul include pesteri, doline si alte forme in roci solubile." },
  { prompt: "Ce curent rece influenteaza coasta vestica a Americii de Sud?", answer: "Humboldt", wrong: ["Gulf Stream", "Kuroshio", "Nord-Atlantic"], explanation: "Curentul Humboldt raceste si usuca litoralul pacific sud-american." },
  { prompt: "Ce desert este legat de influenta curentului rece Humboldt?", answer: "Atacama", wrong: ["Sahara", "Gobi", "Kalahari"], explanation: "Atacama este extrem de arid, influentat de curentul rece si subsidenta atmosferica." },
  { prompt: "Ce tip de agricultura depinde direct de precipitatiile naturale?", answer: "Agricultura neirigata", wrong: ["Hidroponia", "Acvacultura", "Mineritul agricol"], explanation: "Agricultura neirigata este vulnerabila la seceta." },
  { prompt: "Ce indicator masoara dezvoltarea prin venit, educatie si speranta de viata?", answer: "IDU", wrong: ["Latitudine", "Albedo", "Salinitate"], explanation: "Indicele Dezvoltarii Umane combina dimensiuni sociale si economice." },
  { prompt: "Ce proces demografic reduce populatia activa a unei tari?", answer: "Emigratia", wrong: ["Urbanizarea interna", "Natalitatea ridicata", "Sedimentarea"], explanation: "Emigratia scoate persoane din populatia rezidenta si poate afecta forta de munca." },
  { prompt: "Ce forma se creeaza prin abraziune marina si izolare de faleze?", answer: "Stalp de abrazie", wrong: ["Dolina", "Morena", "Con vulcanic"], explanation: "Stalpii de abrazie raman dupa retragerea falezei erodate de valuri." },
  { prompt: "Ce zona naturala face tranzitia intre padure si stepa?", answer: "Silvostepa", wrong: ["Tundra", "Desertul polar", "Mangrova"], explanation: "Silvostepa combina pajisti cu palcuri de padure." },
  { prompt: "Ce proces pedogenetic este specific excesului de apa in sol?", answer: "Gleizarea", wrong: ["Deflatia", "Vulcanismul", "Subductia"], explanation: "Gleizarea apare in conditii de saturare cu apa si lipsa de oxigen." },
  { prompt: "Ce factor controleaza direct distributia zonelor climatice pe Glob?", answer: "Latitudinea", wrong: ["Numarul de orase", "Forma steagurilor", "Alfabetul"], explanation: "Latitudinea controleaza unghiul razelor solare si bilantul radiativ." },
  { prompt: "Ce tip de harta reprezinta granite si state?", answer: "Harta politica", wrong: ["Harta hipsometrica", "Harta sinoptica", "Harta pedologica"], explanation: "Hartile politice arata state, capitale si frontiere." },
  { prompt: "Ce harta reprezinta altitudinile prin culori si curbe de nivel?", answer: "Harta hipsometrica", wrong: ["Harta electorala", "Harta lingvistica", "Harta rutiera simpla"], explanation: "Hipsometria descrie inaltimile reliefului." },
];

function prefixedFacts(facts: Fact[], levelOffset: number): Question[] {
  const prefixes = [
    "Alege raspunsul corect:",
    "Identifica varianta corecta:",
    "Completeaza corect enuntul:",
    "Selecteaza raspunsul potrivit:",
  ];

  return facts.flatMap((fact, factIndex) =>
    prefixes.map((prefix, variantIndex) => {
      const id = levelOffset + factIndex * prefixes.length + variantIndex + 1;
      const options = shuffleOptions([fact.answer, ...fact.wrong], id);
      return {
        id,
        text: `${prefix} ${fact.prompt}`,
        options,
        correctIndex: options.indexOf(fact.answer),
        explanation: fact.explanation,
      };
    })
  );
}

function shuffleOptions(options: string[], seed: number): string[] {
  return [...options].sort((a, b) => {
    const left = Math.sin((seed + a.length) * 999) * 10000;
    const right = Math.sin((seed + b.length) * 999) * 10000;
    return (left - Math.floor(left)) - (right - Math.floor(right));
  });
}

function shuffleQuestions(questions: Question[]): Question[] {
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const questionBanks: Record<Difficulty, Question[]> = {
  normal: prefixedFacts(normalFacts, 0),
  competitiv: prefixedFacts(competitivFacts, 1000),
  olimpic: prefixedFacts(olimpicFacts, 2000),
};

export function getQuestionBankByDifficulty(difficulty: Difficulty): Question[] {
  return questionBanks[difficulty];
}

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  return shuffleQuestions(questionBanks[difficulty]).slice(0, QUESTIONS_PER_QUIZ);
}
