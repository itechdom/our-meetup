import angular from 'angular';
let mainTemplate = require('./lists.html');
let template = require('src/views/atoms/lists/lists.html');

let listsDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let listsComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let lists = angular.module('lists', [
		])
.directive('mwiListsDocs',listsDocsComponent)
.directive('mwiLists',listsComponent)

export default lists;
