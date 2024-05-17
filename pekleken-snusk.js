const questions = [
    "Är mest benägen att ha haft en one night stand?",
    "Skulle du vilja byta kropp med för en dag på grund av deras sex appeal?",
    "Är ansedd som bäst i sängen i detta rum?",
    "Har troligast haft sex utomhus?",
    "Tros ha en hemlig samling sexleksaker?",
    "Skulle du vilja se i en sexig outfit?",
    "Tros ha haft flest sexpartners?",
    "Ansedd som den vildaste i sängen?",
    "Mest trolig att ha haft en trekant?",
    "Skulle du vilja ha en erotisk dröm om?",
    "Troligast att ha skickat nakenbilder?",
    "Skulle du välja för en het kyss?",
    "Tros ha haft en 'KK'?",
    "Har den sexigaste rösten?",
    "Ansedd som mest flirtig på fester?",
    "Skulle troligen ha den mest intressanta erotiska dagboken?",
    "Skulle kunna vara undercover som strippa?",
    "Skulle kunna göra en karriär som erotisk romanförfattare?",
    "Mest trolig att ha hemliga beundrare?",
    "Har den mest oemotståndliga charm?",
    "Misstänkt för att ha en fetisch ingen vet om?",
    "Mest benägen att bli kär vid första ögonkastet?",
    "Skulle kunna hålla på en sexig hemlighet?",
    "Troligast att prova erotiska spel?",
    "Skulle kunna vara en mästare på förförelse?",
    "Skulle kunna ha en hemlig kärleksaffär?",
    "Har mest sannolikt haft ett förhållande med en kändis?",
    "Mest benägen att kyssa och berätta?",
    "Skulle kunna skriva en sexkrönika?",
    "Har sannolikt de mest spännande sexhistorierna?",
    "Troligast att smyga på första dejten?",
    "Skulle kunna vara den perfekta dominatrix?",
    "Har den mest förföriska dansen?",
    "Skulle vara mest benägen att gå på blinddate?",
    "Skulle vara bäst på att hålla sitt kärleksliv hemligt?",
    "Troligast att bli upptäckt med att vara otrogen?",
    "Har mest sannolikt en hemlig kärleksrelation?",
    "Skulle vara en naturlig på en erotisk filmset?",
    "Skulle kunna leda en sexuell hälsoworkshop?",
    "Har den mest provocerande klädstilen?",
    "Skulle kunna skapa den hetaste datingprofilen?",
    "Tros njuta mest av erotisk litteratur?",
    "Skulle kunna vara framgångsrik som telefonsexoperatör?",
    "Troligast att vara öppen för en öppen relation?",
    "Skulle kunna vara mest innovativ i sovrummet?",
    "Har mest sannolikt en hemlig porr-samling?",
    "Tros vara den största romantikern?",
    "Skulle kunna hålla den längsta förspelsessionen?",
    "Skulle vara mest benägen att testa exotiska sexställningar?",
    "Har den mest dristiga fantasin?",
    "Skulle mest troligt skicka ett pinsamt sms till fel person?",
    "Är mest trolig att bli kär i sin bästa väns partner?",
    "Skulle kunna kyssa en främling på en fest?",
    "Skulle sannolikt prova på speed dating?",
    "Är mest trolig att ha en hemlig admiratör?",
    "Skulle mest troligt gå på en blinddejt arrangerad av en vän?",
    "Skulle flirta med en polis för att komma undan en biljett?",
    "Är mest trolig att bli 'ghostad' efter en dejt?",
    "Skulle säga 'jag älskar dig' först?",
    "Skulle mest troligt spela 'truth or dare' på en första dejt?",
    "Skulle mest troligt ha en krånglig kärlekstriangel?",
    "Är mest trolig att glömma namnet på personen de dejtar?",
    "Skulle ha en hemlig crush på en kollega?",
    "Skulle gå på flest Tinderdejter på en vecka?",
    "Skulle bli upprörd om de fick reda på att deras ex dejtar någon ny?",
    "Skulle mest troligt ha en online-romans?",
    "Är mest trolig att bli kär på semestern?",
    "Skulle kunna delta i ett reality-TV-program om dejting?",
    "Skulle ha mest troligt en dejt som slutar med en natt i arresten?",
    "Är mest trolig att skaffa en matchande tatuering med en partner?",
    "Skulle mest troligt prova på partnerbyte på en fest?",
    "Är mest trolig att prova på online dejting?",
    "Skulle kunna bli förälskad i någons röst utan att ha sett personen?",
    "Skulle mest troligt hålla handen på första dejten?",
    "Skulle mest troligt ta med en vän på en dejt som backup?"
];
```


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
    document.getElementById('pekButton').innerHTML = 'Nästa fråga';
    document.getElementById('pekQuestion').innerHTML = text;
}