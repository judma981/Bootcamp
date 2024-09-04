const express = require('express');
const bodyParer = require('body-parser');
const db  = require('./curso');
   
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});