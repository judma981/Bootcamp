/* 
Nivel Básico:
Tipos de Datos y Variables:
1. Crear un programa que solicite al usuario su nombre y edad, y luego muestre un mensaje de bienvenida personalizado.
2. Declarar variables para almacenar diferentes tipos de datos (número, cadena, booleano) y realizar operaciones básicas.

Operadores Aritméticos y Comparación:
3. Calcular el área y perímetro de un rectángulo, solicitando al usuario las medidas de sus lados.
4. Implementar un programa que determine si un número es par o impar.

Condicionales:
5. Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a realizar.
6. Desarrollar un programa que determine si un año es bisiesto.

Nivel Intermedio:
Bucles:
7. Imprimir los números del 1 al 100.
8. Crear una tabla de multiplicar de un número ingresado por el usuario.
9. Implementar un programa que calcule el factorial de un número.

Funciones:
10. Crear una función que convierta grados Celsius a Fahrenheit.
11. Implementar una función que determine si una cadena es un palíndromo.

Uso de Bibliotecas:
12. Utilizar una biblioteca como Moment.js para realizar operaciones con fechas y horas.
13. Crear un sencillo juego utilizando una biblioteca de gráficos como Phaser.

Nivel Avanzado:
Algoritmos y Estructuras de Datos:
14. Implementar el algoritmo de búsqueda binaria.
15. Crear una función que ordene un arreglo de números utilizando el método de burbuja.
Programación Orientada a Objetos:
16. Modelar un objeto "Persona" con propiedades como nombre, edad y dirección.
17. Crear una clase "Carro" con propiedades como marca, modelo y año.
*/
/*
console.log("Nivel básico")
//1.
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
/*
const Altura = prompt ("Ingrese la altura del triangulo");
const Lado = prompt ("Ingrese el valor del lado del triangulo");
const Base = prompt ("Ingrese el valor de la base del triangulo");
const Area = (Base * Altura)/ 2 ;
const perímetro = Lado + Base + Lado ;*/
/*
console.log("El area es :" + Area +"El perimetro es " + perímetro);*/

/*
console.log("----------------------------------------------------------------------")
console.log("----------------------------------------------------------------------")
console.log("Nivel intermedio")
console.log("----------------------------------------------------------------------")
console.log("Nivel avanzado")
console.log("17. Crear una clase Carro con propiedades como marca, modelo y año.")
*/

const moment = require('moment')
const Fechas = moment();

console.log(Fechas.format());