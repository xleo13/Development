function greetNext() {

	// Inspect the dom to find current state of the element
	var element = document.getElementById("greeting");
	var currentGreet = element.innerHTML;
	var nextGreeting = "Hello Bob";
	console.log(nextGreeting);

	//Determine next state
	if(currentGreet == 'Hello Bob') {
		nextGreeting = 'Hello Mary';
	} else if(currentGreet == 'Hello Mary') {
		nextGreeting = 'Hello Carson';
	} else if(currentGreet == 'Hello Carson') {
		var nextGreeting = 'Hello Bob';

	}

	//Update the dom with new state
	element.innerHTML = nextGreeting;
}
