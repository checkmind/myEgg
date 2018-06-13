'use strict';

const Controller = require('egg').Controller;
// 刷新数组的时间
const interTime = 1000 * 60 * 60
const maxInter = 3000
let allMessage = []
/* 暂时用setTime实现，每隔一小时刷新一次allMessage */
setInterval(()=>{
	let now = new Date()
	console.log(allMessage)
	allMessage.map((val, index) => {
		if( (now - val.time) >= maxInter ) {
			allMessage.splice(index,1)
		}
	})
}, interTime)


class user extends Controller {

  async newUser(ctx) {
  	let {
	 		username,
	 		password,
	 		code,
	 		phoneNum
	 	} 	=	 ctx
	 	let statu = this._findCode( phoneNum )
	 	switch( statu ) {
	 		case 0:
	 			break;
	 		case 1:
	 			return ctx.body = {
	 				statu: 0,
	 				msg: '验证码失效'
	 			}
	 		default:
	 			return ctx.body = {
	 				statu: 0,
	 				msg: '验证码错误或失效'
	 			}
	 	}
	 	let trueCode = allMessage.find( (val) => +val.phoneNum===+phoneNum ).code
		if(+trueCode !== +code) {
			return ctx.body = {
				statu: 0,
				msg: '验证码错误'
			}
		}
    ctx.body = await this.service.user.singUser(ctx.request.body)
  }

  async checkPhone(ctx) {
  	let phone = ctx.query.phoneNum
  	let now = new Date()
  	if( this._findCode(phone) ===0 ) {
			ctx.body = {
				code: 0,
				msg: '60s后才能再次发送'
			}
			return
		}
		let random = this._random6()
		allMessage.push({
			phoneNum: phone,
			code: random,
			time: now
		})
  	ctx.body = await this.service.user.checkPhone(random, phone)
  }

  /* 手机对应验证码状态 0 有效 1无效 2没有验证码 */
	_findCode(phoneNum) {
		let now = new Date()
		let myPhone = allMessage.find( (val) => +val.phoneNum===+phoneNum )
		if( myPhone){
			// 没超过60s提示继续等待
			if((now - myPhone.time) <= maxInter){
				return 0
			// 超过60s了就删掉allMessage信息,并重新发送
			} else {
				let index = allMessage.findIndex( (val) => +val.phoneNum===+phoneNum )
				allMessage.splice(index,1)
				return 1
			}
		}
		return 2
	}

	/* 随机函数 */
	_random6() {
		return +[0,1,2,3,4,5,6,7,8,9].sort(()=> (Math.random()>=.5)).slice( 0, 6 ).join('')
	}
}

module.exports = user;
