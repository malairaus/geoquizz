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

export const difficulties: DifficultyInfo[] = [
  {
    key: "normal",
    label: "Normal",
    description: "Întrebări de bază din materia de geografie. Ideal pentru repetare și consolidare.",
    color: "text-sky-600",
    bgGradient: "from-sky-500 to-teal-500",
    shadowColor: "shadow-sky-200",
    borderColor: "border-sky-200",
  },
  {
    key: "competitiv",
    label: "Competitiv",
    description: "Întrebări de nivel mediu-avansat. Necesită cunoștințe mai aprofundate și capacitate de analiză.",
    color: "text-amber-600",
    bgGradient: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-200",
    borderColor: "border-amber-200",
  },
  {
    key: "olimpic",
    label: "Olimpic",
    description: "Întrebări de nivel avansat. Gândite pentru pregătirea olimpiadelor de geografie.",
    color: "text-rose-600",
    bgGradient: "from-rose-500 to-red-600",
    shadowColor: "shadow-rose-200",
    borderColor: "border-rose-200",
  },
];

export const normalQuestions: Question[] = [
  {
    id: 1,
    text: "Care este cel mai lung râu din Republica Moldova?",
    options: ["A. Prut", "B. Nistru", "C. Răut", "D. Bâc"],
    correctIndex: 1,
    explanation:
      "Nistrul este cel mai lung râu care traversează teritoriul Republicii Moldova și are o importanță majoră pentru economie și alimentarea cu apă.",
  },
  {
    id: 2,
    text: "Care este cel mai înalt vârf din Europa?",
    options: ["A. Mont Blanc", "B. Elbrus", "C. Matterhorn", "D. Musala"],
    correctIndex: 1,
    explanation:
      "Vârful Elbrus (5.642 m), situat în Caucaz, este cel mai înalt vârf din Europa, deși este adesea subiect de dezbatere din cauza poziției geografice a Caucazului.",
  },
  {
    id: 3,
    text: "Care este cel mai mare continent ca suprafață?",
    options: ["A. Africa", "B. America de Nord", "C. Asia", "D. America de Sud"],
    correctIndex: 2,
    explanation:
      "Asia este cel mai mare continent, cu o suprafață de aproximativ 44,5 milioane km², reprezentând circa 30% din suprafața uscatului.",
  },
  {
    id: 4,
    text: "Ce ocean este cel mai mare de pe Pământ?",
    options: ["A. Oceanul Atlantic", "B. Oceanul Indian", "C. Oceanul Arctic", "D. Oceanul Pacific"],
    correctIndex: 3,
    explanation:
      "Oceanul Pacific este cel mai mare ocean, acoperind aproximativ 165,25 milioane km², mai mult decât toată suprafața uscatului la un loc.",
  },
  {
    id: 5,
    text: "Care este capitala Republicii Moldova?",
    options: ["A. Bălți", "B. Tiraspol", "C. Chișinău", "D. Cahul"],
    correctIndex: 2,
    explanation:
      "Chișinău este capitala și cel mai mare oraș al Republicii Moldova, situat pe râul Bâc, cu o populație de aproximativ 500.000 de locuitori.",
  },
  {
    id: 6,
    text: "Ce tip de climă predomină în Republica Moldova?",
    options: [
      "A. Climat mediteranean",
      "B. Climat temperat-continental",
      "C. Climat subtropical",
      "D. Climat oceanic",
    ],
    correctIndex: 1,
    explanation:
      "Republica Moldova are un climat temperat-continental, cu veri calde și ierni relativ reci, influențat de masivele de aer atlantic, continental și mediteranean.",
  },
  {
    id: 7,
    text: "Care este cel mai lung râu din Europa?",
    options: ["A. Dunărea", "B. Volga", "C. Rinul", "D. Niprul"],
    correctIndex: 1,
    explanation:
      "Volga este cel mai lung râu din Europa, cu o lungime de 3.530 km, curgând prin partea europeană a Rusiei și vărsându-se în Marea Caspică.",
  },
  {
    id: 8,
    text: "Care este cel mai mare lac din Africa?",
    options: ["A. Lacul Victoria", "B. Lacul Tanganyika", "C. Lacul Malawi", "D. Lacul Chad"],
    correctIndex: 0,
    explanation:
      "Lacul Victoria este cel mai mare lac din Africa și al doilea ca mărime dintre lacurile de apă dulce din lume, cu o suprafață de aproximativ 68.800 km².",
  },
  {
    id: 9,
    text: "Ce țară are cea mai mare populație din lume?",
    options: ["A. Statele Unite", "B. India", "C. China", "D. Indonezia"],
    correctIndex: 1,
    explanation:
      "India a depășit China în 2023 devenind cea mai populată țară din lume, cu peste 1,4 miliarde de locuitori.",
  },
  {
    id: 10,
    text: "Care este principala resursă naturală extrasă în Republica Moldova?",
    options: ["A. Petrol", "B. Cărbune", "C. Materiale de construcție (calcar, nisip)", "D. Gaz natural"],
    correctIndex: 2,
    explanation:
      "Republica Moldova nu are zăcăminte semnificative de combustibili fosili. Principalele resurse naturale sunt materialele de construcție: calcar, nisip, argilă și piatră de construcție.",
  },
  {
    id: 11,
    text: "Ce mare se află între Europa și Africa?",
    options: ["A. Marea Neagră", "B. Marea Mediterană", "C. Marea Nordului", "D. Marea Baltică"],
    correctIndex: 1,
    explanation:
      "Marea Mediterană separă Europa de Africa și leagă Oceanul Atlantic de est prin Strâmtoarea Gibraltar.",
  },
  {
    id: 12,
    text: "Care este cel mai mare deșert din lume?",
    options: ["A. Deșertul Sahara", "B. Deșertul Gobi", "C. Deșertul Antarctic", "D. Deșertul Arabian"],
    correctIndex: 2,
    explanation:
      "Deșertul Antarctic este cel mai mare deșert din lume (14,2 milioane km²), deși este un deșert rece. Sahara este cel mai mare deșert cald.",
  },
  {
    id: 13,
    text: "Care este cel mai populat continent?",
    options: ["A. Europa", "B. Africa", "C. Asia", "D. America de Sud"],
    correctIndex: 2,
    explanation:
      "Asia este cel mai populat continent, găzduind aproximativ 60% din populația lumii, cu peste 4,7 miliarde de locuitori.",
  },
  {
    id: 14,
    text: "Ce lanț muntos separă Europa de Asia?",
    options: ["A. Alpii", "B. Munții Ural", "C. Carpații", "D. Pirineii"],
    correctIndex: 1,
    explanation:
      "Munții Ural sunt considerați granița naturală între Europa și Asia, întinzându-se de la Marea Kara, la nord, până la râul Ural, la sud.",
  },
  {
    id: 15,
    text: "Care este principala activitate economică din Republica Moldova?",
    options: [
      "A. Industria grea",
      "B. Agricultura",
      "C. Turismul",
      "D. Extracția petrolului",
    ],
    correctIndex: 1,
    explanation:
      "Agricultura este principala activitate economică a Republicii Moldova, țara fiind cunoscută în special pentru viticultură și producția de fructe și legume.",
  },
  {
    id: 16,
    text: "Care țară are cea mai mare suprafață din lume?",
    options: ["A. Canada", "B. China", "C. Statele Unite", "D. Rusia"],
    correctIndex: 3,
    explanation:
      "Rusia este cea mai mare țară din lume ca suprafață, cu peste 17,1 milioane km², acoperind peste un sfert din uscatul globului.",
  },
  {
    id: 17,
    text: "Ce râu traversează cel mai multe țări din Europa?",
    options: ["A. Rinul", "B. Dunărea", "C. Loara", "D. Tamisa"],
    correctIndex: 1,
    explanation:
      "Dunărea traversează 10 țări (Germania, Austria, Slovacia, Ungaria, Croația, Serbia, Bulgaria, România, Moldova, Ucraina), fiind cel mai internațional râu din lume.",
  },
  {
    id: 18,
    text: "Care este cel mai adânc lac din lume?",
    options: ["A. Lacul Baikal", "B. Lacul Tanganyika", "C. Marea Caspică", "D. Lacul Superior"],
    correctIndex: 0,
    explanation:
      "Lacul Baikal din Siberia este cel mai adânc lac din lume, cu o adâncime maximă de 1.642 m, și conține aproximativ 20% din rezervele de apă dulce ale planetei.",
  },
  {
    id: 19,
    text: "Ce zonă climatică se află la ecuator?",
    options: [
      "A. Climat temperat",
      "B. Climat ecuatorial",
      "C. Climat polar",
      "D. Climat subtropical",
    ],
    correctIndex: 1,
    explanation:
      "Zona ecuatorială se caracterizează prin climat ecuatorial: temperaturi ridicate pe tot parcursul anului (25-28°C), precipitații abundente și o vegetație luxuriantă (pădurea ecuatorială).",
  },
  {
    id: 20,
    text: "Câte județe (raioane) are Republica Moldova?",
    options: ["A. 28", "B. 32", "C. 36", "D. 40"],
    correctIndex: 1,
    explanation:
      "Republica Moldova este împărțită administrativ în 32 de raioane, plus municipiul Chișinău, municipiul Bălți, UTA Găgăuzia și Unitatea Teritorială Autonomă cu statut special de stânga Nistrului.",
  },
];

export const competitivQuestions: Question[] = [
  {
    id: 1,
    text: "Care este altitudinea medie a reliefului Republicii Moldova?",
    options: ["A. 57 m", "B. 147 m", "C. 320 m", "D. 429 m"],
    correctIndex: 1,
    explanation:
      "Altitudinea medie a Republicii Moldova este de aproximativ 147 m, țara fiind situată preponderent pe o câmpie deluroasă cu altitudini reduse.",
  },
  {
    id: 2,
    text: "Ce tip de roci predomină în structura geologică a Republicii Moldova?",
    options: [
      "A. Roci magmatice",
      "B. Roci metamorfice",
      "C. Roci sedimentare",
      "D. Roci vulcanice",
    ],
    correctIndex: 2,
    explanation:
      "Structura geologică a Republicii Moldova este formată predominant din roci sedimentare (calcare, argile, nisipuri), depuse în bazine marine de-a lungul erelor geologice.",
  },
  {
    id: 3,
    text: "Care este punctul cel mai înalt din Republica Moldova?",
    options: ["A. Dealul Bălănești (429 m)", "B. Dealul Măgura (388 m)", "C. Dealul Veverița (374 m)", "D. Dealul Țipala (356 m)"],
    correctIndex: 0,
    explanation:
      "Dealul Bălănești, cu altitudinea de 429 m, este punctul cel mai înalt din Republica Moldova, situat în raionul Nisporeni.",
  },
  {
    id: 4,
    text: "Ce fenomen geomorfologic a modelat predominant relieful Republicii Moldova?",
    options: [
      "A. Glaciațiunea",
      "B. Eroziunea fluvială și alunecările de teren",
      "C. Vulcanismul",
      "D. Eroziunea eoliană",
    ],
    correctIndex: 1,
    explanation:
      "Relieful Republicii Moldova a fost modelat predominant de eroziunea fluvială și alunecările de teren, fenomene favorizate de structura sedimentară și clima temperat-continentală.",
  },
  {
    id: 5,
    text: "Care este lungimea aproximativă a fluviului Dunărea pe teritoriul Republicii Moldova?",
    options: ["A. 1,2 km", "B. 57 km", "C. 340 km", "D. 1.070 km"],
    correctIndex: 0,
    explanation:
      "Dunărea traversează teritoriul Republicii Moldova pe o porțiune foarte scurtă, de doar 1,2 km, în zona Giurgiulești, unde formează granița cu România.",
  },
  {
    id: 6,
    text: "Ce strâmtoare leagă Marea Mediterană de Marea Neagră?",
    options: [
      "A. Strâmtoarea Gibraltar",
      "B. Strâmtoarea Bosfor",
      "C. Strâmtoarea Dardanele",
      "D. Strâmtoarea Messina",
    ],
    correctIndex: 1,
    explanation:
      "Strâmtoarea Bosfor leagă Marea Neagră de Marea Marmara, care la rândul ei se leagă de Marea Mediterană prin Strâmtoarea Dardanele. Împreună, ele formează calea navigabilă dintre Marea Neagră și Marea Mediterană.",
  },
  {
    id: 7,
    text: "Care este cel mai lung râu din Africa?",
    options: ["A. Congo", "B. Niger", "C. Nil", "D. Zambezi"],
    correctIndex: 2,
    explanation:
      "Nilul, cu o lungime de 6.650 km, este cel mai lung râu din Africa și unul dintre cele mai lungi din lume, izvorând din lacurile din Rwanda și Burundi.",
  },
  {
    id: 8,
    text: "Ce curent oceanic influențează clima temperată a Europei de Vest?",
    options: [
      "A. Curentul Labrador",
      "B. Curentul Golfului (Gulf Stream)",
      "C. Curentul Canarelor",
      "D. Curentul Nord-Atlantic",
    ],
    correctIndex: 1,
    explanation:
      "Curentul Golfului (Gulf Stream) transportă ape calde din Golful Mexic spre Europa de Vest, atenuând clima și făcând iernile mult mai blânde decât la latitudini similare.",
  },
  {
    id: 9,
    text: "Care este cea mai populată țară din Europa (fără Rusia)?",
    options: ["A. Franța", "B. Germania", "C. Regatul Unit", "D. Italia"],
    correctIndex: 1,
    explanation:
      "Germania este cea mai populată țară din Europa (excluzând Rusia europeană), cu aproximativ 84 de milioane de locuitori.",
  },
  {
    id: 10,
    text: "Ce resursă naturală este principalul produs de export al Republicii Moldova?",
    options: [
      "A. Produse agricole și alimentare",
      "B. Petrol rafinat",
      "C. Oțel",
      "D. Echipamente electronice",
    ],
    correctIndex: 0,
    explanation:
      "Produsele agricole și alimentare (fructe, legume, vin, nuci) reprezintă principala categorie de export a Republicii Moldova, agricultura fiind ramura economică dominantă.",
  },
  {
    id: 11,
    text: "Care este cel mai activ vulcan din Europa?",
    options: ["A. Vezuviu (Italia)", "B. Etna (Italia)", "C. Stromboli (Italia)", "D. Hekla (Islanda)"],
    correctIndex: 1,
    explanation:
      "Etna din Sicilia este cel mai activ vulcan din Europa și unul dintre cei mai activi din lume, cu erupții frecvente documentate din antichitate până în prezent.",
  },
  {
    id: 12,
    text: "Ce țară africană nu a fost niciodată colonizată de o putere europeană?",
    options: ["A. Nigeria", "B. Etiopia", "C. Kenya", "D. Ghana"],
    correctIndex: 1,
    explanation:
      "Etiopia (cu excepția unei scurte ocupații italiene, 1936-1941) este una dintre puținele țări africane care nu a fost colonizată de o putere europeană, menținându-și independența.",
  },
  {
    id: 13,
    text: "Care este cel mai mare producător de cafea din lume?",
    options: ["A. Columbia", "B. Vietnam", "C. Brazilia", "D. Indonezia"],
    correctIndex: 2,
    explanation:
      "Brazilia este cel mai mare producător de cafea din lume, responsabil pentru aproximativ o treime din producția globală, urmată de Vietnam și Columbia.",
  },
  {
    id: 14,
    text: "Ce platou este cunoscut sub denumirea de „acoperișul lumii\"?",
    options: [
      "A. Platoul Tibetan",
      "B. Platoul Altiplano",
      "C. Platoul Deccan",
      "D. Platoul Mongol",
    ],
    correctIndex: 0,
    explanation:
      "Platoul Tibetan, cu o altitudine medie de peste 4.500 m, este cunoscut ca „acoperișul lumii\" datorită înălțimii sale impresionante și întinderii vaste.",
  },
  {
    id: 15,
    text: "Care este densitatea medie a populației Republicii Moldova (loc./km²)?",
    options: ["A. 42", "B. 87", "C. 112", "D. 156"],
    correctIndex: 2,
    explanation:
      "Densitatea medie a populației Republicii Moldova este de aproximativ 112 locuitori/km², o valoare moderată, mai mare decât media europeană.",
  },
  {
    id: 16,
    text: "Ce țară are cel mai mare PIB din lume?",
    options: ["A. China", "B. Japonia", "C. Statele Unite", "D. Germania"],
    correctIndex: 2,
    explanation:
      "Statele Unite ale Americii au cel mai mare PIB nominal din lume (peste 25.000 miliarde USD), deși China depășește SUA la PIB-ul calculat pe baza parității puterii de cumpărare.",
  },
  {
    id: 17,
    text: "Care este cel mai mare port fluvial de pe Dunăre din Republica Moldova?",
    options: ["A. Portul Giurgiulești", "B. Portul Ungheni", "C. Portul Tiraspol", "D. Portul Soroca"],
    correctIndex: 0,
    explanation:
      "Portul Giurgiulești este singurul port fluvial de pe Dunăre al Republicii Moldova, situat la confluența Prutului cu Dunărea, oferind acces la Marea Neagră.",
  },
  {
    id: 18,
    text: "Ce țară are cea mai mare rețea de feriboturi din lume?",
    options: ["A. Norvegia", "B. Grecia", "C. Indonezia", "D. Canada"],
    correctIndex: 2,
    explanation:
      "Indonezia, ca arhipelag cu peste 17.000 de insule, deține cea mai mare rețea de feriboturi din lume, esențială pentru conectivitatea națională.",
  },
  {
    id: 19,
    text: "Care este principala cauză a degradării solurilor în Republica Moldova?",
    options: [
      "A. Salinizarea",
      "B. Eroziunea hidrică și eoliană",
      "C. Contaminarea radioactivă",
      "D. Compactarea mecanică",
    ],
    correctIndex: 1,
    explanation:
      "Eroziunea hidrică și eoliană este principala cauză a degradării solurilor în Republica Moldova, afectând peste 40% din terenurile agricole, în special cernoziomurile.",
  },
  {
    id: 20,
    text: "Ce stat enclavat este complet înconjurat de teritoriul Italiei?",
    options: ["A. Monaco", "B. San Marino", "C. Vatican", "D. Liechtenstein"],
    correctIndex: 1,
    explanation:
      "San Marino este o enclavă complet înconjurată de teritoriul Italiei. Vaticanul este de asemenea înconjurat de Italia, dar este situat în interiorul orașului Roma.",
  },
];

export const olimpicQuestions: Question[] = [
  {
    id: 1,
    text: "Care este vârsta geologică aproximativă a platformei moldovenești din structura Republicii Moldova?",
    options: [
      "A. Precambriană (peste 540 mil. ani)",
      "B. Paleozoică (540-252 mil. ani)",
      "C. Mezozoică (252-66 mil. ani)",
      "D. Neozoică (sub 66 mil. ani)",
    ],
    correctIndex: 0,
    explanation:
      "Platforma moldovenească (parte a Platformei Est-Europene) are o vârstă precambriană, fundamentul fiind format din roci cristaline cu vârsta de peste 540 milioane ani, acoperite de sedimente mai recente.",
  },
  {
    id: 2,
    text: "Care este valoarea medie anuală a precipitațiilor în Republica Moldova?",
    options: ["A. 250-350 mm", "B. 370-560 mm", "C. 600-800 mm", "D. 900-1.200 mm"],
    correctIndex: 1,
    explanation:
      "Precipitațiile medii anuale în Republica Moldova variază între 370 mm în sud și 560 mm în nord, cu un maxim în perioada caldă a anului (mai-iunie).",
  },
  {
    id: 3,
    text: "Ce tip de cernoziom ocupă cea mai mare suprafață în Republica Moldova?",
    options: [
      "A. Cernoziom tipic",
      "B. Cernoziom levigat",
      "C. Cernoziom carbonatic",
      "D. Cernoziom obișnuit",
    ],
    correctIndex: 0,
    explanation:
      "Cernoziomul tipic ocupă cea mai mare suprafață în Republica Moldova (aprox. 75% din teritoriu), fiind unul dintre cele mai fertile soluri din lume, cu un conținut ridicat de humus.",
  },
  {
    id: 4,
    text: "Care este coeficientul de umiditate (raportul precipitații/evaporabilitate) care delimitează zona stepică de zona silvostepică?",
    options: ["A. 0,2", "B. 0,5", "C. 1,0", "D. 1,5"],
    correctIndex: 2,
    explanation:
      "Coeficientul de umiditate 1,0 delimitează zona stepică (sub 1,0) de zona silvostepică (peste 1,0). Republica Moldova se află la granița acestor zone, cu valori de 0,8-1,1.",
  },
  {
    id: 5,
    text: "Ce masă de aer are cea mai mare frecvență pe teritoriul Republicii Moldova în cursul unui an?",
    options: [
      "A. Masa de aer arctic",
      "B. Masa de aer continentală",
      "C. Masa de aer oceanică (atlantică)",
      "D. Masa de aer tropicală",
    ],
    correctIndex: 1,
    explanation:
      "Masa de aer continentală are cea mai mare frecvență pe teritoriul Republicii Moldova (aprox. 40% din zilele anului), urmată de masa de aer oceanică (atlantică) cu aprox. 30%.",
  },
  {
    id: 6,
    text: "Care este lungimea totală a rețelei hidrografice a Republicii Moldova?",
    options: ["A. Aprox. 3.200 km", "B. Aprox. 8.600 km", "C. Aprox. 16.000 km", "D. Aprox. 24.000 km"],
    correctIndex: 2,
    explanation:
      "Rețeaua hidrografică a Republicii Moldova are o lungime totală de aproximativ 16.000 km, formată din 3.264 râuri și pâraie, majoritatea de dimensiuni mici.",
  },
  {
    id: 7,
    text: "Ce fenomen tectonic a generat lanțul Himalaya?",
    options: [
      "A. Divergența plăcilor",
      "B. Subducția plăcii pacifice",
      "C. Coliziunea plăcii indiene cu placa eurasiatică",
      "D. Hotspot vulcanic",
    ],
    correctIndex: 2,
    explanation:
      "Himalaya s-a format prin coliziunea plăcii indiene cu placa eurasiatică, un proces care a început acum aproximativ 50 milioane ani și continuă și astăzi, Himalaya ridicându-se cu cca. 5 mm anual.",
  },
  {
    id: 8,
    text: "Care este adâncimea maximă a Fosei Mariane, cel mai adânc punct din oceane?",
    options: ["A. 8.848 m", "B. 10.020 m", "C. 10.994 m", "D. 11.521 m"],
    correctIndex: 2,
    explanation:
      "Fosa Mariană atinge o adâncime maximă de 10.994 m (Aprox. 11 km) în zona Challenger Deep, fiind cel mai adânc punct cunoscut din oceanele Terrei.",
  },
  {
    id: 9,
    text: "Ce ciclon tropical se numește „taifun\" în Asia de Est?",
    options: [
      "A. Un ciclon format în Atlanticul de Nord",
      "B. Un ciclon tropical dezvoltat în vestul Pacificului de Nord",
      "C. Un ciclon extratropical din zona temperată",
      "D. O tornadă marină",
    ],
    correctIndex: 1,
    explanation:
      "Taifunurile sunt cicloni tropicali care se formează în vestul Oceanului Pacific de Nord. Aceeași fenomen se numește „uragan\" în Atlantic și „ciclone\" în Oceanul Indian.",
  },
  {
    id: 10,
    text: "Care este indicele de dezvoltare umană (IDU) aproximativ al Republicii Moldova?",
    options: ["A. 0,550 (scăzut)", "B. 0,650 (mediu)", "C. 0,750 (înalt)", "D. 0,890 (foarte înalt)"],
    correctIndex: 2,
    explanation:
      "Republica Moldova are un IDU de aproximativ 0,750, încadrându-se în categoria de dezvoltare umană înaltă, deși se află printre cele mai scăzute valori din Europa.",
  },
  {
    id: 11,
    text: "Ce proces geomorfologic generează codrii (păduri pe interfluvii) din Republica Moldova?",
    options: [
      "A. Eroziunea glaciară",
      "B. Acumularea eoliană de loess",
      "C. Alunecările de teren și eroziunea regresivă pe versanți",
      "D. Vulcanismul pliocen",
    ],
    correctIndex: 2,
    explanation:
      "Codrii din Republica Moldova sunt păduri situate pe interfluvii fragmentate, rezultate din alunecările de teren și eroziunea regresivă care au modelat versanții, creând microclimate favorabile vegetației forestiere.",
  },
  {
    id: 12,
    text: "Care este principala consecință a inversiunii termice în depresiunile din Republica Moldova?",
    options: [
      "A. Creșterea temperaturii cu altitudinea",
      "B. Formarea brumei și înghețului târziu primăvara",
      "C. Apariția fenomenului de foehn",
      "D. Scăderea presiunii atmosferice",
    ],
    correctIndex: 1,
    explanation:
      "Inversiunile termice în depresiunile din Republica Moldova determină acumularea aerului rece la baza versanților, provocând brume și înghețuri târzii primăvara, dăunătoare culturilor pomicole și viticole.",
  },
  {
    id: 13,
    text: "Ce țară deține cea mai mare rezervă de apă dulce din lume?",
    options: ["A. Canada", "B. Brazilia", "C. Rusia", "D. Statele Unite"],
    correctIndex: 1,
    explanation:
      "Brazilia deține cea mai mare rezervă de apă dulce din lume (aprox. 13% din totalul global), datorită rețelei hidrografice amazoniene și precipitațiilor abundente.",
  },
  {
    id: 14,
    text: "Care este mecanismul principal de formare a solurilor cernoziomice?",
    options: [
      "A. Procesul de lateritizare",
      "B. Procesul de podzolire",
      "C. Procesul de humificare și acumulare de humus în stepă",
      "D. Procesul de gleizare",
    ],
    correctIndex: 2,
    explanation:
      "Cernoziomurile se formează prin procesul de humificare și acumulare de humus în condițiile stepei, unde vegetația ierboasă produce materie organică abundentă, iar clima temperată favorizează mineralizarea lentă.",
  },
  {
    id: 15,
    text: "Ce fenomen oceanic „El Niño\" reprezintă?",
    options: [
      "A. Răcirea apelor de suprafață în Pacificul ecuatorial",
      "B. Încălzirea anormală a apelor de suprafață în Pacificul ecuatorial estic",
      "C. Creșterea salinității în Atlanticul de Nord",
      "D. Intensificarea curenților de profunditate",
    ],
    correctIndex: 1,
    explanation:
      "El Niño este fenomenul de încălzire anormală a apelor de suprafață din Pacificul ecuatorial estic, care produce perturbări climatice globale: secete, inundații și modificări ale curenților oceanici.",
  },
  {
    id: 16,
    text: "Care este valoarea aproximativă a bilanței hidrice anuale pe teritoriul Republicii Moldova?",
    options: [
      "A. Surplus de 200-300 mm",
      "B. Echilibru (0 mm)",
      "C. Deficit de 100-200 mm",
      "D. Deficit de 400-500 mm",
    ],
    correctIndex: 2,
    explanation:
      "Bilanța hidrică anuală a Republicii Moldova este deficitară cu 100-200 mm, evaporabilitatea depășind cantitatea de precipitații, ceea ce explică necesitatea irigațiilor în agricultură.",
  },
  {
    id: 17,
    text: "Ce tip de relief litoral se caracterizează prin formațiuni calcaroase sub forma unor pilieri, întâlnite pe coasta Mării Negre?",
    options: [
      "A. Falezele de abraziune",
      "B. Recifele de corali",
      "C. Stâlpii de abrazie (stacks)",
      "D. Tombolourile",
    ],
    correctIndex: 2,
    explanation:
      "Stâlpii de abrazie (stacks) sunt formațiuni calcaroase izolate în mare, rezultate din eroziunea diferențială a falezelor, întâlnite pe coasta Mării Negre în zona Crimeei.",
  },
  {
    id: 18,
    text: "Care este principala cauză a declinului demografic din Republica Moldova?",
    options: [
      "A. Rata natalității sub pragul de înlocuire și emigrația masivă",
      "B. Rata mortalității infantile ridicată",
      "C. Războaie și conflicte armate",
      "D. Epidemii frecvente",
    ],
    correctIndex: 0,
    explanation:
      "Declinul demografic al Republicii Moldova este cauzat de combinația dintre rata natalității sub pragul de înlocuire (1,2 copii/femeie) și emigrația masivă a populației active, țara pierzând peste 25% din populație prin migrație.",
  },
  {
    id: 19,
    text: "Ce lege geografică explică distribuția altitudinală a vegetației pe versanții munților?",
    options: [
      "A. Legea latitudinală a zonalității",
      "B. Legea etajării altitudinale",
      "C. Legea compensației ecologice",
      "D. Legea limitativă a factorilor de mediu",
    ],
    correctIndex: 1,
    explanation:
      "Legea etajării altitudinale explică schimbarea vegetației odată cu altitudinea: de la silvostepă la pădure de foioase, pădure de conifere, pajiști alpine și zona nivală, similar zonalității latitudinale.",
  },
  {
    id: 20,
    text: "Care este impactul principal al fenomenului de secetă asupra agriculturii Republicii Moldova?",
    options: [
      "A. Reducerea recoltei cu 20-50% în anii secetoși",
      "B. Creșterea salinizării solurilor",
      "C. Apariția deșertificării complete",
      "D. Distrugerea infrastructurii de irigații",
    ],
    correctIndex: 0,
    explanation:
      "Secetele reduc recoltele în Republica Moldova cu 20-50% în anii secetoși, fenomenul fiind accentuat de deficitul cronic de umiditate și de dependența agriculturii de precipitații, irigațiile fiind insuficient dezvoltate.",
  },
];

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  switch (difficulty) {
    case "normal":
      return normalQuestions;
    case "competitiv":
      return competitivQuestions;
    case "olimpic":
      return olimpicQuestions;
  }
}
