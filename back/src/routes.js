const { request, response } = require('express');
const express = require('express');
const connection = require('./database/connection')

const routes = express.Router();

routes.get('/produtos',async (request, response)=>{
    const produtos = await connection('produtos').select('*');

    return response.json(produtos);
});

routes.post('/produtos', async (request , response) => {
    const { nome_popular, nome_cientifico, preco, estoque, detalhes} = request.body;

    await connection('produtos').insert({
        nome_popular,
        nome_cientifico,
        preco,
        estoque,
        detalhes,
    })

    return response.json("sucessuf");
});

routes.delete('/produtos/:id', async (request, response) => {
    const {id} = request.params;

    await connection('produtos').where('id', id).delete();

    return response.status(204).send();
});


module.exports = routes