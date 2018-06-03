// function Duck(type, canFly) {
// 	this.type = type;
// 	this.canFly = canFly;
// }
//
// var ducky = new Duck("animal",true);
//==========================================

function Cat(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = new Dog("Fido", "Mixed", 38);
fido.owner = "Bob";
delete fido.weight;

fido.trust = function(person) {
	return (person === "Bob");
};

var noBite = fido.trust("Bob");
var spot = new Dog("Spot", "Chihuahua", 10);
// noBite = spot.trust("Bob"); won't work because spot don't have trust property

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 25) {
			alert(this.name + " says Woof!");
		} else {
			alert(this.name + " says Yip!");
		}
	}
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot","Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
	if (dogCacher(dogs[i])) {
		console.log(dogs[i].name + " is a dog!");
	}
}


//===============================================

//code that needs to be fixed, code below is fixed
// function widget(partNo, size) {
// 	var this.no = partNo;
// 	var this.breed = size;
// }
// function FormFactor(material, widget) {
// 	this.material = material,
// 	this.widget = widget,
// 	return this;
// }
// var widgetA = widget(100, "large");
// var widgetB = new widget(101, "small");
// var formFactorA = newFormFactor("plastic", widgetA);
// var formFactorB = new forumFactor("metal", widgetB);
//======================================================

function Widget(partNo, size) {
    this.partNo = partNo;
	var this.size = size;
}
function FormFactor(material, widget) {
	this.material = material,
	this.widget = widget,
}
var widgetA = new widget(100, "large");
var widgetB = new widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new formFactor("metal", widgetB);
//========================================================

function Coffee(roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function(ounces) {
		var size;
		var small = 8;
		var medium = 12;
		var large = 16;

		if (this.ounces <= small) {
			return = "small";
		} else if (this.ounces >= 9 && ounces <= 12) {
			return = "medium";
		} else if (this.ounces === 16) {
			return = "large";
		}
	}
	this.toString = function() {
		return "You've ordered a " + this.getSize() + " " + this.roast + " cofee.";
	};
}

var houseBlend = new Cofee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Cofee("Dark Roast", 16);
console.log(darkRoast.toString());


//=====================================================
function Album(title, artist, year) {
	this.title = title;
	this.artist = artist;
	this.year = year;
	this.play = function() {

	}
}
var darkside = Album("Dark side of the Cheese", "Pink Mouse", 1971);
darkside.play();

//=======================================================

function Car(make, model, year, color, passengers, convertible, mileage) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;

	this.start = function() {

	};

	this.drive = function() {

	}

	this.stop = function() {

	}
}

var chevy = new Car("Chevy","Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM","Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors","Taxi", 1955, "yellow", 4, false, 281341)
var chevy = new Car("Chevy","Fiat", "500", "Medium Blue", 2, false, 88000)

var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];

for (var i = 0; i < cars.length; i++) {
	cars[i].start();
	cars[i].drive();
	cars[i].drive();
	cars[i].stop();
}

//=======================================================================
var now = new Date();

//converts date to string
var dateString = now.toString();
console.log(dateString);

//grabs only the year of current date year
var theYear = now.getFullYear();
console.log(theYear);

//grabs the day of the week from the new date method
var theDayWeek = now.getDay();
console.log(theDayWeek);

//built method new date can be modified to specific string
var myBirthday = new Date("Aug 13,1986 08:03 pm");
console.log(myBirthday);

//built in method array creates new array, its given argument gives the length of the items in array
var oddNumbers = new Array(3)
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

oddNumbers.reverse() //built in method reverses items in array

var aString = oddNumbers.join(" - ");//built in method to add a string to each item in array

//the every built method takes in a anonymous function and goes thru each item in array checking if condition in statement is true
var areAllOdd = oddNumbers.every(function(x) {
	return ((x % 2) !== 0);
});


//==================================================

pencilSharpener = {
	brand: "HEad First",
	model: 2112,
	inUse: true,

	sharpen: sharpen() {

	},

	clean: clean() {

	}

}
