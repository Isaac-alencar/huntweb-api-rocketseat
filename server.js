//Modules
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');



//Inicialização do App
const app = express();

//Conexo com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true, useUnifiedTopology: true
});
requireDir('./src/models/');

const Product = mongoose.model('Product');

//Criando a primeira rota (Index);
app.get('/', (req, res) => {

    Product.create({ 
        title: 'React Native', 
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native'
     })



    res.send("Hello World!")
});

app.listen(3001)