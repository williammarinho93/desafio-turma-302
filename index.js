const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// array que armazena os produtos criados
const products = [];

// listar produtos
app.get('/product', function(req, res) {
  /* Desafio - 01: Listar todos os produtos
  *para listar os produtos é necessário escrever o 'res' do response e utilizar o status 200 e transformar em json.
  basea-se no exemplo da linha 32 nesse código
   */
});

// rota para criar um novo produto
app.post('/product', function(req, res) {
  const newProduct = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  };
/* Desafio - 02: Mandar os dados para dentro do array vazio
  * coloque aqui o metodo array para "empurrar" os dados
 */
  res.status(201).json(newProduct);
});
/* Desafio - 03: rota para deletar o produto
* coloque aqui o codigo que vai deletar um produto pelo id.
 */


app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});