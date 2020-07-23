'use strict';
import {config} from './config.js';
import {view} from './view.js';
export const router = (()=>{
  const routes = new Object({});
  function route(options){
    if(options.view){
      routes[options.route] = view[options.view]
    }
  }
  if(config.routes.prototype === Array){
    config.routes.forEach((item)=>{
      route(item);
    });
  }
  routes.add = route;
  return routes;
})();