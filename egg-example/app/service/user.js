const service = require('egg').Service
const maxInter = 60 * 1000


class Api extends service {
	/*** 暂时存放手机号码和验证码，失效时间为一分钟
		phoneNum: 手机号
		code: 验证码
		time: 创建时间
	*/
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