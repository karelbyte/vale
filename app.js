const express = require("express");
const path = require("path");
const app = express();
const body_parser = require('body-parser');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dami',
  password : 'dami'
});

connection.connect();

app.use(express.static("publics"));
app.use(body_parser.urlencoded({extended:true}));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/views/index.html"));
});

app.post("/confirmacion", (request, response) => {
   connection.query(`insert into invitadosdb.personas (nombre, asistencia) values ("${request.body.nombre}", 1)`)
   response.redirect('/');
});

app.listen(3000, () => {
  console.log("sevidor escuchando");
});
