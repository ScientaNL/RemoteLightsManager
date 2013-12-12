var SwitchAction = function(lightId, switchTo)
{
	this.lightId = lightId;
	this.switchTo = switchTo;
};

SwitchAction.prototype.perform = function(runningSequence, callback)
{
	var light = runningSequence.getSequencer().getLight(this.lightId);
	
	light.switch(this.switchTo, callback);
};


module.exports = SwitchAction;