const catchController = require('./catchController')
const MD5 = require('blueimp-md5')
class user extends catchController {
  async postPoem() {

    this.success([{
      title: '你好'+this.ctx.request.body.name,
      id: '23232323',
      timer: new Date(),
      author: '杜浩',
      content: ``
    }])
  }

}

module.exports = user;
