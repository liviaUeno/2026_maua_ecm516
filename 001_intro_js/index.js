//PARA RODAR: node --watch index.js

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

// ---------

// funções:
// function e arrow function:
// não existe overload
// function hello (){
//     console.log(`Oi`)
// }
// hello() // vc chamous hello(undefined)
// function hello(nome){ // considerou só essa
//     console.log(`Oi, ${nome}`)
// }
// hello(`João`)

// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)  

// // função anonima:
// const dobro = function(n){
//     return 2*n
// }
// console.log(dobro(6))

// caso n passe um valor: n = 5
// const triplo = function(n = 5){
//     return 3*n
// }
// console.log(triplo(2))
// console.log(triplo())

// arrow function (melhor):
// const falarOi = () => {console.log('oi')} 
// falarOi()
// const falarOi = nome => console.log(`oi, ${nome}`) // se tiver só 1 arg ou 1 comando, vc pode omitir () e {}
// const somar = (a, b) => a + b // sem return, é implícito. se colocar {} dai precisa de return
// falarOi()

// // funções sobre vetores:
const nomes = ["Ana", "Antonio", "Maria", "Joao"]
// const apenasComA = nomes.filter((nome) => {return nome.startsWith("A")}) // filter recebe 1 parâmetro que é uma função. filter cria um novo array que passa pela função
// console.log(apenasComA)
// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// console.log(iniciais)
// const res = nomes.every(n => n.startsWith("A"))
// console.log(res)
const res = nomes.some(n => n.startsWith("A"))
console.log(res)
// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v) // ac = acumulador --- reduz a 1 valor só
// ac = 1 -> 3 -> 6 
// v = 2 -> 3 -> 4
// console.log(res)

// ----------

// brincando de lógica de funções:
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variavel")
//     return () => "oi"
// }
// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())

// function f(funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log("criada por g")
//         return () => "A"
    
//     }
//     return outraFuncao ()
// }
// console.log(g()())

// closure: funçao interna usar variável morta
// function f(idade){ // funciona tipo class em java
//     let nome = "joao" // membro de f
//     function g(){ // membro de f, logo n precisa passar nome no parâmetro
//         console.log(`meu nome é ${nome} e tenho ${idade} anos`)
//     }
//     return g
// }
// const res = f(17)
// res()

// o escopo de dentro tem acesso ao de fora, mas o de fora não tem acesso ao de dentro -- regra do js
// if(true){
//     const a = 0;
//     if(1>0){
//         console.log(`o numero é ${a}`)
//     }
// }

// ----------

// brincando de lógica de funções:
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variavel")
//     return () => "oi"
// }
// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())

// function f(funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log("criada por g")
//         return () => "A"
    
//     }
//     return outraFuncao ()
// }
// console.log(g()())

// closure: funçao interna usar variável morta
// function f(idade){ // funciona tipo class em java
//     let nome = "joao" // membro de f
//     function g(){ // membro de f, logo n precisa passar nome no parâmetro
//         console.log(`meu nome é ${nome} e tenho ${idade} anos`)
//     }
//     return g
// }
// const res = f(17)
// res()

// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1() // roda com o cont final 
// res.f2()

// ----------

// JSON: JavaScript Object Notation
// exemplos:
// let pessoa = {
//     nome: "joao",
//     idade: 17
// }
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 50
//     }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])

// let concessionaria = {
//     nome: "nome",
//     cnpj: "cnpj",
//     endereco: {
//         logradouro: "logradouro",
//         numero: "numero",
//         bairro: {
//             nome: "bairro"
//         }
//     },
//     veiculos: [
//         {
//             modelo: "modelo",
//             marca: "marca",
//             placa: "placa"
//         },
//         {
//             modelo: "outro modelo",
//             marca: "outra marca",
//             placa: "outra placa"
//         },
        
//     ]
// }


// console.log(concessionaria)
// console.log(concessionaria.veiculos[0]["modelo"])

// ----------

// calculadora:
// o que eu fiz:
// function calculadora_da_livia(){
//    let soma = (a, b) => {return a+b} 
//    let subtracao = (a,b) => a-b
//    function multiplicacao(a, b){
//         return a*b
//    }
//    const divisao = (a, b) => {return a/b}
//    return {soma, subtracao, multiplicacao, divisao}
// } 

// console.log(calculadora_da_livia().soma(2, 3))
// console.log(calculadora_da_livia().subtracao(2, 3))
// console.log(calculadora_da_livia().multiplicacao(2, 3))
// console.log(calculadora_da_livia().divisao(2, 3))

// // prof fez:
// const calculadora_do_prof = {
//     operacoes: {
//         soma: (a, b) => {return a + b},
//         subtracao: (a, b) => a - b,
//         multiplicacao: function (a, b){
//             return a * b
//         },
//         divisao: (a, b) => a / b
//     }
// }

// console.log(calculadora_do_prof.operacoes.soma(2, 3))
// console.log(calculadora_do_prof.operacoes.subtracao(2, 3))
// console.log(calculadora_do_prof.operacoes.multiplicacao(2, 3))
// console.log(calculadora_do_prof.operacoes.divisao(2, 3))

// ----------

// síncrono = bloqueante:
// console.log("Eu primeiro...")
// console.log("Agora eu...")
// console.log("Sempre serei a última...")

// const a = 5 + 6
// const b = 9 * 4
// console.log(a + b)

// assíncrono: 
// function demorada(tempo){
//     const dataAtualMaisTempo = new Date().getTime() + tempo 
//     while (new Date().getTime() <= dataAtualMaisTempo); // simula demora 
//     const d = 8 + 2 * 6
//     console.log(`demora com o tempo ${tempo}`)
//     return d
// }

// setTimeout(() => {
//     demorada(5000)
// }, 2000) // demora 2s para entrar na fila, ent a de baixo executa antes

// setTimeout(() => {
//     demorada(2000)
// }, 0)

// console.log("Fim do script")

// const a = 2 + 3
// const b = 6 * 1
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500) 
// const e = a + b * 2
// console.log(`e: ${e}`)

// setTimeout(() => { // pulou essa 
//     console.log("Agendada pela setTimeout") // voltou e exec
// }, 0)
// const dataAtualMais5Segundos = new Date().getTime() + 5000

// while(new Date().getTime() <= dataAtualMais5Segundos); // pulou essa dps
// console.log("Terminando o script principal...") // exec

// ----------

// CPU Bound: predominantemente caracterizadaa por ciclos de cpu
// IO Bound: predominantemente caracterizaada por operações de entrada e saída 

// const fs = require('fs')
// const nomeArquivo = "arquivo.txt"

// função callback: define mas nunca chama, ela é chamada pra você
// const exibirConteudo = function (erro, conteudo) {
//   if (erro) {
//     console.log(`Deu erro: ${erro}`);
//   } else {
//     console.log(conteudo.toString());
//     const dobro = +conteudo.toString() * 2;

//     const finalizar = function (erro) {
//       if (erro) {
//         console.log('Deu erro tentando salvar o dobro');
//       } else {
//         console.log("Salvou o dobro com sucesso");
//       }
//     };

//     fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//   }
// };

// fs.readFile(nomeArquivo, exibirConteudo);

// PARA RODAR:  node --watch-path="./arquivo.txt" index.js

// ----------

// promise: objeto por meio do qual uma função pode propagar um resultado ou um erro em algum momento no futuro
// - pending: computação demorada não finalizou
// - fulfilled: computação demorada finalizou com sucesso
// - rejected: computação demorada finalizou com fracasso

// 1 + 2 + 3 + ... n
// const calculoDemorado = (n) => {
//     let cont = 0
//     for(let i = 1; i<= n; i++)
//         cont += i
//         return cont
// }

// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         // se n for negativo, propagar um erro
//         // caso contrário, continua como era

//         if (n >= 0){
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//             }
//         else{
//             reject("n não pode ser negativo")
//         }
//     })
// }
// const minhaPromise = calculoDemorado(10)

// // then-catch:
// minhaPromise
// .then((resultado) => {console.log(`Resultado ${resultado}`)})
// .catch((erro) => {console.log(`Deu erro: ${erro}`)})

// calculoRapidinho(10)
// .then(function(resultado){console.log("Resultado: " + resultado)})
// .catch(function(erro){console.log("Deu erro: " + erro)})

// calculoRapidinho(10)
// .then((res) => {
//     calculoRapidinho(res)
//     .then((res2) => {
//         calculoRapidinho(res2)
//         .then((res3) => {
//             calculoRapidinho(res3)
//             .then((res4) => {
//             console.log(res4)
//             })
//         })
//     })
// })
// .catch((erro) => {console.log(erro)})