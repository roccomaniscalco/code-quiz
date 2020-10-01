// initializes DOM variables
var scoreButt = document.querySelector('[name="score-butt"]')
var startButt = document.querySelector('[name="start-butt"]');

// upon clicking 'Start'...
startButt.addEventListener("click", function () {
  location.href = "./quiz.html";
});

// upon clicking View 'Highscores'...
scoreButt.addEventListener("click", function () {
  location.href = "./score.html";
});