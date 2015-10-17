import angular from 'angular';
let mainTemplate = require('./colors.html');
let template = require('src/views/settings/colors/colors.html');

let colorsDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let colorsComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let colors = angular.module('colors', [
		])
.directive('mwiColorsDocs',colorsDocsComponent)
.directive('mwiColors',colorsComponent)

export default colors;
