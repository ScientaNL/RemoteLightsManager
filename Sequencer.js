var Sequence = require('./Sequence'),
	RunningSequence = require("./RunningSequence"),
	SwitchAction = require('./Action/Switch');

var Sequencer = function() {
	this.lights = {};
	this.sequences = {};
	
	this.activeSequence = null;
	
	this.acceptEventedSequences = true;
};

Sequencer.prototype.setLights = function(lights)
{
	this.lights = lights;
};

Sequencer.prototype.getLights = function()
{
	return this.lights;
};

Sequencer.prototype.addSequence = function(sequence)
{
	this.sequences[sequence.getSequenceId()] = sequence; 
};

Sequencer.prototype.addSequences = function(sequences)
{
	for(var i=0,u=sequences.length;i<u;i++)
	{
		this.addSequence(sequences[i]);
	}
}

Sequencer.prototype.getLight = function(lightId)
{
	if(this.lights[lightId] === undefined)
	{
		throw "Cannot find light " + lightId;
	}
	
	return this.lights[lightId];
};

Sequencer.prototype.getSequence = function(sequenceId)
{
	if(this.sequences[sequenceId] === undefined)
	{
		throw "Cannot find sequence " + sequenceId;
	}
	
	return this.sequences[sequenceId];
};

Sequencer.prototype.getSequences = function()
{
	return this.sequences;
};

Sequencer.prototype.startSequence = function(sequence, callback)
{
	if(sequence instanceof Sequence === false)
	{
		sequence = this.getSequence(sequence);
	}
	
	(this.activeSequence instanceof RunningSequence === true) && this.activeSequence.cancel();
	
	console.log("Start seqence");
	
	this.activeSequence = new RunningSequence(sequence, this);
	this.activeSequence.on('complete', this.unsetActiveSequence.bind(this));
	this.activeSequence.on('cancel', this.unsetActiveSequence.bind(this));
	
	callback && this.activeSequence.on('complete', callback);
	
	this.activeSequence.run();
};

Sequencer.prototype.unsetActiveSequence = function()
{
	this.activeSequence = null;
};

Sequencer.prototype.getRunningSequence = function()
{
	return (this.activeSequence != null) ? this.activeSequence.getSequence() : null;
};	

Sequencer.prototype.toggleLight = function(lightId)
{
	var light = this.getLight(lightId),
		sequence = new Sequence('toggleLight');
	
	sequence.addAction( new SwitchAction(light.getLightId(), (light.isOn() === true) ? false : true) );
	this.startSequence(sequence);
};

Sequencer.prototype.acceptsEventedSequences = function()
{
	return this.acceptEventedSequences;
};

Sequencer.prototype.setAcceptEventedSequences = function(acceptEventedSequences)
{
	this.acceptEventedSequences = acceptEventedSequences;
};

module.exports = Sequencer;
