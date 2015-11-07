'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')


class actionMain{

    constructor(){
        return {
            request$: clientActions['changeRoute$'].filter((d)=> {
                return d == "/todo";
            }),
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'todo.viewLoaded$'),
            dataLoaded$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.dataLoaded$'),
	    //remote control actions
	    addTodo$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.addTodo$')
        }
    }
}
module.exports = new actionMain();
