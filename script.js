//The panel is the main window of the flash card display
const panel = document.querySelector('#panel');

//This is the main navigation button
const clickHereForRandQuestionBtn = document.querySelector('#randomQuestion');

//These are the elements to access the data being displayed
const question = document.querySelector('#question');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const answer = document.querySelector('#answer');

//The are the variables used through the functions
let currentQuestion = 0;
let currentAnswer = 0;
let isAnswerShown = false;
const arrQuestions = new Array();

//The random number to retrieve one block of data at the same time
const randomNum = Math.floor(Math.random() * data.length);

//This function produce a random flash card
function renderQuestion() {
	answer.classList.toggle('hidden');
	const randomNum = Math.floor(Math.random() * data.length);
	//The data being displayed
	question.innerText = data[randomNum].question;
	choice1.innerText = data[randomNum].choice1;
	choice2.innerText = data[randomNum].choice2;
	choice3.innerText = data[randomNum].choice3;
	answer.innerText = data[randomNum].answer;

	//Reveal the answer on the back of the flashcard
	clickHereForRandQuestionBtn.innerText = 'CLICK HERE TO REVEAL ANSWER';
}

//This toggle the main navigation button
clickHereForRandQuestionBtn.addEventListener('click', function () {
	if (isAnswerShown) {
		renderQuestion();
	} else {
		revealAnswer();
	}
	isAnswerShown = !isAnswerShown;
});
renderQuestion();

//This function reveal the correct answer
function revealAnswer() {
	answer.classList.toggle('hidden');
	clickHereForRandQuestionBtn.innerText = 'CLICK HERE FOR RANDOM QUESTION';
}
