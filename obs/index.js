const express = require('express');
const app = express();
app.use(express.json());
const obsPorLembrete = {};
const { v4: uuidv4 } = require('uuid');



app.post('/lembretes/:id/obs', (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    const observacoesDoLembrete = obsPorLembrete[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    obsPorLembrete[req.params.id] = observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/obs', (req, res) => {
    res.send(obsPorLembrete[req.params.id]||[])
});

app.listen(5000, (() => {
    console.log('obs. Porta 5000');
}));

