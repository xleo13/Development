const Counter = require('./counter');

let jacksCounter = new Counter()

function reportJacksCount(count) {
  console.log("My Jumpin Jacks count is noe", count)
}

console.log("Welcome to a game of Jumpin Jacks.")
reportJacksCount(jacksCounter.getValue())

console.log("You give me one of your jacks.")
jacksCounter.increase()

reportJacksCount(jacksCounter.getValue())
console.log("I give you one of my jacks.")

jacksCounter.decrease()
reportJacksCount(jacksCounter.getValue())
