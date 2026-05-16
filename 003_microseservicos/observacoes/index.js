const express = require('express') // receber eventos
const axios = require('axios') // emitir eventos http
const app = express()
const { v4: uuidV4 }  = require('uuid')
app.use(express.json())

const observacoesPorLembreteId = []
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidV4()
    const { texto } = req.body
    const id = req.params.id

    const observacoesDoLembrete = observacoesPorLembreteId[id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembreteId[id] = observacoesDoLembrete
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs, texto: texto, lembreteId: id
        }
    })
    res.status(201).send(observacoesDoLembrete)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000.')
}))