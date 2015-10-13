'use strict';

/**
 * @ngdoc directive
 * @name navBar
 * @module coreGuide
 *
 * @description
 * The `navBar` directive creates our navigation bar.
 * Eventually we should enable this to accept a list of links
 * as a parameter, and display them in the navigation
 * appropriately.
 */
import template from './navBar.html';

let navBarComponent = function(){
	return {
		template,
		restrict: 'A',
			replace: true,
			scope: {
				links: '=',
				active: '='
			},
			controller: NavBarCtrl
	};
};

function NavBarCtrl($scope,logo) {
	$scope.isActive = function (link) {
		return $scope.active == link.activeWhen;
	};
	$scope.logo = logo;
}
export default navBarComponent;
