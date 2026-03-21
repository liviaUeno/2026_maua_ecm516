const axios = require("axios")

const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = "Itu"
const cnt = 1
const units = "metric"
const lang = "pt_br"
const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
axios.get(url) //assíncrona -- promise
    .then(res =>{ 
        console.log(res.data)
        return res.data
    })
    .then(res =>{
        console.log(res.list)
        return res.list
    })
    .then(res => {
        // mostrar temperatura máxima da primeira previsão do tempo
        console.log(res[0].main.temp_max)
        return res[0].main.temp_max
    })
console.log("A")