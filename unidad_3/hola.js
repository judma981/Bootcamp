
/*
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
*/
// ciclo for 


/*
for(let i=10; i >=0; i--){
    console.log("decremento:  " + i)
}*/

/*

for(let j=0; j <=10; j+=2){
    console.log("incremento:  " + j)
}
const carro = {
    marca: 'BMW',
    modelo: 'Z4',
    color: 'Negro',
    VelMax: '250km/h',
    estado: 'Bueno'
}

for (info in carro) {
    console.log(`${info} : ${carro[info]}`)
}
*/
/*
// while
let contador= 0;
while(contador <=10){
    contador ++;
    console.log(contador);
} 
let contador5 = 0;
do{
    console.log("Do while",contador5);
    contador5++;
} while(contador5 < 10);
console.log("-----------------")
*/

function Suma(numero1,numero2){
       return a + b;
}
    const resultado = Suma(8+10);
    console.log("la suma es :" + resultado);

console.log("-------------------");

function CalcularDescuento(precio,porcentajedescuento){
    const Descuento =(precio * porcentajedescuento/100);
    const PrecioDescuento = precio - Descuento;
    return PrecioDescuento; 
}

const precioOriginal = 150000;
const porcentajedescuento = 35;

const PrecioFinal = CalcularDescuento(precioOriginal,porcentajedescuento)

console.log("precio original : $ " + precioOriginal);
console.log("Descuento : " + porcentajedescuento + "%");
console.log("precio con descuento : $ " + PrecioFinal );