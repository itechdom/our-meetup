var Rx = require('rx');

class todoModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getTodo(){
		return $.get("http://localhost:4000/todo");
	}
	insertTodo(todo){

	}
	updateTodo(id){

	}
	deleteTodo(id){

	}
}
module.exports = new todoModel();
