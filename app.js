const questions = [
    "druckit en öl.",
    "haft sex.",
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
    "tappat bort mina nycklar.",
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
    "Haft sex med en kändis.",
    "orsakat en trafikolycka.",
    "flirtat med en lärare.",
    "tänk på någon annan under sex, än den jag haft sex med.",
    "träffat en lärare på en utekväll.",
    "haft sex i mina föräldrars säng.",
    "haft en trekant.",
    "skämts för min partner.",
    "stulit från en vän.",
    "blivit anhållen eller arresterad.",
    "knarkat",
    "ätit en snigel",
];
let i = 0;
let str = i + "/" + questions.length;

function questionGenerator() {
    let text = questions[i];

    console.log(i++);
    str = i + "/" + questions.length;

    document.getElementById('game_question').innerHTML = text;
    document.getElementById('question_count').innerHTML = str;

    if (i === questions.length) {
        i = 0;
    }
}