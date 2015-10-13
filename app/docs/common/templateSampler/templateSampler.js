import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateSamplerComponent from './templateSampler.component.js';
import codeSampler from './codeSampler/codeSampler.js';

	let templateSampler = angular.module('templateSample', [
			codeSampler.name
			])
		.directive('templateSampler',templateSamplerComponent)

	export default templateSampler;
