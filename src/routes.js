const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductController')

//Criando a primeira rota (Index);
routes.get('/products', ProductController.index);

module.exports = routes;