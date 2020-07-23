'use strict';
import {component} from './components.js';
const data = new Object({});
export const model = (()=>{
  'use strict';
  
  return {
    get : (model)=>{
      if(data[model.name]){
        return data[model.name]
      } else {
        component.api(model,(res)=>{
          data[model.name] = res;
        });
      }
    },
    update : (model)=>{
      if(data[model.name] && model.data.prototype === Array){
        data[model.name] = model.data;
      }
    },
    data : data
  }
})();