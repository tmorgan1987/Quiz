// Called elements
var timeEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var descriptionEl = document.getElementById("description");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var quiz = document.getElementById("quiz");
var questionDisplay = document.getElementById("questionDisplay");
var results = document.getElementById("results");
var userForm = document.getElementById("user-form");
var submitBtn = document.querySelector("#submit");
var scores = document.getElementById("scores");

// Question Array
var questions = [
	{
			question: "Commonly used data types DO NOT include?",
			choiceA: "strings",
			choiceB: "booleans",
			choiceC: "alerts",
			choiceD: "numbers",
			correct: "C"
	},{
			question: "The condition in an if/else statement is enclosed with?",
			choiceA: "quotes",
			choiceB: "curly brackets",
			choiceC: "parenthesis",
			choiceD: "square brackets",
			correct: "C"
	},{
			question: "Arrays in JavaScript can be used to store ???.",
			choiceA: "numbers and strings",
			choiceB: "other arrays",
			choiceC: "booleans",
			choiceD: "all of the above",
			correct: "D"
	},{
			question: "String values must be enclosed within ??? when being assigned to variables.",
			choiceA: "commas",
			choiceB: "curly brackets",
			choiceC: "quotes",
			choiceD: "parenthesis",
			correct: "C"
	},{
			question: "A very useful tool used during development and debugging for printing content to the debugger is?",
			choiceA: "JavaScript",
			choiceB: "terminal/bash",
			choiceC: "for loops",
			choiceD: "console.log",
			correct: "D"
	}];


// timer function
var secondsLeft = 75;
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " +secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
			userInitials();
    }
		if(noMasQuestiones === 0) {
			clearInterval(timerInterval);
			userInitials();}
  }, 1000);
}

// button
startEl.addEventListener("click", startQuiz);

	function startQuiz() {
	descriptionEl.style.display="none";
	timeEl.style.display="block";
	quiz.style.display="block";

	setTime();
	displayQ();
}


var lastQuestion = questions.length-1;
var currentQuestion = 0;


// this function displays my questions and answers
function displayQ () {
questionDisplay.textContent = questions[currentQuestion].question;
choiceA.textContent = questions[currentQuestion].choiceA;
choiceB.textContent = questions[currentQuestion].choiceB;
choiceC.textContent = questions[currentQuestion].choiceC;
choiceD.textContent = questions[currentQuestion].choiceD;
}

var noMasQuestiones = 1;

// this function checks for correct answer
function correctAnswer (answer) {
	console.log(answer)
	if (answer === questions[currentQuestion].correct){
		results.textContent = "That was the correct answer.";
	}
	else {results.textContent = "That was the incorrect answer.";
				secondsLeft = secondsLeft-10;}
	if (currentQuestion < lastQuestion){
		currentQuestion++;
		displayQ();
	}
	else {quiz.style.display= "none";
				noMasQuestiones=0;}
}

// this function makes the user intial form display
function userInitials () {
	userForm.style.display="block";
	quiz.style.display="none";
	timer.style.display="none";
}

submitBtn.addeventlistener("click", displayScore);



function displayScore() {
	descriptionEl.style.display="none";
	timeEl.style.display="none";
	quiz.style.display="none";
	userForm.style.display="none";
	scores.style.display="block";

	displayScore();
}
