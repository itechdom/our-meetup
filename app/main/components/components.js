'use strict';

//Angular dependencies
import angular from 'angular'
import uiRouter from 'angular-ui-router';
require('angular-bootstrap');

//import all views
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


let components = angular.module('templates', [
		uiRouter,
		atoms.name,
		molecules.name,
		all.name
		])

export default components;
