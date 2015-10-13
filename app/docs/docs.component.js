import template from './docs.html';
import controller from './docs.controller.js';

let docsComponent = function(){
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E',
		controller:controller
	};
};

export default docsComponent;
