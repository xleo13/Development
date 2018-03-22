class Engine{
	constructor() {
		this.oilLevel = 100;
		this.rpm = 0;
	}

	start() {
		this.rpm = 500;
	}

	stop () {
		this.rpm = 0;
	}

	accelerate() {
		console.log("Warning! This is a base class method, should not be called");
	}

	decelerate() {
		console.log("Warning! This is a base class method, should not be called");
	}
}

class TurboEngine extends Engine {
	constructor() {
		super();
		this.horsepower = 450;
	}
	accelerate() {
		if (this.rpm != 0) {
			this.rpm += 750;
		}
	}

	decelerate() {
		if (this.rpm != 0) {
			this.rpm -= 750;
		}
	}
}

class stockEngine extends Engine {
	constructor() {
		super();
		this.horsepower = 250;
	}

	accelerate() {
		if (this.rpm != 0) {
			this.rpm += 250;
		}
	}

	decelerate() {
		if (this.rpm != 0) {
			this.rpm -=250;
		}
	}
}

let Turbo = new TurboEngine();
let fastRacecar = new Racecar(turbo);

console.log("Test drive the fast racecar");
fastCar.start();
console.log("accelerating");
fastCar.accelerate();
console.log("speed:", fastCar.speed);

console.log("accelerating");
fastCar.accelerate();
console.log("speed:", fastCar.speed);

console.log("shifting Up");
racecar.shiftUp();
console.log("speed:", racecar.speed);

console.log("shifting Down");
racecar.shiftDown();
console.log("speed:", racecar.speed);
