// Arrays of Strings

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


// Create an array with your siblings names, and an array with your parents names.
var siblings = ["janeth", "claudia", "angie",]
var parents = ["lydia", "padre"]
// Sort your siblings names in alphabetical order.
siblings.sort();

// Sort your parents names in reverse alphabetical order.
parents.sort().reverse();

// Sort all the names in alphabetical order.
var famNames = siblings.concat(parents).sort();
//  Hint: Combine the arrays into a single array.

// Sort all the names in reverse alphabetical order.
siblings.concat(parents).sort().reverse();

// Create a function that determines if a given name is amongst the names.
  var siblings = ["janeth", "claudia", "angie",]
  var parents = ["lydia", "padre"]
  var famNames = siblings.concat(parents).sort();

  function checkName(name) {
    for (let i=0; i<famNames.length; i++) {
      if (famNames[i] === name) {
        alert(name + " is family")
        break;
      }
      else if (famNames[i] !== name) {
        alert("not family")
        break;
      }
    }
  }
