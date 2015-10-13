import angular from 'angular';
import uiRouter from 'angular-ui-router';
import highlightSyntaxComponent from './highlightSyntax.component.js';

	let highlightSyntax = angular.module('highlightSyntax', [
			])
		.directive('highlightSyntax',highlightSyntaxComponent)

	export default highlightSyntax;
