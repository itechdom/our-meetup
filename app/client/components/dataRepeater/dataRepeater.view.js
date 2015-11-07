//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./dataRepeater.actions.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

class dataRepeaterView{

	constructor() {
	}
	//this would be a remote control to all the components registered
	//meaning: it will run all the components one by one
	// the reason it's not running right away is because it has to create
	//the observer first, so the second time around it will fire
}

module.exports = new dataRepeaterView();
