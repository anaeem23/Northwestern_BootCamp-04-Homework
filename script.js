// Get all variable from HTML file

var startbtn = document.querySelector("#startGame");
var questionPlacement = document.querySelector("#questionPlacement");
var ans1Placement = document.querySelector("#Ans1Placement");
var ans2Placement = document.querySelector("#Ans2Placement");
var ans3Placement = document.querySelector("#Ans3Placement");
var ans4Placement = document.querySelector("#Ans4Placement");
var ansChoice = document.querySelector("#ansChoice");
var rightWrong = document.querySelector("#rightWrong");
var playAgain = document.querySelector("#playAgain");
var timer = document.querySelector('#timer')
// localStorage.setItem('Score', "test")
// localStorage.setItem('Name', "test")

// Create the Questions and Answers

var questions = ["The condition in an if/else statement is enclosed within ____.", "Commonly used data types DO NOT INCLUDE:", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within _____ when being assigned to variables"];

var ans1 = ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"];
var ans2 = ["Strings", "Booleans", "Alerts", "Numbers"];
var ans3 = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];
var ans4 = ["Commas", "Quotes", "Curly Brackets", "Paranthesis"];

var answers = [ans1, ans2, ans3, ans4];

var correctAnswers = ["#Ans3Placement","#Ans3Placement","#Ans4Placement","#Ans2Placement"]



// Timer


var count = 75;

function countdown() {

    count = count-1;
    if (count <=0) {
        clearInterval(counter)
    }

    timer.textContent = (`Timer: ${count}`)
}


// Function to control questions

var i = 0; 

function changeQuestion() {

    startbtn.style.display = "none"

    if ( i < questions.length) {

        questionPlacement.textContent = questions[i];

        var ans = answers[i];
    
        ans1Placement.textContent = ans[0];
        ans2Placement.textContent = ans[1];
        ans3Placement.textContent = ans[2];
        ans4Placement.textContent = ans[3];
    
        i++;

    }else {
        localStorage.setItem("initialScore", JSON.stringify(count))
        window.open("scoreSubmission.html","_self")

        
    }
}

// Function to show if answer was right

function right() {
    rightWrong.textContent = "Correct!"
}

// function to show if answer was wrong 

function wrong () {
    rightWrong.textContent = "Wrong!"
    count = count-10;
}


// Continute game with Ans Choices

ansChoice.addEventListener("click", function(event) {

    if (i>0) {
        changeQuestion()    
        if (event.target.matches(correctAnswers[i-2])) {
            right()
        }else {
            wrong()
        }
    }
   
})



//Start the game

startbtn.addEventListener("click", startGame);

function startGame() {
    var counter = setInterval(countdown,1000)
    changeQuestion();

}




