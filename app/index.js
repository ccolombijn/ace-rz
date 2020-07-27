/*
 * app/index.js
 */
'use strict';

module.exports = (app, config) => {
  if (!config.require) {
    config.require = [
      'dev',
      'notifs',
      'session',
      'sequelize',
      'manifest',
      'routes',
      'view',
      'parser',
      'static',
      'auth',
      'websocket',
      'error',
    ];
  }
  console.log(
    '\x1b[32m[config.require]\x1b[0m \x1b[3mconfig/config.json\x1b[0m'
  );
  config.require.forEach((module) => {
    require(`./${module}`)(app);
    console.log('\x1b[32m', `[require]\x1b[0m \x1b[3mapp/${module}.js\x1b[0m`);
  });
};
