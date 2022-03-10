/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- 
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function () {
    'use strict'

    function DOM(elementOfHTML) {
        this.element = Array.from(document.querySelectorAll(elementOfHTML));
        this.on = function on(typeOfEvent, callback) {
            this.element.forEach((elementHTML) => {
                elementHTML.addEventListener(typeOfEvent, callback)
            })
        };
        this.off = function off(typeOfEvent) {
            this.element.forEach((elementHTML) => {
                console.log("exclui")
                elementHTML.removeEventListener(typeOfEvent, null)
            })
        }
        this.get = function get() {
            return this.element;
        }
        this.forEach = function forEach() {
            return Array.prototype.forEach.apply(this.element, arguments);
        }
        this.map = function map() {
            return Array.prototype.map.apply(this.element, arguments);
        }
        this.reduce = function reduce () {
            return Array.prototype.reduce.apply(this.element, arguments)
        }
        this.reduceRight = function reduceRight () {
            return Array.prototype.reduceRight.apply(this.element, arguments)
        }
        this.every = function every () {
            return Array.prototype.every.apply(this.element, arguments)
        }
        this.some = function some () {
            return Array.prototype.some.apply(this.element, arguments)
        }
        this.isArray = function isArray(parametro) {
            return Object.prototype.toString.call(parametro) === "[object Array]"
        }
        this.isObject = function isObject(parametro){
            return Object.prototype.toString.call(parametro) === "[object Object]"
        }
        this.isFunction = function isFunction(parametro){
            return Object.prototype.toString.call(parametro) === "[object Function]"
        }
        this.isNumber = function isNumber(parametro){
            return Object.prototype.toString.call(parametro) === "[object Number]"
        }
        this.isString = function isString(parametro){
            return Object.prototype.toString.call(parametro) === "[object String]"
        }
        this.isBoolean = function isBoolean(parametro){
            return Object.prototype.toString.call(parametro) === "[object Boolean]"
        }
        this.isNull = function isNull(parametro){
            return Object.prototype.toString.call(parametro) === "[object Null]" || Object.prototype.toString.call(parametro) === "[object Undefined]"
        }

    }

    const dom1 = new DOM("[data-js='link']");
    console.log(dom1)
    dom1.forEach(function (item){
        console.log("item", item);
    })
    dom1.map(function (item) {
        console.log("map", item)
    })
    const dom2 = new DOM();
    console.log(dom2.isArray([1,2,3]))
    console.log(dom2.isObject({}))
    console.log(dom2.isFunction(function myFuction(){}))
    console.log(dom2.isNumber("numero"))
    console.log(dom2.isNull(null))
    console.log(dom2.isNull(undefined))
   
})()
