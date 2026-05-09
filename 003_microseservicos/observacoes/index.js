const express = require('express')
const app = express()
const { v4: uuidV4 }  = require('uuid')
app.use(express.json())

const observacoesPorLembreteId = []
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidV4()
    const { texto } = req.body
    const id = req.params.id

    const observacoesDoLembrete = observacoesPorLembreteId[id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembreteId[id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000.')
}))