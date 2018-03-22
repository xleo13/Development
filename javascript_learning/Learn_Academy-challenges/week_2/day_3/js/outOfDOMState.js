var currentState = {
	availableGreetings:
	["Bob", "Mary", "Carson"],
	greetingIndex: 0
}

var element = document.getElementById("greeting");
var button = document.querySelector("button");
element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex];
button.innerHTML = "Greet " + currentState.availableGreetings[currentState.greetingIndex];

function greetNext() {
	currentState.greetingIndex += 1;

	//we need to check to see if we are at the last greeting, and circle around to first if so
	if(currentState.greetingIndex == currentState.availableGreetings.length) {
		currentState.greetingIndex = 0;
	}

	//update the dom with new greeting
	var element = document.getElementById("greeting");
	element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex];
	var button = document.querySelector("button");
	button.innerHTML = "Greet " + currentState.availableGreetings[currentState.greetingIndex];

}
