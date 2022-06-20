var players = [
];


function createPlayer() {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    const val = document.getElementById('inputName').value;
    players.push(val);
    for (var i in players) {
        console.log(players[i]);

    }
}

// use in game itself
function getRandomPlayer() {
    let randomNumber = Math.floor(Math.random() * players.length);
    console.log(players[randomNumber]);
}