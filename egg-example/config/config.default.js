'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517199138771_9214';

  // add your config here
  config.middleware = ['gzip'];

  return config;
};
