//Creadno una funcion para determinar si un número es par o impar
//Necesitamos exportar esta funcion para que pueda ser utilizada en cualquier parte del proyecto, solamente llamando al script. Para elo tenemos que agregar las palabras reservadas `xport default` por commonJS
export default function determinarParInpar(numero) {
    (numero % 2 === 0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} es impar`);
};
