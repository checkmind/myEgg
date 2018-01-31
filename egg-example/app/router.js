'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const gzip = app.middlewares.gzip({ threshold: 1024 });
  router.get('/', controller.home.index);
  router.get('/user/:id/:name', controller.user.info);
  router.post('/saveUserInf', controller.saveUserInf.info);
};
