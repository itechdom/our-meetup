import sideBarComponent from './sideBar.component.js';
require('angular-scroll');

	let sideBar = angular.module('sideBar', 
			[
			'duScroll'
			])
		.directive('sideBar',sideBarComponent)

	export default sideBar;
