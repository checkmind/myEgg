module.exports = app => {
	const mongoose = app.mongoose
	const ApiSchema = mongoose.Schema({
		content: {
			type: String,
			required: true,
			unique: true
		},
		createTime: {
			type: Date,
			default: Date.now
		},
		modifiedTime: {
			type: Date,
			default: Date.now
		},
		auther: {
			type: String,
			required: true
		}
	}, {
			collection: 'Poem'
		})
	return mongoose.model('Poem', ApiSchema)
}
