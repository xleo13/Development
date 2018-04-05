// var winner = function() { alert("WINNER!")};
// var loser = function() { alert("LOSER!")};
//
// //lets test as a warm up
// winner();
//
// //lets assign to other variables for practice
// var a = winner;
// var b = loser;
// var c = loser;
// a();
// b();
//
// //now lets try your luck with a shell game
// c = a;
// a = b;
// b = c;
// c = a;
// a = c;
// a = b;
// b = c;
// a();

//==================================


//==========================================
//function passed to other functions
var passengers = [
	{ name: "Jane Doloop", paid: true, ticket:"coach"},
	{ name: "Dr. Evel", paid: true, ticket:"firstclass"},
	{ name: "Sue Property", paid: false, ticket:"firstclass"},
	{ name: "John Funcall", paid: true, ticket:"premium"}
];

function createDrinkOrder(passenger) {
	var orderFunction;

	if (passenger.ticket === "firstclass") {
		orderFunction = function() {
			alert("would you like wine or cocktail?");
		};
	} else if (passenger.ticket === "premium") {
		orderFunction = function() {
			alert("Would you like wine, cola or water?");
		}
	} else {
		orderFunction = function() {
			alert("Your choice is cola or water.");
		};
	}
	return orderFunction;
}

function createDinnerOrder(passenger) {
	var orderFunction;

	if (passenger.ticket === "firstclass") {
		orderFunction = function () {
			alert("Would you like chicken or pasta?");
		};
	} else if (passenger.ticket === "premium") {
		orderFunction = function () {
			alert("Would you like a snack box or cheese plate?");
		};
	} else {
		orderFunction = function () {
			alert("Would you like peanuts or pretzels?");
		};
	}
	return orderFunction;
}


function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	var getDinnerOrderFunction = createDinnerOrder(passenger);

	getDrinkOrderFunction();

	//get dinner order
	getDinnerOrderFunction();

	getDrinkOrderFunction();
	getDrinkOrderFunction();

	//show movie
	getDrinkOrderFunction();

	//pick up trash
}

function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}

servePassengers(passengers);

function printPassenger(passenger) {
	var message = passenger.name;

	if (passengers.paid) {
		console.log(message)
	} else {

	}
}

function processPassengers(passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) {
		if (testFunction(passengers[i])) {
			return false;
		}
	}
}

function checkNoFlyList(passenger) {
	return(passenger.name === "Dr Evel");
}

function checkNotPaid(passenger) {
	return (!passenger.paid)
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}
//===============================================

var numberArray = [60, 50, 62, 58, 54, 54];
numberArray.sort(compareNumbers);
console.log(numberArray);

function compareNumbers(num1, num2) {
	if (num1 > num2 ) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
}






//==============================================
//start of another array practice example

var products = [
	{name: "Grapefruit", calories: 170, color:"red", sold: 8200},
	{name: "Orange", calories: 160, color:"orange", sold: 12101},
	{name: "Cola", calories: 210, color:"caramel", sold: 25412},
	{name: "Diet Cola", calories: 0, color:"caramel", sold: 43922},
	{name: "Lemon", calories: 200, color:"clear", sold: 14983},
	{name: "Raspberry", calories: 180, color:"pink", sold: 9427},
	{name: "Root Beer", calories: 200, color:"caramel", sold: 9909},
	{name: "Water", calories: 0, color:"clear", sold: 62123},
]

function compareSold(colaA, colaB) {
	if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.sold) {
		return 0;
	} else {
		return -1;
	}
}
products.sort(compareSold);
