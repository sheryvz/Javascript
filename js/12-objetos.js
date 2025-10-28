alert("Enlazado")

/* 

Objetos 

Son colecciones de propiedades.Una propiedad es una asociación entre un nombre (clave o key) y un valor (value).

Los valores puede ser de distintos tipos de números, cadenas de texto, boleanos, arreglos, funciones...

Sintaxis: 

nombreObjeto {
  //Propiedades
  clave1: valor,
  clave2: valor,
  clave3: valor,

}

*/

const persona = {
  nombre: "Sherry",
  apellido: "Vazquez",
  edad: 19,
  esInvitado: true, //Boleano Verdadero
  monstruos: ["Pumking Head", "Vampiro", "Frankinstein"],

  saludar: function() {
    console.log( " Hola mi nombre es " + this.nombre + " y me gusta " + this.monstruos[0]);
  }
};


// Mostrando el objeto en la consola 

console.log(persona)

/* 

Para acceder a las propiedades de un objeto utilizamos la notación de punto o corchetes.

*/

console.log(persona.nombre);
console.log(persona["apellido"]);

//Concatenamos valores

console.log("Hola mi nombre es" + persona.nombre + " " + persona.apellido + " y tengo " + persona.edad + "años")

// Plantilas literales 

console.log("Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años😁");

//Accemos al booleano

console.log(persona.esInvitado);

if(persona.esInvitado == true) {
    console.log("Puede pasar y disfrutar del Hallowen de Enfoco");
} else {
    console.log("No puedes pasar, regresate a tu casita")
}

//Acceder al array 

console.log(persona.monstruos[1]);

// Reto 2: Mostrar por consola: Hola soy Sherry Vazquez tengo 19 años e ire al Hallowen disfrazado de Frankinstein


console.log("Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e ire al Hallowen disfrazado de ${persona.mosntruo[1]}");


/*  

Los m etodos son funciones que estan asociadas a un objeto. Se pueden llamar utilizando la notación de punto.

objeto.metodo()

*/

persona.saludar();