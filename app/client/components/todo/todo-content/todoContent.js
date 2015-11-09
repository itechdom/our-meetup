//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./todoContent.view.js');
var actions = require('./todoContent.actions.js');


class todoMain{

    constructor(){
		this.view = view;
		this.actions = actions;
    }
}
module.exports = new todoMain();
