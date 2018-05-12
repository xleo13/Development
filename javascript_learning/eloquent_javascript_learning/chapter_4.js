//Data sets, example of array
var listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers);

// Methods
var doh = "Doh";
console.log(typeof doh.toUppercase); //logs out function

console.log(doh.toUppercase()); //logs out DOH, which is the value assign to the variable

// Objects
var day1 = {
	squirrel: false,
	events: ["work","touched","tree","pizza","running","television"]
};
console.log(day1.squirrel);//logs out false

console.log(day1.wolf);//logs out undefined

day1.wolf = false;
console.log(day1.wolf);//logs out false

var description = {
	work: "Wento work", // 1st option key can be without quotes and property has to always have quotes unless is a integer, undefined, true, false
	"touched tree": "Touched a tree" // can have quotes around key and property
};

var anObject = {left: 1, right: 2};
console.log(anObject.left);//logs out 1

delete anObject.left;
console.log(anObject.left); //logs out undefined

console.log("left" in anObject); // logs out false

console.log("right" in anObject);//logs out true
/////////////////////////////////////////////////////////////////////////////

var journal = [
	{events: ["work", "touched tree", "pizza", "running", "television"],
	 squirrel: false},
	 {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
 	  squirrel: false},
	  {events: ["weekend", "cycling", "break", "peanuts", "beer"],
  	   squirrel: true}
];

//////////////////////////////////////////////////////////////////////////////

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);//logs out true

console.log(object1 == object3);//logs out false

object1.value = 15;
console.log(object.value);//logs out 15

console.log(object3.value);//logs out 10


//////////////////////////////////////////////////////////////////////////////

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	});
}

addEntry(["work", "touched tree", "pizze" ,"running", "television"], false);
addEntry(["work","ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer", true]);

////////////////////////////////////////////////////////////////////////////

// computing correlation

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
			Math.sqrt((table[2] + table[3]) *
					  (table[0] + table[1]) *
					  (table[1] + table[2]));
}
console.log(phi([76,9,4,1]));//logs out .068599434



function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function table(event, journal) {
	var table = [0, 0, 0, 0];
	for(var i = 0; i <journal.length; i++) {
		var entry = journal[i], index = 0;

		if (hasEvent(event, entry)) index += 1; //if statement code after parameters are all in one line then you dont need to add curly brackets

		if (entry.squirrel) index += 2;

		table[index] += 1;
	}
	return table
}
console.log(tableFor("pizze",JOURNAL));//logs out [76,9,4,1]
/////////////////////////////////////////////////////////////////////////////

var map = ();

function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza", in map);//logs out true

console.log(map["touched tree"]);//logs out -.081

/////////////////////////////////////////////////////////////////////////////

function gatherCorrelations(journal) {
	var phis = {};//this is to an empty object container

	for (var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events;

		for (var i = 1; i < events.length; i++) {
			var event = events[i];

			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;// returns phis after for loop function with new assigned value
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);//logs out -0.068599434


for (var event in correlations)//the keywork in is used as a shorcut to iterate thru arrays , all youo need in this for loop is var label and in keyword followed by array name
	console.log(event + ": " + correlations[event]);
//logs out carrot: 0.0140970969 and many more

for (var event in correlations) {
	var correlations = correlations[event];

	if (correlation > .01 || correlation < -.01)
	console.log(event + ": " + correlation);
}
//logs out weekend: 0.1371988681 and many more

///////////////////////////////////////////////////////////////////////////

for (var i = 0; i < JOURNAL.length; i++) {
	var entry = journal[i];

	if(hasEvent("peanuts", entry) &&
		!hasEvent("brushed teeth", entry))
		entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));//logs out 1

/////////////////////////////////////////////////////////////////////////////

var todoList = [];

function rememberTo(task) {
	todoList.push(task);// push method adds to an array list
}

function whatIsNext() {
	return todoList.shift();//corresponding methods for addidng and removing things at the start of an array are called shift/unshift
}

function urgentlyRememberTo(task) {
	todoList.unshift(task);//corresponding methods for addidng and removing things at the start of an array are called shift/unshift
}

//indexOF method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log([1, 2, 3, 2, 1].indexOf(2)); //logs out 1

//lastIndexOf method starts search from the end of list item and not any further both indexOf and lastIndexOf can take an optional second argument to specify where to start search
console.log([1, 2, 3, 2, 1].lastIndexOf(2));//logs out 3

//slice method takes a start index and an end index and returns and array that has only the elements between those indices, it excludes the last item of index search
console.log([0, 1, 2, 3, 4].slice(2, 4));//logs out [2, 3]

//when the end is not given, slice will take all of the elements afters the start index
console.log([0, 1, 2, 3, 4].slice(2));//logs out [2, 3, 4]

function remove(array, index) {
	return array.slice(0, index)
		.concat(array.slice(index + 1));
}
console.log(remove["a", "b", "c", "d", "e"], 2);//logs out ["a", "b", "d", "e"] removes the index 2 which is "c" in the array list
///////////////////////////////////////////////////////////////////////////

var myString = "Fido";
myString.myproperty = "value";

console.log(myString.myProperty);//logs out undefined
