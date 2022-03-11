(function () {
  'use strict'

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elementOfHTML) {
    this.element = Array.from(document.querySelectorAll(elementOfHTML));
    this.on = function on(typeOfEvent, callback) {
      this.element.forEach((elementHTML) => {
        elementHTML.addEventListener(typeOfEvent, callback)
      })
    };
    this.off = function off(typeOfEvent) {
      this.element.forEach((elementHTML) => {
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
    this.reduce = function reduce() {
      return Array.prototype.reduce.apply(this.element, arguments)
    }
    this.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply(this.element, arguments)
    }
    this.every = function every() {
      return Array.prototype.every.apply(this.element, arguments)
    }
    this.some = function some() {
      return Array.prototype.some.apply(this.element, arguments)
    }
    this.isArray = function isArray(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Array]"
    }
    this.isObject = function isObject(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Object]"
    }
    this.isFunction = function isFunction(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Function]"
    }
    this.isNumber = function isNumber(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Number]"
    }
    this.isString = function isString(parametro) {
      return Object.prototype.toString.call(parametro) === "[object String]"
    }
    this.isBoolean = function isBoolean(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Boolean]"
    }
    this.isNull = function isNull(parametro) {
      return Object.prototype.toString.call(parametro) === "[object Null]" || Object.prototype.toString.call(parametro) === "[object Undefined]"
    }

  }

  const $form = new DOM("[data-js='form']")
  const $cep = new DOM("[data-js='cep']");
  const $estado = document.querySelector("[data-js='estado']");
  const $logradouro = document.querySelector("[data-js='logradouro']");
  const $bairro = document.querySelector("[data-js='bairro']");
  const $cidade = document.querySelector("[data-js='cidade']");
  const $dadosCep = document.querySelector("[data-js='dadosCep']");
  const $status = document.querySelector("[data-js='carregamento']");

  let responseCep = ""


  $form.on("submit", function (element) {
    element.preventDefault();
    let cepTratado = $cep.get()[0].value.replace(/[^\d]+/g, '');
    requestDados(cepTratado);
  })

  function requestDados(cepTratado) {
    let ajax = new XMLHttpRequest()
    ajax.addEventListener("readystatechange", function(event) {
      $status.value = event.target.readyState
      
    })
    ajax.open("GET", `https://viacep.com.br/ws/${cepTratado}/json/`)
    ajax.onload = tratarRetorno;

    
    ajax.send()
  }
  function tratarRetorno() {
    $status.value = " Carregando";
    //apenas para testar e deixar lento assim observar o "carregando", na tela
    setTimeout(() => {
      try {
        responseCep = JSON.parse(this.responseText)
        montarDadosNaTela(responseCep)
      }
      catch (erro) {
        $status.value = "ERRO"
        $status.style.color = "red"
       alert("Confira se o Seu cep está correto")
      }
    }, 500);
   
  }
  function montarDadosNaTela(retorno) {
    $logradouro.value = retorno.logradouro;
    $bairro.value = retorno.bairro;
    $cidade.value = retorno.localidade;
    $estado.value = retorno.uf
    $dadosCep.value = retorno.cep;
    $status.value = "Sucesso";
    $status.style.color = "green"
  }



})()
