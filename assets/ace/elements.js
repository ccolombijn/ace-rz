//import {component} from './components.js'
export const element = (()=>{
  'use strict';
  
  const _ = make;
  /**
   * Creates JQuery<HTMLElement>
   * @requires $
   * @param {String} tag 
   * @param {Object} attr 
   * @param {String} html 
   */
  function make(tag,attr,html,event) {
    let element = $(`<${tag}></${tag.split(' ')[0]}>`);
    if(attr instanceof $) {
      element.append(attr);
    }else{
      if(typeof attr === 'object'){  
        Object.getOwnPropertyNames(attr).forEach((attrItem)=>
          element.attr(attrItem,attr[attrItem]));
       }else{ 
         element.html(attr);
       }
      if(attr.component){
        if(typeof attr.component === 'string'){
          attr.el = element;
          //element = component[attr.component](attr);
        }
      }
    }
    const elementAction = typeof html === 'string' ? 'html' : 'append'; 
    element[elementAction](html);
    if(event){
      if(event.prototype === Array){
        if(typeof event[0] === 'string' && typeof event[1] === 'function'){
          element.on(event[0],(e)=>event[1](e));
        }
      }
    }
    element.data('make',arguments);
    
    return element;
  }
  /**
   * Creates Container Element
    * @param {Object} options 
   */
  function containerElement(){
    return _('div',{
      class : 'container-fluid'
    });
  }
  /**
   * Creates Messages Element
    * @param {Object} options 
   */
  function messagesElement(options = {}) {
    
    const col_md = options.col_md ? options.col_md : '8',
          col_sm = options.col_sm ? options.col_sm : '12';

    return _('div',{
      id : 'messages',
      class : `col-md-${col_md} col-sm-${col_sm} pl-0`
    });
  }
  /**
   * Creates Users Element
    * @param {Object} options 
   */
  function usersElement(options = {}){
    const col_md = options.col_md ? options.col_md : '4';
    return _('div',{
      id : 'users',
      class : `col-md-${col_md} d-none d-sm-block`
    });
  }
  /**
   * Creates Modal Element
    * @param {Object} options 
   */
  function modalElement(options){
    const modalLabel = options.label ? options.label : '', 
          modal = _('div',{class:'modal','tab-index':'-1','role':'dialog','aria-labelledby':modalLabel,'aria-hidden':'true'}),
          modalSize = options.size ? ' '+options.size : '',
          modalHeader = options.header ? _('div',{class:'modal-header'},_('h5',options.header)) : '',
          modalDialog = _('div',{class:`modal-dialog${modalSize}`,role:'document'}),
          modalContent = _('div',{class:'modal-content'}),
          modalBody = _('div',{class:'modal-body'},options.body),
          modalFooter = _('div',{class:'modal-footer'});
    if(options.header)modalContent.append(modalHeader);
    options.btns.forEach((btn)=>{
      const modalBtn =_('button',{class:`btn btn-${btn.class}`},btn.html);
      modalFooter.append(modalBtn);
    });
    modalContent.append(modalFooter);
    modalContent.append(modalBody);
    modalDialog.append(modalContent);
    modal.append(modalDialog);
    //$('body').append(modal)
    return modal;
  }
  /**
   * 
    * @param {Object} options 
   */
  function modal(options){
    let modal;
    if($('.modal').length){ // existing modal
      modal = $('.modal');
      $('.modal-header h5').html(options.header);
      $('.modal-body').html(options.body);
      $('.modal-footer').html('');
      options.btns.forEach((btn)=>{
        const modalBtn = $('<button></button>')
          .attr('class',`btn btn-${btn.class}`)
          .html(btn.html);
        $('.modal-footer').append(modalBtn);
      });
    }else{ // new modal
      modal = modalElement(options);
      $('body').append(modal);
    }
    modal.modal(options);
  }
  return {
    make : make,
    container : containerElement,
    modal : modal,
    messages : messagesElement,
    users : usersElement
  };
})();
