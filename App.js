// server.js
var http = require('http');
var fs = require('fs');
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // Suponiendo que tienes un archivo de rutas configurado
const app = express();
const hostname = 'www.fullstack.com.mx';
const port = 3003;

// Middleware para permitir manejo de POST y PUT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Ajusta la ruta según sea necesario


// Ruta para servir el archivo HTML estático
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//-----------------------------------
// Configurar las rutas
routes(app); // Importa las rutas y las configura en la aplicación Express

// Iniciar el servidor
const server = app.listen(port, (error) => {
  if (error) return console.log('Error:', error);
  console.log(`Server running at http://fullstack.com.mx:${port}/`);
});