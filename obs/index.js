const express = require('express');
const app = express();
app.use(express.json());
const obsPorLembrete = {};
const {v4:uuidv4}=require('uuid');



app.post('/lembretes/:id/obs', (req, res) => {

});

app.get('/lembretes/:id/obs', (req, res) => {

});

app.listen(5000, (() => {
    console.log('obs. Porta 5000');
}));