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

/*var edad;
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

}   */



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

/*Todas nuestras variables deben ser declaradas con nombres especificos y claros, sin espacios, no deben iniciar con numeros*/

/*let nombre = "Daniel";
let invitadosExtra = 2;
let esMayorEdad = true;
let edad = 25;
let invitadoEspecial = null;
let horaDeSalida = undefined;

document.write(nombre);

/*Encasillamiento o tipado
nos es util para el mantenimiento del código ya que lo hacemas legible y facil de entender y nos ayuda a la prevención de errores para reducir la probabilidad de los mismos. Mejora el rendimiento de nuestro programa*/

/*let numero = 15;
let texto = "hola";

//con encasillamiento

let numeroEncasillado = Number = 5;
let textoEncasillado = String = "hola";*/

//typeof palabra reservada para saber que tipo de dato tenemos

/*console.log(typeof(nombre));

let funcionNumber = console.log(typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));

/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas en texto en numeros,ambas nos ayudan en este cambio*/ 

/*typeof: solo se ocupa para que te diga el tipo de variable que estas utilizando*/
/*Number: tranforma tu variable a una variable numerica*/
/*parseInt: tranforma tu variable a un tipo de variable entera*/

/*var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));
/*
typeof solo devuelve el tipo de variable que estas utilizando
*/
/*console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
/*
Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string
*/

/*console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));

/*conversion de number a string

console.log(typeof(edad));
console.log(typeof edad.toString());*/

/*Conversion de boolean a number
let numero = Number (esMayorEdad);

console.log(numero);*/

/*let texto = String(esMayorEdad);
console.log(typeof (texto));
console.log(typeof esMayorEdad.toString());*/

/*let negacion = !esMayorEdad;
console.log(negacion);*/

//CONCATENAR basicamente unir strings

/*let saludo = "Hola soy Canela ";
let frase = " mi hermana se llama Zelda";

texto= saludo + frase;

document.write(texto);*/

/*document.write("Receta para hot cakes para 12 personas");

// Ingredientes
const ingredientes = [
    "1 taza de harina",
    "2 cucharaditas de polvo de hornear",
    "1 cucharadita de azúcar",
    "1/2 cucharadita de sal",
    "1 huevo",
    "1 taza de leche",
    "2 cucharadas de mantequilla derretida"
  ];
  
  // Instrucciones
  function hacerHotCakes() {
    console.log("Receta de Hot Cakes");
    console.log("Ingredientes:");
  
    // Imprimir ingredientes
    for (let i = 0; i < ingredientes.length; i++) {
      console.log(ingredientes[i]);
    }
  
    console.log("\nInstrucciones:");
  
    // Imprimir instrucciones
    console.log("1. En un tazón grande, mezclar la harina, el polvo de hornear, el azúcar y la sal.");
    console.log("2. Agregar el huevo, la leche y la mantequilla derretida a la mezcla seca.");
    console.log("3. Mezclar hasta que la masa esté suave.");
    console.log("4. Calentar una sartén a fuego medio.");
    console.log("5. Verter porciones de masa en la sartén caliente.");
    console.log("6. Cocinar hasta que aparezcan burbujas en la superficie, luego voltear y cocinar el otro lado.");
    console.log("7. Repetir hasta que todos los hot cakes estén cocidos.");
  
    console.log("\n¡Disfruta tus hot cakes!");
  }
  
  // Hacer hot cakes
  hacerHotCakes();*/

  /*console.log();Nos permite visualizar en consola del navegador el código de JS
  console.warn(); Muestra un mensaje de advertencia.
  console.error(); Muestra un mensaje de error
  console.table();
  */

  let firstName;
  firstName = "Lizbeth";
  let lastName;
  lastName = "Bolaños";

  console.log(firstName + " " + lastName);
  console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

  /*ECMAScript 6 (ES6). Interpolación de cadenas
  > - Backticks
  > - Para variables ${}
  > - Texto para estring
*/
let age = 28;
console.log("Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años");

//Console.warn();
console.warn("precaución, no es buena practica dejar sin punto y coma ");

//Console.error();
console.error("Status 404: Failed")

/*Array. se traduce como matriz o areglo. Es un tipo de dato que pertenece a JS, en el cual se almacenan un colección de elementos de manera ordenada.
Los arrays pueden manipular mediante métodos específicos.
Los elementos de un array se contabilizan como índices empezando por indice0, por lo cual el primer elemento del array posee el índice 0.
- Un array posee n cantidad de elementos.
-Se delclaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.*/
let areglo1 = []; // array vacío
console.log("aray vacío ${areglo1}");
//Los elementos de un array se separan mediante comas.
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"];//Array de String
console.log(cars);
//Longitud e indice son diferentes. La longitud (length) es el número de elementos y el índice corresponden a cada elemento a partir de 0.

console.log(typeof(cars));//output: object
//Array de Numbers
let salariosMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariosMxn.length);//output: 12
console.log(salariosMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definica que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
const Objet = {
    clave1: valor1 (dato1),
    clave2: valor2 (datos2)
}
Los objetos puedem almacenar diferentes tipos de valores.
*/
const employee = {
    firstName:"Lizbeth",
    lastName: "Bolaños",
    age: 29,
    Country:"Mexico"
}

console.log(employee);
//Mostrando mi objeto como tabla
console.table(employee);
//Mostrando mi array como tabla
console.table(cars);