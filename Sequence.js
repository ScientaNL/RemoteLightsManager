var Sequence = function(sequenceId, label)
{
	this.sequenceId = sequenceId;
	this.label = label;
	this.actions = [];
};

Sequence.prototype.getSequenceId = function()
{
	return this.sequenceId;
};

Sequence.prototype.addAction = function(action)
{
	this.actions.push(action);
	return this;
};

Sequence.prototype.getActions = function()
{
	return this.actions;
};

module.exports = Sequence;