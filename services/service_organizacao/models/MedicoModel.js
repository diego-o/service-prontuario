'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var schemaEndereco = require('./EnderecoModel');
var schemaContato = require('./ContatoModel');

const SchemaMedico = new Schema({
    crm: {
        numero: {
            type: String,
            min: 6,
            max: 6,
            required: true,
            index: true,
            unique: true
        },
        uf: {
            type: String,
            required: true,
            uppercase: true
        }
    },
    nome: {
        type: String,
        max: 100,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        min: 11,
        max: 11,
        unique: true,
        index: true
    },
    ativo: {
        type: Boolean,
        default: true
    },
    endereco: schemaEndereco.SchemaEndereco,
    contato: schemaContato.SchemaContato
});

module.exports = mongoose.model('Medico', SchemaMedico);