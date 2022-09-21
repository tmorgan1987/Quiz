var questions = [
  {
    id: 1,
    question: "Sample text in here",
    answers: ["sample", "ample", "anotherprop", "word"],
    correct: answers[1],
  },
];

var timerEl = document.querySelector("#timer");
var scoresEl = document.querySelector("#scoreshtml");
var startEl = document.querySelector("#start");
var startEl = document.querySelector("#questions-container");
var formEl = document.querySelector("#givetheformanid");
var questionIndex = 0;

function startQuiz() {
  console.log("startquizfunction");
	displayQuestion();
}

function nextQuestion() {
  console.log("next question");
  var currentQuestion = questions[questionIndex];
  if (currentQuestion.correct === formEl.children.value) {
    console.log("correct answer");
  }

  if (currentQuestion.correct !== formEl.children.value) {
    console.log("incorrect answer");
  }
}

function displayQuestion(curr = {}) {
  console.log("display question");
  for (var i = 0; i < curr.choices.length; i++) {
    var label = document.createElement("label");
    var input = document.createElement("input");
    label.textContent = current.choices[i];
		input.setAttribute("value", current.choices[i]);
  }
}

// look up control flow, document.createElement