//Modules
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//Inicialização do App
const app = express();
app.use(express.json());
app.use(cors());

//Conexo com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true, useUnifiedTopology: true
});
requireDir('./src/models/'); //essa função é para melhorar o esquma de require de models


// Rotas
app.use('/api', require('./src/routes'));



app.listen(process.env.PORT || 3001)