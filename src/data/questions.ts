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
    description: "20 de intrebari alese aleatoriu din 100 de intrebari distincte de baza.",
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
  { prompt: "Care este capitala Republicii Moldova?", answer: "Chisinau", wrong: ["Balti", "Cahul", "Soroca"], explanation: "Chisinau este capitala si cel mai mare oras al Republicii Moldova." },
  { prompt: "Care rau formeaza o parte importanta a hotarului dintre Republica Moldova si Romania?", answer: "Prut", wrong: ["Nistru", "Raut", "Bic"], explanation: "Prutul marcheaza granita de vest a Republicii Moldova pe o portiune mare." },
  { prompt: "Care este cel mai lung rau asociat teritoriului Republicii Moldova?", answer: "Nistru", wrong: ["Prut", "Raut", "Cogilnic"], explanation: "Nistrul este cel mai lung rau care traverseaza sau margineste teritoriul tarii." },
  { prompt: "Ce tip de clima predomina in Republica Moldova?", answer: "Temperat-continentala", wrong: ["Ecuatoriala", "Polara", "Musonica"], explanation: "Republica Moldova are veri calde si ierni relativ reci, specifice climei temperat-continentale." },
  { prompt: "Ce sol fertil este foarte raspandit in Republica Moldova?", answer: "Cernoziomul", wrong: ["Podzolul", "Lateritul", "Solul tundric"], explanation: "Cernoziomul este un sol fertil, favorabil agriculturii." },
  { prompt: "Care este principala activitate economica traditionala a Republicii Moldova?", answer: "Agricultura", wrong: ["Extractia petrolului", "Constructia de nave", "Mineritul de carbune"], explanation: "Agricultura este importanta datorita solurilor fertile si climei favorabile." },
  { prompt: "Care cultura este asociata frecvent cu economia agricola a Republicii Moldova?", answer: "Vita-de-vie", wrong: ["Bumbacul", "Orezul tropical", "Cafeaua"], explanation: "Viticultura este una dintre ramurile agricole cunoscute ale Moldovei." },
  { prompt: "Care este punctul cel mai inalt al Republicii Moldova?", answer: "Dealul Balanesti", wrong: ["Dealul Magura", "Dealul Tiganca", "Dealul Rautului"], explanation: "Dealul Balanesti este cel mai inalt punct al tarii, cu aproximativ 429 m." },
  { prompt: "Ce unitate naturala este cunoscuta pentru paduri in centrul Republicii Moldova?", answer: "Codrii", wrong: ["Baraganul", "Dobrogea", "Pusta"], explanation: "Codrii reprezinta o zona deluroasa si mai impadurita din centrul tarii." },
  { prompt: "Care oras este un centru important in nordul Republicii Moldova?", answer: "Balti", wrong: ["Cahul", "Comrat", "Leova"], explanation: "Balti este unul dintre cele mai importante orase din nordul tarii." },
  { prompt: "Care oras este un centru important in sudul Republicii Moldova?", answer: "Cahul", wrong: ["Soroca", "Edinet", "Briceni"], explanation: "Cahul este un centru urban important in sudul tarii." },
  { prompt: "Ce port ofera Republicii Moldova acces la Dunare?", answer: "Giurgiulesti", wrong: ["Ungheni", "Soroca", "Orhei"], explanation: "Giurgiulesti este portul prin care tara are acces la Dunare." },
  { prompt: "Care rau trece prin orasul Chisinau?", answer: "Bic", wrong: ["Prut", "Nistru", "Raut"], explanation: "Raul Bic traverseaza zona orasului Chisinau." },
  { prompt: "Care rau este un afluent important al Nistrului in Republica Moldova?", answer: "Raut", wrong: ["Siret", "Olt", "Mures"], explanation: "Rautul este un afluent important al Nistrului." },
  { prompt: "Ce forma de relief predomina in Republica Moldova?", answer: "Relief deluros de podis", wrong: ["Munti inalti", "Campie glaciara", "Relief vulcanic activ"], explanation: "Relieful Moldovei este in general deluros si de podis jos." },
  { prompt: "Ce fenomen afecteaza frecvent solurile pe versantii agricoli?", answer: "Eroziunea", wrong: ["Glaciatiunea", "Vulcanismul", "Mareea"], explanation: "Eroziunea solului este favorizata de pante, ploi torentiale si lucrari agricole." },
  { prompt: "Care este cel mai mare continent ca suprafata?", answer: "Asia", wrong: ["Africa", "Europa", "Australia"], explanation: "Asia este cel mai intins continent al Terrei." },
  { prompt: "Care este cel mai populat continent?", answer: "Asia", wrong: ["Europa", "Africa", "America de Sud"], explanation: "Asia concentreaza cea mai mare parte a populatiei mondiale." },
  { prompt: "Care este cel mai mare ocean al Terrei?", answer: "Oceanul Pacific", wrong: ["Oceanul Atlantic", "Oceanul Indian", "Oceanul Arctic"], explanation: "Oceanul Pacific are cea mai mare suprafata dintre oceane." },
  { prompt: "Care ocean se afla la vestul Europei?", answer: "Oceanul Atlantic", wrong: ["Oceanul Pacific", "Oceanul Indian", "Oceanul Arctic"], explanation: "Tarmurile vestice ale Europei sunt scaldate de Atlantic." },
  { prompt: "Care este cel mai lung rau din Europa?", answer: "Volga", wrong: ["Dunarea", "Rinul", "Sena"], explanation: "Volga curge prin partea europeana a Rusiei si se varsa in Marea Caspica." },
  { prompt: "Ce fluviu traverseaza mai multe tari din Europa Centrala si de Sud-Est?", answer: "Dunarea", wrong: ["Tamisa", "Loara", "Ebro"], explanation: "Dunarea traverseaza sau margineste numeroase state europene." },
  { prompt: "Ce mare se afla intre Europa si Africa?", answer: "Marea Mediterana", wrong: ["Marea Baltica", "Marea Nordului", "Marea Caspica"], explanation: "Mediterana separa sudul Europei de nordul Africii." },
  { prompt: "Ce mare se afla la sud-est de Romania si Ucraina?", answer: "Marea Neagra", wrong: ["Marea Baltica", "Marea Rosie", "Marea Nordului"], explanation: "Marea Neagra este situata in sud-estul Europei." },
  { prompt: "Ce lant muntos separa traditional Europa de Asia?", answer: "Muntii Ural", wrong: ["Alpii", "Pirineii", "Apeninii"], explanation: "Muntii Ural sunt considerati o limita naturala intre Europa si Asia." },
  { prompt: "Care este cel mai inalt varf din Europa, dupa delimitarea care include Caucazul?", answer: "Elbrus", wrong: ["Mont Blanc", "Musala", "Matterhorn"], explanation: "Elbrus din Caucaz este considerat cel mai inalt varf european in aceasta delimitare." },
  { prompt: "Care este cel mai mare desert cald din lume?", answer: "Sahara", wrong: ["Gobi", "Atacama", "Kalahari"], explanation: "Sahara este cel mai mare desert cald de pe Glob." },
  { prompt: "Care este cel mai adanc lac din lume?", answer: "Baikal", wrong: ["Victoria", "Superior", "Chad"], explanation: "Lacul Baikal este cel mai adanc lac al lumii." },
  { prompt: "Care este cel mai mare lac din Africa?", answer: "Victoria", wrong: ["Tanganyika", "Malawi", "Chad"], explanation: "Lacul Victoria este cel mai mare lac african ca suprafata." },
  { prompt: "Care este cel mai lung fluviu din Africa?", answer: "Nilul", wrong: ["Congo", "Niger", "Zambezi"], explanation: "Nilul este unul dintre cele mai lungi fluvii ale lumii." },
  { prompt: "Care tara are cea mai mare suprafata din lume?", answer: "Rusia", wrong: ["Canada", "China", "Brazilia"], explanation: "Rusia este cel mai intins stat al lumii." },
  { prompt: "Care tara are cea mai mare populatie din lume in prezent?", answer: "India", wrong: ["China", "SUA", "Indonezia"], explanation: "India a depasit China ca populatie totala." },
  { prompt: "Care este capitala Romaniei?", answer: "Bucuresti", wrong: ["Iasi", "Cluj-Napoca", "Brasov"], explanation: "Bucuresti este capitala Romaniei." },
  { prompt: "Care este capitala Ucrainei?", answer: "Kyiv", wrong: ["Odesa", "Lviv", "Harkiv"], explanation: "Kyiv este capitala Ucrainei." },
  { prompt: "Care este capitala Frantei?", answer: "Paris", wrong: ["Lyon", "Marsilia", "Nisa"], explanation: "Paris este capitala Frantei." },
  { prompt: "Care este capitala Germaniei?", answer: "Berlin", wrong: ["Munchen", "Hamburg", "Frankfurt"], explanation: "Berlin este capitala Germaniei." },
  { prompt: "Care este capitala Italiei?", answer: "Roma", wrong: ["Milano", "Napoli", "Torino"], explanation: "Roma este capitala Italiei." },
  { prompt: "Care este capitala Spaniei?", answer: "Madrid", wrong: ["Barcelona", "Sevilla", "Valencia"], explanation: "Madrid este capitala Spaniei." },
  { prompt: "Care este capitala Portugaliei?", answer: "Lisabona", wrong: ["Porto", "Coimbra", "Faro"], explanation: "Lisabona este capitala Portugaliei." },
  { prompt: "Care este capitala Greciei?", answer: "Atena", wrong: ["Salonic", "Patras", "Heraklion"], explanation: "Atena este capitala Greciei." },
  { prompt: "Care este capitala Poloniei?", answer: "Varsovia", wrong: ["Cracovia", "Gdansk", "Poznan"], explanation: "Varsovia este capitala Poloniei." },
  { prompt: "Care este capitala Ungariei?", answer: "Budapesta", wrong: ["Debretin", "Szeged", "Pecs"], explanation: "Budapesta este capitala Ungariei." },
  { prompt: "Care este capitala Bulgariei?", answer: "Sofia", wrong: ["Varna", "Plovdiv", "Burgas"], explanation: "Sofia este capitala Bulgariei." },
  { prompt: "Care este capitala Turciei?", answer: "Ankara", wrong: ["Istanbul", "Izmir", "Antalya"], explanation: "Ankara este capitala Turciei." },
  { prompt: "Care este capitala Regatului Unit?", answer: "Londra", wrong: ["Manchester", "Liverpool", "Edinburgh"], explanation: "Londra este capitala Regatului Unit." },
  { prompt: "Care este capitala Suediei?", answer: "Stockholm", wrong: ["Goteborg", "Malmo", "Uppsala"], explanation: "Stockholm este capitala Suediei." },
  { prompt: "Care este capitala Norvegiei?", answer: "Oslo", wrong: ["Bergen", "Trondheim", "Stavanger"], explanation: "Oslo este capitala Norvegiei." },
  { prompt: "Care este capitala Canadei?", answer: "Ottawa", wrong: ["Toronto", "Vancouver", "Montreal"], explanation: "Ottawa este capitala Canadei." },
  { prompt: "Care este capitala Australiei?", answer: "Canberra", wrong: ["Sydney", "Melbourne", "Perth"], explanation: "Canberra este capitala Australiei." },
  { prompt: "Pe ce continent se afla Brazilia?", answer: "America de Sud", wrong: ["Africa", "Europa", "Asia"], explanation: "Brazilia ocupa o mare parte din America de Sud." },
  { prompt: "Pe ce continent se afla Egiptul?", answer: "Africa", wrong: ["Europa", "Australia", "America de Nord"], explanation: "Egiptul este in nord-estul Africii." },
  { prompt: "Pe ce continent se afla Japonia?", answer: "Asia", wrong: ["Europa", "Africa", "America de Sud"], explanation: "Japonia este un stat insular din Asia de Est." },
  { prompt: "Pe ce continent se afla Argentina?", answer: "America de Sud", wrong: ["Europa", "Asia", "Africa"], explanation: "Argentina se afla in sudul Americii de Sud." },
  { prompt: "Pe ce continent se afla Marocul?", answer: "Africa", wrong: ["Europa", "Asia", "Australia"], explanation: "Marocul se afla in nord-vestul Africii." },
  { prompt: "Pe ce continent se afla India?", answer: "Asia", wrong: ["Africa", "Europa", "America de Sud"], explanation: "India este situata in Asia de Sud." },
  { prompt: "Pe ce continent se afla Mexicul?", answer: "America de Nord", wrong: ["America de Sud", "Europa", "Asia"], explanation: "Mexicul face parte din America de Nord." },
  { prompt: "Ce forma de relief are altitudini mari si versanti abrupti?", answer: "Muntele", wrong: ["Campia", "Delta", "Lunca"], explanation: "Muntii au altitudini ridicate si pante accentuate." },
  { prompt: "Ce forma de relief este joasa si relativ neteda?", answer: "Campia", wrong: ["Muntele", "Canionul", "Vulcanul"], explanation: "Campiile au altitudini mici si suprafete mai netede." },
  { prompt: "Ce forma de relief se formeaza la varsarea unui rau prin depunere de aluviuni?", answer: "Delta", wrong: ["Canion", "Duna", "Creasta"], explanation: "Delta apare prin acumularea sedimentelor la gura de varsare." },
  { prompt: "Ce forma de relief este sapata adanc de un rau?", answer: "Canionul", wrong: ["Atolul", "Dolina", "Campia"], explanation: "Canioanele se formeaza prin eroziune fluviala puternica." },
  { prompt: "Ce este un vulcan?", answer: "O forma de relief prin care magma ajunge la suprafata", wrong: ["O acumulare de gheata", "Un rau subteran", "Un tip de sol"], explanation: "Vulcanii sunt legati de iesirea magmei si a gazelor la suprafata." },
  { prompt: "Ce sunt cutremurele?", answer: "Miscari bruste ale scoartei terestre", wrong: ["Ploi abundente", "Vanturi reci", "Maree inalte"], explanation: "Cutremurele apar prin eliberarea brusca a energiei in scoarta." },
  { prompt: "Ce este latitudinea?", answer: "Distanta unghiulara fata de Ecuator", wrong: ["Distanta fata de Greenwich", "Altitudinea unui munte", "Adancimea oceanului"], explanation: "Latitudinea arata pozitia nord-sud fata de Ecuator." },
  { prompt: "Ce este longitudinea?", answer: "Distanta unghiulara fata de meridianul Greenwich", wrong: ["Distanta fata de Ecuator", "Inaltimea reliefului", "Grosimea atmosferei"], explanation: "Longitudinea arata pozitia est-vest fata de meridianul Greenwich." },
  { prompt: "Ce paralela imparte Pamantul in emisfera nordica si sudica?", answer: "Ecuatorul", wrong: ["Tropicul Racului", "Cercul Polar Arctic", "Meridianul Greenwich"], explanation: "Ecuatorul este paralela de 0 grade latitudine." },
  { prompt: "Ce meridian este considerat meridianul de origine?", answer: "Greenwich", wrong: ["Ecuator", "Tropicul Capricornului", "Cercul Polar Antarctic"], explanation: "Meridianul Greenwich are longitudinea 0 grade." },
  { prompt: "Ce instrument se foloseste pentru orientare dupa punctele cardinale?", answer: "Busola", wrong: ["Barometrul", "Termometrul", "Higrometrul"], explanation: "Busola indica nordul magnetic si ajuta la orientare." },
  { prompt: "Ce arata o harta politica?", answer: "State, frontiere si capitale", wrong: ["Doar temperaturi", "Doar tipuri de sol", "Doar curenti oceanici"], explanation: "Hartile politice reprezinta organizarea politica a teritoriului." },
  { prompt: "Ce arata o harta fizica?", answer: "Relieful si apele", wrong: ["Rezultate electorale", "Doar granite administrative", "Numai autostrazi"], explanation: "Hartile fizice prezinta forme de relief, rauri, lacuri si mari." },
  { prompt: "Ce inseamna scara hartii?", answer: "Raportul dintre distanta de pe harta si cea reala", wrong: ["Culoarea reliefului", "Directia nordului", "Legenda oraselor"], explanation: "Scara permite calcularea distantelor reale dupa harta." },
  { prompt: "Ce sunt izohipsele?", answer: "Linii care unesc puncte cu aceeasi altitudine", wrong: ["Linii de aceeasi temperatura", "Frontiere de stat", "Drumuri principale"], explanation: "Izohipsele, sau curbele de nivel, reprezinta altitudinea reliefului." },
  { prompt: "Ce sunt izotermele?", answer: "Linii care unesc puncte cu aceeasi temperatura", wrong: ["Linii de aceeasi altitudine", "Rauri temporare", "Granite politice"], explanation: "Izotermele sunt folosite pe hartile climatice." },
  { prompt: "Ce sunt izobarele?", answer: "Linii care unesc puncte cu aceeasi presiune atmosferica", wrong: ["Linii de aceeasi adancime", "Linii de aceeasi populatie", "Drumuri maritime"], explanation: "Izobarele apar pe hartile meteorologice." },
  { prompt: "Ce strat al atmosferei contine majoritatea fenomenelor meteorologice?", answer: "Troposfera", wrong: ["Stratosfera", "Mezosfera", "Termosfera"], explanation: "Vremea se formeaza in principal in troposfera." },
  { prompt: "Ce gaz este cel mai abundent in atmosfera?", answer: "Azotul", wrong: ["Oxigenul", "Dioxidul de carbon", "Ozonul"], explanation: "Azotul reprezinta aproximativ 78% din atmosfera." },
  { prompt: "Ce este vremea?", answer: "Starea atmosferei la un moment dat", wrong: ["Media pe 30 de ani", "Relieful unei tari", "Tipul de sol"], explanation: "Vremea descrie conditiile atmosferice de moment." },
  { prompt: "Ce este clima?", answer: "Media conditiilor atmosferice pe perioade lungi", wrong: ["O furtuna de o zi", "Un tip de roca", "O forma de relief"], explanation: "Clima se stabileste prin observatii pe perioade indelungate." },
  { prompt: "Ce zona climatica se afla in jurul Ecuatorului?", answer: "Ecuatoriala", wrong: ["Polara", "Temperata", "Subpolara"], explanation: "Zona ecuatoriala are temperaturi ridicate si precipitatii bogate." },
  { prompt: "Ce zona climatica are patru anotimpuri bine evidentiate?", answer: "Temperata", wrong: ["Ecuatoriala", "Polara", "Desertica tropicala"], explanation: "Zona temperata are variatii sezoniere clare." },
  { prompt: "Ce fenomen inseamna lipsa indelungata a precipitatiilor?", answer: "Seceta", wrong: ["Inundatia", "Avalansa", "Mareea"], explanation: "Seceta apare cand deficitul de apa persista o perioada mai lunga." },
  { prompt: "Ce fenomen apare cand un rau iese din albie?", answer: "Inundatia", wrong: ["Eruptia", "Cutremurul", "Bruma"], explanation: "Inundatiile pot aparea dupa ploi abundente sau topirea zapezilor." },
  { prompt: "Ce este un afluent?", answer: "Un rau care se varsa intr-un rau mai mare", wrong: ["Un lac sarat", "Un varf montan", "Un tip de nor"], explanation: "Afluentii alimenteaza raurile principale." },
  { prompt: "Ce este un bazin hidrografic?", answer: "Teritoriul de pe care un rau isi aduna apele", wrong: ["Un tip de desert", "Un oras-port", "O zona de cutremure"], explanation: "Bazinul hidrografic cuprinde raul principal si afluentii sai." },
  { prompt: "Ce este gura de varsare a unui rau?", answer: "Locul unde raul se varsa", wrong: ["Locul unde izvoraste", "Cel mai inalt punct", "O cascada"], explanation: "Gura de varsare poate fi intr-un rau, lac, mare sau ocean." },
  { prompt: "Ce este izvorul unui rau?", answer: "Locul de unde incepe raul", wrong: ["Locul de varsare", "Cea mai adanca portiune", "O insula"], explanation: "Izvorul este punctul de pornire al unui curs de apa." },
  { prompt: "Care este cel mai mare bazin fluvial al lumii?", answer: "Amazon", wrong: ["Dunare", "Volga", "Nil"], explanation: "Bazinul Amazonului este cel mai intins si foarte bogat in apa." },
  { prompt: "Ce este o peninsula?", answer: "O portiune de uscat inconjurata de apa din trei parti", wrong: ["O insula mica", "Un lac montan", "Un desert rece"], explanation: "Peninsulele sunt legate de continent printr-o parte de uscat." },
  { prompt: "Ce este o insula?", answer: "O portiune de uscat inconjurata complet de apa", wrong: ["O vale uscata", "Un varf montan", "Un rau scurt"], explanation: "Insulele sunt inconjurate de apa din toate partile." },
  { prompt: "Ce este un arhipelag?", answer: "Un grup de insule", wrong: ["Un lant de munti", "Un lac sarat", "O campie joasa"], explanation: "Arhipelagurile sunt formate din mai multe insule apropiate." },
  { prompt: "Ce este o stramtoare?", answer: "O fasie ingusta de apa intre doua uscat-uri", wrong: ["Un munte izolat", "O campie fertila", "Un crater"], explanation: "Stramtorile leaga de obicei doua mari sau oceane." },
  { prompt: "Ce este un golf?", answer: "O patrundere a marii sau oceanului in uscat", wrong: ["Un rau subteran", "O dune de nisip", "Un tip de padure"], explanation: "Golfurile sunt parti ale apelor marine intrate in uscat." },
  { prompt: "Ce este o mare?", answer: "O intindere de apa sarata mai mica decat oceanul", wrong: ["Un lac de apa dulce", "Un rau lung", "O zona montana"], explanation: "Marile sunt legate de oceane sau inconjurate partial de continente." },
  { prompt: "Ce este salinitatea?", answer: "Cantitatea de saruri dizolvate in apa", wrong: ["Temperatura aerului", "Inaltimea valurilor", "Viteza vantului"], explanation: "Salinitatea exprima continutul de saruri al apei." },
  { prompt: "Ce sunt resursele naturale?", answer: "Elemente ale naturii folosite de oameni", wrong: ["Doar cladiri", "Doar drumuri", "Doar monede"], explanation: "Resursele naturale includ apa, soluri, paduri, minerale si altele." },
  { prompt: "Care resursa naturala este importanta pentru agricultura Moldovei?", answer: "Solul fertil", wrong: ["Ghetarii", "Petrolul abundent", "Recifele de corali"], explanation: "Solurile fertile sustin productia agricola." },
  { prompt: "Ce inseamna densitatea populatiei?", answer: "Numarul de locuitori pe unitate de suprafata", wrong: ["Varsta medie", "Numarul de orase", "Lungimea raurilor"], explanation: "Densitatea arata cat de concentrata este populatia pe un teritoriu." },
  { prompt: "Ce este urbanizarea?", answer: "Cresterea rolului si populatiei oraselor", wrong: ["Scaderea temperaturii", "Formarea muntilor", "Eroziunea tarmului"], explanation: "Urbanizarea se refera la dezvoltarea asezarilor urbane." },
  { prompt: "Ce este migratia?", answer: "Deplasarea populatiei dintr-un loc in altul", wrong: ["Formarea norilor", "Cresterea reliefului", "Depunerea aluviunilor"], explanation: "Migratia poate fi interna sau internationala." },
  { prompt: "Ce sector economic include agricultura?", answer: "Sectorul primar", wrong: ["Sectorul secundar", "Sectorul tertiar", "Sectorul financiar exclusiv"], explanation: "Sectorul primar include activitati de obtinere directa a resurselor." },
  { prompt: "Ce sector economic include industria prelucratoare?", answer: "Sectorul secundar", wrong: ["Sectorul primar", "Sectorul tertiar", "Sectorul agrar"], explanation: "Sectorul secundar transforma materiile prime in produse." },
  { prompt: "Ce sector economic include serviciile?", answer: "Sectorul tertiar", wrong: ["Sectorul primar", "Sectorul secundar", "Sectorul extractiv"], explanation: "Serviciile includ transport, comert, educatie, turism si alte activitati." },
  { prompt: "Ce resursa energetica este combustibil fosil?", answer: "Carbunele", wrong: ["Vantul", "Soarele", "Apa curgatoare"], explanation: "Carbunele este un combustibil fosil format in timp geologic." },
  { prompt: "Care sursa de energie este regenerabila?", answer: "Energia solara", wrong: ["Carbunele", "Petrolul", "Gazul natural"], explanation: "Energia solara se reinnoieste natural si nu se epuizeaza ca resursele fosile." },
  { prompt: "Ce este defrisarea?", answer: "Taierea sau indepartarea padurilor", wrong: ["Plantarea arborilor", "Formarea norilor", "Irigarea campurilor"], explanation: "Defrisarea reduce suprafetele forestiere si poate favoriza eroziunea." },
  { prompt: "Ce este poluarea?", answer: "Degradarea mediului prin substante sau activitati daunatoare", wrong: ["Protectia naturii", "Cresterea biodiversitatii", "Curatarea apelor"], explanation: "Poluarea afecteaza aerul, apa, solul si organismele vii." },
  { prompt: "Ce este biodiversitatea?", answer: "Varietatea formelor de viata", wrong: ["Numarul de fabrici", "Inaltimea muntilor", "Viteza vantului"], explanation: "Biodiversitatea include plante, animale, microorganisme si ecosisteme." },
  { prompt: "Ce este o rezervatie naturala?", answer: "Un teritoriu protejat pentru conservarea naturii", wrong: ["Un oras industrial", "Un port comercial", "O mina de carbune"], explanation: "Rezervatiile protejeaza specii, habitate si peisaje valoroase." },
  { prompt: "Ce este desertificarea?", answer: "Degradarea terenurilor in zone uscate", wrong: ["Formarea padurilor tropicale", "Cresterea ghetarilor", "Aparitia lacurilor glaciare"], explanation: "Desertificarea este favorizata de seceta, eroziune si folosirea gresita a solului." },
  { prompt: "Ce este irigatia?", answer: "Aducerea controlata a apei pe terenuri agricole", wrong: ["Taierea padurilor", "Extractia minereurilor", "Masurarea presiunii"], explanation: "Irigatia ajuta culturile in perioadele cu deficit de apa." },
  { prompt: "Ce este o lunca?", answer: "Zona joasa de langa un rau, inundabila", wrong: ["Varful unui munte", "Un desert pietros", "Un crater vulcanic"], explanation: "Luncile se formeaza in lungul raurilor si pot fi inundate." },
  { prompt: "Ce este terasa fluviala?", answer: "O treapta de relief formata de un rau", wrong: ["O insula coraligena", "Un nor de furtuna", "O dune activa"], explanation: "Terasele marcheaza vechi niveluri ale vaii raului." },
  { prompt: "Ce este albia unui rau?", answer: "Canalul prin care curge apa raului", wrong: ["Cel mai inalt deal", "O padure de conifere", "O limita de stat"], explanation: "Albia este partea vaii ocupata de apa curgatoare." },
  { prompt: "Ce este un lac?", answer: "O acumulare naturala sau artificiala de apa intr-o depresiune", wrong: ["Un rau rapid", "Un munte izolat", "Un vant local"], explanation: "Lacurile pot fi naturale sau create de oameni." },
  { prompt: "Ce este o cascada?", answer: "Caderea apei pe o diferenta brusca de nivel", wrong: ["Un golf marin", "O campie joasa", "Un tip de harta"], explanation: "Cascadele apar unde albia raului are rupturi de panta." },
  { prompt: "Ce este un ghetar?", answer: "O masa de gheata aflata in miscare lenta", wrong: ["Un desert cald", "Un lac sarat", "Un nor subtire"], explanation: "Ghetarii se formeaza prin acumularea si tasarea zapezii." },
  { prompt: "Ce zona rece se afla in jurul Polului Nord?", answer: "Zona arctica", wrong: ["Zona ecuatoriala", "Zona musonica", "Zona mediteraneana"], explanation: "Arctica este regiunea polara nordica." },
  { prompt: "Ce continent este acoperit in mare parte de gheata?", answer: "Antarctica", wrong: ["Africa", "Australia", "America de Sud"], explanation: "Antarctica are o calota glaciara foarte intinsa." },
  { prompt: "Ce linie imaginara marcheaza 23,5 grade latitudine nordica?", answer: "Tropicul Racului", wrong: ["Tropicul Capricornului", "Ecuatorul", "Meridianul Greenwich"], explanation: "Tropicul Racului se afla in emisfera nordica." },
  { prompt: "Ce linie imaginara marcheaza 23,5 grade latitudine sudica?", answer: "Tropicul Capricornului", wrong: ["Tropicul Racului", "Ecuatorul", "Cercul Polar Arctic"], explanation: "Tropicul Capricornului se afla in emisfera sudica." },
  { prompt: "Ce curent oceanic cald influenteaza Europa de Vest?", answer: "Curentul Golfului", wrong: ["Curentul Labrador", "Curentul Humboldt", "Curentul Benguelei"], explanation: "Curentul Golfului aduce ape calde spre Atlanticul de Nord." },
  { prompt: "Ce este un muson?", answer: "Un vant sezonier care isi schimba directia", wrong: ["Un tip de cutremur", "O forma de relief", "Un lac glaciar"], explanation: "Musonii influenteaza puternic precipitatiile in Asia de Sud si Sud-Est." },
  { prompt: "Ce este briza marina?", answer: "Vant local dintre mare si uscat", wrong: ["Un curent oceanic profund", "O eruptie vulcanica", "O ploaie acida"], explanation: "Brizele apar din diferentele de incalzire dintre uscat si apa." },
  { prompt: "Ce este amplitudinea termica anuala?", answer: "Diferenta dintre media lunii celei mai calde si a celei mai reci", wrong: ["Cantitatea de precipitatii", "Viteza medie a vantului", "Adancimea unui lac"], explanation: "Amplitudinea arata contrastul termic dintre anotimpuri." },
  { prompt: "Ce inseamna avalansa?", answer: "Deplasarea brusca a zapezii pe versant", wrong: ["Cresterea nivelului marii", "Formarea deltei", "Eruptia norilor"], explanation: "Avalansele sunt periculoase in zonele montane inzapezite." },
  { prompt: "Ce este o campie litorala?", answer: "O zona joasa situata langa tarm", wrong: ["Un munte submarin", "Un crater vulcanic", "O padure montana"], explanation: "Campiile litorale se afla in apropierea marilor si oceanelor." },
  { prompt: "Ce este platforma continentala?", answer: "Prelungirea putin adanca a continentului sub mare", wrong: ["Varful unui munte", "Un desert interior", "Un strat al atmosferei"], explanation: "Platforma continentala este partea submarina marginala a continentelor." },
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

const prefixes = [
  "Alege raspunsul corect:",
  "Identifica varianta corecta:",
  "Completeaza corect enuntul:",
  "Selecteaza raspunsul potrivit:",
];

function createQuestions(facts: Fact[], levelOffset: number): Question[] {
  return facts.map((fact, index) => createQuestion(fact, levelOffset + index + 1, fact.prompt));
}

function createVariantQuestions(facts: Fact[], levelOffset: number): Question[] {
  return facts.flatMap((fact, factIndex) =>
    prefixes.map((prefix, variantIndex) =>
      createQuestion(
        fact,
        levelOffset + factIndex * prefixes.length + variantIndex + 1,
        `${prefix} ${fact.prompt}`
      )
    )
  );
}

function createQuestion(fact: Fact, id: number, text: string): Question {
  const options = shuffleOptions([fact.answer, ...fact.wrong], id);
  return {
    id,
    text,
    options,
    correctIndex: options.indexOf(fact.answer),
    explanation: fact.explanation,
  };
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
  normal: createQuestions(normalFacts, 0),
  competitiv: createVariantQuestions(competitivFacts, 1000),
  olimpic: createVariantQuestions(olimpicFacts, 2000),
};

function getFactGroupId(question: Question): number {
  return Math.floor(((question.id % 1000) - 1) / 4);
}

export function getQuestionBankByDifficulty(difficulty: Difficulty): Question[] {
  return questionBanks[difficulty];
}

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  if (difficulty === "normal") {
    return shuffleItems(questionBanks.normal).slice(0, QUESTIONS_PER_QUIZ);
  }

  const groups = new Map<number, Question[]>();

  for (const question of questionBanks[difficulty]) {
    const groupId = getFactGroupId(question);
    groups.set(groupId, [...(groups.get(groupId) ?? []), question]);
  }

  return shuffleItems([...groups.values()])
    .slice(0, QUESTIONS_PER_QUIZ)
    .map((group) => shuffleItems(group)[0]);
}
