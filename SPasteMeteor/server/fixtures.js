/* global Blog */
/* global Accounts */
/* global Roles */

// set blog configurations
Blog.config({
	adminRole: 'blogAdmin',
	authorRole: 'blogAdmin',
	comemnts: {
		disqusShortname: 'disqusShortName'
	},
	rss: {
		title: 'rssTitle',
		description: 'rssDescription'
	}
});

if (Meteor.users.find().count() === 0) {
	console.log('Adding user fixtures');

	// prepare admin users
	var users = [
		{
			name: 'SPadmin',
			email: 'sphingu@gmail.com',
			roles: ['admin', 'blogAdmin', 'sa']
		}
	];

	// insert addmin users
	_.each(users, function (user) {
		var id = Accounts.createUser({
			email: user.email,
			password: 'adminasd',
			profile: { name: user.name }
		});

		if (user.roles.length > 0) {
			Roles.addUsersToRoles(id, user.roles);
		}
	});
}