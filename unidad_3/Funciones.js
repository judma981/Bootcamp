/*
function saludar(nombre){
    console.log("Hola" +nombre);
}

saludar("Juan")
//-----------------------
const persona = {
    nombre : "Juan",
    edad: 26,
    saludar :function(){
        console.log("Hola , mi nombre es " + this.nombre)

    }
};
persona.saludar();
//--------------*/
function sumar (a,b){
    return a+b;
};

const carro = {
    Velocidad : 0,
    acelerar : function(cantidad){
        this.Velocidad += cantidad;
  //      console.log("Velovidad Actual: " + this.Velocidad + " KM/H " )
    }
};

carro.acelerar();
//console.log(carro.Velocidad)

const resultado = sumar (41+15);
//console.log("Suma:  " + resultado);

carro.acelerar(35);
//console.log(carro.Velocidad);


let contador = 0 ;

function incrementar (){

    contador++;
    return contador;
}
incrementar();
console.log(contador)

function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
const resultados = factorial(4)
console.log(resultados)
