//console.log("Hola CH35");
/*
*Control de flujo y estructura de contraol
*
*Las estructuras de control son un componente fundamental dentro de la programació, entre algunas de las facilidades y venajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguente.
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/

/*
*Declaración de senencia if-else
*palabra reservada if para comenzar la declaración, se coloca un parentesis() donde se debe colocar una expreción lógica (true false), se abren y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true),
*Despues de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un ()
*simplemente colocamos otras  llaves{} para indicar ek bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).
*/
/*let n = 15;

if(n > 20){
    console.log(true);

} else{
    console.log(false);
}*/

/*
*if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

//If anidados
/*let edad = 25;

if (edad < 18){
    console.log("Eres menos de edad, retirate");
} else if(edad>=18 && edad < 65){
    console.log("Eres un adulto joven");
}else{
    console.log("Eres un adulto mayor");
}
*/
/*Setencia swicht
*La  sentencia switch es otro tipo de estructura de control de fluj, que , nuevamente se encuentra en diversos lenguajes de programacion.
*Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en un bifurcación (partición de caminos), si no que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso específico, sera la secuencia que  se va a ejecutar, dentro de la declaración.

*Declaración:
*se empieza por colocar la palabra reservada switch, seguido de esto,colocamos parentesis() donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos en la sentencia if o con nuestra funciones.
*Dentro de este bloque de código, falta colocar los pasos para cada valor que se desee, establecer segúbn sea el valor indicado dentro del parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
*case valor: intrucción a jecutar si el valor empata con este caso.
*Después, para indicar que la ejecución de las sentencias debe cortase cuando se cumpla, se coloca la intrucción *break.
*Cuando terminemos de establecer los casos que necesitemos declarar dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
*Esta ultima sentencia nos permite establecer un alor por defecto, si es que este valor colocado no empta con ninguno de los casos.
*Default: mensaje no disponible.
*/

/*let dia = "jueves";
switch (dia){
    case "lunes":
        console.log("Odio los lunes atte: Garfield"); 
        break;   
    case "martes":
        console.log("De locura");
        break;
    case "miercoles":
        console.log("Ombligo de semana");
        break;
    case "jueves":
        console.log("Jueves de bebidas 2x1 en chilis");
        break;
    case "viernes":
        console.log("De tacos");
        break;
    case "sabado":
        console.log("Sabado de Fiesta");
        break;
    case "domingo":
        console.log("descanso");
        break;
        default :
        console.log("Dia desconocido");
        break;
    

        
}
*/
//aqui termina mi swicht

/*
*Operador ternario
*Expresion condicional if-else mas simple y legible
*Principalmente se usa para simplificar condiciones de una sola expresión
*Tambien puede anidar sentencias if-else-if, sin embargo,no es recomendado por que el código se puede volver confuso y poco legible.
*Su declaración es la siguiente:
*Palabra reservada var, let o const:
*se le asigna un nombre como si se tratara de una variable, depues el operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esto va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camino a seguir , dependiendo de si, se cumpe (o no) a expresión.
*Para eparar el resultado true de false debemos aregar un caracter de: , de lado izquiero se coloca la sentencia a ejecutar.
*Si se cumple condición, de lado derecho se coloca la sentencia a ejecutar.
*/

//Ejemplo de operador ternario
/*let verificacion = n > 5 ? "si es mayor" : "no es mayor"
console.log(verificacion);*/

/*Cuando usar  if-else y cuando usar switch?
*if-else :  cuando necesitamos tomar desiciones bajo condiciones mas flexibles.
*switch : cuando tengamos un conjunto de valores para comparar una expresión.*/


// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */


let edad = 18;

if (edad >= 18) {
    console.log("Tienes edad suficiente para votar");
} else {
    console.log("No tienes edad suficiente para votar");
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let numero= 73;
    if (numero % 7 === 0 && numero % 8 === 0) {
      console.log("Verdadero");
    } else {
      console.log("Falso");
    }
 
  
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
let numAleatorio = Math.floor(Math.random() * 50); 

if (numAleatorio % 4 === 0 || numAleatorio % 9 === 0) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let recomendarPelicula = "accion";
    switch (recomendarPelicula){
      case "accion":
        console.log('Recomendación de película de acción: "Rapido y furioso"');
        break;
      case "drama":
        console.log('Recomendación de película de drama: "No se aceptan devolusiones"');
        break;
      case "comedia":
        console.log('Recomendación de película de comedia: "Como si fuera la primera vez"');
        break;
      case "romance":
        console.log('Recomendación de película de romance: "Posdata te amo"');
        break;
      case "suspenso":
        console.log('Recomendación de película de suspenso: "Contagio"');
        break;
      case "terror":
        console.log('Recomendación de película de terror: "La noche del demonio"');
        break;
      default:
        console.log('Categoría no reconocida. Inténtalo con una categoría válida.');
    }
  

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
let opcion = 2; 

if (opcion === 1) {
  console.log("Acción a realizar: Retirar dinero");
} else if (opcion === 2) {
  console.log("Acción a realizar: Transferencia");
} else if (opcion === 3) {
  console.log("Acción a realizar: Depósito");
} else if (opcion === 4) {
  console.log("Acción a realizar: Pago de servicios");
} else {
  console.log("No es valido. Por favor, elige alguna opción del 1 al 4.");
}


/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let convertirDivisas = 2;
let cantidad = 500;
let resultado; 

switch (convertirDivisas) {
  case 1:
    resultado = cantidad / 21.48;
    console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} dólares estadounidenses.`);
    break;
  case 2:
    resultado = cantidad / 25.66;
    console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} euros.`);
    break;
  case 3:
    resultado = cantidad / 0.20;
    console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} yenes japoneses.`);
    break;
  case 4:
    resultado = cantidad / 28.87;
    console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} libras esterlinas.`);
    break;
  case 5:
    resultado = cantidad / 23.78;
    console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} francos suizos.`);
    break;
  default:
    console.log("Opción no válida. Por favor, elige una opción del 1 al 5.");
}


