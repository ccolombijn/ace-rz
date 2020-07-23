'use strict';
import {ace,model, components as component} from 'ace';
const options =new Object({});
options.with = [
  { // create new 'helloWorld' component with main#main element
    name :'helloWorld',
    el : 'main#main'
  },
  { // append content to component 'helloWorld'
    name : 'helloWorldTitle',
    element : ['h1',{class : 'mr-2'},'Hello World!'],
    append : { component : 'helloWorld'}
  },
  {
    model : {
      name : 'something',
      url : 'api/something'
    }
  }
]
const app = ace(options,function(options){
  // assign component to variable
  const helloWorld = component.helloWorld;
  const somethingModel = model.something;
  const somethingData = somethingModel.data;
  // assign click event on h1 element in helloWorld component
  helloWorld.find('h1').on('click',(event)=>{ 
    alert(`You have clicked on ${event.target.id}`)
  });
});
