'use strict';
const procedures = new Object({});
export const procedure = (()=>{
  'use strict';
  
  return {
    get : (procedure)=>{
      if(procedures[procedure.name]){
        return procedures[procedure.name]
      } else {
        
      }
    },
    update : (procedure)=>{
      if(procedures[procedure.name] && procedure.procedures.prototype === Array){
        procedures[procedure.name] = procedure.procedures;
      }
    },
    procedures : procedures
  }
})();