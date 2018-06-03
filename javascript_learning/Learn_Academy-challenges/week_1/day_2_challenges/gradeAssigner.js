// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


var a = 90, b = 80, c = 70, d = 60
function assignGrade() {
  var userScore = prompt('input your score to get grade')

  if (userScore >= a ) {
    alert("you got an 'A'")
  }
  else if (userScore >= b && userScore < a) {
    alert("you got a 'B'")
  }
  else if (userScore >= c && userScore < b) {
    alert("you got a 'C'")
  }
  else if (userScore < c && userScore >= d) {
    alert("you got a 'D'")
  }
  else if (userScore < d) {
    alert("you got a 'F'")
  }
};
