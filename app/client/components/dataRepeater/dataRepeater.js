//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
require("font-awesome/scss/font-awesome.scss");
var view = require('./dataRepeater.view.js');

class dataRepeaterMain {

    constructor() {
        this.view = view;
        this.model = model;
    }
}

module.exports = new dataRepeaterMain();

