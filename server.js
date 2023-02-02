var express = require('express');

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);


mongoose = require('mongoose')
livro = require('./models/livroModel');
bodyParser = require('body-parser');  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ApiRest:05api41@cluster0.pqxexpg.mongodb.net/?retryWrites=true&w=majority');

var routes = require('./routes/livro');

