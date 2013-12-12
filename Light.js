var exec = require('child_process').exec;

var Light = function(lightId)
{
	this.lightId = lightId;
	this.on = false;
	
	this.switchOnCommand = null;
	this.switchOffCommand = null;
	
	this.timeout = 10;
};

Light.prototype.setSwitchOnCommand = function(command)
{
	this.switchOnCommand = command;
};

Light.prototype.setSwitchOffCommand = function(command)
{
	this.switchOffCommand = command;
};

Light.prototype.switch = function(switchTo, callback)
{
	this.on = switchTo;

	exec( ((switchTo === true) ? this.switchOnCommand : this.switchOffCommand), this.command, this.switchedTo.bind(this, switchTo, callback));	
	
//	setTimeout(callback, this.timeout);
};

Light.prototype.switchedTo = function(switchedTo, callback, error, stdout,stderr)
{	
	console.log(this.on === true ? "Lamp %s staat aan" : "Lamp %s staat uit", this.lightId);
	
	setTimeout(callback);
};

Light.prototype.getLightId = function()
{
	return this.lightId;
};

Light.prototype.isOn = function()
{
	return this.on;
};

module.exports = Light;