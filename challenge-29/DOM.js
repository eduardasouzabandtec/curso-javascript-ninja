

(function(window, document) {
    function DOM(elementOfHTML) {
       if(!(this instanceof DOM)) {
         return new DOM(elementOfHTML);
        }
        this.element = Array.from(document.querySelectorAll(elementOfHTML));
    }
    DOM.isArray = function isArray(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Array]"
      }
      DOM.isObject = function isObject(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Object]"
      }
      DOM.isFunction = function isFunction(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Function]"
      }
      DOM.isNumber = function isNumber(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Number]"
      }
      DOM.isString = function isString(parametro) {
        return Object.prototype.toString.call(parametro) === "[object String]"
      }
      DOM.isBoolean = function isBoolean(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Boolean]"
      }
      DOM.isNull = function isNull(parametro) {
        return Object.prototype.toString.call(parametro) === "[object Null]" || Object.prototype.toString.call(parametro) === "[object Undefined]"
      }

      DOM.prototype.on = function on(typeOfEvent, callback) {
        this.element.forEach((elementHTML) => {
          elementHTML.addEventListener(typeOfEvent, callback)
        })
      };
      DOM.prototype.off = function off(typeOfEvent) {
        this.element.forEach((elementHTML) => {
          elementHTML.removeEventListener(typeOfEvent, null)
        })
      }
      DOM.prototype.get = function get(index) {
        return this.element[index ? index : 0];
      }
      DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
      }
      DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
      }
      DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments)
      }
      DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments)
      }
      DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments)
      }
      DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments)
      }

    window.DOM = DOM
})(window, document)