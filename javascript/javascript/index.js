// comentarios de una sola linea

/*
Comentarios
multilinea
*/

//alert("hola mundo en javascript");

//console.log("Mensaje para la consola");

// var nombre = prompt("Ingresa tu nombre");
// alert("Hola, "+nombre+" Bienvenido a la CH35");

// var numero1 = parseInt(prompt("Dame un numerito"));
// var numero2 = parseInt(prompt("Dame otro numerito"));

// console.log("La suma de: "+numero1+"+"+numero2+"="+(numero1+numero2));
// console.log("La resta de: "+numero1+"-"+numero2+"="+(numero1-numero2));
// console.log("La multiplicacion de: "+numero1+"*"+numero2+"="+(numero1*numero2));
// console.log("La division de: "+numero1+"/"+numero2+"="+(numero1/numero2));

/*Hacer una practica donde ingrese edad e indique si es mayor de edad*/

var edad;
var res = "s";

while(res==="s"){

    edad = parseInt(prompt("Dame tu edad"));
    //console.log(edad);

    if(0 <= edad && edad< 18){
        alert("Tss todavia pides permiso");
    }else if(18<=edad  && edad<30){
        alert("Ya alcanzas el timbre :D");
    }else if(30<=edad  && edad<50){
        alert("¿Tambien te duelen las rodillas?");
    }else{
        alert("Es hora de irse a mimir");
    }
    res = prompt("¿Otra edad? s/n");

}   



//TIPOS DE DATOS Y VARIABLES
//scope es el alcance de nuestras variables
/*ar, let, const la diferencia es el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningun cambio

/*sting: cadena de texto (lleva comillas)
number: numero
booleana: true/flase
null: nulo
undefined: no esta asignado o definido*/

/*let nombre = "Daniel";
let invitadosExtra = 2;
let esMayorEdad = true;
let edad = 25;
let invitadoEspecial = null;
let horaDeSalida = undefined;*/
