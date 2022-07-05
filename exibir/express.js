const express = require("express");
const app = express();

// __dirname - retorna o dirtorio raiz
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/sobre.html");
});

app.get('/produtos', function(req, res){
    res.sendFile(__dirname + "/produtos.html");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});