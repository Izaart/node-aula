// variável que cria o proceso http
let http = require('http');

/* 
//createServer() - cria o servidor //listen(8081) - acessa porta de rede

http.createServer().listen(8081);

//se estiver funcionando a mensagem irá aparecer 
console.log("o servidor está rodando");
*/

// quando o usuário entrar terá essa mensagem
http.createServer(function(req, res){
    res.end("Hello world! Welcom to my website.");
}).listen(8081);

console.log("Servidor rodando");