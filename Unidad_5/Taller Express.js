/* 
# Ejercicios Express

1. Crear una tabla de multiplicar de un número ingresado por el usuario. La ruta debe ser /tabla/:numero y debe devolver la tabla de multiplicar del número en formato JSON.
2. Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a realizar. La ruta debe ser /calculadora y debe recibir los parámetros operando1, operando2 y operacion.
3. Crear un programa que solicite al usuario su nombre y edad, y luego muestre un mensaje de bienvenida personalizado. La ruta debe ser /saludo/:nombre/:edad y debe devolver un mensaje de saludo personalizado.
4. Imprimir los números del 1 hasta un número definido por el usuario. La ruta debe ser /numeros/:numero y debe devolver una lista de números desde 1 hasta el número ingresado.
5. Crear una función que convierta grados Celsius a Fahrenheit. La ruta debe ser /celsius-a-fahrenheit y debe recibir el parámetro celsius. Utilizar una arrow function.

## Recomendaciones

### Medir el tiempo empleado para cada ejercicio y anotarlo.
### Duración del primer sprint de programación. 15 minutos. Hora límite: 705AM*/


//3.
const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo/:nombre/:edad', (req, res) => {
  const nombre = req.params.nombre;
  const edad = req.params.edad;

  if (isNaN(edad)) {
    return res.status(400).send('El parámetro "numero" debe ser un número válido.');
  }

  res.send(`Hola ${nombre}, tienes ${edad} años!`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
