/*  
Las clases JS son una fomra de definir objetos, sus propiedades y métodos, creando un prototipo del cual se generaran varios objetos.
Heredando su comportamiento.

Los nombres de las variables van en mayúscula

Sintaxis

class nombreObjeto {

  //Utilizamos el método constructor especial para inicializar objetos.

  constructor(prop1, prop2) {
    this.key = prop1;
    this.key = prop2;
  }
}

*/

class Persona {

//Método constructor
constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

//otros metodos
saludar() {
    alert(`Hola soy ${this.nombre} y tengo ${this.edad} años.`)
}

}

/* 

 crear instancias de la clase

 vamos a utilizar una constante y a crear una nueva instancia con la siguiente sintaxis:

  const nombreConstante = new NombreClase(prop1, prop2)

*/



const persona1 = new Persona("Juanito", 24);
const persona2 = new Persona("María", 22);
const persona3 = new Persona("Pablo", 26);

//mostramos objetos por consola

console.log(persona1);
console.log(persona2);
console.log(persona3);


//Accedemos a los datos 

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}.`);
console.log(`Ella es ${persona2.nombre} y tiene ${persona2.edad}.`);
console.log(`El es ${persona3.nombre} y tiene ${persona3.edad}.`);

// Llamamos el metodo saludar de cada objeto }

persona1.saludar();
persona2.saludar();
persona3.saludar();






