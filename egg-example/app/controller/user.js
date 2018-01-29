'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async info() {
    this.ctx.body = {
    	name: `hello user:${this.ctx.params.id} your name is ${this.ctx.params.name}`
    }
  }
}

module.exports = HomeController;
