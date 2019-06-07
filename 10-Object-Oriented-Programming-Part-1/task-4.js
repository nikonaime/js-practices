function CoffeeMachine(power, capacity) {

	this.waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	let self = this;
    let timerId = 0;
    const innerPower = power;

    self = this;

    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		self.waterAmount = amount;
    };
    
    this.addWater = function(amount) {
        self.setWaterAmount(self.waterAmount + amount);
    }
    
	this.getWaterAmount = function() {
		return self.waterAmount;
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
    
    this.setOnReady = function (f) {
        onReady = f;
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

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
	let amount = coffeeMachine.getWaterAmount();
	console.log( 'Coffee is ready: ' + amount + 'ml' ); 
});

coffeeMachine.run();