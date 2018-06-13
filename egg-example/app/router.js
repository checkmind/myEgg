'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const gzip = app.middlewares.gzip({ threshold: 1024 });
  router.get('/', controller.home.index);
  router.post('/saveUserInf', controller.saveUserInf.info);

  router.post('/signIn', controller.user.newUser);
  router.get('/getCode', controller.code.checkPhone);
};
