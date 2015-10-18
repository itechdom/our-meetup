import angular from 'angular';
let mainTemplate = require('./header.html');
let template = require('src/views/molecules/header/header.html');

let headerDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let headerComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};

let header = angular.module('header', [
		])
.directive('mwiHeaderDocs',headerDocsComponent)
.directive('mwiHeader',headerComponent)

export default header;
