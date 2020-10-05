/*
* app/config.js
*/
'use strict';
const _config = require('../config/app.json'),
      fs = require('fs'),
      path = require('path'),
      componentsPath = path.join(__dirname, 'assets/components');
function config(){
  _config.ref_adr = process.env.REF_ADR;
  _config.version = require('../package.json').version;
  _config.npm_lifecycle_event = process.env.npm_lifecycle_event;
  _config.ref_ws_port = process.env.REF_WS_PORT;
  const models = require('../models');
  _config.models = new Object({});
  for(let model of Object.getOwnPropertyNames(models.sequelize.models)){
    _config.models[model] = models[model].rawAttributes;
  }
  fs.readdir(componentsPath, function (err, files) {
    if (err) return console.log('Unable to read components: ' + err);
    const components = [];
    files.forEach( (component)=> components.push(component));
    _config.components = components;
  });
  return _config;
}
module.exports = config;
