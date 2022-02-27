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

var questions = ["Test1", "Test2", "Test3", "Test4"];

var ans1 = ["ANS1", "ANS1", "ANS1", "ANS1"];
var ans2 = ["ANS2", "ANS2", "ANS2", "ANS2"];
var ans3 = ["ANS3", "ANS3", "ANS3", "ANS3"];
var ans4 = ["ANS4", "ANS4", "ANS4", "ANS4"];

var answers = [ans1, ans2, ans3, ans4];

var correctAnswers = ["#Ans3Placement","#Ans1Placement","#Ans2Placement","#Ans4Placement"]



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
        window.open("/scoreSubmission.html","_self")

        
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




