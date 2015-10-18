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

let appCtrl = function DefaultCtrl($scope, appLinks, $state){

 var currentModuleName = $state.current.activeWhen;
 $scope.modules = appLinks;
  angular.forEach(appLinks, function (link) {
    if (link.activeWhen == currentModuleName) {
      $scope.currentModule = link;
      return true;
    }
  });
}

export default appCtrl;
