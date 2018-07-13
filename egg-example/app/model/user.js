module.exports = app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const { ObjectId } = mongoose.Schema.Types
	const UserSchema = new Schema({
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: Number,
			required: true
		},
		lover: {
			type: Number,
			default: 0000
		},
		myPoems: [ObjectId]
	}, {
			collection: 'User'
		})

	return mongoose.model('User', UserSchema)
}
