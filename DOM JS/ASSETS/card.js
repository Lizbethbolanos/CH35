/*Para manipular la informacion de un usuario, necesito crear un perfil mediante un objeto de JS.
*/

const user ={
    username: 'Lizbeth95',
    age: 28,
    email: 'lizbeth@gmail.com',
    favfilms: ['grinch','mi probre angelito', 'Hsrry Potter']
}

//Crear una funcion que permita ingresar el objeto del perfil en el nodo padre
const createUser = (user)=>{
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    document.getElementById("fav-films").textContent = user.favfilms;
}
/*Mostrando elementos de lista en forma de lista.
Para mostrar el array en forma de lista utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista*/
const ul = document.getElementById("fav-films");
user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
});
//Modificando estilos de la ul para quitar viñetas
ul.style.listStyleType= "none";
ul.style.padding = "0";
ul.style.color = "#8604E0"

//invocando la funcion
createUser (user);

/**
 * Eventos para actualizar el username mediante el input y el boton
 */
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");


profileBtn.addEventListener("click",() =>{
    userName.textContent = inputName.value; 
 })
