var playAgain = document.querySelector("#playAgain")
var listofScores = document.querySelector('#ListofScores')

var initials = JSON.parse(localStorage.getItem("Name"))
var score = JSON.parse(localStorage.getItem("Score"))

// Function to restart Game

function restartGame() {
    window.open("index.html","_self")
}


//Play Again

playAgain.addEventListener("click", restartGame);

// Show Score

function showScore() {

    for (i = 0; i < score.length; i++) {
        
      
    var li = document.createElement("li")
    listofScores.append(li)
    // initials = JSON.parse(initials)
    // score = JSON.parse(score)
   
    li.textContent = (`${initials[i]} ${score[i]}`)


    }
}

showScore()

