// Duplicate Array
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
//
// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]
//
// Order does not matter.

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////

//create function mergeArray
//create a variable with an array of [1, 2, 3]
//create a variable with an array of [2, 30, 1]
//create a third variable to merge both arrays into one
//create a variable to remove duplicates using Array.from(new set())
//console log the results
function mergeArray() {
  var a1= [1, 2, 3];
  var a2= [2, 30, 1];

  var mergedArray= a1.concat(a2);
  var arrayListNoDuplicates = Array.from(new Set(mergedArray));

  console.log(arrayListNoDuplicates);
};
