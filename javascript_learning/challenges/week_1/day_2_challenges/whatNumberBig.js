// What number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Test the function 2 times with different number pairs


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


//create function that logs out greater number using Math.max built-in function
function greaterNum(a , b) {
  console.log(Math.max(a , b))
}
greaterNum;


//refactor greaterNum function using if statement
function greaterNum(a , b) {
  if (a > b) {
    console.log(a)
  }
  else {
    console.log(b)
  }
}
greaterNum;


//create minNum function to log minimumm number using Math.min built-in function
function minNum(a , b) {
  console.log(Math.min(a , b))
}
minNum;

//refactor minNum using if statement
function minNum(a , b) {
  if (a < b) {
    console.log(a)
  }
  else {
    console.log(b)
  }
}
minNum;
