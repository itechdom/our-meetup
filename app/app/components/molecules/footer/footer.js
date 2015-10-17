import angular from 'angular';
let mainTemplate = require('./footer.html');
let template = require('src/views/molecules/footer/footer.html');

let footerDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let footerComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};

let footer = angular.module('footer', [
		])
.directive('mwiFooterDocs',footerDocsComponent)
.directive('mwiFooter',footerComponent)

export default footer;
