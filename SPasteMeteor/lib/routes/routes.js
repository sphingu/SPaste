/* global SubsManager */
/* global Router */

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	trackPageView: true
});

var homeSubs = new SubsManager({ cacheLimit: 9999, expireIn: 9999 });

Router.route('/', {
	name: 'home',
	subscriptions: function () {
		return homeSubs.subscribe('links');
	},
	data: function () {
		return {
			links: Links.find({})
		};
	}
});


Router.route('/about', {
	name: 'about',
});
