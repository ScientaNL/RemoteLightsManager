var WaitAction = function(duration)
{
	this.duration = duration;
};

WaitAction.prototype.perform = function(runningSequence, callback)
{
	console.log("ik ben aan het wachten");
	
	setTimeout(callback, this.duration);
};

module.exports = WaitAction;