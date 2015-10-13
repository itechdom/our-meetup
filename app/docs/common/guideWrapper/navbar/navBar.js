import navbarComponent from './navbar.component.js';

//dependant components
	let navbar = angular.module('navbar', [])
		.directive('navBar',navbarComponent)

	export default navbar;
