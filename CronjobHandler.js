var Cronjob = require('cron').CronJob,
	moment = require('moment');

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
		}).bind(this), null, false, "Europe/Amsterdam");
	
	this.jobs.push({job: job, sequenceId: sequenceId});
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
		this.jobs[i].job.start();
	}
};

CronjobHandler.prototype.getNextTicks = function() {
	
	var nextTicks = [], now = moment();
	
	for(var i=0,u=this.jobs.length;i<u;i++)
	{
		var nextTick = this.jobs[i].job.cronTime.sendAt();
		nextTicks.push({nextTickTime: nextTick, nextTickTimestampOffset: nextTick.format('x') - now.format('x'), sequenceId: this.jobs[i].sequenceId});
	}

	nextTicks.sort(function(a,b) {
			if(a.nextTickTime.format('x') < b.nextTickTime.format('x'))
			{
				return -1;
			}
			else if(a.nextTickTime.format('x') > b.nextTickTime.format('x'))
			{
				return 1;
			}
			else
			{
				return 0;
			}
		});
	
	return nextTicks;
};

module.exports = CronjobHandler;
