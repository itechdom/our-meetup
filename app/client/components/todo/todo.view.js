//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var dispatcher = require('../dispatcher/dispatcher.js');


// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed directives?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class todoView {

    //abstracts stuff here
    getTodo(){
       return model.getTodo;
    }
    constructor() {

        //I can combine latest here and send back the template with its data
        actions.request$.subscribe(()=> {

                var ht = require('./todo.html');
                //
                ////loading the main view ... there should be a module that handle compiling the view and recompiling it
                // the compile function takes in an object and a view and applies them to each other?
                $('todo').html(ht);
            
                //get the data ...
                model.getTodo();
        });

        actions.dataLoaded$.subscribe((data)=> {
		console.log(data,"from todo.view");

        });

    }
}

module.exports = new todoView();
