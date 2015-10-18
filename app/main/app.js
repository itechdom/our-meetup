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


//import appComponent and Controller
import appComponent from './app.component.js';
import appController from './app.controller.js';

import appLinks from './config/appLinks'

require("../src/scss/main.scss")

//import components which includes all the src components
import components from './components/components.js'

let app = angular.module('app', [
		uiRouter,
		"ui.bootstrap",
		components.name
		])
.config( appConfig )
	.directive('app',appComponent)
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
	};
export default app;
