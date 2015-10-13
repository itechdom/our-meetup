'use strict';

/**
 * @ngdoc directive
 * @name colors
 * @module patternLibrary
 *
 * @description
 * Creates a color "swatch" that can be displayed on the page,
 * along with color name and value information. Expects an array
 * of color objects in the following form:
 [
 {
   color   : 'Color Name',
   hex   : '#FFFFFF'
 }
 ]
 */
let template = require("./colors.html");
let colors =   function () {
    return {
      restrict: 'E',
      template:template ,
      scope: {
        colorData: '='
      },
      link: function(scope) {

        // Parse out rgb values from the hex value
        var rgbValues = scope.colorData.hex.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        rgbValues.shift();
        for(var i = 0; i < rgbValues.length; ++i) {
          rgbValues[i] = parseInt(rgbValues[i], 16);
        }
        scope.colorData.rgb = "rgb( " + rgbValues.join(', ') + ' )';
      }
    };
  };
export default colors;
