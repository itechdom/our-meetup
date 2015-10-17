'use strict';

/**
 * @ngdoc directive
 * @name codeDrawer
 * @module patternLibrary
 *
 * @description
 * Creates a collapsible "drawer" out of a codeSample directive
 * instance.
 */
angular.module('coreGuide')
  .directive('codeDrawer', function() {
    return {
      restrict: 'A',
      scope: true,
      link: codeDrawerPostLink
    };
  });

function codeDrawerPostLink(scope, element) {
  var $code = element.find('.code-sample-code');

  if(!$code.length) {
    throw new Error('codeDrawer directive must be applied to a <code-sample> element');
  }

  element.addClass('drawer');
  $code.addClass('inactive');

  element.find('.code-sample-demo').on('click', function toggleActive() {
    $code.toggleClass('inactive');
  });

}