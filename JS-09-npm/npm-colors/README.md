#Pasos para iniciar el proyecto colors
1. Crear una carpeta llamada colors
2. Crear una archivo 'main.js'

## npm desde CLI
3.Iniciamos un proyecto desde npm con el comando 
'''sh
npm init -y (nos permite iinicializar con toadas las caracteristicas desde cero)

4. Buscamos el package colors y lo intalamos con el comando
 '''''sh
''''npm i colors

5.Dentro del archivo 'main.js' vamos a importar el paquete colors con la linea de codigo
''''javascript

const colors = require("colors");

6.Implementar las funciones de colors (estilos para le texto de la terminal) en el ''main.jss''  Para ello hay que consultar la documentacion oficial de colors en [https://npmjs.com]

7.Para ejecutar el package, utilizamos el comando '''''''sh
''''''node 'archivo.js

8.Eliminar (desinstalar) modulos de npm
''''''shh
''''npm unistall colors
