const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/omnistack10', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Diz para o express aceitar JSON como resposta.
app.use(express.json());
app.use(routes);

app.listen(3333);