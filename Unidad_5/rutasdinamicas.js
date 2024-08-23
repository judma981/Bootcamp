const express = require('express');
const app = express();
const port = 4000;

app.get('/saludo/:nombre',(req,res) => {
    const nombre = req.params.nombre;
    res.send('Hola, ${nombre}!');
})

// iniciar el servidor escuchando en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});


