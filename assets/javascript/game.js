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
        $("#soFarList").text("-" + " ");
        $("#winsNumber").text(winCount);
        $("#lossesNumber").text(lossCount);
        randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
        console.log("randomLetter: " + randomLetter);
    });

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log("userGuess: " + userGuess);
        if (letterArray.includes(userGuess)) {
            if (guessesCount > 0) {
                if (userGuess === randomLetter) {
                    alert("You won!");
                    winCount = winCount + 1
                    $("#winsNumber").text(winCount);
                }
                else {
                    guessesCount = guessesCount - 1;
                    $("#leftNumber").text(guessesCount);
                    userGuess = userGuess.toUpperCase();
                    $("#soFarList").append(userGuess + " - ");
                    if (guessesCount === 0) {
                        alert("You lose!");
                        alert("Click NEW GAME to try again!");
                        lossCount = lossCount + 1
                        $("#lossesNumber").text(lossCount);
                    }
                }
            }
        }
        else {
            alert("Guess a letter only!");
        };
    };
});