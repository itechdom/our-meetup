import template from './app.html';
import controller from './app.controller.js';

let appComponent = function(){
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E',
		controller:controller
	};
};

export default appComponent;
