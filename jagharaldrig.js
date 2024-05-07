const questions = [
    "druckit en öl.",
    "haft sex påverkad",
    "hamnat i fyllecell.",
    "blivit tagen av polisen.",
    "varit otrogen mot någon.",
    "hamnat i slagsmål.",
    "haft en trekant.",
    "spytt på fyllan.",
    "haft en crush på en kompis syskon.",
    "onanerat hemma hos en kompis.",
    "ätit surströmming.",
    "haft sex på stranden.",
    "kysst fler än två personer på en kväll.",
    "kissat i duschen.",
    "tagit olagliga droger.",
    "varit olyckligt kär.",
    "flyttat hemifrån.",
    "badat naken i havet.",
    "sagt “jag älskar dig” till någon som inte är mina föräldrar.",
    "gjort sönder en säng.",
    "kysst någon som är i ett förhållande.",
    "kollat på mig själv i spegeln när jag har haft sex.",
    "stulit något.",
    "orsakat en trafikolycka.",
    "försökt slicka på min egna armbåge.",
    "haft sex med en kändis.",
    "orsakat en trafikolycka.",
    "flirtat med en lärare.",
    "tänk på någon annan under sex, än den jag haft sex med.",
    "träffat en lärare på en utekväll.",
    "haft sex i mina föräldrars säng.",
    "haft en trekant.",
    "skämts för min partner.",
    "stulit från en vän.",
    "blivit anhållen eller arresterad.",
    "knarkat.",
    "ätit en snigel.",
    "gjort slut med min partner på sms.",
    "haft känslor för någon annan när jag varit i ett förhållande",
    "kört bil full",
    "legat två olika under 24h",
    "legat två olika under 12h",
    "haft en crush på en lärare.",
    "fejkat en orgasm.",
    "ljugit om hur många personer jag haft sex med.",
    "använt en sexleksak (själv eller med någon annan).",
    "haft sex med någon i detta rummet.",
    "haft en könssjukdom.",
    "skickat nakenbilder på mig själv till någon.",
    "dejtat någon som varit tio år äldre än mig.",
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