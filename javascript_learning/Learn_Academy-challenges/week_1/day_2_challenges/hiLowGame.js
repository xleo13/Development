
// create a random Number
//create a variable to store a user's number with a prompt with a message
//create function named hiLoGame and create a block statement
//create a for loop to iterate start from 1 and end at 10
//console.log the random number to show it's stored the random number
//console.log the turns to show how many turns have passed
//create if statement to check if user number is correct
//create alert box with message if user's correct
//create break if condition is correct to stop loop
//create else if statement to check if user number is to high
//if number to high prompt user with message to try again and store new number
//create else if statement to check if number to low
//if number to low prompt user with message to try again and store new number
//create else statement to catch if user inputs anything else than a number
//if user inputs a letter prompt with a message that no number is allowed and try again


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////



var randomNum = Math.floor(Math.random() * 101);

var userNum = prompt("Enter Number to Play");


function hiLowGame() {

  for (var turns = 1; turns < 10; turns++) {


    if(userNum == randomNum ) {
      alert(userNum + " is correct answer!! thank you for playing the Random Number Game!");
      break;
    }

    else if(userNum > randomNum ) {
    userNum = prompt(userNum + " too high try again");
    }

    else if(userNum < randomNum ) {
    userNum = prompt(userNum + " too low try again");
    }

    else {
    userNum = prompt(userNum + " not a number")
    }
  }
}
hiLowGame();
