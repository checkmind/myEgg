'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const gzip = app.middlewares.gzip({ threshold: 1024 });
  router.get('/', controller.home.index);
  router.get('/getPoems',controller.getPoems.getPoems);
  router.get('/sing', controller.user.singUser);
  router.get('/getCode', controller.code.checkPhone);
  router.post('/postPoems',controller.getPoems.postPoems);
  router.get('/login',controller.user.login);
};
