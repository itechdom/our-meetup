//this file represents ways to extend ui components
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todoExtended.actions.js');
var view = require('./todoExtended.view.js');


//the way I extend an element is mostly with data?
//Or change some internal operation

class todoMain{
	constructor(){
		//I need to intercept this view and modify it?
		//I can hook into actions 
		//and cancel the original event or defer it?
		//or decorate it?
		actions.request$.subscribe(()=>{
			view.render();
		})
	}
}
module.exports = new todoMain();
