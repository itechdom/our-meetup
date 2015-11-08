//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var todoView = require("../todo/todo.view.js");

//I can also decorate the view here 
// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed directives?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general


class todoExtendedView {

       render(){

	       var ht = require('./todoExtended.html');
	       $('todo-extended').append(ht);

	       //I have to add the element I am attaching to ...
	       todoView.render('data','todo-extended');
       }
       constructor() {



       }
}

module.exports = new todoExtendedView();
