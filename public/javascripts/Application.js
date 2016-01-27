var Application = function(lights, sequences)
{
	this.lights = {};
	
	this.bindings = {
			application: this,
			
			runningSequenceLabel: ko.observable(null),
			acceptEventedSequences: ko.observable(true),
			
			lights: [],
			sequences: [],
			cronjobs: ko.observableArray()
		};
	
	//Transform the lights to an array
	var light, i;
	for(i in lights)
	{
		light = ko.mapping.fromJS(lights[i]);
		this.bindings.lights.push(light);
		this.lights[lights[i].lightId] = light;
	}
	
	for(i in sequences)
	{
		this.bindings.sequences.push(sequences[i]);
	}
		
	ko.applyBindings(this.bindings);
	
	this.updateStatus();
	this.updateCronjobs();
};

Application.prototype.getLightClass = function(light)
{
	var classes = [light.lightId()];
	(light.on() === true) && classes.push('on')
	
	return classes.join(" ");
};

Application.prototype.updateStatus = function()
{
	jQuery.getJSON('/status' + "?" + Math.random(), this.onGetStatusCompleted.bind(this))
		.fail(this.onGetStatusFailed.bind(this));
};

Application.prototype.onGetStatusCompleted = function(result)
{	
	jQuery(document.body).removeClass('offline');
	
	var lights = result.lights,
		i;
	
	for(i in lights)
	{
		if(this.lights[i] === undefined)
		{
			throw "unknown light retrieved from the server";
		}
		
		this.lights[i].on(lights[i].on);
	}
	
	if(result.runningSequence != undefined && result.runningSequence.label != undefined)
	{
		this.bindings.runningSequenceLabel(result.runningSequence.label);
	}
	else
	{
		this.bindings.runningSequenceLabel("-");
	}
	
	this.bindings.acceptEventedSequences(result.acceptEventedSequences);
	
	setTimeout(this.updateStatus.bind(this), 100);
};

Application.prototype.onGetStatusFailed = function()
{
	jQuery(document.body).addClass('offline');
	setTimeout(this.updateStatus.bind(this), 5000);
};

Application.prototype.updateCronjobs = function()
{
	jQuery.getJSON('/getNextCronTicks', this.onGetNextCronjobsCompleted.bind(this))
//		.fail(this.onGetStatusFailed.bind(this));
};

Application.prototype.onGetNextCronjobsCompleted = function(result)
{
	this.bindings.cronjobs(result);
	console.log(result);
};

Application.prototype.startSequence = function(sequence, event)
{
	var target = jQuery(event.target);
	
	target.addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
			target.removeClass('animated wobble');	
		});

	
	jQuery.getJSON('/startSequence/' + ko.unwrap(sequence.sequenceId) + "?" + Math.random() );
};

Application.prototype.toggleLight = function(light)
{
//console.log('/toggleLight/' + ko.unwrap(light.lightId) );
	jQuery.getJSON('/toggleLight/' + ko.unwrap(light.lightId) + "?" + Math.random() );
};

Application.prototype.toggleAcceptEventedSequences = function()
{
	jQuery.getJSON('/toggleEventedSequences' + "?" + Math.random());
};