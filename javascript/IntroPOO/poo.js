class Persona {
    // Propiedades de la clase
    nombre = "";
    edad = "";
    apellido = "";
    email = "";
    telefono = "";

    // Constructor de la clase
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    // Métodos de la clase
    comer() {
        console.log("Bon appétit");
    }

    bailar() {
        console.log("Dale hasta el suelo");
    }

    mostrarInfo() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
        console.log("Email: " + this.email);
        console.log("Teléfono: " + this.telefono);
    }
}

// Creación de instancias de la clase Persona
let usuario1 = new Persona("fer", "Ram", "30", "holi@holi", "324234");
let usuario2 = new Persona("user1", "userAp1", "12", "user1@holi", "55667791");
let usuario3 = new Persona("user2", "userAp2", "13", "user2@holi", "56667792");
let usuario4 = new Persona("user3", "userAp3", "14", "user3@holi", "57667793");
let usuario5 = new Persona("user4", "userAp4", "15", "user4@holi", "58667794");

// Imprimir información en la consola
console.log(usuario1);
usuario2.mostrarInfo();
usuario3.comer();
usuario4.bailar();
console.log(usuario5.nombre + " " + usuario5.telefono);

// Creación de una subclase (Arrendador) que hereda de la clase Persona
class Arrendador extends Persona {
    // Propiedades adicionales de la subclase
    capacidad = "0";
    costo = "0";
    nombrelugar = "";

    // Constructor de la subclase
    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombrelugar) {
        // Llamada al constructor de la clase padre (Persona)
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombrelugar = nombrelugar;
    }

    // Método adicional de la subclase
    mostrarInfo() {
        console.log("Capacidad: " + this.capacidad);
        console.log("Costo: " + this.costo);
        console.log("Nombre del lugar: " + this.nombrelugar);
    }
}

// Creación de una instancia de la subclase Arrendador
let arrendador1 = new Arrendador("Rocio", "Hernandez", 29, "rocio@gmail.com", "5544334455", 100, 5000, "salon G");

// Imprimir información de la instancia de la subclase en la consola
console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo();


/**
 * POLIMORFISMO: Tener objetos de diferentes tipos que puedan ser manipulados en comun . NOTA la posibilildad de realizar cambios en distintos objetos que comparten atributos en comun.
 * ====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento
 */
class Producto {

    marca = "";
    precio = "0";

    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }




    mostrarDescripcion() {
        console.log("Marca");
        console.log("Precio");

    }

}

let Producto1 = new Producto("cerave", 85);

//ENCAPSULAMIENTO----> ocultar la implementacion de un objeto y solo mostrar los datos necesarios

class Usuario {
    #contraseña;

    constructor(userName, correo, contraseña){

        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
 
    verificarContraseña(contraseña){
        return this.#contraseña === contraseña;
    

}


}

//ABSTRACCION no es nada mas que traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos 


//NOTA: lOS OBJETOS DE TIPO Json EN UN FORMATO DE INTERCAMBIO DE DATOS LIGEROS, ACCESIBLE,ESTRUCTURADO, MANIPULABLE (DOM) Y QUE NOS BRINDA UNA MEJOR COMUNICACION ENTRE EL CLIENTE Y EL SERVIDOR. ESTO GRACIAS A QUESON MAS FLEXIBLES Y GENERALMENTE SE EJECUTAN CON FETCH.
/**
 * let objetoJson = {
    "nombre": "juan",
    "apellido": "juan harry",
    "edad":"31",


}
 */
let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//PRINCIPIOS SOLID
/*Principio de responsabilidad unica (single responsability principle)
Una clase de tener asignada una tarea o responsabilidad especifica y esta n deberia de cambiar

2principio abierto/cerrado (open/closed principle ocp)
una clase puede estar abierta a extensiones y agregar nueva funcionalidad, pero  sin generar cambios en la misma

3principio desustitucion de liskv (liskkov suntitution priciple LSP)

4Principio de segregacion de interfaces (interfaces segregation principales ISP)

5Principio de inversion de dependencias (Dependet Inversion Principle DIP) INVESTIGAR


*/

/**
 * programa que conste de una clase llamada alumno que tenga como atibutos nombre y calificacion. Definir los metodos para inicializar sus atributos, (constructor) imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o  no 
 * 
 * ATRIBUTOS 
 * nombre 
 * calificacion 
 * 
 * METODOS
 * imprimir calificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion 
 * operadores
 * 
 */

class alumno{
    nombre = "";
    calificacion = "";
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    imprimirCalificacion(){
        console.log("calificacion:" +this.calificacion);

    }
    evaluacion(){
        let evaluacion = Number(this.calificacion)>5.9? "aprobado": "reprobado";
        console.log(´El alumno $)

    }
}