// Arrays of Numbers
// Create an array with five decimal numbers, and use it for the following:
// Create a function that finds the highest number.

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


/*********************************************************/

//create a variable with a array of items assign to it
//create a variable called max with a built in function reduce that will reduce the array to a single numbers
//inside the reduce function add another function with two parameters and a block that will return the highest number in a arrayValues
//console log the result
var arr = [5.5, .5, 3.8, 8.4, 5.2];
var max = arr.reduce(function(a,b) {
  return Math.max(a,b);
});
function highestNum() {
  return max;
}
highestNum();
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.
/***************************************************************/



// Create a function that finds the lowest number.
var arr = [5.5, .5, 3.8, 8.4, 5.2];
var min = arr.reduce(function(a,b){
  return Math.min(a,b)
})
function minValue() {
  return min;
}
minValue();
// lowestNumber([1,4,2]) should return 1
// lowestNumber([-1,-2,-4]) should return -4


/************************************************************/

// Create a function that calculate the sum.
var arr = [5.5, .5, 3.8, 8.4, 5.2]
var sum = arr.reduce(function(a, b) {
  return a + b;
})

function sumValue() {
  return sum;
}
sumValue();
// sum([1,2,3]) should return 6
// sum([]) should return 0


/********************************************************/

// Create a function that calculate the mean value.
var arr = [5.5, .5, 3.8, 8.4, 5.2]

function meanValue() {
var sum = arr.reduce(function(a, b) {
  return a + b;
})
var meanAvg = sum / arr.length;
return meanAvg
}
meanValue();
// mean([1,2,3]) should return 2


/**********************************************************/


// Create a function that finds the index of the highest number.
var arr = [5.5, .5, 3.8, 8.4, 5.2]
function highIndexNum() {
return arr.indexOf(Math.max(...arr));
}
highIndexNum();
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0
