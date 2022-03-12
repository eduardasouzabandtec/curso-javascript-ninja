(function ($, document) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  function APP() {
    return {
      init: function () {
        console.log('retorno m')
        this.getDataCompany();
        this.initEvents();
      },
      initEvents: function initEvents() {
        let $form = $("[data-js='form']");
        $form.on("submit", this.addRegister);
      },
      addRegister: function (event) {
        event.preventDefault();
        const tableCars = $("[data-js='dataCarro']").get()
        tableCars.appendChild(APP().fragment())

      },
      fragment: function fragment() {
        let $fragment = document.createDocumentFragment();
        let $tr = document.createElement("tr");
        let $tdImage = document.createElement("td");
        let $tdMarca = document.createElement("td");
        let $tdAno = document.createElement("td");
        let $tdPlaca = document.createElement("td");
        let $tdCor = document.createElement("td");
        let $image = document.createElement("img");
        let $button = document.createElement("button")

        $image.setAttribute("src", $("[data-js='image']").get().value )
        $tdImage.appendChild($image)
        $tdMarca.textContent = $("[data-js='marca']").get().value
        $tdAno.textContent = $("[data-js='anos']").get().value
        $tdPlaca.textContent = $("[data-js='placa']").get().value
        $tdCor.textContent = $("[data-js='cor']").get().value
        $button.textContent = "Remover"

        $tr.appendChild($tdImage)
        $tr.appendChild($tdMarca)
        $tr.appendChild($tdAno)
        $tr.appendChild($tdPlaca)
        $tr.appendChild($tdCor)
        $tr.appendChild($button)
        $button.addEventListener("click", function(){
         this.parentNode.remove()
        })
        return $fragment.appendChild($tr)

      },
      getDataCompany: function () {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "company.json")
        ajax.send();
        ajax.addEventListener("readystatechange", this.makeData, false)
      },
      makeData: function () {
        if (this.readyState === 4) {
          try {
            let dados = JSON.parse(this.responseText)
            console.log(dados)
            const $nomeEmpresa = $("[data-js='nomeEmpresa']");
            const $telefoneEmpresa = $("[data-js='telefoneEmpresa']");
            $nomeEmpresa.get().textContent = dados.name;
            $telefoneEmpresa.get().textContent = dados.phone;

          } catch (erro) {
            console.log("DADOS", erro)
          }
        }
      },
    }
  }

  APP().init()
})(window.DOM, document);
