const questions = [
    "druckit bärs",
    "legat",
    "kört trekant",
    "knarkat"
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