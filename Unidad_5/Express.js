const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hola mundo');
})

// iniciar el servidor escuchando en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});


