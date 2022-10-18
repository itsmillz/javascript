//metodos de arrays
//empece a estudiar a las 1.40 de la madrugada mientras viajo en eme bus 
//premer metodo de array, pop elimina el ultimo elemento

let nombres = ["pedro" , "maria" , "jorge " ];
document.write("Array original:_______<b>" +  nombres + "</b>");
document.write("<br>");
// let resultado = nombres.pop(); //como vemos aqui solo muestra los 2 primeros
// let resultado = nombres.shift(); //eliminamos el primero y lo mostramos


let resultado = nombres.push("Sasha Grey"); //con push agregamos un elemento mas y podemos verlo como la cantidad de elementos, o como la posicion del nuevo elemento que agregamos, ambas con válifas.
document.write("Elemento removido:____<b style= 'color:red'>" + resultado + "</b>" +"<br>");
document.write("Array actualizado : <b>"  + nombres + "</b>");