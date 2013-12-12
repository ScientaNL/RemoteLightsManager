var STATE_INACTIVE = "STATE_INACTIVE",
	STATE_RUNNING = "STATE_RUNNING",
	STATE_CANCELLED = "STATE_CANCELLED",
	STATE_COMPLETED = "STATE_COMPLETED";

var events = require('events');

var RunningSequence = function(sequence, sequencer)
{
	this.sequence = sequence;
	this.sequencer = sequencer;
	this.index = 0;
	
	this.state = STATE_INACTIVE;
	
	events.EventEmitter.call(this);
};

RunningSequence.prototype.__proto__ = events.EventEmitter.prototype;

RunningSequence.prototype.run = function()
{	
	if(this.state !== STATE_RUNNING && this.state !== STATE_INACTIVE)
	{
		throw "Cannot run cancelled or completed sequence";
	}
	
	var actions = this.sequence.getActions(),
		action = actions[this.index];
	
	this.state = STATE_RUNNING;
	action.perform(this, this.runnedCallback.bind(this));	
};

RunningSequence.prototype.runnedCallback = function()
{
	var actions = this.sequence.getActions();
	
	if(this.state !== STATE_RUNNING)
	{
		return;
	}
	else if(actions.length-1 > this.index)
	{
		this.index++;		
		this.run();		
	}
	else
	{
		this.state = STATE_COMPLETED;
		console.log("Sequence completed");
		this.emit('complete');
	}
};

RunningSequence.prototype.getSequence = function()
{
	return this.sequence;
};

RunningSequence.prototype.getSequencer = function()
{
	return this.sequencer;
};

RunningSequence.prototype.setIndex = function(index)
{
	this.index = index-1;
};

RunningSequence.prototype.cancel = function()
{
	this.state = STATE_CANCELLED;
	
	console.log("Sequence cancelled");
	this.emit('cancel');
};

RunningSequence.prototype.getState = function()
{
	return this.state;
};

module.exports = RunningSequence;