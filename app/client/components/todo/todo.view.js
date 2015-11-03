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


// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed directives?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general


class todoView {

    constructor() {

        //I can combine latest here and send back the template with its data
        actions.request$.subscribe(()=> {

                var ht = require('./todo.html');

                //loading the main view ... there should be a module that handle compiling the view and recompiling it
                $('todo').html(ht);

                //get the data ...
                model.getTodo();
        });

        actions.dataLoaded$.subscribe((data)=> {


        });

    }
}

module.exports = new todoView();
