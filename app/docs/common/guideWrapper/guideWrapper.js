import guideWrapperComponent from './guideWrapper.component.js';
import navbar from './navbar/navbar.js';
	let guideWrapper = angular.module('guideWrapper', [
			navbar.name
			])
		.directive('guideWrapper',guideWrapperComponent)

	export default guideWrapper;
