const questions = [
    "är kåtast?",
    "har legat med de snyggaste personerna?",
    "flörtar mest?",
    "har störst snopp?",
    "är snyggast i detta rummet?",
    "blir uppraggad ikväll?",
    "avvisar flest personer?",
    "går oftast efter någon som är yngre än sig själv?",
    "har mest hybris?",
    "10e frågan, SKÅL!",

    "är svårast att få i säng?",
    "har tagit mest droger?",
    "får med sig någon hem ikväll?",
    "kommer ångra mest efter ikväll?",
    "rakade underlivet för att förbereda inför kvällen?",
    "snusar mest?",
    "är mest kinky?",
    "är bäst på att kyssas?",
    "är den största gold diggern?",
    "20e frågan, SKÅL!",

    "är mest sexuellt frustrerad?",
    "får förhållande i år?",
    "har finast rumpa?",
    "friendzonar mest?",
    "är den största alkoholisten?",
    "är mest nöjd med sitt utseende?",
    "har finast leende?",
    "klär sig bäst?",
    "kommer bli känd?",
    "30e frågan, SKÅL!",

    "är mest utseendefixerad?",
    "är oskyldigast?",
    "gör mest ljud i sängen?",
    "är festens höjdpunkt?",
    "har störst plånbok?",
    "har du ett öga på ikväll?",
    "får du vackrast barn med?",
    "är bäst på att strippa?",
    "har bäst musiksmak?",
    "40e frågan, SKÅL!",

    "har haft sex med flest nationaliteter?",
    "har haft trekant?",
    "dricker mest alkohol?",
    "kommer inte komma hem ikväll?",
    "tappar bort nycklarna ikväll?",
    "glömmer alltid att swisha?",
    "behöver dricka vatten just nu?",
    "hittar vi på McDonald's inatt?",
    "blir alltid för full?",
    "50e och sista frågan, VATTENFALL! (Den som läser börjar)",
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