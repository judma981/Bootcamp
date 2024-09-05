const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/data',(req ,res) => {
    const data =req.body;   
    console.log('Datos recibidos',data);
    res.json({message : 'Datos recibidos correcamente',receivedData: data })
    
});
app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost: ${port}`);
    });
    
