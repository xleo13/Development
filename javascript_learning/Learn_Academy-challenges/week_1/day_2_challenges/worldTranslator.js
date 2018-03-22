// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages.
// It should default to English.
// Test the function for each of the supported languages


/////////////////////////////CHALLENGE COMPLETED///////////////////////////////


//create a function that translates hello world in three languages
var en = "Hello World"
var es = "Hola Mundo"
var de = "Bonjour Monde"

function worldTranslator(lang) {
  return lang;
}



//create refactor worldTranslator using if statements
alert("Welcome to translator 'Hello World'")
var userLang = prompt("please input language code \n'de for french', 'es for spanish', \n or leave blank for english")
var en = "Hello World";
var es = "Hola Mundo";
var de = "Bonjour Monde";

function worldTranslator() {
  if (userLang === "de") {
    userNum = alert(de);
    console.log(de);
  }
  else if (userLang === "es") {
    userNum = alert(es);
    console.log(es);
  }
  else {
    userNum = alert(en);
    console.log(en);
  }
};
worldTranslator();
