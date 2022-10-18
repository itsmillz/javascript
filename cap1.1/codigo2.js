// https://www.youtube.com/watch?v=z95mZVUcJ-E
// minuto 1:23:09
let numero1 = 23;
let numero2 = 0;
resultado = numero1 > numero2;
document.write(resultado);
let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor2;
let resultado3 = !valor;
document.write(resultado);
document.write("\n");
document.write(resultado2);
document.write("\n");
document.write(resultado3);
// ------------------------------------------------

let num1 = 12;
let num2 = 28;

let afirmacion1 = num1 < num2;
let afirmacion2 = num1 == num2;

document.write(!afirmacion1);

// ----------------------------------------------
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;
op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);
document.write(op);
// ----------------------------------------------

