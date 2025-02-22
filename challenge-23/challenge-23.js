/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente; ok
- O input deve iniciar com valor zero;ok
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número; ok 
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);ok
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0; ok

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function (window, document) {


    var $inputNumber = document.querySelector("[data-js='number']");
    var $buttonClear = document.querySelector("[data-js='clear']");
    var $buttonNumber = document.querySelectorAll("[data-js='btnNumber']")
    var $buttonOperation = document.querySelectorAll("[data-js='btnOperator']")
    var $buttonEqual =  document.querySelector("[data-js='btnEqual']")
    var valueToShow = "";
    var operatorToShow = "";
    var operators = ["+", "-", "x", "÷"]
    $buttonClear.addEventListener("click", () => {
        alteraInput(0);
        valueToShow = ""
    }, false);
    $buttonEqual.addEventListener("click", () => {
        
        var allValues = valueToShow.match(/\d+[+x÷-]?/g);
        valueToShow = allValues.reduce(function(accumulated, actual) {
          var firstValue = accumulated.slice(0, -1);
          var operator = accumulated.split('').pop();
          var lastValue = removeLastItem(actual);
          var lastOperator = hasLastItem(actual) ? actual.split('').pop() : '';
          switch(operator) {
            case '+':
              return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
            case '-':
              return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
            case 'x':
              return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
            case '÷':
              return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
          }
        });
        alteraInput(valueToShow)
    }, false);
    Array.prototype.forEach.call($buttonNumber, function (button) {
        button.addEventListener("click", numberSelect, false)
    })
    Array.prototype.forEach.call($buttonOperation, function (button) {
        button.addEventListener("click", operatorSelect, false)
    })

    function numberSelect(event) {
        valueToShow += this.value;
        alteraInput(valueToShow)
    }
    function removeLastItem(number) {
        if (hasLastItem(number)) {
            var value = $inputNumber.value.slice(0,-1)
            valueToShow =  value;
            return value
        }
        return number
        
    }
    function operatorSelect(event) {
        removeLastItem($inputNumber.value)
        valueToShow += this.value;
        alteraInput(valueToShow)
    }

    function hasLastItem(number) {
        var lastItem = number.split("").pop();
        return operators.some((operator) => {
            return operator === lastItem;
        })
    }

    


    function alteraInput(number) {
        $inputNumber.value = number
    }


})(window, document)