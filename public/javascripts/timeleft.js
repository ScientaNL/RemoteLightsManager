ko.bindingHandlers.timeleft = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
	{
	
	},
	
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
	{
		var value = ko.unwrap(valueAccessor()),
			offsettedTime = moment().add(value, 'ms'),
			callback = function() {
					element.text(offsettedTime.fromNow());			
				},
			id;
		
		element = jQuery(element);
		
		id = setInterval(callback, 1000);
		callback();
		
		ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
				clearInterval(id);
			});
	}
};