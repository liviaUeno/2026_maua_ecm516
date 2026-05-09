const axios = require ("axios")
const express = require('expresss')
const app = express()
app.use(express.json())

app.post('/eventos', async (req, res) => {
    const evento = req.body
    try{
        await axios.post('http://localhost:4000/eventos')
    } catch(e){
        try{
            await axios.post('http://localhost:5000/eventos')
        } catch(e){
            res.end()
        }
    }
    
    res.end()
})

const port = 10000
app.listen(port, () => {console.log(`Barramento. Porta ${port}. `)})