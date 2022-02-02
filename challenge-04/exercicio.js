

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (value) {
    return value ? true : false 
}



// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(undefined))
console.log(isTruthy(""))


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy("eu"))
console.log(isTruthy(1))
console.log(isTruthy('dois'))
console.log(isTruthy({}))
console.log(isTruthy([]))
console.log(isTruthy(true))
console.log(isTruthy({2:2}))
console.log(isTruthy({"":""}))
console.log(isTruthy([0]))
console.log(isTruthy([""]))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: "Chevrolet",
    modelo: "Spin",
    placa: "ABCU69",
    ano: 2022,
    cor: "azul",
    quantasPortas: 4,
    assentos: 7,
    quantidadePessoas : 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

function mudarCor(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = _ => { return carro.cor}

console.log(obterCor())


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = _ => {return carro.modelo}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = _ => {return carro.marca}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = _=> { return `Esse carro é um ${obterMarca()} ${obterModelo()}`}
console.log(obterMarcaModelo())


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos. ok
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

function adicionarPessoas(numeroPessoas) {
    var novaQuantidade = carro.quantidadePessoas + numeroPessoas;
    var sobraDeVagas = carro.assentos - carro.quantidadePessoas;
    if(carro.quantidadePessoas <= carro.assentos && novaQuantidade <= carro.assentos){
       carro.quantidadePessoas = novaQuantidade;
       return  `ja temos ${carro.quantidadePessoas} pessoas no carro`
    }
    else if(carro.quantidadePessoas <= carro.assentos && sobraDeVagas) {
    
        return `Só cabem mais ${sobraDeVagas} ${sobraDeVagas > 1 ? "Pessoas": "pessoa"}!`
    }
    else {
        return "O carro já está lotado!"
    }
}
// console.log(adicionarPessoas(2))
// console.log(adicionarPessoas(4))
// console.log(adicionarPessoas(7))


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/
console.log(obterCor())

// Mude a cor do carro para vermelho.
mudarCor("vermelho")

// E agora, qual a cor do carro
console.log(obterCor())

// Mude a cor do carro para verde musgo.
mudarCor("verde musgo")

// E agora, qual a cor do carro
console.log(obterCor())

// Qual a marca e modelo do carro

console.log(obterMarcaModelo())
// Adicione 2 pessoas no carro.
console.log(adicionarPessoas(2))

// Adicione mais 4 pessoas no carro.
console.log(adicionarPessoas(4))

// Faça o carro encher.
console.log(adicionarPessoas(1))

// Tire 4 pessoas do carro.
carro.quantidadePessoas = carro.quantidadePessoas - 4

// Adicione 10 pessoas no carro.
console.log(adicionarPessoas(10))

// Quantas pessoas temos no carro
console.log(carro.quantidadePessoas)

