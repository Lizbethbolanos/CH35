/*
*==Arrays==
*Es una colección o adrupación de elentos de una misma variable, cada uno de ellos ubicado por la posición que ocupa un array.
*Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
*/
//*crear un array
const numeros = [1,2,3,4,5];
//*Array de cadena de texto
const comida = ["sopa", "jugo","fruta","yogurt"];
console.log(comida);

//*Array mixto
const mixto =[
    "pluma",
    8,
    true,
    {nombre:"Liz"}
];
console.log(mixto);

//*Array vacio
const lista= [];
console.log(lista);

//*Agregar elementos a mi array vacio
lista[0]="Cereal";
lista[1]="Leche";
lista[2]="Pescado";
lista[3]="Gelatinas";
console.log(lista);

//*Otra manera de crear Arrays
const frutas = new Array ("Mandarian","Uva","Sandía","Duraznos","Guayaba");
/*Esta sintaxis se puede emplear en Arrays por que son objetos, es una manera de mandar a lamar un nuevo objeto dde tipo array.
*/
console.log(frutas);

//*Longitud de un array
console.log(frutas.length);

//*Acceder a los elementos del array, acorde a su indice
console.log(frutas[3]);
console.log(frutas[2]);

//*Modificar un elemento del array por el indice
const cremeria = ["queso", "jamón", "salchica","queso ranchero","yogurt",];
console.log(cremeria);
//*cambiamos un elemento de salchicha a salchicha de pavo
cremeria[2]="salchicha de pavo";
cremeria[3]="quesillo";
console.log(cremeria);

//*Areglo de arreglos multidimencional
console.log("arreglo de arreglos");

//*Estados: Estado de México, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

//*Platillos: Guajolocombo,Torta ahogada, Panuchos, Dogos, Tlayudas, Tacos.

const Estados = ["Estado de México", "Guadalajara", "Yucatan", "Sonora", "Oaxaca", "CDMX"];

const Platillos =  ["Guajolocombo","Torta ahogada", "Panuchos", "Dogos", "Tlayudas", "Tacos"];
const menu = [Estados, Platillos];

/*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.*/
console.log(`En ${menu[0][4]} también se come ${menu[1][2]}`);

/*
*Metodos de Arrays
*Metodo de cola (queue). Los metodos de cola implican agregar elementos al final del array y eliminar ellementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado
*push
*shift
*unshift

*Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array.Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemento añadido en el primero en ser eliminado.
*
*push
*pop

*/
console.log("Metodos de Arrays");
const ch35= ["Fer", "Maara", "Gaby", "Dany","Paola", "Enrrique","Mar"];
console.log(ch35);
//*POP()Eliminar el ultimo elemento del array
let popch35 = ch35.pop()
console.log(popch35);//Devuelve el dato eliminado
console.log(ch35);//Elimina el dato de la lista

//*push ()Agregar al final de la array
let pushch35 = ch35.push("Liz");
console.log(ch35);

//*shift ()quitar primero el array
let shiftch35 = ch35.shift();
console.log(ch35);

//*unshift agregar al principio del array
let unshift = ch35.unshift ("Fer");
console.log(ch35);

//* reverse () cambia el sentido del ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);

/*
INVESTIGAR
*sort
*forEach
*slice
*splice
*indexof
*/