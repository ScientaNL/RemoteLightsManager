var LightsController = function(sequencer, cronjobHandler)
{
	this.sequencer = sequencer;
	this.cronjobHandler = cronjobHandler;
};

LightsController.prototype.index = function(req, res)
{
	res.render('index', {
			lights: this.sequencer.getLights(),
			sequences: this.sequencer.getSequences()
		});
};

LightsController.prototype.status = function(req, res)
{
	res.json({
			'lights': this.sequencer.getLights(),
			'runningSequence': this.sequencer.getRunningSequence(),
			'acceptEventedSequences': this.sequencer.acceptsEventedSequences()
		});
};

LightsController.prototype.startSequence = function(req, res)
{
	try
	{
		this.sequencer.startSequence( req.params.sequenceId )
		res.json(true);
	}
	catch(e)
	{
		res.json(false);
	}
};

LightsController.prototype.toggleLight = function(req, res)
{
	try
	{
		this.sequencer.toggleLight ( req.params.lightId )
		res.json(true);
	}
	catch(e)
	{
		res.json(false);
	}
};

LightsController.prototype.toggleEventedSequences = function(req, res)
{
	this.sequencer.setAcceptEventedSequences((this.sequencer.acceptsEventedSequences() === true) ? false : true);
	
	res.json( this.sequencer.acceptsEventedSequences() );
};

LightsController.prototype.getNextCronTicks = function(req, res)
{
	res.json( this.cronjobHandler.getNextTicks() );
};

module.exports = LightsController;