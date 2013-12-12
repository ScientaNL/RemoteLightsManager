var Light = require('./Light');

var lights = module.exports = {
		'red': new Light('red'), 
		'orange': new Light('orange'), 
		'green': new Light('green')
	};

// Add switch commands 
lights.red.setSwitchOnCommand("sleep .1");
lights.red.setSwitchOffCommand("sleep .1");

lights.orange.setSwitchOnCommand("sleep .1");
lights.orange.setSwitchOffCommand("sleep .1");

lights.green.setSwitchOnCommand("sleep .1");
lights.green.setSwitchOffCommand("sleep .1");