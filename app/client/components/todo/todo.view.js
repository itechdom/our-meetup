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


class todoView {

    constructor() {

        //I can combine latest here and send back the template with its data
        actions.request$.subscribe(()=> {

                var ht = require('./todo.raw.html');

                //loading the main view ...
                $('todo').html(ht);

                //get the data ...
                model.getTodo();
        });

        actions.dataLoaded$.subscribe((data)=> {



        });

    }
}

module.exports = new todoView();
