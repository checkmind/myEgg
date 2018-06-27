'use strict';

module.exports = appInfo => {
  const config = exports = {};
  const path = require('path');
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517199138771_9214';

  // add your config here
  config.middleware = ['gzip'];
  // mongodb
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/duhao',
    options: {
      user: "duhao",
      pass: "123456"
    }
  }
  // view 目录
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/public')
    ].join(','),
    defaultViewEngine: 'nunjucks',
  };


  return config;
};
