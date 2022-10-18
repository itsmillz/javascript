// let numero = 29;
//la varible let se puede modificar
// numero = 27;
// alert(numero);
// ---------------------------------------

// const se debe inicializar o sino dará un error
// const numero = 2;
// alert(numero);

// prompt("hola rancio");
// let nombre = prompt ("dime tu nombre");
//lo que escribo en prompt queda guardado en la variable nombre
// alert("hola " + nombre);   
// ---------------------------------------


//aritmetica

// let numero = 10;
// numero **= 2;
// document.write(numero);

// let numero1 = 10;
// let numero2 = 5;
// numero1--;
// resultado = numero1;
// alert(resultado); 
//----------------------------------------

//aritmetica potencia -> **

// let numero1 = 10;
// let numero2 = 2;

// resultado = numero1**numero2;
// alert(resultado);
//----------------------------------------

//aritmetica division (resto) -> &

// let numero1 = 10;
// let numero2 = 5;

// resultado = numero1&numero2;
// alert("El resto de " + numero1 + "/" + numero2 + " " + "es:" + " " + resultado); 

//---------------------------------------
// CONCATENACIÓN

//hora 01:04:00
// https://www.youtube.com/watch?v=z95mZVUcJ-E

// CONCATENACIÓN para concatenar debe ser string, por eso ponemos el
// numero entre comillas, de lo contrario, si ambos son numeros, no podrían concaternarse.

// let numero1 = "5";
// let numero2 = "38";
// frase = numero1.concat(numero2);
// document.write(frase);
// --------------------------------------

// CONCATENACI+ON CON LLAVES Y SIGNO DOLAR

let nombre = "jorge millar";
// let frase = "soy " + nombre + " y soy alto";
let frase = `soy ${nombre} y soy alto` 
// control alt y signo para cerrar llave --> ``
document.write(frase);

//minuto 1:15:53 
// https://www.youtube.com/watch?v=z95mZVUcJ-E