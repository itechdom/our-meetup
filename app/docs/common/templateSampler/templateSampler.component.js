'use strict';

/**
 * @ngdoc directive
 * @name templateSampler
 * @module coreGuide
 *
 * @description
 * Generates a component with a responsive navigation, encapsulated iframe for sample code,
 * and code syntax highlighter
 *
 * @params
 * layout   -- Which layout to use from the templatesModule/layouts
 * template -- Which template to use from the templatesModule/templates (accepts subdirectories with dots: navigation.primary)
 * height   -- Override auto-height resizer with a custom height
 */


import template from './templateSampler.html';

let templateSamplerComponent =  function ($http, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        layout: '@', // defaults: index
        template: '@',
        height: '@'
      },
      template: template,
      link: function (scope, element, attrs) {
        if (scope.layout === undefined) {
          scope.layout = 'index';
        }

        scope.srcPath = 'templates/' + scope.template.replace(/\./g, '/') + '.html';

	//this will be routed from within templates
        scope.srcUrl = 'templates.html#/' + scope.layout + '/' + scope.template;
        scope.codeTabActive = false;

	var path = scope.template.replace(/\./g, '/'); 
	//var html = require('../../../templates/components/'+scope.template.replace(/\./g, '/') + '.html');

	scope.templateHtml = html;

        var wrapper = element.find('iframe');

        scope.formats = [
          { name: 'Desktop', width: '970px' },
          { name: 'Tablet', width: '640px' },
          { name: 'Mobile', width: '320px' }
        ];

        scope.changeFormat = function (format) {
          scope.currentFormat = format;
          scope.codeTabActive = false;

          wrapper.css({
            width: format.width
          });
        };

        scope.changeTab = function (name) {
          if (name === 'code') {
            scope.codeTabActive = true;
            scope.currentFormat = false;
          }
        };

        scope.changeFormat(scope.formats[0]);

        scope.resize = function () {
          var iframe = wrapper[0];
          var padding = 0;
          var frameHeight = 0;

          if (navigator.appVersion.indexOf('MSIE') > -1) {
            padding = 10;
          }

          if (attrs.height) {
            iframe.style.height = attrs.height;
            return;
          }
          else {

	    //TODO: figure out why angular.element fails to obtain outerHeight
            frameHeight = $(iframe).contents().height()

            // If not loaded yet, retry in a second
            if (frameHeight === 0) {
              $timeout(function () {
                scope.resize();
              }, 1000);
              return;
            }

            iframe.style.height = (frameHeight + padding) + 'px';
            scope.height = iframe.style.height;
          }
        };
      }
    };
  }

export default templateSamplerComponent;

