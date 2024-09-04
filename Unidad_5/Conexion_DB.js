

const express = require('express');
const  bodyParser = require('body-parser');
const mogoose = require('mongoose');

const app = express();
const port = 3000;

//middleware

app.use(bodyParser.json());

//conexion base datos

mogoose.connect('mongodb://localhost:27017/clase_estudiantes',{
useNewUrlParser:true,
useUnifiedTopology:true,
}
);

const db = mogoose.connection;
db.on('error',console.error.bind(console,'Error De Conexión:'))
db.once('open',() =>{
    console.log('Conectado a la base de datos');
})

app.listen(port, () => {
    console.log(`Servidor Corriendo en el puerto ${port}`);
});