// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Test the function for all special nouns and one regular.
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////



//create function called pluralize
function pluralize() {
  var numText = prompt("please input a number")
  var nounText = prompt("please input a noun")

  if (numText >  2) {
    alert(numText + nounText) {
  }
  else {
    alert("not plural")
  }
};
