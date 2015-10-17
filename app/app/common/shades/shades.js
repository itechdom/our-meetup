'use strict';

/**
 * @ngdoc directive
 * @name shades
 * @module patternLibrary
 *
 * @description
 * Creates a block of graded color shades, given an
 * object in the following form:
 {
  displayName: 'My Color',
  data: [
    {
      weight : '100',
      hex : '#FFFFFF'
    },
    {
      weight: '200',
      hex: '#000000'
    }
  ]
}
 * "Weight" denotes the level of lightness/darkness; higher
 * numbers indicate a darker shade.
 */
angular.module('coreGuide')
  .directive('shadeGroup', function () {
    return {
      restrict: 'E',
      templateUrl: 'coreGuideModule/directives/shades/shades.html',
      scope: {
        shadesData: '='
      }
    };
  });