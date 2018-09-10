'use strict';
const Controller = require('egg').Controller;

class catchController extends Controller {
	success(data) {
		if (typeof data === 'string') {
			this.ctx.body = {
				success: true,
				msg: data
			}
		}
		else {
			this.ctx.body = {
				success: true,
				data
			}
		}
	}
	fail(msg) {
		this.ctx.body = {
			success: false,
			msg
		}
	}
	checkLogin() {
		let {
			username,
			phoneNumber
		} = this.ctx.session
		console.log(username,phoneNumber)
		return true
		if(username || phoneNumber)
			return true
		return false
	}
}

module.exports = catchController;
