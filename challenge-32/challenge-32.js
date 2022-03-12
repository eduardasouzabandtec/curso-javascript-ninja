/*
Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
salvando-os temporariamente na memória de um servidor.

Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
que possamos utilizar para salvar as informações dos nossos carros.

Para utilizá-lo, você vai precisar fazer o seguinte:

- Via terminal, acesse o diretório `server`;
- execute o comando `npm install` para instalar as dependências;
- execute `node app.js` para iniciar o servidor.

Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
`http://localhost:3000`

O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
As mudanças que você irá precisar fazer no seu projeto são:

- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
`http://localhost:3000/car`
- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
os seguintes campos:
  - `image` com a URL da imagem do carro;
  - `brandModel`, com a marca e modelo do carro;
  - `year`, com o ano do carro;
  - `plate`, com a placa do carro;
  - `color`, com a cor do carro.

Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.

Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
do pull request.
*/
(function () {
  const $inputImage = document.querySelector("[data-js='image']");
  const $inputMarca = document.querySelector("[data-js='marca']");
  const $inputAno = document.querySelector("[data-js='anos']");
  const $inputPlaca = document.querySelector("[data-js='placa']");
  const $inputCor = document.querySelector("[data-js='cor']");
  const $form = document.querySelector("[data-js='form']");
  const $tbody = document.querySelector("[data-js='dataCarro']");


  ajax = new XMLHttpRequest()

  getDataTable()
  $form.addEventListener("submit", function () {
    event.preventDefault();
    postMessage()
    getDataTable()
  })

  function postMessage() {
    ajax.open("POST", "http://localhost:3000/car")
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var dados = "image=" + $inputImage.value + "&brandModel=" + $inputMarca.value + "&year=" + $inputAno.value + "&plate=" + $inputPlaca.value + "&color=" + $inputCor.value

    try {
      ajax.send(dados);
    }
    catch (e) {
      console.log(e)
    }
  }

  function getDataTable() {
    ajax.open("GET", "http://localhost:3000/car")
    ajax.send();
    // ajax.addEventListener("readystatechange", function() {
    //   if (this.readyState === 4) {
    //     try {
    //       let dados = JSON.parse(this.responseText)
    //       $tbody.innerHTML = "";
    //       dados.forEach((dado) =>{
    //         addTable(dado)
    //       })
    //     } catch (erro) {
    //       console.log("DADOS", erro)
    //     }
    //   }
    // }, false)

    ajax.onload = function () {
      try {
        let dados = JSON.parse(this.responseText)
        $tbody.innerHTML = "";
        if (Array.isArray(dados)) {
          dados.forEach((dado) => {
            addTable(dado)
          })
        }
      } catch (erro) {
        console.log("DADOS", erro)
      }
    }
  }

  function addTable(retorno) {
    var td = `<tr>
    <td><img src="${retorno.image}"></td>
    <td>${retorno.brandModel}</td>
    <td>${retorno.year}</td>
    <td>${retorno.plate}</td>
    <td>${retorno.color}</td>
    <td><button data-js="btnClear" id="${retorno.plate}">Remover</button></td>
    </tr>`;
    $tbody.innerHTML += td;
    addClear()
  }

  function addClear() {
    $btnClear = document.querySelectorAll('[data-js="btnClear"]')
    const btn = Array.from($btnClear)
    btn.forEach(function (btn) {
      btn.addEventListener("click", deleteCar)
    })
  }

  function deleteCar() {
    var id = this.getAttribute("id")
    ajax.open("DELETE", "http://localhost:3000/car")
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify({"plate": id}))
  }






})()