'use strict';

var startGame = confirm('*** The Simpsons Bullies *** \n \nClick OK to start!');
if (startGame) {
	question1();
	question2();
	question3();
	question4();
	question5();
} else {
	alert('See you!');
}

function question1 () {
	var choice = prompt('You and Bart are on the playground when you see Nelson beating up some kids. What do you do?\n \n a) Confront him\n b) Hide away\n c) Do nothing');
	switch (choice.toLowerCase()) {
		case 'a': case 'a)': case 'confront him': case 'confront': case 1:
			confrontHim();
			break;
		case 'b': case 'b)': case 'hide away': case 'hide': case 2:
			hideAway();
			break;
		case 'c': case 'c)': case 'do nothing': case 'nothing': case 3:
			doNothing();
			break;
		default:
			question1();
			break;
	}
}

function confrontHim () {
	display(you.attack(nelson));
	display('That made him very mad, so now he\'s coming for you!');
	display(nelson.attack(you));
}

function hideAway () {
	var outcomes = ['fall', 'success', 'fail'];
	var randomDamage = randomNumber(5, 1);
	var i = randomNumber(outcomes.length, 0);
	switch (outcomes[i]) {
	 	case 'fall':
	 		display('You try to run and hide, but hit a tree and hurt yourself. \n' + randomDamage + ' points damage. \n' + you.healthUpdate(randomDamage));
	 		break;
	 	case 'success':
	 		display('You manage to hide for now. \nBart takes advantage of this and attacks Nelson. \n');
	 		display(bart.randomResponse());
	 		break;
	 	case 'fail':
	 		display('You try to hide, but Nelson comes after you!');
	 		display(nelson.attack(you));
	 		break;
	 } 
}

function doNothing () {
	display('As you stand there, Nelson spots you and comes to get you!');
	display(nelson.attack(you));
}

function question2 () {
	var choice = prompt('There\'s no escape! Will you or Bart attack Nelson? \n\na) I\'ll take him myself! \nb) I\'ll ask Bart to do it.');
	switch (choice.toLowerCase()) {
	 	case 'a': case 'a)': case 'me': case 'myself': case 'take him myself': case 1:
	 		display(you.attack(nelson));
	 		break;
	 	case 'b': case 'b)': case 'bart': case 'ask bart': case 2:
			display(bart.randomResponse());
			break;
	 	default:
	 		question2();
	 		break;
	 } 
}

function question3 () {
	var choice = prompt('You need some help to defeat him. Who do you call?\na) Lisa \nb) Milhouse \nc) Ralph');
	switch (choice.toLowerCase()) {
		case 'a': case 'a)': case 'lisa': case '1': 
			display(lisa.randomResponse());
			break;
		case 'b': case 'b)': case 'milhouse': case '2':
			display(milhouse.randomResponse());
			break;
		case 'c': case 'c)': case 'ralph': case '3':
			display(ralph.randomResponse());
			break;
		default:
			question3();
			break;
	}
}

function question4 () {
	display('Nelson strikes back: \n"Oh, yeah... let\'s play!"\n\n' + nelson.attack(you));
	var choice = prompt('He\'s a bit dizzy after this, so you have your chance! What will you do?\n\na) 1 attack - 100% success rate \nb) 2 attacks - 50% success rate \nc) 3 attacks - 33% success rate');
	switch (choice.toLowerCase()) {
		case 'a': case 'a)': case '1 attack': case '1':
			display(you.attack(nelson));
			break;
		case 'b': case 'b)': case '2 attacks': case '2':
			var random = randomNumber(2, 1);
			if (random === 1) {
				display('You manage to attack twice! \n\n' + you.attack(nelson));
				display(you.attack(nelson));
			} else {
				display('No luck! He gets back on his feet!');
			}
			break;
		case 'c': case 'c)': case '3 attacks': case '3':
			var random = randomNumber(3, 1);
			if (random === 1) {
				display('Success! You launch 3 attacks on him! \n\n' + you.attack(nelson));
				display(you.attack(nelson));
				display(you.attack(nelson));
			} else {
				display('No luck! He gets back on his feet!');
			}
			break;
		default:
			question4();
	}
}

function question5 () {
	display('It\'s going down now! Only one will make it to the next recess! \n\n' + nelson.attack(you));
	while (true) {
		display(you.attack(nelson));
		display(nelson.attack(you));
		var randomAttack = randomNumber(3, 1);
		if (randomAttack === 1) {
			display(bart.randomResponse());
		}
	}
}
