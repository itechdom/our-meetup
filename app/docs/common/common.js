'use strict';


/**
 * @ngdoc overview
 * @name coreGuide
 * @module coreGuide
 *
 * @description
 * Main module of the application. This should only include
 * modules needed for this application. No actual logic
 * should live in here
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import guideWrapper from './guideWrapper/guideWrapper.js';
import sidebar from './sidebar/sidebar.js';
import templateSampler from './templateSampler/templateSampler.js';
import colorsComponent from './colors/colors.component.js';
import highlightSyntax from './highlightSyntax/highlightSyntax.js'

//TODO: move this to npm or find one
require('../../../bower_components/ng-load/ng-load.js');

//var compass = require('compass-mixins');
var logo = require('../assets/images/logo.png')

let appCommon = angular.module('app.common', [
    guideWrapper.name,
    templateSampler.name,
    highlightSyntax.name,
    sidebar.name,
    'ngLoad'
  ])
  .value('logo',logo)
  .directive('swatchBlock',colorsComponent)

export default appCommon;
