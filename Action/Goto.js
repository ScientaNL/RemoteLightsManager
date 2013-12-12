var GotoAction = function(gotoIndex)
{
	this.gotoIndex = gotoIndex;
};

GotoAction.prototype.perform = function(runningSequence, callback)
{
	runningSequence.setIndex(this.gotoIndex);
	
	setTimeout(callback, 0);
};

module.exports = GotoAction;