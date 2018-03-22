// The Fizz Buzz
//
// Write a JavaScript program which iterates the integers from 1 to 100.
// for multiples of three print "Fizz" instead of the number.
// for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////

//create function called fizzBuzzGame
//create for loop to iterate from 0-100
//create if statements to check which numbers divisible by 3 & 5 and 3 or 5
//console.log numbers divisible by 3 & 5 to message fizzBuzz
//console.log numbers divisible by 3 to message fizz
//console.log numbers divisible by 5 to message fizz


function fizzBuzzGame() {

  for (let num = 0; num <= 100; num++){
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num + "FizzBuzz")
    }
    else if (num % 3 === 0) {
      console.log(num + "fizz")
    }
    else if (num % 5 === 0) {
      console.log(num + "buzz")
    }
  }
};
fizzBuzzGame();
