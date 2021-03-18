const myInfos= require('./information.js');


var cowsay = require("cowsay");

console.log(cowsay.say({
	text : myInfos.myInfos(),
	e : "oO",
	T : "U "
}));

// or cowsay.think()

