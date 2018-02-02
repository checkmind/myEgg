const service  = require('egg').Service;

class Api extends service {
	 checkName (name) {

		return this.ctx.model.Api.insertMany({
			username: name
		})
	}
}
module.exports = Api