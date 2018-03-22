function magicBall() {
  var question = prompt("Enter your question");
  var answers = ['Yup!',"who cares", 'dick',' Maybe', 'your momma', 'asshole', 'go f*** your self', 'Your answer here'];
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)]

  if (question){
    alert(randomAnswer)
  }
}
magicBall();
