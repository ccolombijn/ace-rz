import { $_ } from './$_.js';
import { config } from './config.js';
import { router } from './router.js';
import { element } from './elements.js';
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
  const models = new Object({}); // create object to store models
  $_(config.use, () => {
    if (config.with.prototype === Array && options.with.prototype === Array)
      config.with.forEach((item) => options.with.unshift(item)); // merge config with options
    if (typeof options === 'function') {
      options();
<<<<<<< HEAD
    }else{
      if(options.with.prototype === Array){
        options.with.forEach((item)=>{
          component.with(item)
          view[item.name] = output;
          controller[item.name] = {
          model : item.model.name
        }
        });
        
=======
    } else {
      if (options.with.prototype === Array) {
        options.with.forEach((item) => component.with(item));
        view[item.name] = output;
        controller[item.name] = {
          model: item.model.name,
        };
>>>>>>> 51f53fb1c95a6896bac6949b68704648742bd298
      }
    }
    if (typeof next === 'function') next(options);
    return {
      models: models,
      view: view,
      controller: controller,
      router: router,
      component: component,
    };
  });
}
