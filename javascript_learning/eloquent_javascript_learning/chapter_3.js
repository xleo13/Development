//Defining a function, created variable and assigned a function to variable
var square = function(x) {
  return x * x;
};
console.log(square(12));//example of function working 12 squared
144

//example of assigning functions to variables
var power = function(base,exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
    return result;
}
console.log(power(2,10));//log an example to the console
1024

//Nested Scopes, examples of function inside another function
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
    result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
    result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());

//Declaration notation, function's by declaring them instead of creating variables
function square(x) {
  return x * x;
}

//The call Stack
function greet(who) {
  console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");

//Closure, create a variable that's assigned two functions an outer and inner, the outer passes the argument so the inner can return it.
var addto = function(passed) {

  var add = function(inner) {
    return passed + inner;
  }
  return add;
}

var addthree = new addto(3);
var addfour = new addto(4);

console.log(addthree(2));
//first variable is needed to save the outer function and inner function
//second variable with new keyword saves outer number number
//second number is achieved by calling new variable with function and number desired

 //Another example of closure
   function multiplier(factor) {
     return function(number) {
       return number * factor;
     };
   }

   var twice = multiplier(10);
   console.log(twice(10));

   //Recursion
   function power(base, exponent) {
     if (exponent == 0)
     return 1;
     else
       return base * power(base ,exponent -1);
   }
   console.log(power(2,3));

   //another example of Recursion
   function findSolution(target) {
     function find(start, history) {
        if (start == target)
          return history;
        else if (start > target)
          return null;
        else
          return find(start + 5, "(" + history + " + 5)") ||
                 find(start * 3, "(" + history + " * 3");
     }
     return find(1, "1");
   }
   console.log(findSolution(24));

   //Growing functions
   function printFarmsInventory(cows, chickens) {
     var cowString = String(cows);

     while (cowString.length < 3)
      cowString = "0" + cowString;

     console.log(cowString + " cows");
     var chickenString = String(chickens);

     while (chickenString.length < 3)
      chickenString = "0" + chickenString;
     console.log(chickenString + " Chickens");
   }

//Another example of growing functions
   function printZeroPaddedWithLabel(number, label) {
     var numberString = String(number);
     while (numberString.length < 3)
     numberString = "0" + numberString;
     console.log(numberString + " " + label);
   }

   function printFarmInventory(cows,chickens,pigs) {
     printZeroPaddedWithLabel(cows, "Cows");
     printZeroPaddedWithLabel(chickens, "Chickens");
     printZeroPaddedWithLabel(pigs, "Pigs");
   }
