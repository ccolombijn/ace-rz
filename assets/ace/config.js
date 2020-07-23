export const config = (async ()=>{
  'use strict';
  return fetch('config.json').then((res)=>res.json());
 })();

