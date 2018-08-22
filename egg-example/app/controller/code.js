const catchController = require('./catchController')
// 刷新数组的时间
const interTime = 1000 * 60 * 60
const maxInter = 3000
let allMessage = []



class user extends catchController {

	async newUser() {
		let {
			username,
			password,
			code,
			phoneNum
		} = ctx
		let key = 'password_' + phone
		if (code && this.service.cache.get(key)) {
			this.service.cache.del(key);
			ctx.body = await this.service.user.singUser(ctx.request.body)
		} else {
			return ctx.body = {
				statu: 0,
				msg: '验证码错误'
			}
		}
	}

	async checkPhone(ctx) {
		let phone = ctx.query.phoneNum			
		let key = 'password_' + phone
		let random = this._random6()
		if(!phone || phone.length !== 11) {
			this.fail('请输入手机号')
			return
		}
		if (this.service.cache.has(key)) {
			this.fail('60s后才能再次发送')
			return
		}
		this.service.cache.create(key, random);
		ctx.body = await this.service.user.checkPhone(random, phone)
	}

	/* 随机函数 */
	_random6() {
		return +[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => (Math.random() >= .5)).slice(0, 6).join('')
	}
}

module.exports = user;
