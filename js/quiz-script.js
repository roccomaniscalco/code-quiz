var quizSection = document.querySelector('[name="quiz-section"]');
var quizHeader = document.querySelector('[name="quiz-header"]');

var randomIndex = 0;
var questions = ["how", "who", "what"];
var answerChoices = [
  ["me", "him", "her"],
  ["ya", "ye", "yo"],
  ["here", "there", "everywhere"],
];
var correctAnswers = ["me", "ya", "here"];

setRandomIndex();
displayAnswers();
displayQuestion();

function setRandomIndex() {
  randomIndex = Math.floor(Math.random() * questions.length);
}

function displayQuestion() {
  var question = document.createElement("h1");

  question.setAttribute("class", "heading");
  question.textContent = questions[randomIndex];
  quizSection.prepend(question);
}

function displayAnswers() {
  var answers = answerChoices[randomIndex];
  console.log(answerChoices[randomIndex]);

  for (var i = 0; i < answers.length; i++) {
    var answer = document.createElement("button");
    answer.setAttribute("class", "block");
    answer.textContent = answers[i];
    quizSection.prepend(answer);
  }
}

quizSection.addEventListener("click", function (event) {
  var feedback = document.createElement("caption");

  if (event.target.matches("button")) {
    if (event.target.textContent === correctAnswers[randomIndex])
      feedback.textContent = "Correct!";
    else feedback.textContent = "Wrong!";
  }

  questions.splice(randomIndex,1)
  answerChoices.splice(randomIndex,1)
  correctAnswers.splice(randomIndex,1)

  quizSection.innerHTML = "";

  setRandomIndex();
  displayAnswers();
  displayQuestion();

  quizSection.append(feedback);
  setTimeout(() => {
    quizSection.removeChild(feedback);
  }, 1000);
});
