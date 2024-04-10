var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Web inicial de mi API');
});

app.get('/Saludo', function(req, res){
    res.send('Hola mundo');
});

app.get('/despedida', function(req, res){
    res.send('Adios mundo cruel');
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo de API, escuchando en el puerto 3000')
});
