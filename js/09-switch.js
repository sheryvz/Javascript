/* 
switch (variable) {
    // casos segun se comparen

case valor1:
    // el código a ejecutar break;

case valor2:
    // el código a ejecutar break;
case valor3:
    // el código a ejecutar break;
default:
    // Este es el codigo que se ejecuta si la expresión no coincide con ningun caso.
    break; // Esto es opcional
}

*/

// Variable a evaluar
let licenciatura = prompt("Escribe la licenciatura que te interesa: televisión, diseño o consultoría"); // televisión, diseño, colsultoría // television, diseño, consultoria.

switch (licenciatura) {

    case "televisión": 
    console.log("Haz elegido la licenciatura de televisión, que mal por ti");
    break;

 case "diseño": 
    console.log("Haz elegido la licenciatura de diseño, seras muy fregón");
    break;

 case "consultoria": 
    console.log("Haz elegido la licenciatura de consultoria, suerte con eso");
    break;
default:
    console.log("estas loquitx")
}

