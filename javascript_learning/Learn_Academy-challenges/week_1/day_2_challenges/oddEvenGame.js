// The Odd and Even Game
//
// Write a JavaScript function that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


//create function called oddEvenGame
//create for loop iterating from 0-15
//create if statement to check if numbers are divided by evenly and log message
//create else statement to catch numbers that are odd and log them in console
function oddEvenGame() {
  for (let num = 0; num <= 15; num++) {
    if (num % 2 === 0) {
      console.log(num + " is even")
    }
    else {
      console.log(num + " is odd")
    }
  }
};

//refactored oddEvenGame usign while loop
var num = 0;
while (num <= 15) {

  if (num % 2 === 0){
    console.log(num + " is even")
  }
  else {
    console.log(num + " is odd")
  }
  num++;
};
