'use strict';

//Angular dependencies
import angular from 'angular'
import uiRouter from 'angular-ui-router';
require('angular-bootstrap');

//import all views
/**
 *
 * Overview
 *
**/
import overview from './overview/overview.js';

/**
 *
 * Settings
 *
**/
import settings from "./settings/settings.js";


/**
 *
 * Base
 *
**/
import base from "./base/base.js";



/**
 *
 * Atoms
 *
**/
import atoms from "./atoms/atoms.js";




/**
 *
 * Molecules
 *
**/
import molecules from "./molecules/molecules.js";


/**
 *
 * All components together
 *
**/
import all from './all/all.js';


let templates = angular.module('templates', [
		uiRouter,
		overview.name,
		settings.name,
		atoms.name,
		molecules.name,
		base.name,
		all.name,
		"ui.bootstrap.dropdown"
		])

export default templates;
