//Create constants
const previousBtn = document.querySelector('#previous');
previousBtn.addEventListener('click', moveToPreviousPage);
const nextBtn = document.querySelector('#next');
nextBtn.addEventListener('click', moveToNextPage);
const panel = document.querySelector('#panel');
//panel.addEventListener('click', startGame);
const clickHereForRandQuestionBtn = document.querySelector('#randomQuestion');
const question = document.querySelector('#question');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const answer = document.querySelector('#answer');
let currentQuestion = 0;
let currentAnswer = 0;
let isAnswerShown = false;
const arrQuestions = new Array();

const randomNum = Math.floor(Math.random() * data.length);

function renderQuestion() {
	answer.classList.toggle('hidden');
	//produce a random flashcard question from arrQuestions
	const randomNum = Math.floor(Math.random() * data.length);
	//clickHereForRandQuestionBtn.addEventListener('click', randomQuestion)
	question.innerText = data[randomNum].question;
	choice1.innerText = data[randomNum].choice1;
	choice2.innerText = data[randomNum].choice2;
	choice3.innerText = data[randomNum].choice3;
	answer.innerText = data[randomNum].answer;
	// currentQuestion++;
	//reveal the answer on the back of the flashcard
	clickHereForRandQuestionBtn.innerText = 'CLICK HERE TO REVEAL ANSWER';
}
clickHereForRandQuestionBtn.addEventListener('click', function () {
	if (isAnswerShown) {
		renderQuestion();
	} else {
		revealAnswer();
	}
	isAnswerShown = !isAnswerShown;
});

renderQuestion();

function revealAnswer() {
	answer.classList.toggle('hidden');

	clickHereForRandQuestionBtn.innerText = 'CLICK HERE FOR RANDOM QUESTION';
	//const randomNum = Math.floor(Math.random() * data.length);
}

// currentAnswer = panel.addEventListener('click', revealAnswer);

function moveToPreviousPage() {
	If;
}
function moveToNextPage() {}

//function start

//event listeners

//Define functions
