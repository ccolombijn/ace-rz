import { $_ } from './$_.js'; // loads jQuery / Bootstrap & CDNs as specified in config.use
import { config } from './config.js'; // loads config/config.json
import { router } from './router.js'; // 
import { component } from './components.js';
import { model } from './model.js';
import { view } from './view.js';
import { controller } from './controller.js';
/**
 *
 * @param {Object} options
 * @param {Function} next
 */

export function ace(options, next) {
  'use strict';
  
  $_(config.use, () => {
    if (config.with.prototype === Array && options.with.prototype === Array)
      config.with.forEach((item) => options.with.unshift(item)); // merge config with options
    if (typeof options === 'function') {
      options();
    }else{
      if(options.with.prototype === Array){
        options.with.forEach((item)=>{
          component.with(item);
        });
        
      }
    }
    if (typeof next === 'function') next(options);
    return {
      models: model,
      view: view,
      controller: controller,
      router: router,
      component: component,
    };
  });
}
