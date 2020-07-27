import { config } from './config.js';
/**
 *
  * @param {Object} next
 */
export function $_(use, next) {
  'use strict';
  if (window.jQuery && $.fn.modal) {
    // jQuery & Bootstrap are loaded
    next();
  } else {
    /**
     * Loads jQuery & Bootstrap
     * @param {String} url
     */
    const script = (url) => {
        const element = document.createElement('script');
        element.src = url;
        element.type = 'text/javascript';
        return element;
      },
      stylesheet = (url) => {
        const element = document.createElement('link');
        element.href = url;
        element.rel = 'stylesheet';
        return element;
      },
      jquery = script(
        'https://code.jquery.com/jquery-' + config.jquery + '.min.js'
      ),
      bootstrap = {
        js: script(
          'https://stackpath.bootstrapcdn.com/bootstrap/' +
            config.bootstrap +
            '/js/bootstrap.bundle.min.js'
        ),
        css: stylesheet(
          'https://stackpath.bootstrapcdn.com/bootstrap/' +
            config.bootstrap +
            '/css/bootstrap.min.css'
        ),
      };
    document.getElementsByTagName('body')[0].appendChild(jquery);
    jquery.addEventListener(
      'load',
      () => {
        document.getElementsByTagName('body')[0].appendChild(bootstrap.js);
        document.getElementsByTagName('head')[0].appendChild(bootstrap.css);
        bootstrap.js.addEventListener(
          'load',
          () => {
            let element,
              index = 0;
            /**
             *
              * @param {Object} source
             */
            function load(source) {
              // Load source
              if (typeof source === 'string')
                source = new Object({ type: 'js', url: source + '.js' });
              if (!source.type)
                source.type = source.url.split('.')[
                  source.url.split('.').length
                ];
              if (source.type === 'js') {
                element = script(source.url);
                document.getElementsByTagName('body')[0].appendChild(element);
              } else if (source.type === 'css') {
                element = stylesheet(source.url);
                document.getElementsByTagName('head')[0].appendChild(element);
              }
              return element;
            }
            /**
             *
             * @param {number} index
             */
            function sourceLoad(index) {
              load(use[index]).addEventListener('load', () => {
                if (index === use.length - 1) {
                  next(); // call next property as callback
                } else {
                  index++;
                  sourceLoad(index); // load next item
                }
              });
            }
            if (typeof use.prototype === Array && typeof next === 'function') {
              sourceLoad(index);
            } else if (use.prototype === Array) {
              const source = use.map((item) =>
                Object({ url: item + '.js', type: 'js' })
              );
              next = { use: source };
            } else {
              next();
            }
          },
          false
        );
      },
      false
    );
  }
  
}
