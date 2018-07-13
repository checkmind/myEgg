'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const gzip = app.middlewares.gzip({ threshold: 1024 });
  //router.get('/', controller.home.index);
  router.post('/saveUserInf', controller.saveUserInf.info);
  router.get('/getPoems',controller.getPoems.getPoems)
  router.get('/postPoems',controller.postPoem.postPoem)
  router.get('/sing', controller.user.singUser);
  router.get('/getCode', controller.code.checkPhone);
};
