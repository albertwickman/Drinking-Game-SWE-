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
let i = 0;
let str = i + "/" + questions.length;
var randomNumber = Math.floor(Math.random() * 5) + 1;

function questionGenerator() {
    let text = questions[i];

    console.log(i++);
    str = i + "/" + questions.length;

    document.getElementById('pekButton').innerHTML = 'Nästa fråga';
    document.getElementById('pekQuestion').innerHTML = text;
    document.getElementById('questionCount').innerHTML = str;
    document.getElementById('sipsCount').innerHTML = 'Antal klunkar: ' + randomNumber;

    if (i === 50) {
        document.getElementById('pekButton').innerHTML = 'Börja om';
        document.getElementById('sipsCount').innerHTML = null;
    }

    if (i === questions.length) {
        i = 0;
    }
}