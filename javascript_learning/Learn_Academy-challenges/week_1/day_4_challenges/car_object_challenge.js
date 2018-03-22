// Car Object Challenge
// Story 1
// Create a function that creates car objects which have a make, model year, and color.
// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.
//

/////////////////////////////CHALLENGE COMPLETED///////////////////////////////
///review at a later day to refactor code and review////





// Challenges:
// Write a function that creates an object that represents a car with the following properties:
// model year
// make
// color
// Add a function to the object that is being returned that concatenates the make, year and color.
//
// Story 2
// The car can accelerate, brake, and tell you its speed.
//
// Challenges:
//
// Add a speed variable to the closure of the car object. Add the following functions to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)

function carObjects(carMake, carModelYear, carColor) {
  var speed = 0;
  return {
    make: carMake,
    modelYear: carModelYear,
    color: carColor,
    carInfo: function () {
      return this.make + "-" + this.modelYear + "-" + this.color;
    },

    getSpeed: function() {
      return speed;
    },

    accelerate: function() {
      speed += 10;
    },

    brake: function() {
      if (speed < 7){
        speed --;
      } else {
        speed -=7;
      }
    }
  }
}
var car = carObjects("bmw", 2014, "darkgray")
console.log(car.make + " " + car.modelYear + " " + car.color)
car.getSpeed();
car.accelerate();
car.brake()
car.getSpeed();
}




// Story 3
// Create a car object and use a while loop to take its speed up to 50mph.
// Then use a while loop to brake down to 0mph.
// Surprise: it doesnt stop at 0mph, fix that.
//
// Challenges:
//
// Create a loop that accelerates the car up to 70mph.
// Create a loop that decelerates the car to 0pmh.
// Call break after the car is at 0mph.
// Fix the issue.
// Hint: The loops use a car object, but is not part of the car object.

var newCar = {
topSpeed: 70,
lowSpeed: 0,
currentSpeed: 0
};
while ( newCar.currentSpeed < newCar.topSpeed ) {
  newCar.currentSpeed++;
  console.log(newCar.currentSpeed);
}
while (newCar.currentSpeed > newCar.lowSpeed) {
  newCar.currentSpeed--;
    console.log(newCar.currentSpeed);
}





// Story 4
// Challenge:
//
// Limit the car's maximum speed to 85mph. Try taking it above 80mph and see what happens.
// Hint: What should happen when you call accelerate at 80mph?
//
// Story 5 (Extra)
// Challenge:
//
// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed. (Hint: Math.random()). How many iterations does it take to stop the car?
// Resources

var newCar = {
topSpeed: 85,
lowSpeed: 0,
currentSpeed: 80
};
if (newCar.currentSpeed < newCar.topSpeed){
  while ( newCar.currentSpeed < newCar.topSpeed ) {
    newCar.currentSpeed++;
    console.log(newCar.currentSpeed);
  }
}
while (newCar.currentSpeed > newCar.lowSpeed) {
  newCar.currentSpeed--;
    console.log(newCar.currentSpeed);
}
