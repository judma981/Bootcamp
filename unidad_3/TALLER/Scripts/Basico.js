 /*//1.
  //  const nombre = prompt ("Ingrese Su Nombre");
  //  const edad = prompt ("Ingrese Su Edad");
  //  alert("Hola, " + nombre + " Es un placer conocerte. Tienes " + edad + " años.");

  console.log("----------------------------------------------------------------------")    
  //2.
      let Numero = 53;
      let Texto = "Hola mundo";
      let booleano = true;
  
      let Numero1 = 84;
      let Sumatoria = Numero + Numero1;
      let Sustracion = Numero1 - Numero;
  
      console.log("La Suma de dos numeros :" + Sumatoria + " La resta de dos numeros :" + Sustracion );
  console.log("----------------------------------------------------------------------") 
  
  //3.
 
  const Altura = prompt ("Ingrese la altura del triangulo");
  const Lado = prompt ("Ingrese el valor del lado del triangulo");
  const Base = prompt ("Ingrese el valor de la base del triangulo");
  const Area = (Base * Altura)/ 2 ;
  const perímetro = Lado + Base + Lado ;
  
  console.log("El area es :" + Area +"El perimetro es " + perímetro);*/
  
 // 4.
 document.getElementById("boton").addEventListener("click", function() {
    let Numero = 502;
    if (Numero % 2 ===0){
        console.log("par")
    }else{
        console.log("impar")
    }
    alert("Code started!");
    console.log("This is a message from the JavaScript code.");
});


//5. 



    //4. 
const express = require('express');
const app = express();
const port = 4000;

app.get('/numeros/:numero', (req, res) => {
  const numeroLimite = parseInt(req.params.numero);

  if (isNaN(numeroLimite)) {
    return res.status(400).send('El parámetro "numero" debe ser un número válido.');
  }

  const numeros = [];
  for (let i = 1; i <= numeroLimite; i++) {
    numeros.push(i);
  }

  res.json(numeros);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});