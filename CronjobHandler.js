var Cronjob = require('cron').CronJob;

var CronjobHandler = function(sequencer)
{
	this.sequencer = sequencer;
	this.jobs = [];
};

CronjobHandler.prototype.addCronjob = function(cron, sequenceId)
{
	var job = new Cronjob(cron, (function() {
			if(this.sequencer.acceptsEventedSequences() === true)
			{
				console.log("Start sequence door cronjob");
				this.sequencer.startSequence(sequenceId);
			}
		}).bind(this));
	
	this.jobs.push(job);
};

CronjobHandler.prototype.addCronjobs = function(items)
{
	for(var i=0,u=items.length;i<u;i++)
	{
		this.addCronjob(items[i][0], items[i][1]);
	}
};


CronjobHandler.prototype.start = function() {
	for(var i=0,u=this.jobs.length;i<u;i++)
	{
		this.jobs[i].start();
	}
}

module.exports = CronjobHandler;