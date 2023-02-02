


const express = require('express');

const router = express.Router();

const livroController = require('../controllers/livroController');


router.get('/', livroController.lista_todos_os_livros);

router.get('/:livroId', livroController.lista_um_livros);

router.post('/', livroController.adiciona_um_livro);

router.patch('/:livroId', livroController.atualiza_um_livro);

router.delete('/:livroId', livroController.remove_um_livro);

module.exports = router;