const catchController = require('./catchController')
const MD5 = require('blueimp-md5')
class user extends catchController {
  async getPoems() {
    console.log(this.checkLogin())
    if(!this.checkLogin()) {
      this.fail('未登录')
      return;
    }
    let { id } = this.ctx.query
    this.success([{
      title: '你好',
      id: '23232323',
      timer: new Date(),
      author: '杜浩',
      content: `击鼓其镗踊跃用兵 
                土国城漕我独南行 
                从孙子仲平陈与宋 
                不我以归忧心有忡 
                爰居爰处爰丧其马 
                于以求之于林之下 
                死生契阔与子成说 
                执子之手与子偕老 
                于嗟阔兮不我活兮 
                于嗟洵兮不我信兮`
    }])
  }
  async postPoems() {
    const {content, title, timer} = this.ctx.request.body
  }

}

module.exports = user;
