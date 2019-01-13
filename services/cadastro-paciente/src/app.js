'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conexão com banco de dados
mongoose.connect('mongodb://diego:diego123@ds255784.mlab.com:55784/cadastro-paciente', { useNewUrlParser: true });

//usar com Docker
//mongoose.connect('mongodb://cadastro-paciente-db/base-cadastro-paciente');

//carregando os models
const Paciente = require('./models/paciente-model');

//carregando as rotas
const indexRoute = require('./routes/index-route');
const pacienteRoute = require('./routes/paciente-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/paciente', pacienteRoute);

module.exports = app;