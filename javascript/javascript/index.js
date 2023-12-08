//comentarios de una sola linea/

/*comentarios multilineales*/

//alert("hola mundo");


//console.log("este es un mensaje para mi consola")

//var nombre = prompt("ingresa tu nombre");
//alert("Hola,nombreBienvenido a la ch35");


//var numero1 = parseInt (prompt("Ingresa el primero numero:"))
//var numero2 = parseInt (prompt("Ingresa el segundo numero:"))

//console.log("suma:" + (numero1 + numero2));
//console.log("resta:" + (numero1 - numero2));
//console.log("multiplicacion:" + (numero1 * numero2));
//console.log("division:" + (numero1 / numero2));

edad=parseInt(prompt("dame tu edad"));

if(0<=edad<18){
    alert("aun no eres apto");
}else if (18<=edad<30){
    alert("ya eres apto");
}else if (30<=edad<50){
    alert("tu cuerpo no resiste")
}else{
    alert("vamonos a dormir")
}
