var tie = 0
var loss = 0
var win = 0


var newGame = function() {
    var userChoice = prompt ("choose R, P, or S");
    console.log(userChoice)
    // EDGE CASE: adjust for casing
    userChoice = userChoice.toUpperCase
    //TODO: EDGE CASE: handle non-standard letters
    if (userChoice === "R" || userChoice === "P"|| userChoice === "S") {
        alert("Please type R, P, or S.")
    }
    //TODO: EDGE CASE: handle empty sumbission
    if (userChoice === "") {
        alert("Please type R, P, or S.")
    }
    var compChoice = confirm("click ok for computer to make selection.");
    console.log(compChoice);
    if (compChoice) {
        var randomNum = (Math.floor(Math.random()*3) +1);
         // return randomNum;
        console.log(randomNum);
    } else {
         console.log("Thanks for playing!");
    }
        //TODO: store possible choices (r,p,s);
        //TODO: store in a variable
    if (randomNum === 1) {
         var rock = randomNum;
        console.log("rock");
    } else if (randomNum === 2) {
         var paper = randomNum;
         console.log("paper");
    } else {
        var scissors = randomNum;
        console.log("scissors");
    }




//TODO: compare choices
if (userChoice === "R" && rock) {
    tie = (tie + 1);
} else if (userChoice === "p" && paper) {
    tie = (tie + 1);
} else if (userChoice === "S" && scissors) {
    tie = (tie + 1);
} else if (userChoice === "R" && paper) {
    loss = (loss + 1);
}else if (userChoice === "P" && scissors) {
    loss = (loss + 1);
}else if (userChoice === "S" && rock) {
    loss = (loss + 1);
} else if (userChoice === "R" && scissors) {
    win = (win + 1);
}else if (userChoice === "P "&& rock) {
    win = (win + 1);
}else {
    win = (win + 1);
}
//TODO: display stats
var score = alert(`Ties: ${tie} 
Losses: ${loss}
 Wins:  ${win}`)

//TODO: ask to play again
var playAgain = confirm ("Play again?")
    // while loop
if (playAgain) {
    newGame()
    }
    return tie;
    return loss; 
    return win; 
}
newGame()
    
    

//TODO: generate computer choice
//TODO: randomly select item from possible choices
