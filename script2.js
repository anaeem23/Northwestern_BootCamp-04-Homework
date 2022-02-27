var playAgain = document.querySelector("#playAgain")



// Function to restart Game

function restartGame() {
    window.open("index.html","_self")
}


//Play Again

playAgain.addEventListener("click", restartGame);