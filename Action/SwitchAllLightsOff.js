var SwitchAllLightsOffAction = function()
{
};

SwitchAllLightsOffAction.prototype.perform = function(runningSequence, callback)
{
	var x = runningSequence.getSequencer().getLights(),
		lights = [],
		i;
	
	//Create a copy of the lights object (into an array to make things easier)
	for(i in x)
	{
		lights.push(x[i]);
	}
	
	var turnOff = function()
	{
		if(lights.length <= 0)
		{
			callback();
		}
		else
		{
			var light = lights.shift();
			light.switch(false, turnOff);
		}	
	}
	
	turnOff();
};


module.exports = SwitchAllLightsOffAction;