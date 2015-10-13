'use strict';

/**
 * @ngdoc directive
 * @name codeSampler
 * @module coreGuide
 *
 * @description
 * Takes the binded `html` attribute and loads it into the syntax highlighter
 */
import template from './codeSampler.html';
let codeSamplerComponent = function () {
    return {
      restrict: 'E',
      template: template,
      scope: {
        html: '='
      },
      link: function (scope, element, attrs) {
        scope.$watch('html', function (value) {
          if (value) {
            element.find('code').text(value);
          }
        });
      }
    };
  };
export default codeSamplerComponent;
