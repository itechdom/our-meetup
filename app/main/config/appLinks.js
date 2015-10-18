'use strict';

/**
 * @ngdoc object
 * @name guideLinks
 * @module atomLibrary
 *
 * @description
 * Provides an array of links for the guide sidebar. Each
 * link object should contain a title and href, and optionally
 * an array of sublinks. The link data is used in the Sidebar
 * directive.
 */
let links =  [
{
	title: 'Overview',
		href: '#/',
		activeWhen: 'index'
},
{
	title: 'Settings',
	href: '#/settings',
	activeWhen: 'settings',
},
{
	title: 'Base',
	href: '#/base',
	activeWhen: 'base',
},
{
	title: 'Atoms',
	href: '#/atoms',
	activeWhen: 'atoms'
},
{
	title: 'Molecules',
	href: '#/molecules',
	activeWhen: 'molecules'
},
{
	title: 'All',
	href: '#/all',
	activeWhen: 'all'
}

];

//todo: modify the navigation to reflect this level of design
// Base, Molecules, Organisms, Templates

export default links;
