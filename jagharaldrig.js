const questions = [
    "Haft telefonsex.",
    "Haft ett one-night-stand.",
    "Haft sex på en offentlig plats.",
    "Haft en trekant.",
    "Använt en sexleksak med en partner.",
    "Haft analsex.",
    "Haft sex i en bil.",
    "Haft en KK.",
    "Blivit påkommen medan jag hade sex.",
    "Haft sex på stranden.",
    "Haft sex i en hiss.",
    "Skickat nakenbilder.",
    "Haft sex i duschen.",
    "Sextat.",
    "Deltagit i BDSM.",
    "Haft sex i ett omklädningsrum.",
    "Haft en våt dröm om någon i det här rummet.",
    "Haft sex med någon mer än 10 år äldre än mig.",
    "Haft sex på en fest.",
    "Använt en blindfold under sex.",
    "Haft sex på en balkong.",
    "Kysst någon av samma kön.",
    "Haft en crush på någon jag inte borde.",
    "Haft sex på en campingplats.",
    "Använt en datingapp.",
    "Haft sex under påverkan av alkohol eller droger.",
    "Flirtat med någons partner.",
    "Haft sex på ett hotell.",
    "Haft sex på en arbetsplats.",
    "Blivit kär vid första ögonkastet.",
    "Haft en hemlig relation.",
    "Haft sex med någon jag träffade samma dag.",
    "Varit otrogen.",
    "Haft en sexuell fantasi om någon här.",
    "Haft sex på ett köksbord.",
    "Kysst någon jag inte känner.",
    "Haft sex utanför mitt hemland.",
    "Haft sex med någon vars namn jag inte kommer ihåg.",
    "Spelat strippoker.",
    "Haft en sugardaddy eller sugarmommy.",
    "Haft sex på en båt.",
    "Haft sex i en park.",
    "Rollspelat under sex.",
    "Haft sex med någon jag mötte online.",
    "Haft sex i samma rum som någon annan.",
    "Haft sex på en biograf.",
    "Kysst någon på första dejten.",
    "Haft sex på en festival.",
    "Varit naken utomhus.",
    "Fått en lap dance.",
    "Gett en lap dance.",
    "Haft en sexuell relation med en kollega.",
    "Haft en affär med en gift person.",
    "Använt något matrelaterat under sex.",
    "Haft en crush på en lärare.",
    "Haft sex i ett tält.",
    "Blivit upphetsad på en ovanlig plats.",
    "Haft sex på en byggarbetsplats.",
    "Deltagit i en orgy.",
    "Haft sex i en pool.",
    "Lekt doktor som vuxen.",
    "Haft en hemlig beundrare.",
    "Fått en erotisk massage.",
    "Gett en erotisk massage.",
    "Haft sex i en stuga.",
    "Haft en vän som blev mer än en vän.",
    "Kysst mer än en person under samma kväll.",
    "Haft sex på en toalett på en nattklubb.",
    "Haft sex i en säng inte är min egen.",
    "Haft sex på en golfbana.",
    "Haft sex på en fotbollsplan.",
    "Haft en romantisk relation som började online.",
    "Blivit tillsagd att jag är bra i sängen.",
    "Varit kär i två personer samtidigt.",
    "Haft en dröm där jag var naken.",
    "Varit på en nudiststrand.",
    "Haft sex med någon jag inte kände tillräckligt bra.",
    "Varit på en speed dating-händelse.",
    "Haft sex utan kondom.",
    "Haft sex med någon från ett annat land.",
    "Haft en långdistansrelation.",
    "Blivit avvisad efter en dejt.",
    "Haft en återförening med ett ex bara för sex.",
    "Varit på en swingersklubb.",
    "Delat intima detaljer om mitt sexliv med vänner.",
    "Haft sex på en takterrass.",
    "Spelat sanning eller konsekvens.",
    "Köpt underkläder till någon annan.",
    "Fått sexiga underkläder.",
    "Gjort slut med någon över SMS.",
    "Blivit kär vid första ögonkastet.",
    "Missat ett flyg",
    "Varit på en blinddejt",
    "Ljugit om min ålder",
    "Simmat naken",
    "Kört bil utan körkort",
    "Varit på festival",
    "Fuskat på ett prov",
    "Tältat",
    "Sett en hel Harry Potter-film",
    "Blivit utkastad från en bar eller klubb",
    "Bott utomlands",
    "Hoppat bungyjump",
    "Varit med i en TV-show",
    "Kysst någon på första dejten",
    "Skämtat så att någon annan fick skulden",
    "Gått vilse i en främmande stad",
    "Varit på en kryssning",
    "Rökt en cigarett",
    "Gjort en piercing på en ovanlig plats",
    "Skolkat från skolan",
    "Gråtit offentligt",
    "Sovit över 24 timmar i sträck",
    "Varit på opera",
    "Druckit så mycket att jag inte minns kvällen",
    "Varit på en road trip",
    "Bluffat i poker",
    "Haft ett one night stand",
    "Åkt skidor",
    "Varit vegan",
    "Lärt mig ett främmande språk",
    "Förlorat en vän över ett spel",
    "Brutit något ben",
    "Sovit på stranden",
    "Sett en spökhistoria",
    "Åkt häst",
    "Vunnit något i ett lotteri",
    "Glömt mina föräldrars födelsedag",
    "Deltagit i en matätartävling",
    "Pratat med mig själv offentligt",
    "Gått på bio ensam",
    "Varit på en diet",
    "Köpt något och ångrat mig direkt",
    "Kört en sportbil",
    "Skrattat så mycket att jag gråtit",
    "Sovit i ett tält",
    "Hoppat fallskärm",
    "Varit på en improviserad resa",
    "Gjort frivilligarbete",
    "Campat i vildmarken",
    "Provat att surfa",
    "Sett en hel säsong av en serie på en dag",
    "Förlorat en sko på en fest",
    "Ätit insekter",
    "Varit på en yacht",
    "Sett \"Star Wars\"",
    "Varit i Asien",
    "Provat att stå på händer",
    "Sovit i en bil",
    "Varit i en limousin",
    "Haft en blindträff",
    "Åkt på en spontanresa",
    "Gjort en snöängel",
    "Byggt en snögubbe",
    "Haft ett gymkort",
    "Varit på en musikfestival",
    "Tappat bort mitt pass",
    "Skolkat från jobbet",
    "Gjort yoga",
    "Ridit på en kamel",
    "Varit vaken i 24 timmar i sträck",
    "Varit på en sportmatch",
    "Haft en husdjursorm",
    "Spelat i en sportliga",
    "Haft ett körkort",
    "Sjungit karaoke i offentlig",
    "Dansat i regnet",
    "Varit på en blind date",
    "Klättrat i ett berg",
    "Sett en haj",
    "Hoppat från en klippa i vattnet",
    "Varit på en motorcykel",
    "Provat att åka vattenskidor",
    "Spelat paintball",
    "Sett norrskenet",
    "Donerat blod",
    "Varit på en diet",
    "Deltagit i en protest",
    "Haft ett par skor värda över 1000 kronor",
    "Förlorat en vän över en argument",
    "Haft en oväntad övernattning",
    "Varit i Sydamerika",
    "Sett en alligator eller krokodil i det vilda",
    "Varit på ett bröllop",
    "Blivit biten av ett djur",
    "Kört en bil över 200 km/h",
    "Provat dykning",
    "Vunnit ett pris",
    "Blivit påkommen medan jag kysste någon offentligt",
    "Skickat en nakenbild till fel person",
    "Flirtat med någon för att få en fördel",
    "Haft en hemlig relation",
    "Gjort något romantiskt under en stjärnklar himmel",
    "Haft en crush på en lärare eller chef",
    "Ljugit om min civilstatus",
    "Gjort något för att göra mitt ex svartsjukt",
    "Haft en dejt som slutade med ett pinsamt ögonblick",
    "Blivit kär vid första ögonkastet",
    "Blivit dumpad på ett oväntat sätt",
    "Gjort något galet för kärlek",
    "Haft en förälskelse på någon jag inte borde",
    "Kysst någon under misteln",
    "Flirtat med någon via sociala medier",
    "Haft en romantisk natt som inte gick som planerat",
    "Haft en dejt som var så dålig att jag smet från den",
    "Skrivit kärleksbrev",
    "Blivit kär i min bästa väns partner",
    "Haft en sommarromans",
    "Spelat 'sanning eller konsekvens' för att komma närmare någon jag gillar",
    "Haft en första kyss som var katastrofal",
    "Dejtat någon bara för att göra någon annan svartsjuk",
    "Haft en crush på någon jag träffat på en fest",
    "Haft känslor för någon jag träffade online",
    "Varit på en dubbeldejt",
    "Haft en dejt på Alla hjärtans dag",
    "Blivit kär i någon jag bara sett på bild",
    "Blivit överraskad av en partner på mitt jobb",
    "Haft en dejt som involverade sport",
    "Skämtat om att vara gift med någon jag just träffat",
    "Spelat flaska sanning för att närma mig någon speciell",
    "Varit på en blinddejt",
    "Haft en vän med förmåner",
    "Avslutat en dejt tidigt av pinsamma skäl",
    "Pratat i telefon i timmar med någon jag gillar",
    "Gråtit över ett kärleksbrott",
    "Dejtat någon äldre än mig",
    "Haft en dejt på en konstig plats",
    "Blivit förförd med en kliché",
    "Varit med om kärlek vid andra ögonkastet",
    "Haft en dejt som involverade en resa",
    "Gjort något vågat för att imponera på någon jag tycker om",
    "Varit på en romantisk weekendresa",
    "Delat en pinsam hemlighet med någon jag dejtat",
    "Haft en romantisk middag som misslyckades",
    "Haft en dejt som jag sedan glömt bort",
    "Haft en oväntad kärlekshistoria",
    "Blivit överraskad med en romantisk gest",
    "Varit med på en fest där jag gjorde något jag ångrar för kärlekens skull",
    "Varit på en kontinent utanför Europa",
    "Ätit sushi",
    "Varit vaken en hel natt",
    "Sett en hel tv-serie på en dag",
    "Varit på en musikfestival",
    "Gjort en roadtrip med vänner",
    "Simmat i en sjö",
    "Campat i vildmarken",
    "Provat snowboard",
    "Spelat i ett band",
    "Varit med om en bilolycka",
    "Åkt på en spontan semester",
    "Varit på ett bröllop",
    "Lärt mig ett tredje språk",
    "Provat yoga",
    "Gått på bio ensam",
    "Förlorat en vän",
    "Haft ett husdjur",
    "Gått på en blind date",
    "Vunnit en tävling",
    "Åkt skridskor",
    "Skrivit en dagbok",
    "Hållit ett tal inför en stor publik",
    "Varit i Norden utom Sverige",
    "Missat ett flyg",
    "Sett norrskenet",
    "Donerat blod",
    "Deltagit i en protest",
    "Blivit biten av ett djur",
    "Varit med i en teateruppsättning",
    "Spelat på ett kasino",
    "Gått på en konstutställning",
    "Köpt något dyrt impulsivt",
    "Missat ett viktigt möte",
    "Varit på TV",
    "Gått vilse på en vandring",
    "Glömt en viktigs persons födelsedag",
    "Skolkat från skolan eller jobbet",
    "Varit i en juridisk tvist",
    "Byggt något av trä",
    "Kört bil över 200 km/h",
    "Deltagit i en matlagningskurs",
    "Sett en kändis på riktigt",
    "Fått ett autograf",
    "Vunnit på lotto",
    "Gjort något som gick viralt på internet",
    "Sovit ute under stjärnorna",
    "Deltagit i en bokklubb",
    "Gjort frivilligarbete",
    "Räddat någons liv"
];
    
    
let shuffledQuestions = shuffleArray([...questions]);
let index = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function questionGenerator() {
    if (index >= shuffledQuestions.length) {
        shuffledQuestions = shuffleArray([...questions]);
        index = 0;
    }

    let text = shuffledQuestions[index++];

    console.log(index - 1);
    document.getElementById('aldrig').innerHTML = 'Nästa fråga';
    document.getElementById('game_question').innerHTML = text;
}