//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('../todo.actions.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var dispatcher = require('../../dispatcher/dispatcher.js');


class todoView{

	constructor() {

		this.template = "todo";

		actions.dataLoaded$.subscribe(()=>{
			var content = require('./todoFooter.html');
			$('todo-footer').html(content);
		});

	}
}

module.exports = new todoView();
