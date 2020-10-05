'use strict';
import {component} from './components.js';
const states = new Object({});
export const state = (()=>{
  'use strict';
  
  return {
    get(state){
      if(states[state.name]){
        return states[state.name]
      } else {
        component.api(state,(res)=>{
          states[state.name] = res;
        });
      }
    },
    update(state){
      if(states[state.name] && state.states.prototype === Array){
        states[state.name] = state.states;
      }
    },
    states : states
  }
})();