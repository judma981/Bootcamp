const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos',{
    userNewUrlParse:true,
    useUnifiedTopology:true,
})
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) =>console.error('Error al conectar a la base de datos', error));

app.post('/datos',async(req,res) =>{
    const{nombre,valor} = req.body;
    try{
        const nuevoDato = new Dato({
            nombre,
            valor
        });
        const datoGuardado = await nuevo.save();
        res.status(201).json(datoGuardado);
    } catch (error){
        res.status(400).json({error: 'Error al guardar el dato'});
    }
});

app.get('api/datos', async (req,res)=>{
    const datos = await Dato.find();
    res.json(datos);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});