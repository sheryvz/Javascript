/* 

Operadores 

Son simbolos que inidicxan al interprete que debe realizarse unaopereación matemática, lógica o relacional y producir un resultado.

1. Operadores Aritmeticos

Se utilizan opreaaciones matemáticas basicas como la suma, la resta, división y muñtiplicación 


+ -> suma 
- -> resta
* -> multiplicar
/ -> dividir
% -> módulo (residuo de una división)
++ -> incremento (suma 1 al valor)
-- -> decremento (se resta 1 al valor)


2. Operaciónde asignación

Estos operadores se utilizan para asignar las variables. 

= ->asignación 
+= -> suma y asigna
-= -> resta y asigna
*= -> multiplica y asigna 
/= ->divide y asigna
%= -> módula y asigna


3.- Operadores de comparación

Estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true or false)
==   -> igualdad (comparar solo el valor)
===  -> igualdad esctricta  (comparael avlor y el tipo )
!=   -> desigualdad (compara solo el valor)
!==  -> Desigualdad estricta (compara el valor y el tipo)
>    -> mayor que 
<    -> menor que
>=   -> mayor o igual que
<=   -> menor o igual que

4.- operadores lógicos

se utilizan para combinar expresiones booleanas

&& AND (y) si ambos vaores son verdaderos, el resultado es verdadero. Si al menos un valor es falso, el resultado es falso
|| OR (o) si al menos un valor es verdadero, el resultado es verdadero. Solo si ambos valores son falsos, el resultado es falso
! NOT (no) niega el valor. El resultado es el valor contrario al que se esta negando
*/

let a = 10;
let b = 5;

a+b ; // Expresión

console.log(a + b)// 15
console.log(a - b) //5
console.log(a * b) //50
console.log(a / b)// 2
console.log(a % b) //0
a++;
console.log(a)//11
b--; //4
console.log(b);

let c=20
c+5; //25

c += 5;//25
c -= 10;//15
c *= 2;//30
c /= 3;//10
c %= 3; //1
console.log(c);

let d = 10; //number - número
let e = "10"; //string - cadena de caracteres 

console.log(d == e); //true
console.log(d===e);//false
console.log(d!=e);//false
console.log(d>5); //true
console.log(d<15); //true
console.log(d>=10); //true
console.log(d<=5); //false

let f = true;
let g = false;

console.log(f && g); //false
console.log(f || g); //true
console.log(!f); //false
console.log(!g); //true


