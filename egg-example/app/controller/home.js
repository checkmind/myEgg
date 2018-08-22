'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	console.log('home index')
    //let it = await this.service.user.singUser();
    await this.ctx.render('index.html', { ctx: this.ctx, name: "duhao" })
  }
}

module.exports = HomeController;
