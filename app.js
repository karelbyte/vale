const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('publics'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/views/index.html'))
});

app.listen(3000, () => {
  console.log("sevidor escuchando")
});