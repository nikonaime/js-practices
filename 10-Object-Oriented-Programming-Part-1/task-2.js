function CoffeeMachine(power, capacity) {
    
	this.waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	let self = this;
    let timerId = 0;
    const innerPower = power;

    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
    };
    this.getPower = function() {
        return innerPower;
    }

    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    function onReady() {
		console.log('Coffee is ready!');
	}
	
    this.run = function() {
		timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
        clearTimeout(timerId);
        console.log('Coffee is not ready!');
        timerId = void 0;
    }
}