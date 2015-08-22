/* global BrowserPolicy */

Meteor.startup(function () {
	BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
	BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
	BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
	BrowserPolicy.content.allowOriginForAll('www.google.com');

	BrowserPolicy.content.disallowInlineScripts();
});