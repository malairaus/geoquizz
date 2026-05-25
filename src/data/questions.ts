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

type CountryFact = {
  country: string;
  capital: string;
  continent: string;
  capitalWrong: [string, string, string];
  continentWrong: [string, string, string];
};

type FeatureFact = {
  name: string;
  kind: string;
  location: string;
  kindWrong: [string, string, string];
  locationWrong: [string, string, string];
};

type ConceptFact = {
  term: string;
  meaning: string;
  example: string;
  termWrong: [string, string, string];
  exampleWrong: [string, string, string];
};

export const QUESTIONS_PER_QUIZ = 20;
export const QUESTIONS_PER_LEVEL = 100;

export const difficulties: DifficultyInfo[] = [
  {
    key: "normal",
    label: "Normal",
    description: "20 de intrebari alese aleatoriu din 100 de intrebari distincte de baza.",
    color: "text-sky-600",
    bgGradient: "from-sky-500 to-teal-500",
    shadowColor: "shadow-sky-200",
    borderColor: "border-sky-200",
  },
  {
    key: "competitiv",
    label: "Competitiv",
    description: "20 de intrebari alese aleatoriu din 100 de intrebari distincte mediu-avansate.",
    color: "text-amber-600",
    bgGradient: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-200",
    borderColor: "border-amber-200",
  },
  {
    key: "olimpic",
    label: "Olimpic",
    description: "20 de intrebari alese aleatoriu din 100 de intrebari distincte avansate.",
    color: "text-rose-600",
    bgGradient: "from-rose-500 to-red-600",
    shadowColor: "shadow-rose-200",
    borderColor: "border-rose-200",
  },
];

const countryFacts: CountryFact[] = [
  { country: "Republicii Moldova", capital: "Chisinau", continent: "Europa", capitalWrong: ["Balti", "Cahul", "Soroca"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Romaniei", capital: "Bucuresti", continent: "Europa", capitalWrong: ["Iasi", "Cluj-Napoca", "Brasov"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Ucrainei", capital: "Kyiv", continent: "Europa", capitalWrong: ["Odesa", "Lviv", "Harkiv"], continentWrong: ["Asia", "Africa", "Australia"] },
  { country: "Frantei", capital: "Paris", continent: "Europa", capitalWrong: ["Lyon", "Marsilia", "Nisa"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Germaniei", capital: "Berlin", continent: "Europa", capitalWrong: ["Munchen", "Hamburg", "Frankfurt"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Italiei", capital: "Roma", continent: "Europa", capitalWrong: ["Milano", "Napoli", "Torino"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Spaniei", capital: "Madrid", continent: "Europa", capitalWrong: ["Barcelona", "Sevilla", "Valencia"], continentWrong: ["Asia", "Africa", "Australia"] },
  { country: "Portugaliei", capital: "Lisabona", continent: "Europa", capitalWrong: ["Porto", "Coimbra", "Faro"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Greciei", capital: "Atena", continent: "Europa", capitalWrong: ["Salonic", "Patras", "Heraklion"], continentWrong: ["Africa", "Asia", "America de Sud"] },
  { country: "Poloniei", capital: "Varsovia", continent: "Europa", capitalWrong: ["Cracovia", "Gdansk", "Poznan"], continentWrong: ["Asia", "Africa", "Australia"] },
  { country: "Ungariei", capital: "Budapesta", continent: "Europa", capitalWrong: ["Debretin", "Szeged", "Pecs"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Bulgariei", capital: "Sofia", continent: "Europa", capitalWrong: ["Varna", "Plovdiv", "Burgas"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Turciei", capital: "Ankara", continent: "Europa si Asia", capitalWrong: ["Istanbul", "Izmir", "Antalya"], continentWrong: ["Doar Africa", "Doar America de Sud", "Doar Australia"] },
  { country: "Regatului Unit", capital: "Londra", continent: "Europa", capitalWrong: ["Manchester", "Liverpool", "Edinburgh"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Suediei", capital: "Stockholm", continent: "Europa", capitalWrong: ["Goteborg", "Malmo", "Uppsala"], continentWrong: ["Asia", "Africa", "Australia"] },
  { country: "Norvegiei", capital: "Oslo", continent: "Europa", capitalWrong: ["Bergen", "Trondheim", "Stavanger"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Finlandei", capital: "Helsinki", continent: "Europa", capitalWrong: ["Turku", "Tampere", "Oulu"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Irlandei", capital: "Dublin", continent: "Europa", capitalWrong: ["Cork", "Galway", "Limerick"], continentWrong: ["Asia", "Africa", "Australia"] },
  { country: "Elvetiei", capital: "Berna", continent: "Europa", capitalWrong: ["Zurich", "Geneva", "Basel"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Austriei", capital: "Viena", continent: "Europa", capitalWrong: ["Graz", "Salzburg", "Linz"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Canadei", capital: "Ottawa", continent: "America de Nord", capitalWrong: ["Toronto", "Vancouver", "Montreal"], continentWrong: ["Europa", "Asia", "Africa"] },
  { country: "Statelor Unite ale Americii", capital: "Washington, D.C.", continent: "America de Nord", capitalWrong: ["New York", "Los Angeles", "Chicago"], continentWrong: ["Europa", "Asia", "Africa"] },
  { country: "Mexicului", capital: "Ciudad de Mexico", continent: "America de Nord", capitalWrong: ["Guadalajara", "Monterrey", "Puebla"], continentWrong: ["Europa", "Asia", "Australia"] },
  { country: "Braziliei", capital: "Brasilia", continent: "America de Sud", capitalWrong: ["Rio de Janeiro", "Sao Paulo", "Salvador"], continentWrong: ["Africa", "Europa", "Asia"] },
  { country: "Argentinei", capital: "Buenos Aires", continent: "America de Sud", capitalWrong: ["Cordoba", "Rosario", "Mendoza"], continentWrong: ["Africa", "Europa", "Asia"] },
  { country: "Peru", capital: "Lima", continent: "America de Sud", capitalWrong: ["Cusco", "Arequipa", "Trujillo"], continentWrong: ["Africa", "Europa", "Asia"] },
  { country: "Chile", capital: "Santiago", continent: "America de Sud", capitalWrong: ["Valparaiso", "Concepcion", "La Serena"], continentWrong: ["Africa", "Europa", "Asia"] },
  { country: "Columbiei", capital: "Bogota", continent: "America de Sud", capitalWrong: ["Medellin", "Cali", "Cartagena"], continentWrong: ["Africa", "Europa", "Australia"] },
  { country: "Egiptului", capital: "Cairo", continent: "Africa", capitalWrong: ["Alexandria", "Luxor", "Giza"], continentWrong: ["Europa", "America de Sud", "Australia"] },
  { country: "Marocului", capital: "Rabat", continent: "Africa", capitalWrong: ["Casablanca", "Marrakesh", "Fez"], continentWrong: ["Europa", "Asia", "America de Nord"] },
  { country: "Africii de Sud", capital: "Pretoria", continent: "Africa", capitalWrong: ["Cape Town", "Johannesburg", "Durban"], continentWrong: ["Europa", "Asia", "America de Sud"] },
  { country: "Kenyei", capital: "Nairobi", continent: "Africa", capitalWrong: ["Mombasa", "Kisumu", "Nakuru"], continentWrong: ["Europa", "Asia", "America de Nord"] },
  { country: "Nigeriei", capital: "Abuja", continent: "Africa", capitalWrong: ["Lagos", "Kano", "Ibadan"], continentWrong: ["Europa", "Asia", "Australia"] },
  { country: "Etiopiei", capital: "Addis Abeba", continent: "Africa", capitalWrong: ["Gondar", "Mekelle", "Dire Dawa"], continentWrong: ["Europa", "Asia", "America de Sud"] },
  { country: "Indiei", capital: "New Delhi", continent: "Asia", capitalWrong: ["Mumbai", "Kolkata", "Bengaluru"], continentWrong: ["Europa", "Africa", "America de Sud"] },
  { country: "Chinei", capital: "Beijing", continent: "Asia", capitalWrong: ["Shanghai", "Guangzhou", "Shenzhen"], continentWrong: ["Europa", "Africa", "America de Nord"] },
  { country: "Japoniei", capital: "Tokyo", continent: "Asia", capitalWrong: ["Osaka", "Kyoto", "Nagoya"], continentWrong: ["Europa", "Africa", "America de Sud"] },
  { country: "Coreei de Sud", capital: "Seul", continent: "Asia", capitalWrong: ["Busan", "Incheon", "Daegu"], continentWrong: ["Europa", "Africa", "Australia"] },
  { country: "Indoneziei", capital: "Jakarta", continent: "Asia", capitalWrong: ["Surabaya", "Bandung", "Medan"], continentWrong: ["Europa", "Africa", "America de Sud"] },
  { country: "Thailandei", capital: "Bangkok", continent: "Asia", capitalWrong: ["Chiang Mai", "Phuket", "Pattaya"], continentWrong: ["Europa", "Africa", "America de Nord"] },
  { country: "Arabiei Saudite", capital: "Riad", continent: "Asia", capitalWrong: ["Jeddah", "Mecca", "Medina"], continentWrong: ["Europa", "Africa", "America de Sud"] },
  { country: "Iranului", capital: "Teheran", continent: "Asia", capitalWrong: ["Isfahan", "Shiraz", "Tabriz"], continentWrong: ["Europa", "Africa", "Australia"] },
  { country: "Kazahstanului", capital: "Astana", continent: "Asia", capitalWrong: ["Almaty", "Shymkent", "Aktobe"], continentWrong: ["Africa", "America de Sud", "Australia"] },
  { country: "Australiei", capital: "Canberra", continent: "Australia", capitalWrong: ["Sydney", "Melbourne", "Perth"], continentWrong: ["Europa", "Asia", "Africa"] },
  { country: "Noii Zeelande", capital: "Wellington", continent: "Australia/Oceania", capitalWrong: ["Auckland", "Christchurch", "Hamilton"], continentWrong: ["Europa", "Africa", "America de Sud"] },
  { country: "Islandei", capital: "Reykjavik", continent: "Europa", capitalWrong: ["Akureyri", "Keflavik", "Selfoss"], continentWrong: ["Africa", "Asia", "Australia"] },
  { country: "Danemarcei", capital: "Copenhaga", continent: "Europa", capitalWrong: ["Aarhus", "Odense", "Aalborg"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Belgiei", capital: "Bruxelles", continent: "Europa", capitalWrong: ["Anvers", "Gent", "Bruges"], continentWrong: ["Asia", "Africa", "America de Nord"] },
  { country: "Olandei", capital: "Amsterdam", continent: "Europa", capitalWrong: ["Rotterdam", "Haga", "Utrecht"], continentWrong: ["Asia", "Africa", "America de Sud"] },
  { country: "Cehiei", capital: "Praga", continent: "Europa", capitalWrong: ["Brno", "Ostrava", "Plzen"], continentWrong: ["Asia", "Africa", "Australia"] },
];

const featureFacts: FeatureFact[] = [
  { name: "Nistrul", kind: "rau", location: "Republica Moldova si Ucraina", kindWrong: ["lac", "desert", "lant muntos"], locationWrong: ["Spania", "Norvegia", "Maroc"] },
  { name: "Prutul", kind: "rau", location: "hotarul dintre Republica Moldova si Romania", kindWrong: ["mare", "vulcan", "desert"], locationWrong: ["Italia", "Suedia", "Egipt"] },
  { name: "Rautul", kind: "rau", location: "Republica Moldova", kindWrong: ["ocean", "desert", "stramtoare"], locationWrong: ["Franta", "Japonia", "Canada"] },
  { name: "Dealul Balanesti", kind: "cel mai inalt punct al Republicii Moldova", location: "raionul Nisporeni", kindWrong: ["cel mai adanc lac", "un vulcan activ", "o delta"], locationWrong: ["Cahul", "Edinet", "Comrat"] },
  { name: "Codrii", kind: "zona deluroasa si impadurita", location: "centrul Republicii Moldova", kindWrong: ["desert tropical", "calota glaciara", "recif coraligen"], locationWrong: ["sudul Australiei", "nordul Canadei", "Sahara"] },
  { name: "Portul Giurgiulesti", kind: "port fluvial si maritim", location: "sudul Republicii Moldova", kindWrong: ["varf muntos", "lac glaciar", "desert"], locationWrong: ["nordul Moldovei", "centrul Frantei", "estul Japoniei"] },
  { name: "Dunarea", kind: "fluviu", location: "Europa Centrala si de Sud-Est", kindWrong: ["desert", "podis", "ghetar"], locationWrong: ["Australia", "America de Nord", "Africa de Sud"] },
  { name: "Volga", kind: "rau", location: "Rusia europeana", kindWrong: ["mare", "vulcan", "stramtoare"], locationWrong: ["Portugalia", "Maroc", "Chile"] },
  { name: "Rinul", kind: "rau", location: "Europa de Vest", kindWrong: ["desert", "lac", "vulcan"], locationWrong: ["Australia", "India", "Peru"] },
  { name: "Sena", kind: "rau", location: "Franta", kindWrong: ["munte", "mare", "desert"], locationWrong: ["China", "Brazilia", "Egipt"] },
  { name: "Tamisa", kind: "rau", location: "Regatul Unit", kindWrong: ["ocean", "podis", "desert"], locationWrong: ["Turcia", "Argentina", "Kenya"] },
  { name: "Nilul", kind: "fluviu", location: "Africa", kindWrong: ["lant muntos", "desert", "mare"], locationWrong: ["Europa", "Australia", "Antarctica"] },
  { name: "Amazonul", kind: "fluviu", location: "America de Sud", kindWrong: ["desert", "ghetar", "stramtoare"], locationWrong: ["Europa", "Africa de Nord", "Asia Centrala"] },
  { name: "Mississippi", kind: "fluviu", location: "America de Nord", kindWrong: ["mare", "desert", "lac"], locationWrong: ["Europa", "Africa", "Australia"] },
  { name: "Yangtze", kind: "fluviu", location: "China", kindWrong: ["desert", "vulcan", "stramtoare"], locationWrong: ["Brazilia", "Norvegia", "Egipt"] },
  { name: "Gangele", kind: "fluviu", location: "India si Bangladesh", kindWrong: ["lac", "vulcan", "desert"], locationWrong: ["Spania", "Canada", "Maroc"] },
  { name: "Marea Neagra", kind: "mare", location: "sud-estul Europei", kindWrong: ["desert", "fluviu", "varf muntos"], locationWrong: ["America de Sud", "Australia", "Africa Centrala"] },
  { name: "Marea Mediterana", kind: "mare", location: "intre Europa, Africa si Asia", kindWrong: ["rau", "podis", "desert"], locationWrong: ["intre Canada si SUA", "in Antarctica", "in centrul Australiei"] },
  { name: "Marea Baltica", kind: "mare", location: "nordul Europei", kindWrong: ["fluviu", "desert", "ghetar"], locationWrong: ["Africa de Vest", "Asia de Sud", "America Centrala"] },
  { name: "Marea Caspica", kind: "lac sarat foarte intins", location: "intre Europa si Asia", kindWrong: ["ocean", "vulcan", "delta"], locationWrong: ["America de Sud", "Australia", "Antarctica"] },
  { name: "Lacul Baikal", kind: "lac", location: "Siberia", kindWrong: ["desert", "mare", "lant muntos"], locationWrong: ["Italia", "Egipt", "Mexic"] },
  { name: "Lacul Victoria", kind: "lac", location: "Africa de Est", kindWrong: ["desert", "vulcan", "stramtoare"], locationWrong: ["Europa Centrala", "Australia", "Siberia"] },
  { name: "Lacul Tanganyika", kind: "lac", location: "Africa de Est", kindWrong: ["mare", "fluviu", "desert"], locationWrong: ["Europa de Nord", "Japonia", "Argentina"] },
  { name: "Lacul Superior", kind: "lac", location: "America de Nord", kindWrong: ["desert", "vulcan", "stramtoare"], locationWrong: ["Africa", "Europa de Sud", "Australia"] },
  { name: "Sahara", kind: "desert cald", location: "nordul Africii", kindWrong: ["lac", "fluviu", "padure ecuatoriala"], locationWrong: ["Europa", "Siberia", "Noua Zeelanda"] },
  { name: "Gobi", kind: "desert", location: "Asia", kindWrong: ["lac", "mare", "fluviu"], locationWrong: ["Europa de Vest", "Brazilia", "Africa de Sud"] },
  { name: "Atacama", kind: "desert", location: "America de Sud", kindWrong: ["lac", "fluviu", "ghetar"], locationWrong: ["Europa", "Asia de Nord", "Africa Centrala"] },
  { name: "Kalahari", kind: "desert", location: "sudul Africii", kindWrong: ["mare", "rau", "lant muntos"], locationWrong: ["Europa", "Japonia", "Canada"] },
  { name: "Muntii Ural", kind: "lant muntos", location: "limita traditionala Europa-Asia", kindWrong: ["desert", "fluviu", "mare"], locationWrong: ["America de Sud", "Africa", "Australia"] },
  { name: "Alpii", kind: "lant muntos", location: "Europa", kindWrong: ["desert", "fluviu", "lac"], locationWrong: ["Africa", "Australia", "America de Sud"] },
  { name: "Carpatii", kind: "lant muntos", location: "Europa Centrala si de Est", kindWrong: ["desert", "stramtoare", "ocean"], locationWrong: ["Africa de Sud", "Australia", "Canada"] },
  { name: "Himalaya", kind: "lant muntos", location: "Asia", kindWrong: ["campie", "desert", "mare"], locationWrong: ["Europa de Vest", "Africa", "America de Sud"] },
  { name: "Anzii", kind: "lant muntos", location: "America de Sud", kindWrong: ["desert", "mare", "campie joasa"], locationWrong: ["Europa", "Africa", "Australia"] },
  { name: "Muntii Stancosi", kind: "lant muntos", location: "America de Nord", kindWrong: ["lac", "desert", "stramtoare"], locationWrong: ["Europa", "Asia de Sud", "Africa"] },
  { name: "Elbrus", kind: "varf muntos", location: "Caucaz", kindWrong: ["lac", "fluviu", "desert"], locationWrong: ["Sahara", "Amazonia", "Australia"] },
  { name: "Mont Blanc", kind: "varf muntos", location: "Alpi", kindWrong: ["desert", "fluviu", "mare"], locationWrong: ["Anzi", "Himalaya", "Ural"] },
  { name: "Everest", kind: "varf muntos", location: "Himalaya", kindWrong: ["lac", "delta", "desert"], locationWrong: ["Alpi", "Carpati", "Ural"] },
  { name: "Bosfor", kind: "stramtoare", location: "Turcia", kindWrong: ["desert", "lac", "varf muntos"], locationWrong: ["Norvegia", "Brazilia", "Canada"] },
  { name: "Dardanele", kind: "stramtoare", location: "Turcia", kindWrong: ["fluviu", "desert", "podis"], locationWrong: ["Suedia", "Egipt", "India"] },
  { name: "Gibraltar", kind: "stramtoare", location: "intre Spania si Maroc", kindWrong: ["lac", "desert", "vulcan"], locationWrong: ["intre Japonia si Coreea", "in Siberia", "in Australia"] },
  { name: "Suez", kind: "canal", location: "Egipt", kindWrong: ["lant muntos", "desert", "lac glaciar"], locationWrong: ["Canada", "Germania", "Argentina"] },
  { name: "Panama", kind: "canal", location: "America Centrala", kindWrong: ["varf muntos", "fluviu", "desert"], locationWrong: ["Europa", "Africa de Nord", "Asia Centrala"] },
  { name: "Curentul Golfului", kind: "curent oceanic cald", location: "Atlanticul de Nord", kindWrong: ["curent rece", "fluviu", "vant local"], locationWrong: ["Oceanul Indian", "Pacificul de Sud", "Marea Caspica"] },
  { name: "Curentul Humboldt", kind: "curent oceanic rece", location: "coasta vestica a Americii de Sud", kindWrong: ["curent cald", "fluviu", "desert"], locationWrong: ["Europa de Nord", "Africa Centrala", "Asia de Est"] },
  { name: "Curentul Labrador", kind: "curent oceanic rece", location: "Atlanticul de Nord-Vest", kindWrong: ["curent cald", "fluviu", "lac"], locationWrong: ["Marea Mediterana", "Oceanul Indian", "Pacificul de Sud"] },
  { name: "Delta Dunarii", kind: "delta", location: "Romania si Ucraina", kindWrong: ["desert", "vulcan", "podis"], locationWrong: ["Spania", "Norvegia", "Maroc"] },
  { name: "Campia Amazonului", kind: "campie", location: "America de Sud", kindWrong: ["varf muntos", "stramtoare", "desert polar"], locationWrong: ["Europa", "Africa de Nord", "Australia"] },
  { name: "Podisul Tibet", kind: "podis inalt", location: "Asia", kindWrong: ["delta", "mare", "campie litorala"], locationWrong: ["Europa", "America de Nord", "Africa"] },
  { name: "Etna", kind: "vulcan activ", location: "Sicilia", kindWrong: ["lac", "fluviu", "desert"], locationWrong: ["Islanda de Nord", "Norvegia", "Brazilia"] },
  { name: "Vezuviu", kind: "vulcan", location: "Italia", kindWrong: ["fluviu", "lac", "podis"], locationWrong: ["Canada", "India", "Peru"] },
];

const conceptFacts: ConceptFact[] = [
  { term: "Latitudine", meaning: "distanta unghiulara fata de Ecuator", example: "0 grade la Ecuator", termWrong: ["Longitudine", "Altitudine", "Salinitate"], exampleWrong: ["presiunea aerului", "debitul raului", "duritatea rocilor"] },
  { term: "Longitudine", meaning: "distanta unghiulara fata de meridianul Greenwich", example: "pozitia est-vest pe Glob", termWrong: ["Latitudine", "Altitudine", "Umiditate"], exampleWrong: ["pozitia nord-sud", "inaltimea reliefului", "cantitatea de humus"] },
  { term: "Altitudine", meaning: "inaltimea fata de nivelul marii", example: "429 m pentru Dealul Balanesti", termWrong: ["Latitudine", "Longitudine", "Densitate"], exampleWrong: ["salinitatea apei", "directia vantului", "tipul de capitala"] },
  { term: "Izohipsa", meaning: "linie care uneste puncte cu aceeasi altitudine", example: "curba de nivel pe harta fizica", termWrong: ["Izoterma", "Izobara", "Meridian"], exampleWrong: ["frontiera de stat", "drum european", "linie de coasta"] },
  { term: "Izoterma", meaning: "linie care uneste puncte cu aceeasi temperatura", example: "linie pe o harta climatica", termWrong: ["Izohipsa", "Izobara", "Paralela"], exampleWrong: ["curba de nivel", "drum national", "hotar administrativ"] },
  { term: "Izobara", meaning: "linie care uneste puncte cu aceeasi presiune atmosferica", example: "linie pe hartile meteo", termWrong: ["Izoterma", "Izohipsa", "Talveg"], exampleWrong: ["linie de altitudine", "frontiera politica", "limita de sol"] },
  { term: "Bazin hidrografic", meaning: "teritoriul de pe care un rau isi aduna apele", example: "bazinul Prutului", termWrong: ["Duna", "Faleza", "Crater"], exampleWrong: ["un tip de nor", "un vant local", "o roca magmatica"] },
  { term: "Afluent", meaning: "rau care se varsa intr-un rau mai mare", example: "Rautul pentru Nistru", termWrong: ["Delta", "Interfluviu", "Maree"], exampleWrong: ["un munte", "un desert", "un stat"] },
  { term: "Delta", meaning: "forma de relief la varsarea unui rau prin depuneri", example: "Delta Dunarii", termWrong: ["Canion", "Dolina", "Faleza"], exampleWrong: ["Muntii Ural", "Sahara", "Bosfor"] },
  { term: "Estuar", meaning: "gura de varsare larga influentata de maree", example: "estuarul Tamisei", termWrong: ["Duna", "Morena", "Con vulcanic"], exampleWrong: ["un varf muntos", "un lac glaciar", "un desert"] },
  { term: "Eroziune", meaning: "procesul de indepartare a materialului de la suprafata", example: "eroziunea solului pe versanti", termWrong: ["Sedimentare", "Condensare", "Fotosinteza"], exampleWrong: ["cresterea natalitatii", "formarea ozonului", "rotatia Pamantului"] },
  { term: "Sedimentare", meaning: "depunerea materialelor transportate", example: "aluviuni depuse intr-o lunca", termWrong: ["Eroziune", "Subductie", "Evaporatie"], exampleWrong: ["miscarea placilor", "vant sezonier", "scaderea populatiei"] },
  { term: "Alunecare de teren", meaning: "deplasarea unei mase de material pe versant", example: "alunecari pe versanti argilosi", termWrong: ["Maree", "Muson", "Izobara"], exampleWrong: ["curent oceanic", "frontiera", "capitala"] },
  { term: "Carst", meaning: "relief format prin dizolvarea rocilor solubile", example: "pesteri si doline", termWrong: ["Relief glaciar", "Relief eolian", "Relief tectonic"], exampleWrong: ["delta", "campie aluviala", "recif de corali"] },
  { term: "Dolina", meaning: "depresiune carstica inchisa", example: "forma din zone calcaroase", termWrong: ["Duna", "Atol", "Faleza"], exampleWrong: ["curent rece", "fluviu", "varf vulcanic"] },
  { term: "Deflatie", meaning: "indepartarea particulelor fine de catre vant", example: "proces eolian in regiuni uscate", termWrong: ["Gleizare", "Subductie", "Urbanizare"], exampleWrong: ["proces glaciar", "proces demografic", "proces industrial"] },
  { term: "Duna", meaning: "acumulare de nisip modelata de vant", example: "dune in deserturi", termWrong: ["Delta", "Canion", "Maree"], exampleWrong: ["rau de munte", "lac tectonic", "strat atmosferic"] },
  { term: "Moraine", meaning: "depozit de materiale transportate de ghetar", example: "depozit glaciar", termWrong: ["Duna", "Delta", "Atol"], exampleWrong: ["depozit eolian", "gura de varsare", "curent oceanic"] },
  { term: "Ghetar", meaning: "masa de gheata aflata in miscare lenta", example: "ghetar montan", termWrong: ["Desert", "Delta", "Stramtoare"], exampleWrong: ["rau tropical", "lac sarat", "vant local"] },
  { term: "Calota glaciara", meaning: "masa foarte intinsa de gheata continentala", example: "Antarctica", termWrong: ["Campie litorala", "Recif", "Duna"], exampleWrong: ["Sahara", "Amazon", "Bosfor"] },
  { term: "Subductie", meaning: "coborarea unei placi tectonice sub alta", example: "zone de fose oceanice", termWrong: ["Divergenta", "Deflatie", "Humificare"], exampleWrong: ["delta fluviala", "campie agricola", "lac de acumulare"] },
  { term: "Divergenta tectonica", meaning: "departarea placilor tectonice", example: "dorsale oceanice", termWrong: ["Coliziune", "Eroziune", "Condensare"], exampleWrong: ["lant muntos de coliziune", "desert", "capitala"] },
  { term: "Coliziune continentala", meaning: "ciocnirea a doua placi continentale", example: "formarea Himalayei", termWrong: ["Deflatie", "Evaporatie", "Sedimentare marina"], exampleWrong: ["formarea dunelor", "formarea norilor", "migratie rurala"] },
  { term: "Epicentru", meaning: "punctul de la suprafata deasupra focarului seismic", example: "localizarea unui cutremur", termWrong: ["Hipocentru", "Talveg", "Interfluviu"], exampleWrong: ["centrul unui oras", "izvorul raului", "gura de varsare"] },
  { term: "Hipocentru", meaning: "locul din interiorul Pamantului unde incepe cutremurul", example: "focar seismic", termWrong: ["Epicentru", "Ecuator", "Izoterma"], exampleWrong: ["varf muntos", "linie de coasta", "oras-port"] },
  { term: "Troposfera", meaning: "stratul atmosferei unde se formeaza vremea", example: "nori si precipitatii", termWrong: ["Litosfera", "Hidrosfera", "Astenosfera"], exampleWrong: ["roci magmatice", "curenti marini", "placi tectonice"] },
  { term: "Stratosfera", meaning: "strat atmosferic in care se afla mult ozon", example: "stratul de ozon", termWrong: ["Troposfera", "Litosfera", "Biosfera"], exampleWrong: ["rauri", "soluri", "munti"] },
  { term: "Albedo", meaning: "capacitatea unei suprafete de a reflecta radiatia solara", example: "zapada are albedo mare", termWrong: ["Debit", "Densitate", "Latitudine"], exampleWrong: ["salinitate mare", "fertilitate", "natalitate"] },
  { term: "Amplitudine termica", meaning: "diferenta dintre valori termice maxime si minime", example: "diferenta vara-iarna", termWrong: ["Umiditate", "Presiune", "Debit"], exampleWrong: ["densitatea populatiei", "altitudinea", "suprafata tarii"] },
  { term: "Inversiune termica", meaning: "situatie in care temperatura creste cu altitudinea pe un strat", example: "aer rece acumulat in depresiuni", termWrong: ["Muson", "Maree", "Subductie"], exampleWrong: ["curent oceanic", "delta", "duna"] },
  { term: "Foehn", meaning: "vant cald si uscat pe versantul adapostit", example: "vant descendent in munti", termWrong: ["Muson", "Alizeu", "Briza"], exampleWrong: ["rau", "lac", "tip de roca"] },
  { term: "Muson", meaning: "vant sezonier care isi schimba directia", example: "ploi de vara in Asia de Sud", termWrong: ["Foehn", "Tornada", "Maree"], exampleWrong: ["cutremur", "sol fertil", "capitala"] },
  { term: "Alizeu", meaning: "vant regulat din zone tropicale", example: "vanturi catre Ecuator", termWrong: ["Muson", "Foehn", "Avalansa"], exampleWrong: ["lac glaciar", "delta", "strat de sol"] },
  { term: "Ciclon tropical", meaning: "sistem atmosferic intens format deasupra oceanelor calde", example: "uragan sau taifun", termWrong: ["Anticiclon polar", "Dolina", "Moraine"], exampleWrong: ["desert", "campie", "podis"] },
  { term: "El Nino", meaning: "incalzirea anormala a apelor din Pacificul ecuatorial estic", example: "perturbari climatice globale", termWrong: ["La Nina", "Foehn", "Bora"], exampleWrong: ["formarea cernoziomului", "subductie", "urbanizare"] },
  { term: "La Nina", meaning: "racirea anormala a apelor din Pacificul ecuatorial", example: "modificari ale circulatiei atmosferice", termWrong: ["El Nino", "Muson", "Maree"], exampleWrong: ["coliziune continentala", "delta", "defrisare"] },
  { term: "Bilant hidric", meaning: "raportul dintre aportul si pierderile de apa", example: "deficit de umiditate in ani secetosi", termWrong: ["Bilant demografic", "Albedo", "Epicentru"], exampleWrong: ["numar de orase", "inaltimea muntilor", "tip de capitala"] },
  { term: "Evapotranspiratie", meaning: "pierdere de apa prin evaporatie si transpiratia plantelor", example: "pierderi de apa din sol si vegetatie", termWrong: ["Condensare", "Deflatie", "Subductie"], exampleWrong: ["miscarea placilor", "densitatea populatiei", "frontiera"] },
  { term: "Seceta", meaning: "deficit prelungit de apa", example: "scaderea recoltelor", termWrong: ["Inundatie", "Avalansa", "Maree"], exampleWrong: ["cresterea ghetarilor", "formarea muntilor", "aparitia recifelor"] },
  { term: "Desertificare", meaning: "degradarea terenurilor in zone uscate", example: "pierdere de fertilitate", termWrong: ["Impaturire alpina", "Glaciatiune", "Urbanizare"], exampleWrong: ["cresterea padurilor", "formarea lacurilor", "subductie"] },
  { term: "Humificare", meaning: "transformarea materiei organice in humus", example: "formarea cernoziomului", termWrong: ["Lateritizare", "Deflatie", "Subductie"], exampleWrong: ["formarea dunelor", "eruptie", "maree"] },
  { term: "Cernoziom", meaning: "sol foarte fertil bogat in humus", example: "sol raspandit in Republica Moldova", termWrong: ["Podzol", "Laterit", "Sol tundric"], exampleWrong: ["sol polar sarac", "nisip desertic", "roca vulcanica"] },
  { term: "Podzol", meaning: "sol acid format frecvent sub paduri de conifere", example: "sol din climate mai reci si umede", termWrong: ["Cernoziom", "Laterit", "Aluviune"], exampleWrong: ["sol de stepa foarte fertil", "curent oceanic", "delta"] },
  { term: "Laterit", meaning: "sol tropical bogat in oxizi de fier si aluminiu", example: "sol rosiatic in zone calde si umede", termWrong: ["Cernoziom", "Podzol", "Loess"], exampleWrong: ["sol de stepa", "ghetar", "stramtoare"] },
  { term: "Loess", meaning: "depozit fin transportat de vant", example: "material parental pentru soluri fertile", termWrong: ["Bazalt", "Granit", "Marmura"], exampleWrong: ["roca vulcanica", "lac", "curent cald"] },
  { term: "Densitatea populatiei", meaning: "numarul de locuitori pe unitate de suprafata", example: "locuitori pe km patrat", termWrong: ["Natalitate", "Mortalitate", "Spor natural"], exampleWrong: ["grade Celsius", "metri altitudine", "milimetri precipitatii"] },
  { term: "Natalitate", meaning: "numarul nasterilor intr-o populatie", example: "rata nasterilor", termWrong: ["Mortalitate", "Migratie", "Urbanizare"], exampleWrong: ["numar de rauri", "altitudine", "salinitate"] },
  { term: "Mortalitate", meaning: "numarul deceselor intr-o populatie", example: "rata deceselor", termWrong: ["Natalitate", "Fertilitate", "Densitate"], exampleWrong: ["lungimea raurilor", "temperatura apei", "tipul reliefului"] },
  { term: "Spor natural", meaning: "diferenta dintre natalitate si mortalitate", example: "crestere sau scadere naturala", termWrong: ["Spor migratoriu", "Albedo", "Debit"], exampleWrong: ["diferenta de altitudine", "salinitate", "presiune"] },
  { term: "Emigratie", meaning: "plecarea populatiei dintr-o tara sau regiune", example: "reducerea populatiei active", termWrong: ["Imigratie", "Natalitate", "Sedimentare"], exampleWrong: ["formarea deltei", "aparitia norilor", "eroziunea tarmului"] },
  { term: "Imigratie", meaning: "sosirea populatiei intr-o tara sau regiune", example: "cresterea populatiei prin veniri", termWrong: ["Emigratie", "Mortalitate", "Subductie"], exampleWrong: ["depunere de nisip", "vant local", "strat atmosferic"] },
  { term: "Urbanizare", meaning: "cresterea rolului si populatiei oraselor", example: "extinderea asezarilor urbane", termWrong: ["Ruralizare", "Deflatie", "Glaciatiune"], exampleWrong: ["miscarea ghetarilor", "scaderea presiunii", "dizolvarea calcarului"] },
  { term: "Sector primar", meaning: "activitati de obtinere directa a resurselor", example: "agricultura", termWrong: ["Sector secundar", "Sector tertiar", "Sector cuaternar"], exampleWrong: ["servicii bancare", "educatie", "transport aerian"] },
  { term: "Sector secundar", meaning: "activitati de prelucrare industriala", example: "industria alimentara", termWrong: ["Sector primar", "Sector tertiar", "Sector agricol"], exampleWrong: ["cresterea graului", "turism", "administratie"] },
  { term: "Sector tertiar", meaning: "servicii", example: "transport si comert", termWrong: ["Sector primar", "Sector secundar", "Sector extractiv"], exampleWrong: ["minerit", "agricultura", "siderurgie"] },
  { term: "Resursa regenerabila", meaning: "resursa care se reface natural", example: "energia solara", termWrong: ["Resursa epuizabila", "Roca metamorfica", "Densitate"], exampleWrong: ["petrol", "carbune", "gaz natural"] },
  { term: "Combustibil fosil", meaning: "resursa energetica formata in timp geologic", example: "carbunele", termWrong: ["Energie solara", "Energie eoliana", "Biomasa recenta"], exampleWrong: ["vant", "radiatie solara", "apa curgatoare"] },
  { term: "Defrisare", meaning: "indepartarea padurilor", example: "cresterea riscului de eroziune", termWrong: ["Impaturire", "Irigare", "Reimpadurire"], exampleWrong: ["cresterea suprafetei forestiere", "formarea norilor", "subductie"] },
  { term: "Biodiversitate", meaning: "varietatea formelor de viata", example: "specii si ecosisteme", termWrong: ["Densitate", "Altitudine", "Salinitate"], exampleWrong: ["numar de capitale", "presiune atmosferica", "debit fluvial"] },
  { term: "Rezervatie naturala", meaning: "teritoriu protejat pentru conservarea naturii", example: "protectia habitatelor", termWrong: ["Zona industriala", "Port liber", "Cariera"], exampleWrong: ["extractie miniera", "defrisare", "urbanizare intensiva"] },
];

function makeQuestion(id: number, text: string, answer: string, wrong: [string, string, string], explanation: string): Question {
  const options = shuffleOptions([answer, ...wrong], id);
  return {
    id,
    text,
    options,
    correctIndex: options.indexOf(answer),
    explanation,
  };
}

function makeNormalQuestions(): Question[] {
  return countryFacts.flatMap((item, index) => [
    makeQuestion(
      index * 2 + 1,
      `Care este capitala ${item.country}?`,
      item.capital,
      item.capitalWrong,
      `${item.capital} este capitala ${item.country}.`
    ),
    makeQuestion(
      index * 2 + 2,
      `Pe ce continent se afla ${item.country}?`,
      item.continent,
      item.continentWrong,
      `${item.country} se afla in ${item.continent}.`
    ),
  ]);
}

function makeCompetitiveQuestions(): Question[] {
  return featureFacts.flatMap((item, index) => [
    makeQuestion(
      1001 + index * 2,
      `Ce tip de element geografic este ${item.name}?`,
      item.kind,
      item.kindWrong,
      `${item.name} este ${item.kind}.`
    ),
    makeQuestion(
      1002 + index * 2,
      `Unde se afla sau cu ce regiune este asociat ${item.name}?`,
      item.location,
      item.locationWrong,
      `${item.name} este asociat cu ${item.location}.`
    ),
  ]);
}

function makeOlympicQuestions(): Question[] {
  return conceptFacts.flatMap((item, index) => [
    makeQuestion(
      2001 + index * 2,
      `Ce termen geografic descrie: ${item.meaning}?`,
      item.term,
      item.termWrong,
      `${item.term} inseamna ${item.meaning}.`
    ),
    makeQuestion(
      2002 + index * 2,
      `Care exemplu este potrivit pentru termenul ${item.term}?`,
      item.example,
      item.exampleWrong,
      `${item.example} este un exemplu potrivit pentru ${item.term}.`
    ),
  ]);
}

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleOptions(options: string[], seed: number): string[] {
  return [...options].sort((a, b) => {
    const left = Math.sin((seed + a.length) * 999) * 10000;
    const right = Math.sin((seed + b.length) * 999) * 10000;
    return (left - Math.floor(left)) - (right - Math.floor(right));
  });
}

const questionBanks: Record<Difficulty, Question[]> = {
  normal: makeNormalQuestions(),
  competitiv: makeCompetitiveQuestions(),
  olimpic: makeOlympicQuestions(),
};

export function getQuestionBankByDifficulty(difficulty: Difficulty): Question[] {
  return questionBanks[difficulty];
}

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  return shuffleItems(questionBanks[difficulty]).slice(0, QUESTIONS_PER_QUIZ);
}
