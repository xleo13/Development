class Engine{
	constructor() {
		this.horsepower = 350;
		this.oilLevel = 100;
		this.rpm = 0;
	}

	start() {
		this.rpm = 500;
	}

	stop() {
		this.rpm = 0;
	}

	accelerate() {
		if (this.rpm != 0) {
			this.rpm += 500
		}
	}

	decelerate() {
		if (this.rpm != 0) {
			this.rpm -= 500;
		}
	}

}

// let engine = new Engine();
//
// console.log("rpm:", engine.rpm);
// engine.start();
// console.log("rpm:", engine.rpm);
//
// engine.accelerate();
// console.log("rpm:", engine.rpm);
//
// engine.accelerate();
// console.log("rpm:", engine.rpm);
//
// engine.decelerate();
// console.log("rpm:", engine.rpm);
//
// engine.stop();
// console.log("rpm:", engine.rpm);



class Racecar{
	constructor(engine){
		this.engine = engine;
		this.speed = 0;
		this.gear = 1;
	}

	start() {
		this.engine.start();
	}

	shiftUp() {
		if (this.gear < 5) {
			this.gear++;
			this.speed = this.calculateSpeed();
		}
	}

	shiftDown() {
		if (this.gear > 1) {
			this.gear--;
			this.speed = this.calculateSpeed();
		}
	}

	accelerate() {
		this.engine.accelerate();
		this.speed = this.calculateSpeed();
	}

	decelerate() {
		this.engine.decelerate();
		this.speed = this.calculateSpeed();
	}

	calculateSpeed() {
		return this.engine.rpm * this.gear / 50
	}
}

let engine = new Engine();
let racecar = new Racecar(engine);

racecar.start();
console.log("accelerating");
racecar.accelerate();
console.log("speed:", racecar.speed);

console.log("accelerating");
racecar.accelerate();
console.log("speed:", racecar.speed);

console.log("shifting Up");
racecar.shiftUp();
console.log("speed:", racecar.speed);

console.log("shifting Down");
racecar.shiftDown();
console.log("speed:", racecar.speed);
