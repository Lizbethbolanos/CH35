/* Manipulacion del DOM 
-Leer y traer nodos del arbol del DOM
document.getelementById (Traes todos los elementos por id)
document.getElementesByClassName (trae elementos por etiqueta)
documente.getEelementByTagName (trae elementos por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log (titulo);
console.log(titulo.innerText); 
 

//getElementsByClassName
const titulos = document.getElementsByClassName ("title");
console.log (titulos);
console.log (titulos.length); //Devuelve la longitud de elementos de la clase
console.log(typeof titulos); //Muestra que es un object por que es una coleccion de arrays

//getElementsByTagName
const titulosH3 = document.getElementsByTagName("h3");
console.log (titulosH3);
console.log(titulosH3 [0].innerText);


/*Métodos para llamar elementos mediante selectores de CSS Se usa para procesos mas espesificos y la sintaxis querySelector
-Document.querySelector ("Selector"); //#, . , <>
-Document.querySelectorAll(). selecciona los elementos que se especifiquen.
Siempre van a traer el primer elementos con el selector indicado*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelectorAll (".title");
console.log(queryClass);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#F25D50";

//Manipular titulo2= document.querySelector ("#title2");
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de manipulación del Dom - CH35";
titulo2.style.color = "#F2AA52";
/*Metodo para crear y agregar elemetnos en el DOM. eSTE PROCESO SE DIVIDE EN DOS: "crear el nodoy agregar el nodo"
.
-Crear nodos
*document.createElement ("Elemente")--> crea elementos a partir de etiquetas.
*document.createTextNode ("text")--> crea texto dentro de las etiquetas */
 const nodo1 = document.createElement("h4");
 const imgNodo = document.createElement("img");

 /*
 -Agregar nodos mandamos a llamar elementos padre y le pasamos la propiedad con la constante que guarda al nodo creado
 *parentElement.appendChild (const);
*parentElement. append(consst);
*parentElement. insertBefore (const);
*parentElement.insertAdjacentElement (const);
Utilizamos mayormente appendChild*/

const color = "--primary-color; #F035E8";
/*Obtengo el elemento padre por tag, class o id*/
 const parentElement = document.getElementById("dif");
 //agregar texto
 const textNodo1 = document.createTextNode("imagen agregada desde el DOM");
 //Iserto el texto en el nodo1
 nodo1.appendChild(textNodo1);
//insertar nodo1 en el elementos padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#4A8C8C";

/*Agregando imagen*/
//insertar el imgNodo en el elemento padre para definicrlo posteriormente
parentElement.appendChild(imgNodo);
//Acceso a la propiedades d ela imagen
imgNodo.src = "https://cdn.dribbble.com/users/3093/screenshots/2355747/welcometocat-dribbble-shot.png?resize=400x0";
imgNodo.width = "200";

/*Otra forma de leer y modificar nodos 
document.outerHTML (leer)
node.innerHTML(escribir sobre nodo) 
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion del DOM- CH35";