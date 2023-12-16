/*Operador
Es un signo que especifica que debe efectuar una determinada operacion */

/**
 * Operadores Aritmeticos (+,-,*,/,%,++,--)
 * Operadores de Asignación(=)
 * Operadores Lógicos (&&,||,! )
 * Operadores de comparación (==,===,!=,!==,<,>,>=,<=)
 * Operadores de cadena (toLwerCase, toUpperCase,trim,toString,concat,+)
 */

/*Operadores aritmeticos

(+): suma, se utiliza para sumar dos numeros
(-): resta, se utiliza para restar un numero de otr
(*): multiplicacion, se utiliza para multiplicar dos numeros
(/): division, se utiliza para dividir un numero entre otro
(%): residuo, se utiliza para obtener el resto de una division
(++): incremento,aumenta de uno en uno la cantidad o el numero
(--): decremento, disminuye de uno en uno la cantidad o el numero */



let numero1 = 10
let numero2 = 8

suma = numero1 + numero2 ;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2 ;
residuo = numero1 % numero2;
incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

/*Ejemplo de como aplicar un descuento */
let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento +"%");
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);



/*Operadores de asignacion
(=): Este operador no compara, lo que hace es asignar*/
//let frutas = manzana;

/*Operadores de comparación
(==): igualdad compara si nuestros valores son iguales*/



let numero3 = 10 ;
let texto ="10";
console.log(numero3 == texto);

/*(===): Igualdad estricta compara si los valores son iguales y el tipo de dato */

let numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);

/*(!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja !== precioMaximo){
    console.log("El precio del producto no es igual al precio maximo");

}else{
    console.log("El precio del producto es igual al precio maximo permitido");
}


let numero5 = 10;
let numero6= "10";

if(numero5 !== Number(numero6)){
    console.log("son diferentes");
} else {
    console.log("los valores son iguales");
}


/*(!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor*/

let numero7 = 41;
let numero8 ="50";

if(numero7 !== numero8){
console.log("los valores son diferentes");
}else {
    console.log("los valores son iguales");
}

/*(>): Mayor que. Basicamente nos indica si un valor es mayor ue otro */

let puntuacionfinal = 85;
let puntiacionRequerida = 102;

console.log(puntuacionfinal > puntiacionRequerida);

//(<): Menor que. Nos indica si un valor es menor que otro*/

let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

/*(>=)Mayor o igual que. Nos indica si un valor es mayor o igual a otro*/

let edad = 18;
let EdadNecesaria = 18;
console.log(edad >= EdadNecesaria);

/*(<=)Menor o igual que. Nos indica si un valor es menor o igual a otro.*/

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);


/* EJERCICIOS
*ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
*/

let num1 = prompt("Ayudame con el primer número:");
let num2 = prompt("Ayudame con el segundo número:");

if (num1 === num2) {
    console.log("Muy bien los numeros son iguales.");
} else if (num1 > num2) {
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El segundo número es mayor que el primero.");
}

/**
 * ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
 */

let palabra1 = prompt("Ayudame con la primera palabra:");
let palabra2 = prompt("Ayudame con la segunda palabra:");

if (palabra1 === palabra2) {
    console.log("Las palabras son iguales :D ");
} else {
    console.log("Las palabras no son iguales :( ");
}


//Operadores Lógicos 
/*(&&) AND se utilizan cuando las dos condicionesdeben cumplirse*/

let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion) {
    console.log("puedes rentar el salón");
    } else{
        console.log("no lo puede rentar");
    }

    //(||) OR se utiliza cuando se debe cumplir una condicion u otra

    let esUsuario = false;
let descuento = true;

if (esUsuario || descuento) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

    // (!) NOT. se utilliza para negar el valr de una condicion

    let esDiaLibre = false;
    if(!esDiaLibre) {
    console.log("se trabaja");
    } else {
        console.log ("descansito");
    }


    //operadores de cadena

    //toLwerCase hace el cambio  de nuestro string a minusculas

    let mensajeUsuario = "Bievenidos a la tierra";
    let cambioMinusculas = mensajeUsuario.toLowerCase();
    console.log(cambioMinusculas);


    //toUpperCase hace el cambio de nuestro string a mayusculas

    let saludo =" Casi viernes, casi Navidad";
    let cambioMayusculas = saludo.toUpperCase();
    
    console.log(cambioMayusculas);

    //trim quita los espacios

    let aviso = "    ch35         Excelente   "
    let sinEspacios = aviso.trim();

    console.log(sinEspacios);


    //toString convierte un tipo de dato a number en string

    let numero10 = 15;
    let cadenas = numero10.toString();
    console.log(cadenas);

    //concat ------->concatena los datos

    let nombre ="Liz";
    let apellido = "Bolaños";
    let nombreCompleto = nombre.concat (" ", apellido)

    console.log(nombreCompleto);

    /*Expresiones 
    expresiones aritmeticas 

    let operacion = 14 +25 * 12; combina la suma conla multiplicacion

    Expresion de cadena
    let notificacion = "Casi," + "Anio nuevo"; expresion concatenando

    Expresion logica
    let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion

    Expresion de asignaccion

    let frasco = chocolates; asigna el valor a la variable*/
// Función para verificar si tienes los ingredientes en las cantidades exactas para ciertas personas
// Función para verificar si tienes los ingredientes en las cantidades exactas para ciertas personas



function hacerHotcakes() {
  
    const harina = parseFloat(prompt("Ingrese la cantidad de harina en gramos:"));
    const huevos = parseInt(prompt("Ingrese la cantidad de huevos:"));
    const leche = parseFloat(prompt("Ingrese la cantidad de leche en ml:"));

    const porciones = 12;
    const cantidadHarinaTotal = 1200; 
    const cantidadHuevoTotal = 12;
    const cantidadLecheTotal = 2400; 

    if (harina >= cantidadHarinaTotal && huevos >= cantidadHuevoTotal && leche >= cantidadLecheTotal) {
        console.log(`¡Tienes todos los ingredientes en las cantidades exactas para ${porciones} personas! Puedes hacer hotcakes.`);

        console.log("1. Mezclar harina, huevo y leche en un tazón.");
        console.log("2. Calentar una sartén a fuego medio.");
        console.log("3. Verter la masa en la sartén caliente.");
        console.log("4. Cocinar hasta que aparezcan burbujas en la superficie.");
        console.log("5. Voltear y cocinar el otro lado hasta que esté dorado.");

        console.log(`¡Los hotcakes para ${porciones} personas están listos!`);

    } else {
        console.log(`No tienes los ingredientes en las cantidades exactas para ${porciones} personas. ¡Compra lo que falta!`);
    }
}
hacerHotcakes();




