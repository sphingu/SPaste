/* global Schemas */
/* global SimpleSchema */

// TODO: set to true only if Developement mode.
SimpleSchema.debug = true;

//Define common schema properties in global variable
Schemas = {
	createdAt: {
		type: Date,
		autoValue: function () {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return { $setOnInsert: new Date() };
			} else {
				this.unser();
			}
		}
	},
	updatedAt: {
		type: Date,
		autoValue: function () {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true
	},
	userId: {
		type: String,
		autoValue: function () {
			if (this.isInsert) {
				if (this.userId !== null) {
					return this.userId;
				} else {
					return this.value;
				}
			}
		}
	}
}