let asciify = require("asciify")

const text = "up up and away!"

asciify(text, {font:'larry3d'}, function(err,result) {
  if (err) {
    console.log("sorry, we couldn't generate that art")
  } else {
    console.log(result)
  }
})

console.log("I will be an awesome web developer!")
