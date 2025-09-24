 /* 

 CONDICIONALES

 son estructuras de control que permitenb ejecutar diferentes bloques de código segun una condición (verdadera o falsa)

    if 

    evalua una condición y si es verdadera, ejecutan el bloque de código dentro de sus llaves.

    sintaxis:
    if (condicion) {
      //bloque o código que se ejecuta
      }
 
 */

      let edad = 18;
      
      if(edad>=18){
          alert("¡Si eres mayor de edad, date!")
      }

      /* 

       else

        Permite ejecutar un bloque de código si la condición es falsa.

      SINTAXIS

      if (condicion) {
      //codigo que se jecuta si la condicion es verdadaera
      }

     else {
        //código que se ejecuta si la condición es falsa
    }
      */

    let hora = 16;

    if (hora < 12) {
          console.log("Buenos días solecito")
    } else {
          console.log("Buenas tardes chufurimpulo")
    }

    /* 

    3.- else if 

    Nos va a permitir tener más de una condición a ser evaluada,
    esta evaluación es en secuencia, si una condición es verdadera se ejecuta
    su bloque de código.

    Sintaxis: 

    if (condicion1) {
      // código que se ejecuta si es verdadera la condición
    } else if (condicion2) {
       // Código que se ejecuta si la anterior es falsa y esta condición es verdadera.
       } else {
       // código que se ejecuta si ninguna de las anteriores es verdadera.
        }

       */

        let calificacion = 10;

        if (calificacion >= 9) {
            console.log("eres un excelente programador");
        } else if (calificacion >= 7) {
            console.log("ahí la llevas, ya casi te sale!");
        } else if (calificacion >= 5) {
            console.log("echale más ganitas o nos vemos en extra");
        } else {
            console.log("bienvenido al extra");
        }