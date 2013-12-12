var Cronjob = require('cron').CronJob,
	fs = require('fs')

module.exports = function(sequencer, directory, crontime, timeWindow)
{
	throw "Not implemented yet"
	
	
	new Cronjob('32 23 * * *', function() {
			console.log("start evented file cronjob");
			
			var directory = "./test",
				currentFiles = fs.readdirSync(directory),
				watcher,
				timeout;
			
			for(var i=0,u=currentFiles.length;i<u;i++)
			{
				fs.unlinkSync(directory + "/" + currentFiles[i]);
			}
			
			watcher = fs.watch(directory, {persistent: false}, function(event, filename) {
				    var path = directory + "/" + filename;

				    if(fs.existsSync(path) === true)
			    	{
					    watcher.close();
					    watcher = null;
				    	fs.unlinkSync(path);
				    	
				    	clearTimeout(timeout);
				    	
				    	console.log("File activity found in evented file cronjob acceptance window. Start sequence");
				    	sequencer.startSequence("rood-oranje-groen");
			    	}
				});
			
			timeout = setTimeout(function() {
				console.log("Close evented file cronjob acceptance window");
				
				watcher.close();
				watcher = null;
			}, 2.5 * 60 * 60 * 1000);
		}, null, true);
};