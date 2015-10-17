'use strict';

/**
 * @ngdoc controller
 * @name DefaultCtrl
 * @module patternLibrary
 *
 * @description
 * Adds the necessary data objects to the scope so that
 * we can properly display page links.
 */
//I have commented these dependencies out

let docsCtrl = function DefaultCtrl($scope,clientCoreColors, docsLinks, $state){

 var currentModuleName = $state.current.activeWhen;
 $scope.coreColors = clientCoreColors.palette;
 $scope.modules = docsLinks;
  angular.forEach(docsLinks, function (link) {
    if (link.activeWhen == currentModuleName) {
      $scope.currentModule = link;
      return true;
    }
  });
}

export default docsCtrl;
