'use strict';
import {config} from './config.js';
import {component} from './components.js';
export const view = (()=>{
  const views = new Object({});
  function view(options){
    if(options.name && options.component){
      if(!views[options.name]) views[options.name] = component[options.component]; // 
    }
  }
  if(config.views.prototype === Array){
    config.views.forEach((item)=>{
      if(!views[item.name]) view(item);
    });
    
  }
  views.add = view;
  return views;
})();