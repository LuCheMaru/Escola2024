import express from 'express';
import conectDb from './db.js';
import cors from 'cors';
import artista from './models/Artista.js';


const app = express();
app.use(cors(
    {
        origin: "*",
        credentials: true
    }
), express.json());
const conexao = await conectDb()

conexao.on('error', (erro) => {
    console.error('Erro ao conectar', erro)
})

conexao.once('open', () => {
    console.log('Conectando no MongoDB')
})

app.get("/artistas", async (req, res) => {
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.get('/artistas/:id', async (req, res) =>{
    const artistas = await artista.findById(req.params.id);
    res.status(200).json(artistas)
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})