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
