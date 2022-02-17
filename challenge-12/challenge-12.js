(function(){


/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );
 var person = {
    "name": "Eduarda",
    "lastname": "Souza",
    "age": 21
 }
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
var propriedades = Object.keys(person);
console.log(propriedades);

/*
Crie um array vazio chamado `books`.
*/
// ?

var book = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
var livro1 = {
    "name": "pai rico",
    "pages": "500"
};
var livro2 = {
    "name": "codigo limpo",
    "pages": "1000"
};
var livro3 = {
    "name": "minutos de sabedoria",
    "pages": "300"
};
book.push(livro1);
book.push(livro2);
book.push(livro3);

/*
Mostre no console todos os livros.
*/
// ?

console.log(book);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
var livroRemovido = book.pop();
console.log(livroRemovido);


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
console.log(book);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

var livros = JSON.stringify(book);
/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(livros)
/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
var livrinho = JSON.parse(livros);
console.log(livrinho);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

book.forEach(function (livro) {
    console.log(livro)      
})


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
var myName = ["E", "D", "U", "A", "R", "D", "A"];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
console.log(myName.join(""))

console.log( '\nMeu nome invertido é:' );

var nomeInvertido = myName.reverse();

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?
console.log(nomeInvertido.join(""))

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
var ordem = myName.sort();
 console.log(ordem.join(""))
})()
