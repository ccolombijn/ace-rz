'use strict';
import {component} from './components.js';
const models = new Object({});
export const model = (()=>{
  'use strict';
  
  return {
    get(model){
      if(models[model.name]){
        return models[model.name]
      } else {
        component.api(model,(res)=>{
          models[model.name] = res;
        });
      }
    },
    update(model){
      if(models[model.name] && model.models.prototype === Array){
        models[model.name] = model.models;
      }
    },
    models : models
  }
})();