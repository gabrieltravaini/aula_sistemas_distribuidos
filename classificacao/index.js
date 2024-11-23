const express = require("express");
const axios = require("axios")
const app = express();
app.use(express.json());

const chave = "Importante"

const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = observacao.texto.includes(chave) ? "importante" : "comum"

        axios.post('http://localhost:10000', {
            tipo: "ObservacaoClassificada",
            dados: observacao
        })
    }
}

app.post('/eventos', (req, res) => {
    funcoes[req.body.tipo](req.body.dados)
    res.send({msg:'ok'})
 })

app.listen(7000, () => console.log("classificacao subiu 7000"))