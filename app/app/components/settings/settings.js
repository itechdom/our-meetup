import angular from 'angular';
import uiRouter from 'angular-ui-router';

//Or it can be more generic
let mainTemplate = require('./settings.html');

//import documentation components
import colors from './colors/colors.js';
import typography from './typography/typography.js';
import grids from './grids/grids.js';

//sidebar links
let settingsLinks = require('./settings.links.js');


let settingsComponent = function(){
	return {
			template:mainTemplate,
			restrict: 'E',
			replace: true,
			controller: settingsCtrl
	};
};

let settings = angular.module('settings', [
		uiRouter,
		colors.name,
		typography.name,
		grids.name
		])
.directive('mwiSettings',settingsComponent)
.value('settingsLinks',settingsLinks)
.controller(settingsCtrl)

function settingsCtrl($scope,settingsLinks){
	$scope.settingsLinks = settingsLinks;
}


export default settings;
