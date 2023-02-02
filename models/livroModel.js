'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var livroSchema = Schema({
    titulo: {
        type: String
    },
    autor: {
        type: String
    }
})

const livro = mongoose.model('livro', livroSchema);

module.exports = livro;