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
    "Blivit kär vid första ögonkastet."
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