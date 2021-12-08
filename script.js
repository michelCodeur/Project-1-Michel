//Create constants
//const obj = JSON.parse(capitalsList);
let currentFlashCard = document.querySelector('#flashcards');
const currentQuestion = 0;
const arrQuestions = new Array();

//cached data references
function getList() {
	for (i = 0; i < data.length; i++) {
		arrQuestions[i] = [];
		arrQuestions[i][0] = data[i].front;
		arrQuestions[i][1] = data[i].list1;
		arrQuestions[i][2] = data[i].list2;
		arrQuestions[i][3] = data[i].list3;
		arrQuestions[i][4] = data[i].back;
	}
}
getList();

function startGame(getList, )

    currentFlashCard = 0,
    currentFlashCard.append(arrQuestions[i][0]);
    currentFlashCard.append(arrQuestions[i][1]);
    currentFlashCard.append(arrQuestions[i][2]);
    currentFlashCard.append(arrQuestions[i][3]);
    currentFlashCard.addEventListener('click', function() {
    currentQuestion++;
    
})


startGame();

//function start

//event listeners

//Define functions
