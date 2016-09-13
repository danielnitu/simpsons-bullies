'use strict';

function randomNumber (upper, lower) {
	return Math.floor(Math.random() * upper + lower); 
}

function display (message) {
	alert(message);
}

function MainCharacter (name, hero, health) {
	this.name = name;
	this.hero = hero;
	this.health = health;
}

MainCharacter.prototype.attack = function (victim) {
	var i = randomNumber(this.attackMethods.length, 0);
	var damage = this.attackMethods[i][1];
	return this.name + ' used ' + this.attackMethods[i][0] + ' for ' + damage + ' damage. \n' + victim.healthUpdate(damage);
};

MainCharacter.prototype.healthUpdate = function (damage) {
	this.health -= damage;
	if (this.health <= 0) {
		this.endGame();
	} else {
		return(this.health + ' health remaining!');
	}
};

MainCharacter.prototype.endGame = function () {
	if (this.hero) {
		display('You lost! The bullies have taken over the world!');
	} else {
		display('You win! Nelson will not bully anyone until tomorrow!');
	}
	throw new Error('Game finished!');
};

var nelson = new MainCharacter('Nelson', false, 200);
nelson.attackMethods = [
		['an insult', 0],
		['a taunt', 10],
		['a kick', 20],
		['a dirty trick', 30]
	];

var you = new MainCharacter('You', true, 100);
you.attackMethods = [
		['Mr. Burns\' help', 1],
		['accorns', 10],
		['a water balloon', 20],
		['the slingshot', 30]
	];

var mainCharacters = [nelson, you];