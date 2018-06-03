Promise Wrapping
Given you have the following two functions, try to rewite them in new functions that return a promise. Be aware that this is not a realistic or even a useful example, because the work that these functions are doing does not actually require a promise - we are doing this exercise just to practice the syntax.

function reverseText(text, callback){
  let splitText = text.split("")
  let reverseArray = splitText.reverse()
  callback(reverseArray.join(""))
}

function capitalizeText(text, callback){
  callback(text.toUpperCase())
}
Story
As a user, I want to be able to reverse and capitalize my text
