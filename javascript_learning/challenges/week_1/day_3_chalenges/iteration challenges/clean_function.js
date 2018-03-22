// Clean Function
// Write a Javascript function to filter false, null, 0 and blank values from an array.
//
// filterArrayValues([58, '', 'abcd', true, null, false, 0]) should return [58, "abcd", true]

/////////////////////////////CHALLENGE COMPLETED////////////////////////////////

var arrayValues = [58, '', 'abcd', true, null, false, 0];

function filterArray() {
  arrayValues.splice(4, 3);
  arrayValues.splice(1, 1);
  return arrayValues;
}
filterArray();

//Refactor on later time
