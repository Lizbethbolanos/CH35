## Revisar el sitio oficial de Axios [https://axios-http.com/es/]
1. Instalar axios desde npm cn el comando 
```sh
npm instal axios
```
3. Ejecutar el proyecto de React en el navegador con el comando 
```sh
npm run dev
```

## Manejando Axios 
1. En el archivo App.js importar axios
```
javacript
import axios from `axios`
```
2. Crear la función `getUsers` de tipo async-await para consumir una API
3. Indicamos el evento en línea para el primer botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={getUsers}>
```
4. Crear la función `postUsers` de tipo async-await para enviar datos a una API
5. Indicamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={postUsers}>
```