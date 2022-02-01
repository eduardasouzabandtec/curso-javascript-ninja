
// Declarar uma variável qualquer, que receba um objeto vazio.
var objeto = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa1 = {
    nome: "Eduarda",
    sobrenome: "Alves",
    sexo: "feminino",
    idade: 0,
    altura: 0,
    peso: 0,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
var pessoa2 = {
    ...pessoa1,
    fazerAniversario: function niver() {
        this.idade++;
    }
}


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
var pessoa3 = {
    ...pessoa2,
    andar: function (metros) {
        this.caminhouQuantosMetros += metros;
        this.andando = true
    }
}

console.log(pessoa3.andar(500))
console.log(pessoa3.caminhouQuantosMetros)
pessoa3.fazerAniversario()
console.log(pessoa3.idade)
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
var pessoa4 = {
    ...pessoa3,
    parar: function () {
        this.andando = false;
    }
}
pessoa4.parar()
console.log(pessoa4.andando)
console.log(pessoa3.andando)


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
var pessoa5 = {
    ...pessoa4,
    nomeCompleto: function () { return `Olá! Meu nome é ${this.nome} ${this.sobrenome}` }
}
console.log(pessoa5.nomeCompleto())


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
var pessoa6 = {
    ...pessoa5,
    mostrarIdade: function () { return `Olá, eu tenho ${this.idade} anos!` }
}
console.log(pessoa6.mostrarIdade())

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
var pessoa7 = {
    ...pessoa6,
    mostrarPeso: function () { return `Eu peso ${this.peso}kg` }
}
console.log(pessoa7.mostrarPeso())

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

var pessoa8 = {
    ...pessoa7,
    mostrarAltura: function () { return `Minha altura é ${this.altura}m.` }
}
console.log(pessoa8.mostrarAltura())


/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa8.nomeCompleto())

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa8.mostrarIdade())

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa8.mostrarPeso())

/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa8.mostrarAltura())

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa8.fazerAniversario();
pessoa8.fazerAniversario();
pessoa8.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa8.mostrarIdade())

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa8.andar(300)
pessoa8.andar(900)
pessoa8.andar(200)

/*
A pessoa ainda está andando (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa8.andando)

/*
Se a pessoa ainda está andando, faça-a parar.
*/
if (pessoa8.andando) {
    pessoa8.parar()
}

/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa8.andando)

/*
Quantos metros a pessoa andou (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa8.caminhouQuantosMetros)
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

function apresentacao() {
    var sheOrHer = pessoa8.sexo == "feminino" ? "a" : "o";
    var older = pessoa8.idade > 1 ? "anos" : "ano";
    var metro = pessoa8.caminhouQuantosMetros < 1 ? "metro" : "metros";
    var nomeCompleto = `${pessoa8.nome} ${pessoa8.sobrenome}`

    return`Olá, eu sou ${sheOrHer} ${nomeCompleto}, tenho ${pessoa8.idade} ${older}, ${pessoa8.altura}, meu peso é ${pessoa8.peso} e, só hoje, eu já caminhei ${pessoa8.caminhouQuantosMetros} ${metro }!`

}

console.log(apresentacao())

// Agora, apresente-se ;)


