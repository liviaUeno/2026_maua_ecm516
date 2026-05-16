const express = require('express')
const app = express()
app.use(express.json()) // transforma json em objeto js

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (lembrete) => {
        const observacoes = baseConsulta[lembrete.lembreteId]['observacoes'] || []
        observacoes.push(lembrete)
        baseConsulta[lembrete.lembreteId]['observacoes'] = observacoes
    }
}

app.get('/lembretes', (req, res) => {
    res.status(200).json(baseConsulta)
})
// principio do aberto e fechado: uma vez implementado, n precisa de manutenção. 
// pra fazer isso: mapa de eventos
app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    } catch(e){ /* descarta eventos indesejados */}
    res.end()
})

const port = 6000
app.listen(port, () => { console.log(`Consulta. Porta ${port}.`)})