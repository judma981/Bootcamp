/*
let MyArray=[];


let Myarray=["1","2","3"];
Myarray.push("4","5","6");
console.log(Myarray)

let Numeros = new Array(5);



console.log(MyArray);
console.log(Myarray);
console.log(Numeros);

Myarray[1] = "10" ;

console.log(Myarray[1]);
console.log(Myarray[2]);
let index = Myarray.indexOf("3");
console.log(index);
console.log(Myarray.indexOf("2"));

let Primerelememto = Myarray.shift();
console.log(Primerelememto);
console.log(Myarray);


let matriz = [
[1,2,3],
[4,5,6],
[7,8,9]
];
console.log("matriz: " + matriz);
console.log(matriz[0][1]);
console.log(matriz[2][2]);

const fruta = ['M','P','N', 'G','U','L','P'] 

const algunasF = fruta.slice(-2);

console.log(algunasF);
*/ 

/*
Programcaion Asincrona
*/

function obtenerdatos(callback){
    setTimeout(() => {
        const datos ={
            nombre : 'Juan',
            edad : 26
        };
        callback(datos);
    }, 2000);
}

obtenerdatos((datos) => {
    console.log(datos) 
});

function ObtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = {
                nombre: 'David',
                edad: 26
            };
            resolve(datos);
        }, 2000);
    })
    
}
ObtenerDatos()
    .then((datos) => {
        console.log(datos);
    })
    .catch((error) => {
    console.log(error);
    });



   async function obtenerdatossAync() {
    try{
        const datos = await ObtenerDatos();
        console.log(datos);
    }catch(error){
        console.log(error);
    }
    }
    obtenerdatossAync();

        