/* global Links */
/* global Meteor */

// create collection
Links = new Meteor.Collection("links");

// prepare schema
Schemas.Link = new SimpleSchema({
	title: { type: String },
	url: { type: String },
	content: { type: String },
	description: { type: String, optional: true },
	tags: { type: [String], optional: true },
	createdAt: Schemas.createdAt,
	updatedAt: Schemas.updatedAt
});

// attach schema to collection created
Links.attachSchema(Schemas.Link);