/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
* ==== Ciclo for ====
Un siclo for se repite hasta que la condicion no se evalue como false. Crea 3 expresionales opcionales
*Sintaxis
    *for (expresion inicial; expresioncondicional; expresionactualización){
        *codigo a ejecutar en cada iteracion del bucle
    }

    1.Iniciaización: se debe inicializar con una variable que sera evaluada en la expresión a comparar.
    2.Condición: es una expresi´n que debe cumplir la variable (true), si no se cumple (false) el bucle termina
    3.Pasos a realizar: son los intervalos que cambiaran la variable inicial mientras esta sea true.
    */

//* Crear un programa para sabr cuntos boletos vendemospara una rifa
for (let boleto = 1; boleto <= 15; boleto++) {
    console.log(`boleto #${boleto}`);
}
//*Programa para vender bolos con una variable global
let bolos = 1;

for (bolos; bolos <= 20; bolos++) {
    console.log(`Vendi ${bolos}`);
}

//*Cuenta regresiva
let cuentaRegresiva = 15;

for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--) {
    console.log(`Quedan ${cuentaRegresiva} paletas`);
}

/*Recordar arrays con el ciclo for
*Debemos usar indices del areglo para poder usar el bucle,en indices desde el 0 hasta n y usaremos la propiedad length*/
const ch35 = ["Lizbeth","Ana","Ruben","Arturo","Yunuel","Ceci","Marco", "Victor", "Elizabeth"];
for (let i = 0; i< ch35.length;i++){
    console.log(ch35[i]);
}

/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/
let frutas = ["Mandarín", "Uva", "Sandía", "Durazno", "Guayaba"];

for (let fruta of frutas) {
    console.group(fruta + " - grupo frutas");
}

//*sumar numeros del 1 al 20
let suma = 0;
for(let i = 1; i <=20; i++){ //suma todos los numeros del 1 al 20 (1,2,3,4,5,6, etc).
    suma += i;
}
console.log(suma);

//* tabla del 5
const tabla = 5;

for (let i = 1; i <= 10; i++) {
    let resultado = tabla * i;
    console.log(`${tabla} * ${i} = ${resultado}`);
}

/* Ciclo While
*Recorrer uun bloque de código siempre que una condicion especifica sea verdadera.
*Sirve para realizar una tarea repetitiva mientras una condicion sea verdadera.
*/

let productos = 5;
while (productos >0){
    console.log(productos + " productos vendidos");
    productos--;
}

//* Imprimir numeros
let num1 = 0;
while(num1 < 10){
    num1 ++
    console.log("el numero es " + num1);
}









/*para especificar el incremento se puede hacer de la siguiente manera:                                                                                            
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}*/