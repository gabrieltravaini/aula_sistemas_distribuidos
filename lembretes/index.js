const express = require('express');
const app = express();
app.use(express.json());
let lembretes = {};
let idCounter = 0;

app.get('/lembretes', (req, res) => { 
    res.send(lembretes);
})

app.post('/lembretes', (req, res) => { 
    idCounter++;
    const { texto } = req.body;
    lembretes [idCounter] ={idCounter,texto}; 
    res.status(201).send(lembretes[idCounter]);
})
app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});