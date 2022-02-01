
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma (numero1, numero2) {
    return numero1 + numero2
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
 var somarValores = soma(5,5) + 5

// Qual o valor atualizado dessa variável
 // 15
console.log(somarValores)
// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionandoValor() {
    valor =  45
    return "o valor da variavel agora é " + valor
}

// Invoque a função criada acima.
adicionandoValor();

// Qual o retorno da função (Use comentários de bloco).
/* "o valor da variavel agora é 45"*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function testaArguments (arguments1, arguments2, arguments3) {
    if(!arguments1 || !arguments2 || !arguments3) {
        return "preencha todos os valores corretamente"
    }
    else {
        return arguments1 * arguments2 * arguments3 + 2
    }
}


// Invoque a função criada acima, passando só dois números como argumento.

testaArguments(1,3)

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
// preencha todos os valores! corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.


// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
testaArguments(1,3,2)
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento. ok
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.ok
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro. ok
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function testaArguments2(arguments1, arguments2, arguments3) {
    if (arguments1 && !arguments2 && !arguments3) {
        return arguments1
    }
    else if (arguments1 && arguments2 && !arguments3 ) {
        return  arguments1 + arguments2
    }
    else if (arguments3) {
        return (arguments1 + arguments2) / arguments3
    }
    else if (!arguments1) {
        return false
    }
    return null;
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(testaArguments2(1))
console.log(testaArguments2(1,2))
console.log(testaArguments2(1,2,3))
console.log(testaArguments2())
