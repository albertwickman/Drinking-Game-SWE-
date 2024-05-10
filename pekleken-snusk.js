const questions = [
    "Mest benägen att ha haft en one night stand?",
    "Skulle du vilja byta kropp med för en dag på grund av deras sex appeal?",
    "Ansedd som bäst i sängen i detta rum?",
    "Troligast att ha haft sex utomhus?",
    "Tros ha en hemlig samling sexleksaker?",
    "Skulle du vilja se i en sexig outfit?",
    "Tros ha haft flest sexpartners?",
    "Ansedd som den vildaste i sängen?",
    "Mest trolig att ha haft en trekant?",
    "Skulle du vilja ha en erotisk dröm om?",
    "Troligast att ha skickat nakenbilder?",
    "Skulle du välja för en het kyss?",
    "Tros ha haft en \"friends with benefits\"?",
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
    "Har den mest dristiga fantasin?"
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
    document.getElementById('pekButton').innerHTML = 'Nästa fråga';
    document.getElementById('pekQuestion').innerHTML = text;
}