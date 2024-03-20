/*let title = document.querySelector('h1');
title.innerHTML = 'Jogo do número secreto';

let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Escolha um número entre 1 e 10.';

Simplificando as 4 linhas de código acima com a função abaixo.*/

let secretNumberList = [];
let limitNumber = 10;
let secretNumber = randomNumber();
let att = 1;
showTitle();

function showOnScreen(tag, text) {
	let section = document.querySelector(tag);
	section.innerHTML = text;
	responsiveVoice.speak(text, 'Australian Female', {rate:1.1});
}

function showTitle() {
	showOnScreen('h1','Secret number game');
	showOnScreen('p','Choose a number between 1 and 10.');
}

function verifyGuess() {
	let guess = document.querySelector('input').value;

	if (guess == secretNumber) {
		showOnScreen('h1', 'Congratulations!');
		let wordAtt = att > 1 ? 'attempts' : 'attempt';
		let messageAtt = `You guessed the secret number with ${att} ${wordAtt}!`
		showOnScreen('p', messageAtt);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if (guess > secretNumber) {
			showOnScreen('p', 'The number is smaller.');
		} else {
			showOnScreen('p', 'The number is bigger.');
		}
		att++;
		clearField();
	}
}

function randomNumber() {
	let chosenNumber =  parseInt(Math.random() * limitNumber + 1);
	let amountElements = secretNumberList.length;

	if(amountElements == limitNumber){
		secretNumberList = [];
	}

	if (secretNumberList.includes(chosenNumber)) {
		return randomNumber();
	} else {
		secretNumberList.push(chosenNumber);
		console.log(secretNumberList);
		return chosenNumber;
	}
}

function clearField() {
	guess = document.querySelector('input');
	guess.value = '';
}

function newGame() {
	secretNumber = randomNumber();
	clearField();
	showTitle();
	att = 1;
	document.getElementById('reiniciar').setAttribute('disabled', true);
}