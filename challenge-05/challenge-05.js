/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arrayAleatorio = [1, 5, 8, 9, 3]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function brincarComArray(arrayAleatorio) {
    return arrayAleatorio;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(brincarComArray(arrayAleatorio))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function myFunc(array, numero) {
    return array[numero]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var array = [1, 2, 3, 4, 6]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(myFunc(array, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(nomeLivro) {
    var livro = {
        "clean code": {
            quantidadePaginas: 200,
            autor: "mimi",
            editora: "eu"
        },
        "doid": {
            quantidadePaginas: 100,
            autor: "yada",
            editora: "tu"
        },
        "doido so javinha": {
            quantidadePaginas: 500,
            autor: "afff",
            editora: "nois"
        }
    }
    return nomeLivro ? livro[nomeLivro] : livro 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var livrinho = book("doido so javinha")
console.log(`o livro doido so javinha tem ${livrinho.quantidadePaginas}`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro doido so javinha é ${livrinho.autor}`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O livro livro doido so javinha é ${livrinho.editora}`)
