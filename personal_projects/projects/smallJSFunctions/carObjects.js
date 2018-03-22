var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}

};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,

	start: function() {
		if(this.fuel === 0){
			alert("need to add fuel!")
		} else {
			this.started = true;
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
			alert("Uh oh out of fuel.");
			this.stop();
			}
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}

};
