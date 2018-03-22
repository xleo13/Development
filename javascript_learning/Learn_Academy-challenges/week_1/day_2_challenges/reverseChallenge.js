// Reverse Challenge
//
// Write a function that takes in a string of one or more words,
// returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
//
// Example: if you give your function the string "hi there neighbor",
// it should return the string "hi there robhgien"


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////



function reverseString(str) {

    // long method to reverse strings
    // var splitString = str.split("");
    // var reverseString = splitString.reverse();
    // var joinString = reverseString.join("");
    // return joinString;


    // method to reverse words
    // var random = ["h", "e", "l"];
    // reverseString("hello");

    // short method to reverse stings
    return str.split("").reverse().join("");

    // reverse strings with for loop
    // var final = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    // final += str[i];
    // }
    // return final;
};

    // long method
    // console.log(reverseString("luis"));

    // method to reverse words
    // console.log(random.reverse());

    short method
    console.log(reverseString("world"));

    // method with for loop
    // console.log(reverseString("hello luis"));
