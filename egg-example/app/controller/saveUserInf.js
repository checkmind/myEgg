'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async info(ctx) {
  	console.log(ctx.request.body)
  	ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
    
  }
}

module.exports = HomeController;
