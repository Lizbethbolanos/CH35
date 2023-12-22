# Crear y publicar nuevo package de npm

## Creacion de package
1. Inicializar npm desde CLIC con el comando. 
````sh
npm init
````
Me guiara a trave de una serie de pasos donde me solicite información relacionada con mi package, como el nombre, la version, la descripcion, el punto de entrada   `index.js` , comando de prueba, respositorio de git en donde vive, palabras clave para coincidir con busquedas, autor, licencia.
2.Precionar enter para aceptar que la informacion es correcta y generar el archivo `package.json`
> - package.json
-Contiene informacion sobre el proyecto-modulo que vamos a crear.Son un estandar de nodejs para facilitar la estructura y ejecucion de los proyectos dentro del entorno de ejecucion y de esta manera poder compartirlo a traves del sitio de [https://www.nmpjs.com]
-La informacion de estructura como objeto de JS con notacion JSON

3. Crear una carpeta llamada `modules.exports` en donde vivirá nuestro script
4. Dentro de `modules` crear el script.(js) con el nombre `parinpar.js`
5.Crear la funcion del script y exportarlo von `export default`
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
    ````javascript
    import determinarParImpar from "./modules/parimpar.js";
    ````
7.Configurar el `"type": "modules"` en el archivo `package.json`
8.Ejecutamos el programa desde el entorno de nodejs con el comando 
````sh
node index.js
````

## Publicar package en npm
1. Iniciar sesion de npm pero ahora desde CLI con el comando 
```sh
npm login
```
2. AEsperamos a que cargue y presionamos enter para abrir el navegarodr
3. Regresamos un correo con un pasword de una sola vez, lo agregamos y presionamos login
4. Regresamos a la terminal y nos mostrara el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso publico desde el CLI  a npm con el comando 
```sh
npm publish
````