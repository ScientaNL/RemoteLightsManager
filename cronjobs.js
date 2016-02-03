module.exports = [
		['00 30 08 * * 1-5', 'disco'], //De dag begint :-) Doe maar wat leuks
		['20 30 08 * * 1-5', 'lightgreen'], //En na 30 seconden, ga naar groen toe
		
		['00 30 12 * * 1-5', 'groen-knipperlicht'], //Pauze! Doe maar wat leuks
		['00 31 12 * * 1-5', 'slowloop'], //En na 1 minuut, doe maar even rustig aan
		['00 00 13 * * 1-5', 'lightorange'], //Pauze is klaar 13:00
		
		['00 00 17 * * 1-5', 'redgreenorange-mix'], //Doe maar wat leuks :-)
		['30 00 17 * * 1-5', 'lightgreen'], //En na 30 seconden de groen lamp aan
		
		['00 27 17 * * *', 'alloff'] //17:15 alles uit
	];