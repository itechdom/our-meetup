//grab template from src
//TODO: we can grab more all here and attach them?
//Or it can be more generic
let template = require('./all.html');

let allLinks = require('./all.links.js');

import atoms from '../atoms/atoms.js';
import molecules from '../molecules/molecules.js';

let allComponent = function(){
	return {
		template,
			restrict: 'E',
			replace: true,
			controller: allCtrl
	};
};

let all = angular.module('all', [
		atoms.name,
		molecules.name
		])
.directive('mwiAll',allComponent)
.value('allLinks',allLinks)

function allCtrl($scope,allLinks){
	$scope.allLinks = allLinks;
}
export default all;
