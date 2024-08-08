

// Generar un número aleatorio
let numeroAleatorio = 10*Math.random();
let NumeroAleatorio = Math.ceil(numeroAleatorio);
//var objetivo = document.getElementById("texto_nav1");
//objetivo.innerHTML = NumeroAleatorio;
// Ingresar número
//let NumeroIngresado = 8;
let NumeroIngresado = prompt("ingresa un número del 1 al 10:")
console.log("aleatorio: " + NumeroAleatorio);
console.log("ingresado: " + NumeroIngresado);

// Si son iguales imprimir "Has ganado"
if(NumeroAleatorio === NumeroIngresado){
    alert("Has ganado");
    
}else{
   
    alert("Sigue participando :" + NumeroIngresado + " numero a adivinar  "+ NumeroAleatorio);
}