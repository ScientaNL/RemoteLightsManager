var Light = require('./Light');

var lights = module.exports = {
		'red': new Light('red'), 
		'orange': new Light('orange'), 
		'green': new Light('green')
	};

// Add switch commands
if(process.env.environment === "production")
{
	var prefix = "sudo /home/pi/kaku B ";
	
	lights.red.setSwitchOnCommand(prefix + " 4 on");
	lights.red.setSwitchOffCommand(prefix + " 4 off");

	lights.orange.setSwitchOnCommand(prefix + " 5 on");
	lights.orange.setSwitchOffCommand(prefix + "  5 off");

	lights.green.setSwitchOnCommand(prefix + " 6 on");
	lights.green.setSwitchOffCommand(prefix + " 6 off");
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