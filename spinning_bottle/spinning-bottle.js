var spins = 0;

var spots = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function spin () {
    spins++;
    var winner = Math.floor(Math.random() * spots.length);
    var rotation = (spins * 720) + (winner * (360 / spots.length));
    $('#drink-bottle').css('transform', 'rotate('+rotation+'deg)');
    setTimeout(function () {
        $('output').html(people[winner]);
    }, 3000);
}