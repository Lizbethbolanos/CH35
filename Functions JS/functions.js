/*Funciones. son bloques de código con instruccion que pueden reutilizar las veces que sean necesarias.
Algunas funciones reciben parámetros y otras no reciben parámetros.*/

//Función que permita saludar
function saludar(){
    console.log("Hola desde una función");
}
//Ejecutar la función con el nombre de la función y los parametros en caso de que reciba parametros.
saludar();

//Hoisting. caracteristica de una funcion que nos permite invocar desde antes de su inicializacion, es decir, se puede invocar antes del bloque de código o despues
//Se invoca en la linea 11 y en la linea 18
function saludar(){
    console.log("Hola invocando la funsión con  hoisting");
}
saludar();

//Función que retorna algo.Para que una función retorne algo(String, una operación, una variable, etc.), necesitamos indicarle al código de la función que vamos aretornar mediante la palabra return
function greeting(){
    return "Hola desde una función que retorna"
}
console.log(greeting());

//Función que retorna y recibe parámetros
function sumar(x, y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log(resultado);

//Calcular el cuadrado de un número
function calcularCuadrado(numero){
    return numero * numero;

}
let = resultadoCuadrado = calcularCuadrado (5);
console.log(resultadoCuadrado);

//Funciones flecha (Arrow funtion). Es una manera de declarar una función por declaración, sintetizando código y haciendolo mas legible.

//Función flecha para calcular el cubo de un número
const calcularCubo = (number)=>{
    return number * number * number;
}
let resultadoCubo = calcularCubo(3);
console.log(resultadoCubo);

//  Funciones Anónimas. Son un tipo de funciones que se delaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos.
//Las funsiones anónimas no permite el hoisting (no se puede invocar antes de inicializarlas)
const mensaje = function(){
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
//Función B
const functionB = function (){
    console.log("ejecutando funcion B");
}
//Función A que mandará a llamar a la función B
const funtionA = function (Callback){
    Callback();
}
funtionA(functionB);

