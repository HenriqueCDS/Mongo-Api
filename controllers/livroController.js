'use strict'

var livro = require('../models/livroModel.js');

// GET ALL
exports.lista_todos_os_livros = function(req, res) {
    
    livro.find({}, function(err, livros) {
        if(err) {
            res.send(err);
        }
        res.json(livros);
    })
    console.log(livro);
    console.log("test - get all");
}

// GET ID
exports.lista_um_livros = function(req, res) {
    livro.findOne({"_id": req.params.livroId}, function(error, livro) {
        if (error) { return res.status(500).send({ error: error }); }
        return res.status(200).send({ livro });
    })
    console.log("test - get");
}

// POST
exports.adiciona_um_livro = function(req, res) {
    var novo_livro = new livro(req.body)
    novo_livro.save(function(err, livro) {
        if(err) {
            res.send(err);
        }
        return res.status(201).send({ livro });
    });
    console.log("test - post");
}

// PUT
exports.atualiza_um_livro = function(req, res) {
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true}, 
        function(err, livro) {
            if (err) {
                res.send(err);
            }
            return res.status(201).send({ livro });
        });
        
}

// DELETE
exports.remove_um_livro = function(req, res) {
    livro.remove({_id: req.params.livroId}, function(err, livro) {
        if(err) {
            res.send(err);
        }
        return res.status(202).send({ livro });
    });
    console.log("test - delete");
}