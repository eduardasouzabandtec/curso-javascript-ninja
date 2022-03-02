/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/
(function(windoe, document) {

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');
var valueToShow = "";


function iniciar() {
  iniciarEventos();
}

function iniciarEventos() {
  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function (button) {
    button.addEventListener('click', handleClickOperation, false);
  });
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);
}


function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  valueToShow = 0;
  alteraIput(0);
}
function alteraInput(number) {
  $visor.value = number
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  return operations.some(function (operator) {
    return operator === lastItem;
  });
}

function removeLastItemIfItIsAnOperator(string) {
  if (isLastItemAnOperation(string)) {
    return string.slice(0, -1);
  }
  return string;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function (accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';

    return doCalc(operator, firstValue, lastValue, lastOperator);
  });
}
function doCalc(operator, firstValue, lastValue, lastOperator) {
  switch (operator) {
    case '+':
      return (Number(firstValue) + Number(lastValue)) + lastOperator;
    case '-':
      return (Number(firstValue) - Number(lastValue)) + lastOperator;
    case 'x':
      return (Number(firstValue) * Number(lastValue)) + lastOperator;
    case '÷':
      return (Number(firstValue) / Number(lastValue)) + lastOperator;
  }
}


})(window, document)
