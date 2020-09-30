// initializes DOM variables
var quizSection = document.querySelector('[name="quiz-section"]');
var quizHeader = document.querySelector('[name="quiz-header"]');

// initializes global variables
var questionsAnswered = 0;
var randomIndex;
var questions = ["how", "who", "what", "why"];
var arrOfAnswerChoices = [
  ["me", "him", "her"],
  ["ya", "ye", "yo"],
  ["here", "there", "everywhere"],
  ["because", "cause", "cus"],
];
var correctAnswers = ["me", "ya", "here", "because"];

// loads new question and answers
setRandomIndex();
displayQuestion();
displayAnswers();

// sets randomIndex in the range [0,questions.length]
function setRandomIndex() {
  randomIndex = Math.floor(Math.random() * questions.length);
}

// displays questions[randomIndex]
function displayQuestion() {
  var question = document.createElement("h1");
  question.textContent = questions[randomIndex];
  quizSection.append(question);
}

// displays answers[randomIndex]
function displayAnswers() {
  var answerChoices = arrOfAnswerChoices[randomIndex];

  for (var i = 0; i < answerChoices.length; i++) {
    var answer = document.createElement("button");
    answer.setAttribute("class", "block");
    answer.textContent = answerChoices[i];
    quizSection.append(answer);
  }
}

// displays quiz completion
function displayCompletion() {
  var completionMessage = document.createElement("h1");
  completionMessage.textContent = "All done!";
  quizSection.append(completionMessage);

  var finalScoreMessage = document.createElement("p");
  finalScoreMessage.textContent = "Your score: "; //*********//
  quizSection.append(finalScoreMessage);

  var initialsForm = document.createElement("form");
  var initialsInput = document.createElement("input");
  var initialsLabel = document.createElement("label");
  var initialsSubmit = document.createElement("input");

  initialsForm.setAttribute("action","./score.html")
  initialsLabel.textContent = "Enter initials: "
  initialsSubmit.setAttribute("type", "submit");

  initialsForm.append(initialsLabel, initialsInput, initialsSubmit);
  quizSection.append(initialsForm);
}

// upon clicking an answer button...
quizSection.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    
    // defines feedback caption ("Correct!" or "Wrong!")
    var feedback = document.createElement("caption");
    if (event.target.textContent === correctAnswers[randomIndex])
      feedback.textContent = "Correct!";
    else feedback.textContent = "Wrong!";

    // removes used question, answers, and correct answer and clears quizSection
    questions.splice(randomIndex, 1);
    arrOfAnswerChoices.splice(randomIndex, 1);
    correctAnswers.splice(randomIndex, 1);
    quizSection.innerHTML = "";

    // displays quiz completion or loads new question and answers
    questionsAnswered++;
    if (questionsAnswered === 3) displayCompletion(); //*********//
    else {
      setRandomIndex();
      displayQuestion();
      displayAnswers();
    }

    // displays feedback caption
    quizSection.append(feedback);
    setTimeout(() => {
      quizSection.removeChild(feedback);
    }, 1000);
  }
});