/* 
Tipos de datos

Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de progrmación.

en JS, existen varios tipos que se pueden agrupar en dos categorias principales: primitivos y complejos y objetos.

Cada tipo de dato tiene sus propias características y usos especificos en la programación. 

1. Primitivos 

Datos básicos que no se consideran "objetos" y no tienen "metodos". 

Numer o número 
Representan valores númericos ya sea ebteros o decimales (punto flotante)

Strings o Cadena de caracteres
Representan texto. El Texto se coloca entre comillas dobles o simples: texto texto . Se valen las dos pero hay que ser consistentes 

Underfined o indefinido 
Es el valor que se asigna a un avariable que ha sidp declarada pero no inicializada 

Null o nulo 
Reperesenta la ausencia intencional de cualquier valor u objeto. Es un tipo de dato que indica que na variable no tiene ningun valor asignado.

*/

/* NUMBERS */

let miNumero = 5; //enteros
let miNumeroDecimal = 8.8; //decimales

console.log(miNumero);
console.log(miNumeroDecimal);


/* Strings */

let miNombre = "Sherry";
let miApellido = "Vazquez"

console.log(miNombre)
console.log(miApellido)


/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);


/* Undefined */

let aprobareDesarrolloApps;  //inicializar una variable
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);



/* 

2. Complejos o de objetos 

->A rray o Arreglo

Es un conjunto de datos que se almacenan en n alista ordenada de elementos. Los datos dentro de los arrglos se escriben entre corchetes [] y separados por comas

-> bject u Objeto 

Es un conjunto de múltiples datos en pares "clave" -"valor"

Se escriben entre llaves {} y separados por comas 


-> Fuctions o Funciones

Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "function" y el código que se ejecuta va entre {"codigo"}

*/

/* Array */

let misSeries = ["The office","Breaking Bad", "The Boys"];
let misNumeros = [26, 12, 9, 5, 48];
let tutifruti = ["puchunguitos", 182, true];


console.log( misSeries[2]);
console.log( misNumeros[4]);
console.log( tutifruti[1]);

/* object */

let perro = {
    nombre: "Firulais",
    edad: 5,
    color: "negro",
    ladra: true,
    muerde: false,
}