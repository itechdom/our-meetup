'use strict';

/**
 * @ngdoc directive
 * @name highlightSyntax
 * @module coreGuide
 *
 * @description
 * The `highlightSyntax` directive specifies that the element in
 * question should be highlighted based on its syntax. Since we
 * are using Prism.js to handle syntax highlighting, all this
 * directive does is call `Prism.highlightElement()` once everything
 * on the page has been compiled and loaded.
 */
let highlightSyntaxComponent  =  function($timeout, $window) {
	return {
		restrict: 'A',
			link: function postLink(scope, element) {
				// we need a timeout here to make sure it waits until any directive content is compiled.
				$timeout(function() {
					//$window.Prism.highlightElement(element[0]);
				});
			}
	};
};
export default highlightSyntaxComponent; 
