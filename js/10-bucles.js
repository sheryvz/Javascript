/* 

Bucles 

Son estructuras de conytol que permiten repetir un bloque de código varias veces, hasta que se cumpla una función especifica.

Los más comunes son en JS for, while y do ... while

1.- Bucle for 
  se utiliza vuando sabemos cuantas veces queremos repetir un bloque de código. La sintaxis es :

  for (inicialización; condición; incremento) {
     // código que se va a repetir su ejecución
     ...
  }


  inicialización -> variable con un valor inicial
  condición -> se evalua unaexpresión si es true se ejecuta en bucle 
  incremento -> aumenta el valor de la variable en cada iteracción 

*/

/*  
console.log("Hola mamá")
*/

for (let i = 0; i < 10; i++) {
    console.log( "Repetición" + i + ": mamá , papá se fue")
}


/* 

2. El bucle while se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de código, pero si queremos
que se repita mientras una condición es verdadera.Sintaxis:

while () {
  //código que se repite su ejecución incremento
}

*/


let j = 0; // inicialización

while (j < 5) {
    //código a ejecutar en bucle
    console.log("otro buclecito");
    j++; //incrementar
}


/* 

3. Bucle do...while

Este bucle es similar al bucle while, pero garantiza que el bloque de código 
se ejecute al menos una vez. Ya que la condiciión evalúa después de la ejecución. Sintaxis : 

do {
  //código qu ese ejecuta al menos una vez 
} while (condición); 
*/

let k = 5;

do {
    console.log("Twice tus patronas como dijo colette");
    k++;
} while (k < 5);