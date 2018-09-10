const CatchController = require('./catchController')
const MD5 = require('blueimp-md5')
class user extends CatchController {
	async singUser() {
		let { password, phoneNumber, lover } = this.ctx.query
		phoneNumber = +phoneNumber;
		if (!lover)
			lover = 10000;
		if (!password || !phoneNumber || !password.trim()) {
			this.fail('输入不能为空')
			return;
		}
		let phone = await this.ctx.service.user.getByPhone(phoneNumber);
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
		let { username, password, phoneNumber ,code} = this.ctx.query
		const user = await this.service.user.getByPhone(phoneNumber);
		if (!user) {
			this.fail('无此用户')
			return;
		}
		if(!code || !user.password) {
			this.fail('未填写密码或者短信验证码')
		}
		if (!code && user.password !== MD5(password, this.config.md5Key)) {
			this.fail('密码错误')
			return;
		}
		if(code) {
			let key = 'password_' + phoneNumber
			// 验证code
			if(this.service.cache.has(key) !== code) {
				this.fail('验证码错误')
			}
		}
		this.ctx.session = {
			username,
			phoneNumber
		}
		console.log(this.ctx.session)
		//his.ctx.rotateCsrfSecret();
		this.success('登陆成功')
		//this.redirect('/index')
	}

	async loginOut() {
		this.ctx.session = null;
		this.success('登出成功')
	}
}

module.exports = user;
