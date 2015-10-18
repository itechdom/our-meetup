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

//require css
//require('./assets/scss/app.scss');
//require('src/scss/main.scss');

//import appComponent and Controller
import appComponent from './app.component.js';
import appController from './app.controller.js';

import appLinks from './config/appLinks'

//import components which includes all the src components
import components from './components/components.js'

let app = angular.module('app', [
		uiRouter,
		"ui.bootstrap",
		Common.name,
		components.name
		])
.config( appConfig )
	.directive('app',appComponent)
	.value('clientCoreColors',colors)
	.value('appLinks',appLinks)
	.controller(appController);

	function appConfig ($stateProvider,$urlRouterProvider ) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('index', {
				url: '/',
				template: '<mwi-overview></mwi-overview>',
				controller:appController,
				activeWhen: 'index'
			})
		.state('changelog', {
			url: '/changelog',
			template: require('./components/overview/changelog/changelog.html'),
			controller:appController,
			activeWhen: 'index'
		})
		.state('settings', {
			url: '/settings',
			template: '<mwi-settings></mwi-settings>',
			activeWhen: 'settings',
			controller:appController
		})
		.state('atoms', {
			url: '/atoms',
			template: '<mwi-atoms></mwi-atoms>',
			activeWhen: 'atoms',
			controller:appController
		})
		.state('molecules', {
			url: '/molecules',
		template: "<mwi-molecules></mwi-molecules>",
		activeWhen: 'molecules',
		controller:appController
		})
		.state('base', {
			url: '/base',
		template: "<mwi-base></mwi-base>",
		activeWhen: 'base',
		controller:appController
		})

		.state('All', {
			url: '/all',
		template: "<mwi-all></mwi-all>",
		activeWhen: 'all',
		controller:appController
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
		controller:appController,
		activeWhen: 'templates'
		})

		.state('uxguidelines', {
			url: '/uxguidelines',
		template:require('./components/uxguidelines/uxguidelines.html'),
		controller:appController,
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
export default app;
