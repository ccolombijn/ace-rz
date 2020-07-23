'use strict';
import {$_} from './$_.js';
import {config} from './config.js';
export const template = (()=>{
  $_(()=>{
    const templates = new Object({});
    function template(args){
      if(args.name && args.url){
        $.get(args.url,(res)=>{
          if(args.name){
            templates[args.name] = res;
          }
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