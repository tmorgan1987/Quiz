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

// Question Array
var questions = [
	{
			question: "Commonly used data types DO NOT include:",
			choiceA: "strings",
			choiceB: "booleans",
			choiceC: "alerts",
			choiceD: "numbers",
			correct: "C"
	},{
			question: "The condition in an if/else statement is enclosed with __.",
			choiceA: "quotes",
			choiceB: "curly brackets",
			choiceC: "parenthesis",
			choiceD: "square brackets",
			correct: "C"
	},{
			question: "Arrays in JavaScript can be used to store __.",
			choiceA: "numbers and strings",
			choiceB: "other arrays",
			choiceC: "booleans",
			choiceD: "all of the above",
			correct: "D"
	},{
			question: "String values must be enclosed within _ when being assigned to variables.",
			choiceA: "commas",
			choiceB: "curly brackets",
			choiceC: "quotes",
			choiceD: "parenthesis",
			correct: "C"
	},{
			question: "A very useful tool used during development and debugging for printing content to the debugger is:",
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
    }

  }, 1000);
}

// button
startEl.addEventListener("click", startQuiz);
	function startQuiz() {
	descriptionEl.style.display="none";
	timeEl.style.display="block";
	setTime();
	displayQ();
}


var lastQuestion = questions.length-1;
var currentQuestion = 0;


function displayQ () {
questionDisplay.textContent = questions[currentQuestion].question;
choiceA.textContent = 
}

