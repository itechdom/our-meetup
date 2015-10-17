//grab template from src
//TODO: we can grab more base here and attach them?
//Or it can be more generic
let template = require('./base.html');

let baseLinks = require('./base.links.js');

let baseComponent = function(){
	return {
		template,
			restrict: 'E',
			replace: true,
			controller: baseCtrl
	};
};

let base = angular.module('base', [
		])
.directive('mwiBase',baseComponent)
.value('baseLinks',baseLinks)

function baseCtrl($scope,baseLinks){
	$scope.baseLinks = baseLinks;
}


export default base;

