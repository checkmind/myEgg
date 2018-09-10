const service = require('egg').Service
const maxInter = 60 * 1000


class Api extends service {
	async singUser(user) {
		return (await this.ctx.model.User(user).save()).toObject()
	}
	/* 获取验证码 */
	async checkPhone(random, phone) {
		await this.service.sendMessage.send(phone, random)
		return {
			statu: 1,
			msg: '短信已发到您的手机，请注意查收！'
		}
	}
	getByPhone(phoneNumber) {
		return this.ctx.model.User.findOne({
			phoneNumber
		}).lean()
	}
}
module.exports = Api