// const axios = require("axios")

// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
// const q = "Itu"
// const cnt = 1
// const units = "metric"
// const lang = "pt_br"
// const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// axios.get(url) //assíncrona -- promise
//     .then(res =>{ 
//         console.log(res.data)
//         return res.data
//     })
//     .then(res =>{
//         console.log(res.list)
//         return res.list
//     })
//     .then(res => {
//         // mostrar temperatura máxima da primeira previsão do tempo
//         console.log(res[0].main.temp_max)
//         return res
//     })
//     .then(previsoes => {
//         for(let previsao of previsoes){
//             console.log(previsao.weather[0].description)
//         }
//     })
// console.log("A")

// ----------

//assync - await
// async function hello(nome){ // assync faz o retun new Promise() automaticamente
//     return `Olá ${nome}`
// }

// const res = hello("Ana")
// res.then((texto) => console.log(texto))
// console.log("A")

// esses dois sao iguais: 
// const fatorial = (n) => {
//     if(n < 0) return Promise.reject("Valor não pode ser negativo")

//     let res = 1
//     for(let i = 2; i <= n; i++) res*= i
//     return Promise.resolve(res)
// }

// const chamadaComThenCatch = () => {
//     fatorial(5)
//     .then(res => console.log(`res: ${res}`))
//     .catch(erro => console.log(`erro: ${erro}`))

//     fatorial(-5)
//     .then(res => console.log(`res: ${res}`))
//     .catch(erro => console.log(`erro: ${erro}`))
// }

// // chamadaComThenCatch()

// const chamadaComAsyncAwait = async () => {
//     try{
//         const f1 =  await fatorial(5)
//         console.log(`f1: ${f1}`)
//     } catch(erro){
//         console.log(`erro: ${erro}`)
//     }

//     try{
//         const f2 = await fatorial(-5)
//         console.log(`f2: ${f2}`)
//     } catch(erro){
//         console.log(`erro: ${erro}`)
//     } 
// }

// chamadaComAsyncAwait()

// ----------

const axios = require("axios")

const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = "Itu"
const cnt = 1
const units = "metric"
const lang = "pt_br"
const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

async function getPrevisoes(url){
    try{
        const res = await axios.get(url) 
        console.log(res.data)
        console.log(res.data.list)
        console.log(res.data.list[0].main.temp_max)
        console.log(res.data.list[0].weather[0].description)
        
    } catch(erro){
        console.log(erro)
    }
}

getPrevisoes(url)
