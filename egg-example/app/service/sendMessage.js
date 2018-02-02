const service  = require('egg').Service;
/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = ''
const secretAccessKey = ''

class Api extends service {
	 send(phone, random) {
		//初始化sms_client
		console.log(phone,random)
		return;
		let smsClient = new SMSClient({accessKeyId, secretAccessKey})
		//发送短信
		return smsClient.sendSMS({
		    PhoneNumbers: phone,
		    SignName: 'qqqdu站点',
		    TemplateCode: 'SMS_123798881',
		    TemplateParam: `{"code":"${random}"}`
		})
	}
}
module.exports = Api