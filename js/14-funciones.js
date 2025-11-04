 alert("funciona las funciones");

 /* 
 
 Funciones 

 Las funciones son bloques de código reutilizables que realizan 
 una tarea especifica. 

 1. Función declarada

 Es la forma más común de definir funciones.
 Se puede llamara la función antes de su definición debido al hoisting, es 
 decir que se "elevan" en el contexto de ejecución.

 Sintaxis: 

 function nombreFunction(){
 //cuerpo de la función
 ...
 }
 
 llamada:

 nombreFunction()
 
 */

 function saludar() {
    console.log("Hola nariz de bola");
 }

 saludar();

 /* 
 
 2. Funcion expresada (Anónimas)

 Este tipo de funciones se asignan a una variable. 
 No puede ser llamada antes de su definición.

 SINTAXIS: 

 const nombreConstante = function() {
  // Cuerpo de la función
  ...
  }

 Llamada: 

 nombreConstante();

 */

 const despedir = function() {
    console.log("adiós chavito, te ira mejor en extra")
 }

 despedir();

 /* 
 
  3. Funciones FLecha ( Arrow Function)

  Tienen una sintaxis mucho más consisa. son +utiles para ejecuciones cortas.
  Generalmente se asignan a una variable.

  Sintaxis: 

  const nombreConstante = () => {
    // cuerpo de la función
    ...
    }

    llamada: 

    combreConstante();

 */


    const mensaje = () => {
        console.log("SOS, ya muero de hambre")
    }

    mensaje();
  
    /* 
    
    Par+ametros y argumentos 

    Las funciones pueden aceptar parámetros para recibir datos cuando son llamadas. 

    Sintaxis: 

    function nombreFunction(parametro1 , parametro2) {
    // cuerpo de la función
    ...
    }
    
    */

    function sumar(num1, num2) {
        console.log( `el resultado de la suma es: ${num1 + num2} `)
    }
 
    sumar (2,3);
    sumar (145, 267);
    sumar (.56,.52);
    sumar (5731832983143, 128478120401);

/* hacer una funcion que muestre un mensaje de un saludo  */

function saludito(nombre) {
    console.log( `hola amige ${nombre} `)
}

saludito( `Corepa`); 
saludito( `Chochua`);
saludito( `Arilongas`);

/*  parametros por defecto 

em las funciones podemos tener valores por defecto si no se proporcionan argumentos al llegar a la función.

sintaxis : 
 
nombreFuncion(); // usa los valores por defecto 
nombreFuncion(argumento); // usa el valor del argumento 

*/

const multiplicar = function(num1, num2 = 2) {
    console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`)
}

multiplicar(2.8);
multiplicar(8,6);
multiplicar(10,74);
multiplicar(24, 363);

 /* 
 Crear una función que de la bienvenida a un usuario personalizando su nombre y que muestre un mensaje de 
 invitado, si no se tiene el nombre de usuario
 */

 const bienvenida = (usuario = `invitado`) => {
    if(usuario == `invitado`) {
        console.log(`Registrate como invitado`)
    } else {
        console.log(`Bienvenido ${usuario}`)
    }
 }

 bienvenida();
 bienvenida("Julio");
 bienvenida ("Sherry");
 bienvenida ("Josh");


/*
valor de retorno
las funciones pueden devolver un valor utilizando la palabra "return"
sintaxis:
function nombreFuncion() {
//Cuerpo de la funcion
...
return valor;

}
Llamada:

const nombreConstante = nombreFuncion();
 */

function despedida(nombre = `Sherry`) {
    return `Adiós ${nombre}`
}

const resultado = despedida(`Sherry`);

console.log(resultado);

 /* 
 
 Return Implicito 

 Las funciones flecha no necesita la plabra return  en su estructura más simple 
 (una sola línea)

 sintaxis:
 const nombreConstante = () => valor;
 
 */

 const restar = (num1, num2) => num1 - num2;

 const resultadoResta = restar(10,5);
 
 console.log(resultadoResta);

