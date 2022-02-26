var startbtn = document.querySelector("#startGame");
var questionPlacement = document.querySelector("#questionPlacement");
var ans1Placement = document.querySelector("#Ans1Placement");
var ans2Placement = document.querySelector("#Ans2Placement");
var ans3Placement = document.querySelector("#Ans3Placement");
var ans4Placement = document.querySelector("#Ans4Placement");

var questions = ["Test1", "Test2", "Test3", "Test4"];

var ans1 = ["ANS1", "ANS1", "ANS1", "ANS1"];
var ans2 = ["ANS2", "ANS2", "ANS2", "ANS2"];
var ans3 = ["ANS3", "ANS3", "ANS3", "ANS3"];
var ans4 = ["ANS4", "ANS4", "ANS4", "ANS4"];

var answers = [ans1, ans2, ans3, ans4];

var i = 0;

startbtn.addEventListener("click", increaseI);

function increaseI() {

    startbtn.textContent = "Next";



  if (i >= questions.length) {
    console.log("test");

    startbtn.textContent = "Play Again?"

    i = 0;
  } else {
    questionPlacement.textContent = questions[i];

    var ans = answers[i];

    ans1Placement.textContent = ans[0];
    ans2Placement.textContent = ans[1];
    ans3Placement.textContent = ans[2];
    ans4Placement.textContent = ans[3];

    i++;
  }
}
