'use strict';
import {config} from './config.js';
import {component} from './components.js';
import {view} from './view.js';
const controllers = new Object({});
export const controller = (()=>{
  
  function controller(args){
    if(args.view && args.event){
      if(!controllers[args.view] && view[args.view] && typeof args.event === 'function') {
        view[args.view].on((event)=>{
          if(args.preventDefault) event.preventDefault = true;
          args.event(event);
          controllers[args.view] = event;
        });
        
      }
    }
  }
  if(config.controllers.prototype === Array){
    config.controllers.forEach((item)=>{
      if(!controllers[item.name]) controller(item);
    });
    
  }
  controllers.add = controller;
  return controllers;
})();