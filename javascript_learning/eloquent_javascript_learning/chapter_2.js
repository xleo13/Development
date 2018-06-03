//Dispatching on a value with switch
if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();

//with a switch method
switch (prompt("What is the weather like?")) {
  case "rainy":
  console.log("Remember to bring an umbrella.");
  break;
  case "sunny":
  console.log("Dress lightly.");
  break;
  case "cloudy":
  console.log("Go outside.");
  break;
  default:
};
