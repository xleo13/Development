// Advanced Functions
/*************************************************************/
// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?
/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


var arr = [1, 2 ,3 ,4];

function getEven() {
  arr.map(function(a){
   if (a % 2 === 0) {
     console.log(a)
   }
  })
}


// Create a function that returns an array with only the odd elements from the array.
  var arr = [1, 2 ,3 ,4];

  function getOdd() {
    arr.map(function(a){
     if (a % 2 === 1) {
       alert(a)
     }
    })
  }
// oddElements([1,2,3,4]) should return [1,3]
// oddElements([2,2,6,4]) should return []


/*************************************************************/




// Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.

function doubleUp() {
  var arr2 = [5,6];
  var newArr = [];
  arr2.map(function(x) {
    var arr2 = x * 2;
    newArr.push(arr2)
  })
  console.log(newArr);
}

// mapArray([5,6], function(x) { return 2*x; }) should return [10,12]
// Hint: function mapArray(array, fun) { var returnArray = []; ... return returnArray; }
// Hint: use forEach on the given array to append the return value of the function applied to each element



/*************************************************************/



// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
//
// filterArray([5,6,7], function(x) { return x>=6; }) should return [6,7]
// Hint: create a new array and use forEach on the given array, only appending the element if the function returns true
