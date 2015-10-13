import angular from 'angular';
let mainTemplate = require('./typography.html');
let template = require('src/views/settings/typography/typography.html');

let typographyDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let typographyComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let typography = angular.module('typography', [
		])
.directive('mwiTypographyDocs',typographyDocsComponent)
.directive('mwiTypography',typographyComponent)

export default typography;
