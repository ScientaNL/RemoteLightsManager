module.exports = [
		['0 08 30 * * 1-5', 'disco'], //De dag begint :-) Doe maar wat leuks
		['20 08 30 * * 1-5', 'lightgreen'], //En na 30 seconden, ga naar groen toe
		
		['0 12 30 * * 1-5', 'groen-knipperlicht'], //Pauze! Doe maar wat leuks
		['0 12 31 * * 1-5', 'slowloop'], //En na 30 seconden, doe maar even rustig aan
		['0 13 00 * * 1-5', 'lightorange'], //En na 30 seconden de groen lamp aan
		
		['0 00 17 * * 1-5', 'redgreenorange-mix'], //Doe maar wat leuks :-)
		['30 00 17 * * 1-5', 'lightgreen'], //En na 30 seconden de groen lamp aan
		
		['0 15 17 * * *', 'alloff'] //17:15 alles uit
	];