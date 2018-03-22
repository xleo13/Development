var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls",
}
var bark;
if (dog.weight > 20) {
	bark = "WOOF WOOF";
} else {
	bark= "woof woof";
}
var speak = dog.name + " says " + bark + dog.activity;
console.log("speak")
// ------------------------------------------------------

var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}

};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}

};

// -----------------------------------------------------------------------

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

var worthAlook = prequal(chevy);

if (worthAlook) {
	console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
	console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}

// ------------------------------------------------------------------------------


function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password ) {
		return file.contents;
	} else {
		return "invalid password! No secret for you.";
	}
}

function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}

var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is is Philadelphia.");
setSecret = getSecret(superSecretFile,2);
console.log(secret);

// -------------------------------------------------------


var eightBall = {
	index: 0,
	advice: ["yes", "no", "maybe", "not a chance"],

	shake: function(){
		this.index = this.index + 1;
		if (this.index >= this.advice.length) {
			this.index = 0;
		}
	},

	look: function() {
		return this.advice[this.index];
	}

};
eightBall.shake();
console.log(eightBall.look());

// ------------------------------------------

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);

//-----------------------------------------------


var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);


funciton validate(phoneNumber) {
	if (phoneNumber.length !== 8) {
		return false;
	}
	for (var i = 0; i < phoneNumber.length; i++) {
		if (i === 3) {
			if (phoneNUmber.charAt(i) !== '-') {
				return false;
			}
		} else if (isNaN(phoneNumber.charAt(i))) {
			return false;
		}
	}
	return true;
}


function Duck(sound) {
	this.sound = sound;
	this.quack = function() {
		console.log(this.sound);
	}
}
	var toy = new Duck("quack quack");
	toy.quack();

	console.log(typeof toy);
	console.log(toy instanceof Duck);

//-------------------------------------------------
