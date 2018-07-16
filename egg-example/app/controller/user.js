const catchController = require('./catchController')
const MD5 = require('blueimp-md5')
class user extends catchController {
	async singUser() {
		let { password, phoneNumber, lover } = this.ctx.query
		phoneNumber = +phoneNumber;
		console.log(MD5(password, this.config.md5Key))
		if (!lover)
			lover = 10000;
		if (!password || !phoneNumber || !password.trim()) {
			this.fail('输入不能为空')
			return;
		}
		let phone = await this.ctx.service.user.getByPhone(phoneNumber);
		console.log(phone)
		if (phone) {
			this.fail('已注册过了')
			return;
		}
		let it = await this.service.user.singUser({
			password: MD5(password, this.config.md5Key),
			phoneNumber,
			lover
		});
		if (!it) {
			this.fail('注册失败')
			return;
		}
		this.success('注册成功')
	}

	async login() {
		let { username, password, phoneNumber } = this.ctx.query
		const user = await this.service.user.getByPhone(phoneNumber);
		if (!user) {
			this.fail('无此用户')
			return;
		}
		if (user.password !== MD5(password, this.config.md5Key)) {
			this.fail('密码错误')
			return;
		}
		this.ctx.session = {
			username,
			phoneNumber
		}
		this.success('登陆成功')
	}

	async loginOut() {
		this.ctx.session = null;
	}
}

module.exports = user;
