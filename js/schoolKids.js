'use strict';

function SchoolYardKid (name, maxDamage) {
	this.name = name;
	this.maxDamage = maxDamage;
	this.response = {
		one: 'Can\'t help you! He\'s a big guy!',
		two: 'Ok, let\'s get him!',
		three: 'Sorry, I have to do my homework.',
		four: 'I\'ll take him by myself!'
	};
}

SchoolYardKid.prototype.randomResponse = function () {
	var randomNum = randomNumber(Object.keys(this.response).length, 1);
	var kidResponse = this.name + ' says: \n';
	switch (randomNum) {
		case 1:
			return kidResponse + this.response.one;
		case 2:
			return kidResponse + this.response.two + '\n\n' + this.schoolYardKidAction();
		case 3:
			return kidResponse + this.response.two;
		case 4:
			return kidResponse + this.response.four;
	}
};

SchoolYardKid.prototype.schoolYardKidAction = function () {
	var randomDamage = randomNumber(20, this.maxDamage);
	for (var i in mainCharacters) {
		if (!mainCharacters[i].hero) {
			var badGuy = mainCharacters[i];
			return this.name + ' deals ' + badGuy.name + ' ' + randomDamage + ' damage. \n' + badGuy.healthUpdate(randomDamage);
		}
	}
};

var milhouse = new SchoolYardKid('Milhouse', 5);
milhouse.response = {
	one: 'I feel barfy!',
	two: 'Let me try! Will I get beat up today? "All signs point to yes."',
	three: 'Take me home please. I\'ve got to recover from a wedgie.'
};

var lisa = new SchoolYardKid('Lisa', 21);
lisa.response = {
	one: 'Can\'t help now! \nI\'m studying for the math fair. \nIf I win, I\'ll get a brand new protractor.',
	two: 'Pissed off eight-year-old coming through!'
};

var bart = new SchoolYardKid('Bart', 31);
bart.response = [
	'Eat My Shorts!',
	'If I ever stop loving violence, I want you to shoot me.',
	'Well, you\'re damned if you do, and you\'re damned if you don\'t.',
	'There comes a time to beat the crap out of childish things.'
];
bart.randomResponse = function () {
	var i = randomNumber(this.response.length, 0);
	return this.response[i] + '\n\n' + this.schoolYardKidAction();
};

var ralph = new SchoolYardKid('Ralph', 21);