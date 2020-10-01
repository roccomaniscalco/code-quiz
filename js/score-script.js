// initializes DOM variables
var backButt = document.querySelector('[name="back-butt"]');
var clearButt = document.querySelector('[name="clear-butt"]');
var scoreUl = document.querySelector("ul");

// initializes global variables
var scores = [];
var names = [];

// loads saved highscores
if (localStorage.getItem("storedScores") !== null) {
  scores = JSON.parse(localStorage.getItem("storedScores")); // arr
  names = JSON.parse(localStorage.getItem("storedNames")); // arr
}

// adds new score
if (localStorage.getItem("storedTime") !== null) {

  scores.push(parseInt(localStorage.getItem("storedTime")));
  names.push(localStorage.getItem("storedName"));

  localStorage.setItem("storedScores", JSON.stringify(scores)); // arr
  localStorage.setItem("storedNames", JSON.stringify(names)); // arr

  localStorage.removeItem("storedTime");
  localStorage.removeItem("storedName");
}

displayScores();
console.log(scores);
console.log(names);

// displays scores and names
function displayScores() {
  for(var i = 0; i < scores.length; i++) {
    var scoreLi = document.createElement("li");
    scoreLi.textContent = names[i] + " - " + scores[i];
    scoreUl.append(scoreLi);
  }
}

// upon clicking 'Go Back'...
backButt.addEventListener("click", function () {
  location.href = "./index.html";
});

// upon clicking 'Clear Highscores'...
clearButt.addEventListener("click", function () {
  if (scoreUl.innerHTML !== "") scoreUl.innerHTML = "";
  localStorage.clear();
});
