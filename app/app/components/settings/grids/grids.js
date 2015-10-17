import angular from 'angular';
let mainTemplate = require('./grids.html');
let template = require('src/views/settings/grids/grids.html');

let gridsDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let gridsComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let grids = angular.module('grids', [
		])
.directive('mwiGridsDocs',gridsDocsComponent)
.directive('mwiGrids',gridsComponent)

export default grids;
