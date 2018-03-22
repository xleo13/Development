// Sum Target
// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
//
// findPair(50, [10,20,10,40,50,60,70] should return [0, 3] or [2, 3] (one or the other or both)
// findPair(50, [25,25,10] should return [0, 1] or [1, 0] (but not both)
//
// Order does not matter.
var arr = [10, 20, 10, 40, 50, 60, 70];
var target = 50;

function sumTarget(array,sum) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === sum - array[i]) {
        result.push([array[i],array[j]])
      }
    }
  }
  console.log(result)
}
sumTarget(arr,target)
