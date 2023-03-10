const express = require('express');
const app = express();
const morgan = require('morgan');
const BodyParser = require('body-parser');
require('dotenv').config();
  


const rotalivro = require('./routes/livro');

const bodyParser = require('body-parser');
const req = require('express/lib/request');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
   res.header('Acess-Control-Allow-Origin','*') 
   res.header(
   'Acess-Control-Allow-Header',
   'Origin , X-Requreested-With, Content-Type, Accept, Autorization') 

   if( req.method === 'OPTIONS'){
      res.header('Acess-Control-Allow-Methods','PUT,POST,PACTH,DELETE,GET');
      return res.status(200).send({});   
      }
      
      next();   
});
   
//rotas
app.use('/livro', rotalivro);

//quando não encontra rota
app.use((req, res, next) => {
 const erro = new Error('Não encontrado');
 erro.status = 404;
 next(erro);
});

app.use((error, red, res, next) => {
   res.status(error.status || 500);
   return res.send({
      erro: {
         mensagem: error.message
      }
   });
});


module.exports = app;