/* Variables

Las variables son contenedores que almacenan datos. En JS se pueden declarar variables utilizando las palabras clave "var" "let" o "cons"

1. Declaración de variables 

-> var : Es la forma más antogua de declarar variables . Tiene u alcance global o de función y puede ser declarada o actualizada

-> let : Introducida en ES6, tiene un alcance de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance.

-> const : También introducida en ES6, tiene un alcance de blooque y no puede ser ni redeclarada ni actualizada. Se utiliza para valores que no deben cambiar. 

*/

/* declaracion coon var */

var nombre = "Sherry";
console.log(nombre) // Sherry

nombre = "Puchunguito";
/* Declaración con let */

let edad = 19;
console.log(edad)

edad = 21; //Actualización
console.log(edad);

/* declaración de const */

const PI = 3.1416;
console.log(PI)

PI = 4.6401; //ERROR DE TIPO. No se pude actualizar una constante
