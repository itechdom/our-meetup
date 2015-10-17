import angular from 'angular';
let mainTemplate = require('./tables.html');
let template = require('src/views/atoms/tables/tables.html');

let tablesDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let tablesComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let tables = angular.module('tables', [
		])
.directive('mwiTablesDocs',tablesDocsComponent)
.directive('mwiTables',tablesComponent)

export default tables;
