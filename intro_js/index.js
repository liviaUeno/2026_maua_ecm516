// console.log("Hello World")

// declarando constantes
// em java: String nome = "José";
// em js: ideia de ponteiro, variável não tem tipo, o tipo é do valor atribuído a ele (typeof(nome)--> string)

// ----------

// const não permite reatribuição:
// const nome = "José"
// console.log(typeof(nome))

// let permite reatribuição:
// let a = 2
// console.log(a)
// a = 3
// console.log(a)
// let b
// console.log(b)
// b = 5
// console.log(b)

// var é similar ao let, ma sé velho e confuso, péssimo
// var linguagem = "java"
// console.log("aprendendo " + linguagem)
// var linguagem = "javascript" ---> permite redeclarar por 0 motivos
// console.log(`aprendendo ${linguagem}`)

// içamento (hoisting), roda 2 vezes:
// 1. constroi tabela de símbolos
// Tabela:
// idade = undefined
// nome = undefined
// 2. processa:
// Tabela:
// idade = undefined -> 18
// nome = undefined -> João

// se usar let nome = "João", funciona considerando escopo:
// 1. constroi tabela:
// Tabela:
// idade = undefined
// nome (somente dentro do if) = undefined

// var idade = 18
// console.log(`oi, ${nome}`)
// if(idade >= 18){
//     let nome = "João"
//     console.log("Muito velho, " + nome)
// }
// console.log('Até, ' + nome)

// ----------

// variável não tem tipo, 2 tem tipo. 2 é o objeto que ela aponta. typeof a = tipo do objeto q -a aponta.
// let a = 2;
// console.log(a);
// console.log(typeof a); // number
// a = "abc";
// console.log(a);
// console.log(typeof a); // string

// matriz = [[], []] // em js
// List <List <String>> matriz = new ArrayList<ArrayList <String>>(); // em java

// ----------

// coerção implícita e explícita
// const n1 = 2;
// const n2 = "3";
// const n3 = n1 + n2;
// console.log(n3);
// const n4 = n1 + Number(n2);
// console.log(n4);

// operadores de comparação por igualdade: == e ===
// == é uma merda, não usar
// console.log(1 == 1)
// console.log(1 === 1)
// console.log(1 == "1")
// console.log(1 === "1")
// console.log(1 == true)
// console.log(1 == [1])
// console.log(null == undefined)
// console.log(null === undefined) // null é definido e não aponta pra nada, undefined não é definido
// console.log([] == false) // ???
// console.log ([] == []) // ????

// ----------

// coleções: 
// 1. vetores: aumenta dinamicamente
// v1 = [0, 1] 
// console.log(v1.length)
// v1[2] = 2
// console.log(v1.length)
// v1[10] = "joao"
// console.log(v1.length)
// console.log(v1)


