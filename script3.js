var submitBtn = document.querySelector("#submit");
var stateScore = document.querySelector("#stateScore");

var Name = JSON.parse(localStorage.getItem("Name"));
var score = JSON.parse(localStorage.getItem("Score"));

stateScore.textContent = `Your Score is: ${localStorage.getItem(
  "initialScore"
)}`;

// console.log((localStorage.getItem('initialScore')))

submitBtn.addEventListener("click", getVal);

function getVal(event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
  if (Name == null) {
    Name = [initials.toString()];
    score = [(localStorage.getItem("initialScore"))];
  } else {
    Name.push(initials);
    score.push(JSON.parse(localStorage.getItem("initialScore")));
  }

  localStorage.setItem("Name", JSON.stringify(Name));
  localStorage.setItem("Score", JSON.stringify(score));
  window.open("scorePage.html", "_self");
}

console.log(Name);
