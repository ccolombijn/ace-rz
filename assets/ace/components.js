import { element } from './elements.js';
/* laxbreak:true */
export const component = (() => {
  'use strict';
  const _ = element.make;
  const methods = {
    add: el,
    /** Bootstrap Alert Component
     * @example component.alert({ message : 'This is a alert' });
     */
    alert: alert,
    /** API Component 
     * @example component.api({
    url : 'api/endpoint',
    method : 'get',
    modify : (item) => {
      // do something with returned data item
    },
    callback : (data) => {
      // do something with returned data
    }
  });
    */
    api: api,
    /** Auth Component */
    auth: auth,
    /** Bootstrap Breadcrumb Component
     *  @example component.breadcrumb(['First','Second']);
     */
    breadcrumb: breadcrumb,
    /** Bootstrap Button Component
      *  @example component.btn({
    el : '#myButtonContainer',
    class : 'primary',
    txt : 'Button Text',
    event : ['click',()=>{
      // do something on click
    }],
    confirm : {
      msg : 'Are you sure?',
      confirm : () => {
        console.log("Is confirmed")
      }
    }
  });
      */
    btn: btn,
    /** Bootstrap Button Group
     * @example component.btn_group({ btns : [{ txt : 'Button' },{ txt : 'Button' }]})
     */
    btn_group: btn_group,
    /** Calendar Component 
     * @example component.calendar({
        el : '#myCalendar',
        data : {
          url : 'api/endpoint',
          method : 'get',
          modify : (item) => {
            // do something with returned data item
          },
          callback : (data) => {
            // do something with returned data
          }
        }
      });
    */
    calendar: calendar,
    /** Bootstrap Card Component 
     
    */
    card: card,
    /** Confirm Component */
    confirm: confirm,
    /** Date Component */
    date: date,
    /** Editor Component */
    editor: editor,
    /** Element Component */
    el: el,
    /** Template Component */
    template: template,
    /** Form Component */
    form: {
      /** Form Post Component 
       * @example component.form.post({
    url : 'api/endpoint',
    el : 'myFormId'
  },(data) => {
    // do something after axios.post has finished
  });
       */
      post: formPost,
      /**
       * Form Model Component
       * @example component.form.fromModel({
    model : 'modelName',
    fields : {
      propNameOne : {
        label : 'Label Of PropNameOne',
      }
    }
    fields : [
      {field : 'propNameOne', label : 'Label Of PropNameOne'},
      {fields : [ 
        {field : 'propNameOne', label : 'Label Of PropNameOne'},
      ]}
    ]
    onSubmit : (event) => {
      // do something on submit
    }
  });
       */
      fromModel: formFromModel,
      /**
       * get fields from element as object
       * @description creates new object from html collection in document.querySelector
        * @param {Object} args
       * @param {string } args.el document.querySelectorAll selector
       * @example component.form.fields({
       *  el : '#myFielsContainer'
       * })
       */
      fields: formFieldsObj,
      data: formData,
      input: {
        datepicker: formInputDatepicker,
        timepicker: formInputTimepicker,
        row: formRow,
      },
      validate: formValidate,
    },
    /** Bootstrap Modal Component
     * @example component.modal({
    title : 'Title of modal',
    body : 'Body of modal',
    open : () => {
      // do something on open
    },
    close : () => {
      // do something on close
    },
    save : () => {
      // do something on save (primary button is clicked)
    },
    buttons : [
      { txt : 'Button text', onClick : () => {
        // do something on button click
      }}
    ]
  });
     */
    modal: modal,
    /** Nav Component */
    nav: {
      /** Bootstrap Nav Tabs Component
       * @example component.nav.tabs({ tabs : [
    { label : 'Tab#1', content : 'Content for Tab#1' }
  ]});
       */
      tabs: navTabs,
    },
    navs: navs,
    /** Repeat Component */
    repeat: repeat,
    /** Iterate Component */
    iterate: iterate,
    /** Each Component */
    each: each,
    /** Bootstrap Table Component
     * @see {@link https://getbootstrap.com/docs/4.3/content/tables/}
     * @example component.table({
    el : '#tableContainerId',
    model : 'modelName',
    data : {
      url : 'api/endpoint',
      modify : (item) => {
        // modify fetched data
      }
    },
    cols : {
      propNameOne : {
        label : 'Label of propNameOne'
      },
      propNameTwo : {
        label : 'Label of propNameTwo'
      },
    },
    options : { // adds row options
      view : (item) => {

      },
      edit : (item) => {

      },
      delete : (item) => {

      }
    }
  });
     */
    table: (before, args, callback) => {
      if (typeof before === 'object') {
        if (typeof args === 'function') {
          callback = args;
        }
        args = before;
      }
      if (typeof before === 'function') before();

      table(args);
      if (callback) callback();
    },
    time: time,
    type: type,
    uid: uid,
    queue: queue,
    require: require,
    encrypt: encrypt,
  };
  // .................................................
  // component.date
  /**
   * @description Date Component
    * @param {Object} args - Arguments object
   * @param {String} args.format
   * @param {HTMLElement} args.el - Target Element
   */
  function date(args) {
    let format = typeof args === 'object' ? args.format : args;
    const now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;

    const yyyy = now.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    format = format ? format : 'mm-dd-yyyy';
    format = format.replace('dd', dd).replace('mm', mm).replace('yyyy', yyyy);
    if (typeof args.modify === 'function') format = args.modify(format);
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: format,
      });
    }

    return format;
  }
  // component.time
  /**
   *
    * @param {Object} args - Arguments object
   * @param {HTMLElement} args.el - Target Element
   *
   */
  function time(args) {
    let now = new Date();
    let hh = now.getHours();
    hh = hh.toString().length === 1 ? `0${hh}` : hh;
    let mm = now.getMinutes();
    mm = mm.toString().length === 1 ? `${mm}0` : mm;
    now = `${hh}:${mm}`;
    if (typeof args.modify === 'function') now = args.modify(now);
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: now,
      });
    }

    return now;
  }
  // .................................................
  // component.uid
  /**
   * uid Component
    * @param {Object} args
   * @param {String} args.format - format string
   * @param {HTMLElement} args.el - Target Element
   */
  function uid(args) {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    const format = args ? args.format : 's4s4-s4';
    const output = format.replace(new RegExp('s4', 'g'), s4());
    if (typeof args === 'object' && args.el) {
      componentElementOutput({
        el: args.el,
        output: output,
      });
    }
    return output;
  }
  // .................................................
  // component.auth
  /*
  component.auth({
    data : {
      url : 'api/endpoint',
      model : {
        'Manager' : {
          hasAccess : ['*'],
          isAllowed : ['c','u','d'],
          isPermitted : ['*']
        }
      }
    }
  })
  */
  const authModels = new Array([]);
  /**
   *
    * @param {Object} args
    * @param {Object} args.data - Data Object
    * @param {Object} args.data.model - Data Model Object
   */
  function auth(args) {
    // authData
    type(args.data, 'object', () => {
      let authData;
      api(args.data, (data) => {
        authData = data;
      });
    });
    // authModel
    type(args.data.model, 'object', () => {
      const model = args.data.model,
        modelName = authModels[Object.getOwnPropertyNames(model)[0]];
      type(args.data.model[modelName], 'object', () => {
        authModels[modelName] = args.data.model; // add object to authModels
      });
      type(args.data.model[modelName], 'array', () => {
        for (let authModel in args.data.model[modelName])
          authModels[modelName][authModel] =
            args.data.model[modelName][authModel];
      });
    });
  }
  // .................................................
  // component.api
  /**
  * @description API Component
   * @param {Object} args - Arguments object
  * @param {String} args.method - Axios method (get,post,delete,update) defaults to get
  * @param {String} args.data - request body
  * @param {String} args.url - API url
  * @param {Function} args.modify - modify returned data
  * @param {Function} callback - callback
  * @example component.api({
    url : 'api/endpoint',
    method : 'get',
    modify : (item) => {
      // do something with returned data item
    },
    callback : (data) => {
      // do something with returned data
    }
  })
  */
  function api(args, callback) {
    if (!args.method) args.method = 'get';

    axios({
      method: args.method,
      url: args.url,
      data: args.data,
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
      },
    }).then((res) => {
      //console.log(res)
      const data = [];
      if (res.data.length > 0) {
        for (let item of res.data) {
          if (args.modify) item = args.modify(item);
          data.push(item);
        }
      }
      if (callback || args.callback) {
        if (args.callback)
          //return args.callback(data);
          args.callback(data);
        if (callback)
          //return callback(data);
          callback(data);
        if (args.el && args.el instanceof $) args.el.html(data);
        if (args.component) {
          methods[args.component](args);
        }
        return data;
      }
    });
  }
  // .................................................
  // component.iterate
  /*
 component.iterate(['some','data'],(item)=>item+' value') // ['some value','data value'],
 */
  function iterate(array, callback) {
    // call Symbol.iterator on array
    array[Symbol.iterator] = function () {
      let i = 0;
      let array = this;
      return {
        next: function () {
          if (i >= array.length) {
            return { done: true };
          } else {
            const value = callback(array[i]);
            return { value, done: false };
          }
        },
      };
    };
    return array;
  }
  // .................................................
  // component.each
  /*
 component.each({
   el : '#targetElement',
   url : 'api/endpoint',
   component : 'card',
   fields : {
      title : name
   }
  }),
 */
  function each(args, callback) {
    if (args.url) {
      api(args, (data) => {
        iterate(data, (item) => {
          const component = methods[args.component](args);
          $(args.el).append(component);
          if (callback) callback(item);
        });
      });
    }
  }
  // .................................................
  // component.repeat
  /*
 component.repeat({
   data : { url : 'api/endpoint' },
   template : '{propName} is replaced'
 })
 */

  /**
   * @description Repeat Component, maps template string to (fetched) data, returns <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><pre>String</pre></a>
    * @param {Object} args - Arguments object
   * @param {HTMLElement} args.el - Target Element
    * @param {Object} args.data
   * @param {String} args.data.url
   * @param {String} args.template
   */
  function repeat(args) {
    if (typeof args.data === 'object') {
      const apiObj = args;
      apiObj.url = args.data.url;
      return api(apiObj, (data) => {
        apiObj.data = data;
        repeat(apiObj);
      });
    }
    let output = '',
      index = 0;
    //for(let item of args.data){
    (() => {
      output = +args.template;
      for (let dataItem in args.data[index])
        output.replace(`{${dataItem}}`, item[dataItem]);

      index++;
    })().repeat(args.data.length);
    //}
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: output,
      });
    }

    return output;
  }

  /**
   * @param {String} args
   */
  function err(args) {
    throw args;
  }
  /**
   * @description Type Component
    * @param {Object} args - Arguments object
   * @param {String} type 
   * @param {Function} callback 
   * @example const obj = {some : 'object'}
  component.type(obj,'object',()=>{
    // do something with obj
  })
   */
  function type(args, type, callback) {
    let argsTypeOf = typeof args;
    if (args.prototype === Array) argsTypeOf = 'array';
    if (argsTypeOf != type)
      err(
        `component.type called with type '${type}' but args is  typeof ${argsTypeOf} `
      );
    if (typeof callback === 'function') {
      callback(args);
    } else {
      err('component.type callback is not a function');
    }
  }

  function componentElementOutput(args) {
    if (typeof args.el === 'object') {
      if (args.el instanceof jQuery) {
        const argsAction = args.append ? 'append' : 'html';
        args.el[argsAction](args.output);
      } else {
        const outputFragement = document.createDocumentFragment();
        outputFragement.append(args.output);
        if (args.append) {
          args.el.appendChild(outputFragement);
        } else {
          args.el.innerHTML = args.output;
        }
      }
    }
  }

  /**
  * @description Component Element
   * @param {Array} args 
  * @param {String} args[0] - [element:id]
   * @param {Object} args[1] - 
  * @param {String} args[1].appendTo
  * @param {String} args[1].id
  * @param {String} args[1].component
  * @example const div = component.el(
    ['div:myDiv',{ 
      appendTo : 'myDivContainer',
      id : 'myDiv' 
    },'content'])
  component.myDiv.el === div // true
  component.myDiv.card({
    title : 'Title of Card in myDiv',
    content :'Content of Card in myDiv'
  })
  */
  function el(args) {
    let element, name;
    if (args.protoype === Array) {
      name = args[0].split(':')[1];
      element = document.createElement(args[0].split(':')[0]);
      const attrs = args[1];
      if (attrs.appendTo) {
        const appendTo = document.querySelectorAll(attrs.appendTo);
        appendTo.appendChild(element);
        delete attrs.appendTo;
      }
      if (attrs.component) {
        if (attrs.component.protoype === Array) {
          component[attrs.component[0]](attrs.component[1]);
        }
      }

      Object.getOwnPropertyNames(attrs).map((attr) => {
        element.setAttribute(attr, attrs[attr]);
      });
      if (args[2].protoype === Array) {
        element.appendChild(el(args[2]));
      } else if (typeof args[2] === 'object') {
        element.appendChild(args[2]);
      } else {
        element.innerHTML = args[2];
      }
    } else if (args.make) {
      name = args.name;
      element = _(args.make, args, args.html);
    } else if (typeof args === 'string') {
      element = document.querySelectorAll(args);
      name = args;
    } else if (typeof args === 'object') {
      if (args.name) name = args.name;
      if (args.component) {
        if (args.component.protoype === Array) {
          element = component[args.component[0]](attrs.component[1]);
        }
      }
    }
    componentMethods({
      element: element,
      name: name,
    });
    return element;
  }
  /**
   *
   * @description Template Component
   * @example component.template({
   *    url : 'path/to/template.html',
   *    data : 'api/endpoint'
   * })
   */
  function template(args, callback) {
    if (args.template && !args.url)
      args.url = 'html/templates/' + args.template + '.html';
    if (args.url) {
      $.get(args.url, (template) => {
        const templateElement = $(template);
        if (typeof args.data === 'string') {
          api({ url: args.data }, (data) => {
            templateData(data);
          });
        }
      });
    } else {
      templateData(args.data);
    }
    if (callback) callback();
    function templateData(data) {
      if (Array.isArray(data)) {
        data.map((item) => {
          Object.keys(item).map((key, index) => {
            const templateItemElement = templateElement.find('.' + key);
            if (templateItemElement.nodeName == 'INPUT') {
              templateItemElement.val(item[key]);
            } else {
              templateItemElement.html(item[key]);
            }
          });
          $(args.el).append(templateElement);
        });
      } else if (typeof data === 'object') {
        Object.keys(data).map((key, index) => {
          const templateItemElement = templateElement.find('.' + key);
          if (templateItemElement.nodeName == 'INPUT') {
            templateItemElement.val(data[key]);
          } else {
            templateItemElement.html(data[key]);
          }
        });
        $(args.el).html(templateElement);
      }
    }
  }
  /**
   * @description Breadcrumb Component, uses <a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Bootstrap Breadcrumb</a>, returns <pre>HTMLElement</pre>
    * @param {Object} args
    * @param {Array} args.breadcrumbs
   */
  function breadcrumb(args) {
    const breadcrumbsElement = document.createElement('nav');
    breadcrumbsElement.setAttribute('aria-label', 'breadcrumb');
    const olElement = document.createElement('ol');
    let breadcrumbs;
    if (typeof args === 'object') {
      breadcrumbs = args.breadcrumbs;
    } else if (args.prototype === Array) {
      breadcrumbs = args;
    }
    breadcrumbs.map((breadcrumb) => {
      const liElement = document.createElement('ol');
      liElement.setAttribute('class', 'breadcrumb-item');
      liElement.innerHTML = breadcrumb;
      olElement.appendChild(liElement);
    });
    breadcrumbsElement.appendChild(olElement);
    componentElementOutput({
      el: args.el,
      output: breadcrumbsElement,
    });
    return breadcrumbsElement;
  }

  /**
  * @description Card Component, uses <a href="https://getbootstrap.com/docs/4.3/components/card/">Bootstrap Card</a>, returns <pre>HTMLDivElement</pre>
   * @param {Object} args - Arguments object
  * @param {String} args.title - title of card 
  * @param {String} args.content - content of card
  * @param {String} args.footer - content of card footer
  * @param {HTMLElement} args.el - Target Element
  * @example component.card({
      title : 'Title of Card',
      content : 'Content of Card'
    });
  */
  function card(args) {
    const card = document.createElement('div'),
      cardBody = document.createElement('div'),
      cardText = document.createElement('div'),
      cardFragment = document.createDocumentFragment();
    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    /** */
    if (args.title) {
      const cardTitle = document.createElement('h6');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerHTML = args.title;
      card.appendChild(cardTitle);
    }
    cardText.setAttribute('class', 'card-text');
    /**  */
    cardText.innerHTML = args.content;
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    /**  */
    if (args.footer) {
      const cardFooter = document.createElement('h6div');
      cardFooter.setAttribute('class', 'card-footer');
      cardFooter.innerHTML = args.footer;
      card.appendChild(cardFooter);
    }
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: card,
      });
    }
    return card;
  }
  // .................................................
  // component.btn
  /** 
   * @description Button Component, uses <a href="https://getbootstrap.com/docs/4.3/components/buttons/">Bootstap Button</a>, returns <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"><pre>HTMLButtonElement</pre></a>
   * @param {Object} args
   * @param {String} args.class - contextual class; primary, secondary, success, danger, warning, info, light or dark  - class attribute, defaults to '[btn-]primary' 
   * @param {String} args.id - id attribute, defaults to [uid]
   * @param {String} args.html - html content of button
   * @param {String} args.txt - text content of button
   * @param {Object} args.tooltip - button tooltip object
   * @param {String} args.tooltip.title - button tooltip title
   * @param {String} args.tooltip.trigger - button tooltip trigger, defaults to 'hover focus'
   * @param {Object} args.confirm - button confirm (popover) object
   * @param {Function} args.confirm.confirm - button confirm callback
   * @param {boolean} args.confirm.hideOnConfirm - hide modal after confirm callback
   * @param {String} args.confirm.msg - message to show on confirm, content of popover
   * @param {Object} args.el - [componentElementOutput] object
   * @example
  component.btn({
    class : 'primary',
    txt : 'Button Text',
    event : ['click',()=>{
      // do something on click
    }],
    confirm : {
      msg : 'Are you sure?',
      confirm() {
        console.log("Is confirmed")
      }
    }
  });
  */

  function btn(args) {
    const btn = document.createElement('button');
    if (!args.class) args.class = 'primary';

    btn.setAttribute('class', `btn btn-${args.class}`);
    if (args.style) btn.setAttribute('style', args.style);
    if (!args.id) args.id = uid();
    btn.setAttribute('id', args.id);

    btn.innerHTML = args.html ? args.html : args.txt;
    if (args.event) {
      btn.addEventListener(args.event[0], (event) => args.event[1](event));
    }

    if (args.tooltip) {
      btn.setAttribute('data-toggle', 'tooltip');
      btn.setAttribute('data-placement', 'top');
      /**  */
      const tooltipTitle = args.tooltip.title
        ? args.tooltip.title
        : args.tooltip;
      btn.setAttribute('title', tooltipTitle);
      const tooltipTrigger = args.tooltip.trigger
        ? { trigger: args.tooltip.trigger }
        : { trigger: 'hover focus' };
      $(btn).tooltip(tooltipTrigger);
    }
    // confirm
    /**  */
    if (typeof args.confirm === 'object') {
      // confirm(args.confirm)
      /**  */
      //const $amModal = el.modal;
      const confirm = () => {
        args.confirm.confirm();
        /**   */
        if (args.confirm.hideOnConfirm) element.modal('hide');
      };
      const cancel = () => $(btn).popover('hide');

      args.confirm.trigger = 'focus';
      /**   */
      args.confirm.content = args.confirm.msg;
      args.confirm.html = true;
      $(btn)
        .popover(args.confirm)
        .on('shown.bs.popover', () => {
          // popover is shown

          if (!args.confirm.class) args.confirm.class = 'primary';
          const $confirmBtn = _(
            'button',
            { class: `btn btn-sm btn-${args.confirm.class} confirm` },
            'Confirm'
          ).on('click', confirm); // confirm method of confirm object in arguments
          $('.popover-body').append($confirmBtn);
          const $cancelBtn = _(
            'button',
            { class: 'btn btn-sm cancel' },
            'Cancel'
          ).on('click', cancel);
          $('.popover-body').append($cancelBtn);
        });
    }
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: btn,
      });
    }
    return btn;
  }
  /**
   *
    * @param {Object} args
    * @param {Array} args.btns
   * @param {HTMLElement} [args.el]
   */
  function btn_group(args) {
    const btn_group = document.createElement('div');
    btn_group.setAttribute('class', 'btn-group');
    btn_group.setAttribute('role', 'group');
    args.btns.map((btn) => {
      btn_group.appendChild(btn(btn));
    });
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: btn_group,
      });
    }
    return btn_group;
  }

  /**
  * @description Confirm Component, uses <a href="https://getbootstrap.com/docs/4.3/components/popovers/">Bootstap Popover</a> for confirmation message, returns <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"><pre>HTMLElement</pre></a>
   * @param {Object} args
  * @param {HTMLElement} args.el - Target Element  
   * @param {Object} args.confirm - button confirm (popover) object
  * @param {Function} args.confirm.confirm - button confirm callback
  * @param {boolean} args.confirm.hideOnConfirm - hide modal after confirm callback
  * @param {String} args.confirm.msg - message to show on confirm, content of popover
  * @example component.confirm({
      el : $('<button>Confirm me</button>),
      msg : 'Are you sure?',
      closeModal : true, // confirm closes modal
      confirm(){
        console.log('Is confirmed');
      }
    });
  */
  function confirm(args) {
    const $confirmElement = args.el;

    const confirmEvent = () => {
      args.confirm.confirm();
      if (args.confirm.hideOnConfirm) element.modal('hide');
    };
    const cancelEvent = () => $confirmElement.popover('hide');

    args.confirm.trigger = 'focus';
    args.confirm.content = args.confirm.msg;
    args.confirm.html = true;
    $confirmElement
      .popover(args.confirm)
      .on('shown.bs.popover', () => {
        // popover is shown

        if (!args.confirm.class) args.confirm.class = 'primary';
        const $confirmBtn = $('<button></button>')
          .attr('class', `btn btn-sm btn-${args.confirm.class} confirm`)
          .html('Confirm')
          .on('click', confirmEvent);
        $('.popover-body').append($confirmBtn);
        const $cancelBtn = $('<button></button>')
          .attr('class', 'btn btn-sm cancel')
          .html('Cancel')
          .on('click', cancelEvent);
        $('.popover-body').append($cancelBtn);
      })
      .on('hidden.bs.popover', () => {
        // popover is hidden
        //button_.removeEventListener('click',confirm);
      });

    return $confirmElement;
  }
  // .................................................
  // component.modal

  /**
  * @description Modal Component, uses <a href="https://getbootstrap.com/docs/4.3/components/modals">Bootstap Modal</a> and optional <a href="https://getbootstrap.com/docs/4.3/components/navs/#tabs">Bootstap Nav Tabs</a>, returns <a href="https://api.jquery.com/element-selector/"><pre>jQuery( "element" ).modal()</pre></a>
   * @param {Object} args - Arguments object
  * @param {String} args.title 
   * @param {Object} args.tabs {@link component#navTabs}
   * @param {Array} args.tabs.tabs
  * @param {String} args.body 
   * @param {Array} args.buttons {@link component#btn}
  * @param {Function} args.open
  * @param {Function} args.close
  * @example 
   component.modal({
    title : 'Title of modal',
    body : 'Body of modal',
    open(){
      // do something on open
    },
    close(){
      // do something on close
    },
    save(){
      // do something on save (primary button is clicked)
    },
    buttons : [
      { txt : 'Button text', onClick : () => {
        // do something on button click
      }}
    ]
  });
  */
  function modal(args) {
    const $amModal = element.modal();

    $('#amModalTitle').html(args.title);
    $amModal.on('shown.bs.modal', () => {
      const argsHtml = args.tabs ? navTabs(args.tabs) : args.body;
      $('#amModalBody').html(argsHtml);

      $('.nav-tabs .nav-link').each(function (i) {
        $(this).on('click', (e) => {
          $('.tab-pane').removeClass('active show ');
          $(`div.tab-pane#${this.href.split('#')[1]}`).addClass('active show ');
        });
      });
      if (typeof args.open === 'function') args.open();
    });
    if (typeof args.save === 'function') {
      $('#amModalSave').on('click', () => {
        args.save();
      });
    }
    if (args.buttons) {
      const button_container = document.createElement('div');
      button_container.setAttribute('id', 'button_container');
      const footer = document.getElementById('amModalFooter');
      $('#amModalFooter #button_container .btn').remove();
      for (let button of args.buttons) {
        const button_ = component.btn(button);
        button_container.appendChild(button_);
      }
      footer.appendChild(button_container);
    }
    $amModal.on('hidden.bs.modal', function (e) {
      $('#amModalTitle').html('');
      $('#amModalBody').html('');
      $('#button_container').remove();

      if (typeof args.close === 'function') args.close();
      const $amModalElement = $amModal,
        amModalContainer = $('#amModalContainer');

      $amModal.remove();
      amModalContainer.html($amModalElement);
    });
    return $amModal;
  }

  /**
  * @description Tabs Component, uses <a href="https://getbootstrap.com/docs/4.3/components/navs/#tabs">Bootstap Nav Tabs</a>
   * @param {Object} args - Arguments object
   * @param {Array} args.tabs 
  * @param {HTMLElement} args.el - Target Element 
  * @example component.nav.tabs({ tabs : [
    { label : 'Tab#1', content : 'Content for Tab#1' }
  ]});
  */
  function navTabs(args) {
    const tabsElement = _('ul', {
        id: `tabs_${uid()}`,
        class: 'nav nav-tabs',
        role: 'tablist',
      }),
      tabsFragment = document.createDocumentFragment(),
      tabsContent = _('div', { class: 'tab-content' });

    const tabs = args.tabs;
    let tabIndex = 0;
    if (tabs.prototype !== Array)
      err(
        'component.navTabs : args.tabs expected as array but is of type ' +
          typeof tabs
      );
    tabs.forEach((tab) => {
      if (tab.label) {
        const tabId = uid(),
          tabLinkClass = tabIndex === 0 ? 'nav-link active' : 'nav-link',
          tabLink = _(
            'a',
            {
              class: tabLinkClass,
              href: `#${tabId}`,
              role: 'tab',
              'aria-controls': tabId,
              'data-toggle': 'tab',
            },
            tab.label,
            [
              'click',
              (event) => {
                $('.nav-tabs a[href="' + event.target.href + '"]').tab('show');
              },
            ]
          ),
          tabElement = _('li', { class: 'nav-item' }, tabLink);
        tabClass =
          tabIndex === 0 ? 'tab-pane fade show active' : 'tab-pane fade';
        let tabContent = tab.content;
        tabContent = _(
          'div',
          {
            id: tabId,
            class: tabClass,
            role: 'tabpanel',
            'aria-labelledby': `${tabId}-tab`,
          },
          tabContent
        );
        tabsElement.append(tabElement);
        tabsContent.append(tabContent);
        tabIndex++;
      }
    });
    tabsFragment.appendChild(tabsElement.get(0));
    tabsFragment.appendChild(tabsContent.get(0));
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: tabsFragment,
      });
    }
    return tabsFragment;
  }
  /**
   *
    * @param {Object} args
   * @param {String} args.type - pill or tab
    * @param {Array} args.navs
   * @param {HTMLElement} [args.el]
   */
  function navs(args) {
    const navsElement = document.createElement('ul'),
      navsFragment = document.createDocumentFragment();
    navsElement.setAttribute('class', `nav nav-${args.type}s`);
    navsElement.setAttribute('id', `navs_${uid()}`);
    navsElement.setAttribute('role', 'tablist');
    const navsContent = document.createElement('div');
    navsContent.setAttribute('class', 'nav-content');
    const navs = args.navs;
    let navIndex = 0;
    if (navs.prototype !== Array)
      err(
        'component.navs : args.navs expected as array but is of type ' +
          typeof navs
      );
    navs.forEach((nav) => {
      if (nav.label) {
        const navId = uid(),
          navElement = document.createElement('li'),
          navLink = document.createElement('a'),
          navContent = document.createElement('div'),
          navClass =
            navIndex === 0 ? 'tab-pane fade show active' : 'tab-pane fade',
          navLinkClass = navIndex === 0 ? 'nav-link active' : 'nav-link';
        // navElement
        navLink.setAttribute('href', `#${navId}`);
        navLink.setAttribute('class', navLinkClass);
        navLink.setAttribute('role', 'tab');
        navLink.setAttribute('aria-controls', navId);
        navLink.setAttribute('data-toggle', args.type);
        navLink.innerHTML = nav.label;
        navLink.addEventListener('click', (event) => {
          $(`nav-${args.type}s a[href="` + event.target.href + '"]').tab(
            'show'
          );
        });
        navElement.setAttribute('class', 'nav-item');
        navElement.appendChild(navLink);
        navsElement.appendChild(navElement);
        // navContent
        navContent.setAttribute('class', navClass);
        navContent.setAttribute('aria-labelledby', `${navId}-nav`);
        navContent.setAttribute('id', navId);
        navContent.setAttribute('role', 'tabpanel');
        navContent.innerHTML = nav.content;
        navsContent.appendChild(navContent);
        navIndex++;
      }
    });
    navsFragment.appendChild(navsElement);
    navsFragment.appendChild(navsContent);
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: navsFragment,
      });
    }
    return navsFragment;
  }
  /**
  * @description Table Component, uses <a href="https://getbootstrap.com/docs/4.3/content/tables//">Bootstap Table</a>, returns <a href=https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement">HTMLTableElement</a>
   * @param {Object} args - Arguments object
  * @param {String} args.class - contextual class; primary, secondary, success, danger, warning, info, light or dark 
  * @param {String} args.model
   * @param {Object} args.data
  * @param {String} args.data.url
  * @param {Function} args.data.modify
  * @param {Function} args.data.callback
  * @example component.table({
    el : '#tableContainerId',
    model : 'modelName',
    data : {
      url : 'api/endpoint',
      modify : (item) => {
        // modify fetched data
      }
    },
    cols : {
      propNameOne : {
        label : 'Label of propNameOne'
      },
      propNameTwo : {
        label : 'Label of propNameTwo'
      },
    },
    options : { // adds row options
      view : (item) => {

      },
      edit : (item) => {

      },
      delete : (item) => {

      }
    }
  })
  */
  function table(args) {
    args.class = args.class ? args.class : '';
    let table = _('table', { class: `table ${args.class}` });

    const thead = document.createElement('thead'),
      tr = document.createElement('tr');

    args.cols.forEach((col) => {
      //if(args.cols[prop]){

      let th = document.createElement('th');
      th.innerHTML = args.cols[col].label;
      tr.appendChild(th);
      // }
      if (args.options) {
        th = document.createElement('td');
        th.setAttribute('style', 'width:100px;');
        tr.appendChild(th);
      }
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    if (args.data.url) {
      const apiObj = {
        url: args.data.url,
        callback: (data) => {
          if (data[0]) {
            table = tableBody(
              table,
              Object.getOwnPropertyNames(data[0]),
              data,
              args
            );
            tableInsert(args, table);
          } else {
            $(args.el).html('No Data');
          }

          if (args.data.callback) args.data.callback(data);
        },
      };
      if (args.data.modify) apiObj.modify = args.data.modify;
      api(apiObj);
    } else {
      table = tableBody(table, props, args.data, args);
      table = tableInsert(args, table);
      return table;
    }

    // table body
    function tableBody(table, props, data, args) {
      const tbody = document.createElement('tbody');
      let tr, td;
      data.forEach((item) => {
        tr = document.createElement('tr');
        if (item.id) tr.setAttribute('id', item.id);
        if (args.methods) {
          if (args.methods.onRowClick) {
            tr.addEventListener('click', (event) => {
              args.methods.onRowClick(event);
            });
          }
        }
        for (let col in args.cols) {
          td = document.createElement('td');
          td.innerHTML = item[col];
          tr.appendChild(td);
        }
        if (args.options) {
          td = document.createElement('td');
          const button_group = document.createElement('div');
          button_group.setAttribute('class', 'btn-group');
          Object.getOwnPropertyNames(args.options).forEach((option) => {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('class', 'btn');
            if (option === 'view') {
              icon.setAttribute('class', 'fas fa-eye');
            } else if (option === 'edit') {
              icon.setAttribute('class', 'fas fa-edit');
            } else if (option === 'delete') {
              icon.setAttribute('class', 'fas fa-trash');
            }
            button.addEventListener('click', (event) => {
              event.preventDefault();
              args.options[option](item);
            });
            button_group.appendChild(button);
          });
          td.appendChild(button_group);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      return table;
    }

    // table insert
    function tableInsert(args, table) {
      if (!args.insert) args.insert = 'html';
      if (!args.el) args.el = application.config.main;

      $(args.el)[args.insert](table);
      return table;
    }
  }

  // .................................................
  // form
  // form.data
  /**
   * @description <a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">FormData</a> Component
    * @param {Object} args - Arguments object
    * @param {Object} args.el
   *
   */
  function formData(args) {
    let form = typeof args === 'object' ? args.el : args;
    form = form instanceof HTMLElement ? form : document.querySelector(form);
    const model = application.config.models[args.model];
    const formData = new FormData(form),
      formObj = {};

    for (let item in model) {
      if ($('#' + form.id + ' #' + item).val())
        formData.append(item, $('#' + form.id + ' #' + item).val());
    }

    for (let field of formData.entries()) {
      formObj[field[0]] = field[1];
    }

    return formObj;
  }
  // .................................................
  // component.form.post

  /**
   * @description Form Post Component, optional callback function argument
    * @param {Object} args - Arguments object 
   * @param {String} args.el
   * @param {String} args.url
   * @param {Function} callback
   * @example component.form.post({
    url : 'api/endpoint',
    el : 'myFormId'
  },(data) => {
    // do something after axios.post has finished
  });
   */
  function formPost(args, callback) {
    const form = document.getElementById(args.el);
    const formDataObj = args.model
      ? { el: form, model: args.model }
      : { el: form };
    const formObj = formData(formDataObj);

    axios
      .post(args.url, formObj)
      .then((formObj) => {
        if (typeof callback === 'function') callback(formObj);
        if (typeof args.callback === 'function') args.callback(formObj);
      })
      .catch(function (error) {
        $(args.el).html(`A error has occured : ${error}`);
      });

    return form;
  }

  /**
   * @description create object from input elements in element
    * @param {Object} args
   * @param {String} args.el
   */
  function formFieldsObj(args) {
    const formElement = document.querySelectorAll(`${args.el} input`),
      dataObject = new Object({}),
      dataArray = Array.prototype.slice.call(formElement);

    for (const el in dataArray)
      dataObject[dataArray[el].id] = dataArray[el].value;
    return dataObject;
  }
  // .................................................
  /*
  
  */
  // create form with model
  /**
   * @description Form Model Component
    * @param {Object} args - Arguments object
   * @param {String} [args.btnSaveTxt]
   * @param {String} args.model
    * @param {Array} args.model
    * @param {Object} args.fields
    * @param {Array} args.fields
   * @param {Function} args.onSubmit
   * @example component.form.fromModel({
    model : 'modelName',
    fields : {
      propNameOne : {
        label : 'Label Of PropNameOne',
      }
    },
    fields : [
      {field : 'propNameOne', label : 'Label Of PropNameOne'},
      {fields : [ 
        {field : 'propNameOne', label : 'Label Of PropNameOne'},
      ]}
    ]
    onSubmit : (event) => {
      // do something on submit
    }
  })
   */
  function formFromModel(args) {
    const models = application.config.models,
      form = document.createElement('form'),
      formBody = document.createElement('div'),
      formFooter = document.createElement('div'),
      formBtnSave = document.createElement('button');
    formBtnSave.setAttribute('class', 'btn btn-primary btn-lg');
    formBtnSave.innerHTML = args.btnSaveTxt;
    form.setAttribute('encType', 'multipart/form-data');
    if (args.card) form.setAttribute('class', 'card shadow');
    form.setAttribute('id', args.id);
    if (args.card) formBody.setAttribute('class', 'card-body');
    if (args.card) formFooter.setAttribute('class', 'card-footer');
    let model, props;
    if (typeof args.model === 'string') {
      props = Object.getOwnPropertyNames(models[args.model]);
    } else if (args.model.constructor === Array) {
      props = [];
      for (let item of args.model) {
        for (let prop of Object.getOwnPropertyNames(models[item]))
          props.push(prop);
      }
    }
    let index = 0;
    for (let prop in args.fields) {
      if (props.includes(prop)) {
        // given property matches property in model(s)
        // append row to form
        formBody.appendChild(formRow(prop, args));
      } else {
        if (prop.split('_')[0] === 'header') {
          const header = document.createElement(prop.split('_')[1]);
          header.innerHTML = args.fields[prop];
          const hr = document.createElement('hr');
          formBody.appendChild(header);
          formBody.appendChild(hr);
        } else if (prop === 'field') {
        } else if (prop === 'fields') {
        }
      }
      index++;
    }
    if (!args.insert) args.insert = 'append';
    //if(!args.el) args.el = application.config.main
    if (args.el) $(args.el)[args.insert](form);
    // submit event
    if (args.btnSaveTxt) {
      formFooter.appendChild(formBtnSave);
    }
    form.appendChild(formBody);
    if (args.card) form.appendChild(formFooter);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = formData(form);
      if (args.url) {
        if (!args.method) args.method = 'post';
        if (args.method) {
          if (args.before) {
            //axios.interceptors.request.use((data) => {
            args.before(data);
            //});
          }

          axios[args.method](args.url, data).then((data) => {
            if (args.onSubmit) args.onSubmit(data);
          });
        }
      } else {
        if (args.onSubmit) args.onSubmit(data);
      }
    });
    if (args.el) {
      componentElementOutput({
        el: args.el,
        output: form,
      });
    }
    return form;
  }

  // form group row
  function formRow(prop, args) {
    const usePropArgs = typeof prop === 'object';
    if (usePropArgs) args = prop;
    // row
    const formRow = document.createElement('div');
    formRow.setAttribute('class', 'form-group row');
    // label
    const formRowLabel = document.createElement('label');
    formRowLabel.setAttribute('for', prop);
    formRowLabel.setAttribute('class', 'col-sm-2 col-form-label');
    formRowLabel.innerHTML = usePropArgs ? args.label : args.fields[prop].label;
    formRow.appendChild(formRowLabel);
    const formInputCol = document.createElement('div');
    formInputCol.setAttribute('class', 'col-sm-10');
    let argsUse;
    try {
      argsUse = args.fields[prop].use;
    } catch (e) {
      if (args.use) argsUse = args.use;
    }
    if (argsUse) {
      $(formInputCol).append(argsUse());
    } else {
      // input type
      const formRowInputType = args.fields[prop].type;
      const formRowInput =
        formRowInputType === 'textarea'
          ? document.createElement('textarea')
          : document.createElement('input');

      try {
        if (formRowInputType)
          formRowInput.setAttribute('type', formRowInputType);
      } catch (e) {
        if (args.type) formRowInput.setAttribute('type', args.type);
      }

      formRowInput.setAttribute('class', 'form-control shadow');
      let formRowInputId = usePropArgs ? args.id : prop;
      if (args.name) formRowInputId = args.name;
      formRowInput.setAttribute('id', formRowInputId);
      if (usePropArgs) {
        if (args.value) formRowInput.setAttribute('type', args.value);
      } else {
        if (args.fields[prop].value) {
          if (formRowInputType === 'textarea') {
            formRowInput.innerHTML = args.fields[prop].value;
          } else {
            formRowInput.setAttribute('value', args.fields[prop].value);
          }
        }
      }

      formInputCol.appendChild(formRowInput);
      if (usePropArgs) {
        if (args.type === 'date') $(`#${args.id}`).datepicker();
      } else {
        if (args.fields[prop].type === 'date') $(`#${prop}`).datepicker();
      }
    }

    formRow.appendChild(formInputCol);

    return formRow;
  }

  // .................................................
  // custom form inputs
  function formInputDatepicker(args) {}

  function formInputTimepicker(args) {}
  // .................................................
  /** validates form; https://pageclip.co/blog/2018-02-20-you-should-use-html5-form-validation.html */
  function formValidate(args) {
    const customMessages = {
      valueMissing: args.valueMissing, // `required` attr
      emailMismatch: args.emailMismatch, // Invalid email
      patternMismatch: args.patternMismatch, // `pattern` attr
    };

    function getCustomMessage(type, validity) {
      if (validity.typeMismatch) {
        return customMessages[`${type}Mismatch`];
      } else {
        for (const invalidKey in customMessages) {
          if (validity[invalidKey]) {
            return customMessages[invalidKey];
          }
        }
      }
    }

    const formElementInputs = document.querySelectorAll(
      'input, select, textarea'
    );
    formElementInputs.forEach(function (input) {
      function checkValidity() {
        const message = input.validity.valid
          ? null
          : getCustomMessage(input.type, input.validity, customMessages);
        input.setCustomValidity(message || '');
      }
      input.addEventListener('invalid', function () {
        input.classList.add('invalid');
      });
      input.addEventListener('input', checkValidity);
      input.addEventListener('invalid', checkValidity);
    });
  }
  // .................................................
  // alert
  /**
   * @description Alert Component,uses <a href="https://getbootstrap.com/docs/4.3/components/alerts/">Bootstap Alert</a>, returns <a href="https://api.jquery.com/element-selector/"><pre>jQuery( "element" )</pre></a>
   * @external "jQuery.fn"
   * @see {@link https://getbootstrap.com/docs/4.3/components/alerts/}
    * @param {Object} args - Arguments object
   * @param {String} args.class - contextual class (defaults to 'primary'); primary, secondary, success, danger, warning, info, light or dark  - contextual class; primary, secondary, success, danger, warning, info, light or dark
   * @param {String} args.message
   * @param {number} args.fadeOut
   * @example component.alert({ message : 'This is a alert' });
   */
  function alert(args) {
    args.class = args.class ? args.class : 'primary';
    const alert = $('<div></div>')
      .addClass(`alert alert-${args.class}`)
      .html(args.message);
    args.fadeOut = args.fadeOut ? args.fadeOut : 3000;
    $(application.object.config.main).prepend(alert);
    if (args.fadeOut) {
      setTimeout(() => {
        alert.fadeOut(() => {
          alert.remove();
        });
      }, args.fadeOut);
    }
    return alert;
  }
  // .................................................
  // calendar
  /**
   * @description Calendar Component,uses <a href="https://getbootstrap.com/docs/4.3/content/tables/">Bootstap Table</a>, returns <a href="https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment"><pre>DocumentFragment</pre></a>
    * @param {Object} args - Arguments object
   * @param {number} args.d
   * @param {number} args.m
   * @param {number} args.y
    * @param {Object} args.data
   * @param {String} args.data.url
   * @param {Function} args.data.callback
   * @param {Function} args.data.modify
   * @see {@link https://getbootstrap.com/docs/4.3/content/tables/}
   * @example component.calendar({
     el : '#myCalendar',
     data : {
       url : 'api/endpoint',
       method : 'get',
       modify : (item) => {
        // do something with returned data item
      },
      callback : (data) => {
        // do something with returned data
      }

     }
   })
   */
  function calendar(args) {
    //const view = args.view ? args.view : 'month'
    const $documentFragment = $(document.createDocumentFragment());
    const $calendarTable = $('<table></table>').attr(
        'class',
        'table table-calendar table-bordered table-striped'
      ),
      $calendarTableHeader = $('<thead></thead>'),
      $calendarTableHeadersWeekDays = $(
        '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>'
      ),
      $calendarTableBody = $('<tbody></tbody>');
    $calendarTableHeader.append($calendarTableHeadersWeekDays);
    $calendarTable.append($calendarTableHeader);
    let $calendarTableRow;
    args = args ? args : {};
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const now = new Date(),
      dd = args.d ? args.d : now.getDate(),
      mm = args.m ? args.m : now.getMonth() + 1,
      yyyy = args.y ? args.y : now.getFullYear(),
      days = new Date(yyyy, mm, 0).getDate() + 1;

    let start = 1;

    let weekDayNumStart = new Date(`${yyyy}-${mm}-${start}`).getDay(),
      prevMonth = mm - 1,
      prevMonthDays = new Date(yyyy, prevMonth, 0).getDate() + 1,
      prevMonthStart = prevMonthDays - weekDayNumStart,
      weekDayNum;

    if (args.data) {
      const apiObj = {
        url: args.data.url,
        callback: (data) => {
          if (data[0]) {
            calendarBuild(data);
          } else {
            $(args.el).html('No Data');
          }
          if (args.data.callback) args.data.callback(data);
        },
      };
      if (args.data.modify) apiObj.modify = args.data.modify;
      api(apiObj);
    } else {
      calendarBuild();
    }
    /**
     *
      * @param {Array} data
     */
    function calendarBuild(data) {
      while (prevMonthStart < prevMonthDays) {
        weekDayNum = new Date(
          `${yyyy}-${prevMonth}-${prevMonthStart}`
        ).getDay();
        if (weekDayNum === 0) $calendarTableRow = $('<tr></tr>');
        let $calendarTableCell = $('<td></td>').attr(
          'style',
          'background-color:#fff;'
        );
        $calendarTableRow.append(
          $calendarTableCell.html(prevMonthStart).addClass('text-muted')
        );
        if (data) {
          for (let item of data) {
            if (
              item.date.split('T')[0] ===
              `${yyyy}-${prevMonth}-${prevMonthStart}`
            ) {
              let $eventItem = $('<div></div>')
                .attr('class', 'event begin end')
                .html(`<i class="far fa-calendar"></i> ${item.name}`);
              $calendarTableCell.append($eventItem);
            }
          }
        }
        if (weekDayNum === 6) $calendarTableBody.append($calendarTableRow);
        prevMonthStart++;
      }
      // current month
      while (start < days) {
        if (start.toString().length < 2) start = `0${start}`;
        weekDayNum = new Date(`${yyyy}-${mm}-${start}`).getDay();
        if (weekDayNum === 0) $calendarTableRow = $('<tr></tr>');
        let $calendarTableCell = $('<td></td>');
        $calendarTableCell.attr('data-date', `${yyyy}-${mm}-${start}`);
        $calendarTableCell.attr('id', `date-${yyyy}-${mm}-${start}`);
        // dd = (component.date('dd')/1);
        if (dd === start / 1) {
          $calendarTableRow.append(
            $calendarTableCell.addClass('today').html(`<b>${start}</b>`)
          );
        } else {
          $calendarTableRow.append($calendarTableCell.html(start));
        }
        if (dd > start) {
          $calendarTableCell.addClass('past');
        } else {
          if (args.btn) {
            //args.btn.id = `${mm}-${start}-${yyyy}`
            const $calendarTableCellBtn = $(component.btn(args.btn));
            $calendarTableCellBtn.on('click', args.btn.onClick);
            $calendarTableCell.append($calendarTableCellBtn);
          }
        }

        if (data) {
          for (let item of data) {
            if (item.date.split('T')[0] === `${yyyy}-${mm}-${start}`) {
              // add items for specified date
              let $eventItem = $('<div></div>')
                .attr('class', 'event begin end')
                .attr('id', item.id)
                .html(`<i class="fas fa-calendar"></i> ${item.name}`)
                .click(args.onClick);
              $calendarTableCell.append($eventItem);
            }
          }
        }
        if (weekDayNum === 6) $calendarTableBody.append($calendarTableRow);
        start = start / 1;
        start++;
      }
      $calendarTable.append($calendarTableBody);
    }
    const $calendarMonths = $('<div></div>').attr('class', 'dropdown');
    // calendarMonths dropdown
    // https://getbootstrap.com/docs/4.3/components/dropdowns/
    $calendarMonths.append(
      $('<a></a>')
        .attr('id', 'calendarMonths')
        .attr('class', 'btn btn-light dropdown-toggle')
        .attr('role', 'button')
        .attr('data-toggle', 'dropdown')
        .html(months[mm - 1])
    );
    const $calendarMonthsMenu = $('<div></div>')
      .attr('class', 'dropdown-menu')
      .attr('aria-labelledby', 'calendarMonths');
    months.map((month) => {
      if (month !== months[mm - 1])
        $calendarMonthsMenu.append(
          $('<a></a>').attr('class', 'dropdown-item').html(month)
        );
    });
    $calendarMonths.append($calendarMonthsMenu);
    $calendarMonths.dropdown();
    $documentFragment.append($calendarMonths);
    $documentFragment.append($calendarTable);
    $(args.el).html($documentFragment);
    return $documentFragment;
  }
  // .................................................
  // editor; all in one CRUD component
  /*
  component.editor({
    module : 'modulename',
    data : {
      url :'api/endpoint',
      modify : (item)=>{
        return item
      },
      callback : (data) => {

      }
    },
    use : {
      view : {
        component : 'modal'
      },
      overview : {
        component : 'table',
        default : true, // use overview as module default
        methods : {
          onRowClick : view
        }
      }
    }
  })
  */
  function editor(args) {
    let editorView;
    let editorAdd;
    let editorOverview;
    // module presets
    application.object[args.module].template = 'editor';
    application.object[args.module].default = editorOverview;
    application.object[args.module].add = { default: editorAdd };
    application.object[args.module].view = { default: editorView };
    // set routes
    application.routes[`${args.module}/add`] = `${args.module}.add`;
    application.routes[`${args.module}/view`] = `${args.module}.view`;
    // data config
    const editorData = {
      url: args.data.url,
      modify: args.data.modify,
      callback: (data) => {
        application.object[args.module].data = data;
        args.data.callback();
      },
    };
    // view
    editorView = (id) => {
      args.view.data = application.object[args.module].data.filter(
        (item) => item.id === id
      )[0];
      component[args.view.use.component](args.view);
    };
    // add
    editorAdd = () => {
      component[args.add.use.component](args.add);
    };
    // overview
    editorOverview = () => {
      if (!args.overview.us.class && args.us.overview.component === 'table')
        args.use.overview.class = 'table-striped table-hover';

      component[args.use.overview.component]({
        model: args.use.overview.model,
        el: args.use.overview.el,
        data: editorData,
        class: args.use.overview.class,
        cols: args.use.overview.cols,
      });
    };
    //api call
    api(editorData);
  }
  // component.$
  /*
  const $div = component.$('div:myDiv')
  */

  methods.$ = function (args) {
    let element;
    if (typeof args === 'string') {
      if (args.contains('#') || args.contains('.')) {
        element = $(args.split(':')[0]);
      } else {
        const el = args.split(':')[0];
        element = _(el, args);
      }
    } else if (args.prototype === Array) {
      const name = args[0].split(':')[1];
      if (!component[name]) {
        componentMethods({
          element: element,
          name: name,
        });
      }
    }

    return element;
  };
  // component.require
  /*
 component.require({
   url : 'script.js'
 });
  
  */
  function require(args) {
    $.get(args.url).done((response) => {
      if (args.callback) args.callback(response);
    });
  }
  // component.queue
  /*
 component.queue({
   data : application.object.config.require
 });
  
  */
  function queue(args) {
    const queue = new Object({}),
      id = Symbol(),
      data = args.data;
    queue.data = args.data;
    queue[id] = uid();

    if (args.template) {
      if (typeof args.template === 'string') {
      }
    }

    if (typeof data.url === 'string') {
      api({
        url: data.url,
        callback: (response) => {
          response.forEach((responseItem) => args.callback(responseItem));
          queue.data = response;
        },
      });
    } else if (data.protoype === Array) {
      data.forEach((item) => {
        if (item.url) {
          api({
            url: item.url,
            callback: (response) => {
              response.forEach((responseItem) => item.callback(responseItem));
            },
          });
        }
      });
    }

    return queue;
  }
  // component.encrypt
  /*
  const MyModelEncrypt = component.encrypt({
    model : 'MyModel'
  });
  
  */
  function encrypt(args) {
    const encrypt = new Object({}),
      model = args.model
        ? args.model
        : err('component.encrypt args.model undefined');
    encrypt.id = uid();

    return encrypt;
  }
  // componentMethods

  function componentMethods(args) {
    if (!component[args.name]) {
      for (const method in methods) {
        component[args.name][method] = (args) => {
          args.el = args.element;
          component[method](args);
        };
      }
      component[name].el = args.element;
    }
  }
  methods.with = function (item) {
    let output;
    if (typeof item.model === 'object') {
      models[item.model.name] = model.get(item.model); // attach model
    }
    if (item.component && item.options) {
      output = methods[item.component](item.options);
      if (!methods[item.name]) methods[item.name] = output; // attach component
    } else if (item.element.prototype === Array) {
      if (item.element[1] && item.element[2] && item.element[3]) {
        output = _(
          item.element[0],
          item.element[1],
          item.element[2],
          item.element[3]
        );
      } else if (item.element[1] && item.element[2]) {
        output = _(item.element[0], item.element[1], item.element[2]);
      } else if (item.element[1]) {
        output = _(item.element[0], item.element[1]);
      } else {
        output = _(item.element[0]);
      }
    } else {
      output = _(item.element);
    }

    if (item.el) {
      $(item.el).html(output); // set html output
    } else if (item.append) {
      if (typeof item.append === 'object') {
        if (item.append.component) {
          component[item.append.component].append(output); // append output to component
        }
      } else {
        $(item.append).append(output); // append output
      }
    }
    if (typeof item.mount === 'function') {
      item.mount(output);
    }
    view[item.name] = output;
          controller[item.name] = {
            model : item.model.name
          }
  };
  return methods;
})();
