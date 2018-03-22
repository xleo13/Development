// Magic 8 Ball Challenge
// Story
// As a user I can enter a question on a web page and magically get an answer to my question.
// Goal:
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user.
// Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
// Output the question with the random answer.
// Stretch goal:
// Put the question and answer into a loop that stops when the user enters STOP.

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


function magicBall() {
  var question = prompt("Enter your question");
  var answers = ['Yup!',"who cares", 'dick',' Maybe', 'your momma', 'asshole', 'go f*** your self', 'Your answer here'];
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)]

  if (question){
    alert(randomAnswer)
  }
}
magicBall();
