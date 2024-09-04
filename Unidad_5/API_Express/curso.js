
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/clase_estudiantes',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}
)

    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error('Error al conectar a la base de datos',error));


db.on('error', console.error.bind(console, 'Error de conexión'));
db.once('open', () => {
    console.log('Conectado a la base de datos');
});


