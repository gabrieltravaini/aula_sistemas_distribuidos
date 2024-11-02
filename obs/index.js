const express = require('express');
const axios = require('axios')
const app = express();
app.use(express.json());
const obsPorLembrete = {};
const { v4: uuidv4 } = require('uuid');



app.post('/lembretes/:id/obs', async (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    const observacoesDoLembrete = obsPorLembrete[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    obsPorLembrete[req.params.id] = observacoesDoLembrete;
    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            id: idObs, texto, lembreteId: req.params.id
        }
    })
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/obs', (req, res) => {
    res.send(obsPorLembrete[req.params.id] || [])
});

app.post('/eventos', (req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'});
})

app.listen(5000, (() => {
    console.log('obs. Porta 5000');
}));

