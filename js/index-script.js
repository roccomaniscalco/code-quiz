var scoreButt = document.querySelector('[name="score-butt"]')
var startButt = document.querySelector('[name="start-butt"]');

startButt.addEventListener("click", function () {
  window.location.href = "./quiz.html";
});

scoreButt.addEventListener("click", function () {
  window.location.href = "./score.html";
});