const service = require('egg').Service
const maxInter = 60 * 1000


class Api extends service {
	async postPoem(poem) {
		return (await this.ctx.model.Poem(poem).save()).toObject()
	}
	getPoem() {
		return this.ctx.model.Poem.findOne({
			
		}).lean()
	}
}
module.exports = Api