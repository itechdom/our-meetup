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
var zRepeat = require('../zRepeat/zRepeat.js');


class todoMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		this.model = model;

		//we can make it into a better component by enabling passing of multiple
		//actions
		zRepeat.view.render([{actions:actions.dataLoaded$,view:view},{actions:todoContent.actions.dataLoaded$,view:todoContent.view}]);

		actions.request$.subscribe(()=>{
			model.getTodo().then(function(data){
				view.render(data);
				dispatcher.customEvent.emit('todo.dataLoaded$',data)
			});
		});
		spinner.model.registerComponent(this);

	}
}
module.exports = new todoMain();
