$(document).ready(function() {
    var winCount = 0;
    var lossCount = 0;
    var guessesCount = 6;
    var randomLetter = ''
    var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    $('#newGameButton').on('click', () => {
        console.log("NEW GAME STARTED");
        guessesCount = 6;
        $("#leftNumber").text(guessesCount);
        $("#soFarList").empty();
        randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
        console.log("randomLetter: " + randomLetter);
    });

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log("userGuess: " + userGuess);
        if (guessesCount > 0) {
            if (userGuess === randomLetter) {
                alert("You won!");
                $("#winsNumber").text(winCount + 1);
            }
            else {
                guessesCount = guessesCount - 1;
                $("#leftNumber").text(guessesCount);
                userGuess = userGuess.toUpperCase();
                $("#soFarList").append(userGuess + " ");
                if (guessesCount === 0) {
                    alert("You lose!");
                    $("#lossesNumber").text(lossCount + 1);
                }
            }
        }
    };
});