var Light = require('./Light');

var lights = module.exports = {
		'red': new Light('red'), 
		'orange': new Light('orange'), 
		'green': new Light('green')
	};

// Add switch commands
if(process.env.environment === "production")
{
	var prefix = "sudo /home/pi/kaku 1 ";
	
	lights.red.setSwitchOnCommand(prefix + " 1 on");
	lights.red.setSwitchOffCommand(prefix + " 1 off");

	lights.orange.setSwitchOnCommand(prefix + " 2 on");
	lights.orange.setSwitchOffCommand(prefix + "  2 off");

	lights.green.setSwitchOnCommand(prefix + " 3 on");
	lights.green.setSwitchOffCommand(prefix + " 3 off");
}
else
{
	lights.red.setSwitchOnCommand("sleep .1");
	lights.red.setSwitchOffCommand("sleep .1");
	
	lights.orange.setSwitchOnCommand("sleep .1");
	lights.orange.setSwitchOffCommand("sleep .1");
	
	lights.green.setSwitchOnCommand("sleep .1");
	lights.green.setSwitchOffCommand("sleep .1");
}