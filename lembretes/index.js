const express = require('express');
const axios = require('axios')
const app = express();
app.use(express.json());
let lembretes = {};
let idCounter = 0;

app.get('/lembretes', (req, res) => {
    res.send(lembretes);
})

app.post('/lembretes', async (req, res) => {
    idCounter++;
    const { texto } = req.body;
    lembretes[idCounter] = { idCounter, texto };
    await axios.post('http://localhost:10000/eventos', {
        tipo: "LembreteCriado",
        dados: {
            idCounter,
            texto
        }
    })
    res.status(201).send(lembretes[idCounter]);
})

app.post('/eventos', (req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'});
})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});