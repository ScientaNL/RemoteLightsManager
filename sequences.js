var Sequence = require('./Sequence'),
	Actions = {
		Switch: require('./Action/Switch'),
		SwitchAllLightsOff: require('./Action/SwitchAllLightsOff'),
		Wait: require('./Action/Wait'),
		Goto: require('./Action/Goto')
	};

module.exports = [
	new Sequence('rood-oranje-groen', "Knipper Rood-Oranje-Groen")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('green', false)),

	new Sequence('rood-knipperlicht', "Rood knipperlicht")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Goto(1)),

	new Sequence('oranje-knipperlicht', "Oranje knipperlicht")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Goto(1)),
	
	new Sequence('groen-knipperlicht', "Groen knipperlicht")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Wait(1000))
		.addAction(new Actions.Goto(1)),
		
	new Sequence('loop-rood-oranje-groen', "Loop Rood-Oranje-Groen")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Goto(1)),
		
	new Sequence('loop-rood-oranje-groen-slow', "Loop Rood-Oranje-Groen (Langzaam)")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(3000))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(3000))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(3000))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Goto(1)),		
		
	new Sequence('groen-oranje-rood', "Groen Oranje Rood")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('red', false)),
		
	new Sequence('Nederlands-verkeerslicht', "Nederlands verkeerslicht")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(1000*30))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(1000*4))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(1000*60))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Goto(1)),		
		
	new Sequence('disco', "Disco :-)")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Switch('orange', false))		
		.addAction(new Actions.Goto(1)),
		
	new Sequence('slowloop', "Slow loop")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(1000*60*5))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Wait(1000*60*5))
		.addAction(new Actions.Switch('orange', false))
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Wait(1000*60*5))
		.addAction(new Actions.Switch('red', false))		
		.addAction(new Actions.Goto(1)),
		
	new Sequence('lightred', "Rode lamp aan")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('red', true)),
		
	new Sequence('lightorange', "Oranje lamp aan")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('orange', true)),
		
	new Sequence('lightgreen', "Groen lamp aan")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('green', true)),
		
	new Sequence('redgreenorange-mix', "Rood groen oranje Mix")
		.addAction(new Actions.SwitchAllLightsOff())
		.addAction(new Actions.Switch('red', true))
		.addAction(new Actions.Switch('green', true))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('red', false))
		.addAction(new Actions.Switch('orange', true))
		.addAction(new Actions.Switch('green', false))
		.addAction(new Actions.Wait(600))
		.addAction(new Actions.Switch('orange', false))	
		.addAction(new Actions.Goto(1)),
	
	new Sequence('alloff', "Alle lampen uit")
		.addAction(new Actions.SwitchAllLightsOff())
];