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
var React = require('react');
var ReactDOM = require('react-dom');


class todoView {

    constructor() {

        //I can combine latest here and send back the template with its data
        actions.request$.subscribe(()=> {
            $.get('./app/client/components/todo/todo.html', function (data) {

                //loading the main view ...
                $('todo').html(data);

                //loading react component
                var view = require('./todo.view.jsx');
                ReactDOM.render(React.createElement(view,null),document.getElementById("example"));
                dispatcher.customEvent.emit('viewLoaded$', data);

            });
            model.getTodo();
        });

        actions.dataLoaded$.delay(100).subscribe((data)=> {
            var view = require('./todo.view.jsx');
            ReactDOM.render(
                React.createElement(view,{'data':data}),
                document.getElementById("example")
            );
        });

    }
}

module.exports = new todoView();
