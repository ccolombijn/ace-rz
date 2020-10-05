'use strict';
import {$_} from './$_.js';
import {config} from './config.js';
const templates = new Object({});
export const template = (()=>{
  $_(()=>{
    
    function template(args){
      if(args.name && args.url){
        $.get(args.url,(res)=>{
          
          templates[args.name] = res;
          
        })
        
      }
    }
    if(config.templates || config.templates.prototype === Array){
      config.templates.forEach((item)=>{
        template(item)
      });
    }
    templates.add = template;
    return templates;
  });
})();