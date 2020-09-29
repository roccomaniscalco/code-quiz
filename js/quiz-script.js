var quizSection = document.querySelector('[name="quiz-section"]');
var quizHeader = document.querySelector('[name="quiz-header"]');

var questions = ["how", "who", "what"];
var answerChoices = [
  ["me", "him", "her"],
  ["ya", "ye", "yo"],
  ["here", "there", "everywhere"],
];
var correct

displayQuestion();

function displayQuestion() {
  var question = document.createElement("h1");
  var questionIndex = Math.floor(Math.random() * questions.length);

  question.setAttribute("class", "heading");
  question.textContent = questions[questionIndex];
  quizSection.append(question);
  displayAnswers(questionIndex);
}

function displayAnswers(answersIndex) {
  var answers = answerChoices[answersIndex];
  console.log(answerChoices[answersIndex]);

  for (var i = 0; i < answers.length; i++) {
    var answer = document.createElement("button");
    answer.setAttribute("class", "block")
    answer.textContent = answers[i];
    quizSection.append(answer);
 }
}

quizSection.addEventListener("click", function () {});
