const express = require("express");
const app = express();

// criando rotas
app.get('/', function(req, res){
    res.send("Seja bem vindo ao meu site!");
})

app.get('/sobre', function(req, res){
    res.send("Seja bem vindo, descubra mais sobre nós!");
})

app.get('/produtos', function(req, res){
    res.send("Seja bem ao catalogo!");
})

// criando rotas com parâmetro dinamico
app.get('/ola/:nome/:cargo', function(req, res){
    // send só pode aparecer uma vez dentro da função
    res.send('<h1>olá '+req.params.nome+'</h1><br></h2>Seu cargo é '+req.params.cargo+'</h2>');
})

// servidor - deve ser a última do cod e função de call back
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});