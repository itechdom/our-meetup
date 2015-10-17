'use strict';

/**
 * @ngdoc overview
 * @name patternLibrary
 * @module patternLibrary
 *
 * @description
 * Main module of the application. Include any further module
 * dependencies here. For example, the shades module is not
 * included by default; if needed, add here in the module
 * initialization.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
require('angular-bootstrap');
import Common from './common/common';

//require css
require('./assets/scss/docs.scss');
require('src/scss/main.scss');

//import docsComponent and Controller
import docsComponent from './docs.component.js';
import docsController from './docs.controller.js';

//Configurations
//Colors
import colors from './config/clientCoreColors'
//GuideLinks
import docsLinks from './config/docsLinks'


//import components which includes all the src components
import components from './components/components.js'

let docs = angular.module('docs', [
		uiRouter,
		"ui.bootstrap",
		Common.name,
		components.name
		])
.config( docsConfig )
	.directive('docs',docsComponent)
	.value('clientCoreColors',colors)
	.value('docsLinks',docsLinks)
	.controller(docsController);

	function docsConfig ($stateProvider,$urlRouterProvider ) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('index', {
				url: '/',
				template: '<mwi-overview></mwi-overview>',
				controller:docsController,
				activeWhen: 'index'
			})
		.state('changelog', {
			url: '/changelog',
			template: require('./components/overview/changelog/changelog.html'),
			controller:docsController,
			activeWhen: 'index'
		})
		.state('settings', {
			url: '/settings',
			template: '<mwi-settings></mwi-settings>',
			activeWhen: 'settings',
			controller:docsController
		})
		.state('atoms', {
			url: '/atoms',
			template: '<mwi-atoms></mwi-atoms>',
			activeWhen: 'atoms',
			controller:docsController
		})
		.state('molecules', {
			url: '/molecules',
		template: "<mwi-molecules></mwi-molecules>",
		activeWhen: 'molecules',
		controller:docsController
		})
		.state('base', {
			url: '/base',
		template: "<mwi-base></mwi-base>",
		activeWhen: 'base',
		controller:docsController
		})

		.state('All', {
			url: '/all',
		template: "<mwi-all></mwi-all>",
		activeWhen: 'all',
		controller:docsController
		})

		.state('molecules.page', {
			url: '/:id',
		template: function ($stateParams) {
			var page = require('./components/molecules/' + $stateParams.id.replace('.', '/') + '.html')
			return page;
		},
		activeWhen: 'molecules'
		})
		.state('templates', {
			url: '/templates',
		template:require('./components/templates/templates.html'),
		controller:docsController,
		activeWhen: 'templates'
		})

		.state('uxguidelines', {
			url: '/uxguidelines',
		template:require('./components/uxguidelines/uxguidelines.html'),
		controller:docsController,
		activeWhen: 'uxguidelines'
		})
		.state('uxguidelines.page', {
			url: '/:id',
		template: function ($stateParams) {
			var page = require('./components/uxguidelines/' + $stateParams.id.replace('.', '/') + '.html')
			return page;
		},
		activeWhen: 'uxguidelines'
		});
	};
export default docs;
