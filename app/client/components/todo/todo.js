//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var actions = require("./todo.actions.js");
require("./todo.scss");
var spinner = require('../spinner/spinner.js');
var todoContent = require('./todo-content/todoContent.js');
var todoFooter = require('./todo-footer/todoFooter.js');
var todoHeader = require('./todo-Header/todoHeader.js');
var dispatcher = require('../dispatcher/dispatcher.js');

class todoMain{

	constructor(){
		this.actions = actions;
		this.view = view;
		this.views = [todoContent,todoFooter,todoHeader];
		this.model = model;
		actions.request$.subscribe(()=>{
			model.getTodo().then(function(data){
				view.render(data);
				dispatcher.customEvent.emit('todo.dataLoaded$',data)
			});

		})
		spinner.model.registerComponent(this);
	}
}
module.exports = new todoMain();
