// initializes DOM variables
var scoreButt = document.querySelector('[name="score-butt"]');
var quizSection = document.querySelector('[name="quiz-section"]');
var timeSpan = document.querySelector('[name="time-span"]');

// initializes global variables
var time = 75;
var questionsAnswered = 0;
var randomIndex;
var questions = [
  "DOM stands for ___",
  "Javascript is referenced by ___ tag",
  "A DOM element can be targeted with ___",
  "___ is a method of taking in user input and displaying it",
  "Elements can be added to a parent using ___",
];
var arrOfAnswerChoices = [
  [
    "Document Option Base",
    "Domestic Object Model",
    "Document Object Model",
    "Domino Obsessive Mode",
  ],
  ["<js>", "<script>", "<javascript>", "<java>"],
  [
    "document.getDOM",
    "document.getElementByIdentification",
    "document.querySelector",
    "document.getItem",
  ],
  ["DOM Manipulation", "DOM Display", "DOM Input Output", "DOM COM"],
  [".extend()", ".add()", ".modify()", ".append()"],
];
var correctAnswers = [
  "Document Object Model",
  "<script>",
  "document.querySelector",
  "DOM Manipulation",
  ".append()"
];

// sets timeSpan and decrements time by the second
var interval = setInterval(function () {
  time--;
  timeSpan.textContent = "Time: " + time;

  if (time == 0) {
    clearQuizSection();
    displayCompletion();
  }
}, 1000);

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
    var answerChoice = document.createElement("button");
    answerChoice.setAttribute("class", "block");
    answerChoice.textContent = answerChoices[i];
    quizSection.append(answerChoice);
  }
}

// displays quiz completion and clears interval
function displayCompletion() {
  clearInterval(interval);

  var completionMessage = document.createElement("h1");
  completionMessage.textContent = "All done!";
  quizSection.append(completionMessage);

  var finalScoreMessage = document.createElement("p");
  finalScoreMessage.textContent = "Your score: " + time;
  quizSection.append(finalScoreMessage);

  var nameForm = document.createElement("form");
  var nameInput = document.createElement("input");
  var nameSubmit = document.createElement("input");

  nameForm.setAttribute("action", "./score.html");
  nameInput.setAttribute("placeholder", "name");
  nameSubmit.setAttribute("type", "submit");

  nameForm.append(nameInput, nameSubmit);
  quizSection.append(nameForm);

  nameForm.onsubmit = function () {
    localStorage.setItem("storedName", nameInput.value);
    localStorage.setItem("storedTime", time);
  };
}

// removes used question, answers, and correct answer and clears quizSection
function clearQuizSection() {
  questions.splice(randomIndex, 1);
  arrOfAnswerChoices.splice(randomIndex, 1);
  correctAnswers.splice(randomIndex, 1);
  quizSection.innerHTML = "";
}

// upon clicking an answerChoice...
quizSection.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    // defines feedback caption and penalizes time
    var feedback = document.createElement("caption");
    if (event.target.textContent === correctAnswers[randomIndex])
      feedback.textContent = "Correct!";
    else {
      feedback.textContent = "Wrong!";
      time -= 10;
      if (time <= 0) time = 0;
      timeSpan.textContent = "Time: " + time;
      if (time == 0) displayCompletion();
    }

    clearQuizSection();

    // displays quiz completion or loads new question and answers
    questionsAnswered++;
    if (questionsAnswered === 5) {
      displayCompletion();
    } else {
      setRandomIndex();
      displayQuestion();
      displayAnswers();
    }

    // displays feedback caption
    quizSection.append(feedback);
    setTimeout(() => {
      if (quizSection.contains(feedback)) quizSection.removeChild(feedback);
    }, 2000);
  }
});

// upon clicking View 'Highscores'...
scoreButt.addEventListener("click", function () {
  location.href = "./score.html";
});
