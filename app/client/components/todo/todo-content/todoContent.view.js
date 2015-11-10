//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('../todo.actions.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


class todoContentView{

	render(){
		var content = require('./todoContent.html');
		$('todo-content').html(content);
	}
	constructor() {
		this.template = "todo-content";
	}
}

module.exports = new todoContentView();
