'use strict';

/**
 * @ngdoc directive
 * @name codeSample
 * @module patternLibrary
 *
 * @description
 * Takes the transcluded content and shows the code in a <code> block
 * with syntax highlighting
 */
angular.module('coreGuide')
	.directive('codeSample', function() {
		return {
			restrict: 'E',
			templateUrl: 'coreGuideModule/directives/codeSample/codeSample.html',
			transclude: true,
			scope: true,
			link: codeSamplePostLink
		};
	});


function codeSamplePostLink(scope, element, attrs) {
	attrs = attrs || {};

	attrs.writeHtml = ['0', 'false'].indexOf(attrs.writeHtml) > -1 ? false : true;

	// Grab the transcluded html
	var transcluded = element.find('[ng-transclude]').html(),
		codeElem = element.find('code');

	// Strip "ng-scope" class that Angular puts on
	transcluded = transcluded.replace(' class="ng-scope"', '');
	transcluded = transcluded.replace(' ng-scope', '');

	// Strip the number of spaces/tabs at the beginning of the first line from all subsequent lines.
	// This preserves indentation while keeping the top level element at an indent level of 0 (after
	// running trim() below)
	var spacesToRemove = 0, matchSpaces = transcluded.match(/\n([\t ]*)/);
	if(matchSpaces) {
		spacesToRemove = matchSpaces[1].length;
	}
	transcluded = transcluded.replace(new RegExp('\\n[\\t ]{'+spacesToRemove+'}', 'g'), '\n');

	transcluded = transcluded.trim();

	if (!attrs.writeHtml) {
		element.find('[ng-transclude]').remove();
	}

	codeElem.text(transcluded);
}