//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var dispatcher = require('../dispatcher/dispatcher.js');
var Vue = require('vue');


// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed directives?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class todoView {

	render(){

		var ht = require('./todo.html');
		$('todo').html(ht);

		//initialize Vue
		var demo = new Vue({
			el: '#demo',
		    data: {
			    message: 'Hello Vue.js!'
		    }
		});

	}
	constructor() {

	}
}

module.exports = new todoView();
