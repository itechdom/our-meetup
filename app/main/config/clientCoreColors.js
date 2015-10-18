'use strict';

/**
 * @ngdoc object
 * @name clientCoreColors
 * @module patternLibrary
 *
 * @description
 * Provides color values for client branding. Color names
 * and hex values contained in this object should mirror
 * the names and hex values of SCSS variables found in
 * `patternLibraryModule/client/scss/_variables.scss`.
 *
 * Currently, this process is manual in nature. Eventually
 * it would be nice to store the color variables in a way
 * that can be accessed by both Sass & Javascript.
 */
let colors =  {
  palette: [
    {
      color: 'Magenta',
      hex: '#820053'
    },
    {
      color: 'Navy',
      hex: '#002B5C'
    },
    {
      color: 'ARC Blue',
      hex: '#04559D'
    },
    {
      color: 'Medium Blue',
      hex: '#008BB0'
    },
    {
      color: 'Emerald',
      hex: '#22746C'
    },
    {
      color: 'Grass',
      hex: '#799F42'
    }
  ]
};
export default colors;
