import angular from 'angular';
import uiRouter from 'angular-ui-router';
import codeSamplerComponent from './codeSampler.component.js';

	let codeSampler = angular.module('codeSampler', [
			])
		.directive('codeSampler',codeSamplerComponent)

	export default codeSampler;
