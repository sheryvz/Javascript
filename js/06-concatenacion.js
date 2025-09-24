/* 

Concatenación de cadenas d etexto 

Es el proceso de univer dos o más cadenas de texto en una sola.
Esto se hace utilizando el operador + o las plantillas literales (template strings) se usan con backticks `` (acento invertido p comillas agudas)
(alt gr + })

*/


let miNombre = "Sherry";
let miApellido = "Vazquez"

// usando el operador +

let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

//usando plantillA literales 
let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${10+9} años`;

console.log(nombreNuevo);

/* 
Si se utiliza el operador + con valores númericos, se suman.Pero si se usan con cadenas de caracter se concatenan.
*/

let resultado = 5 + 10;

console.log(resultado); //15

let resultadoDos = "5" + 10;

console.log(resultadoDos); // 510

