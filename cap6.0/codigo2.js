

const titulo = document.querySelector(".titulo");
titulo.style.backgroundColor = "#945";
titulo.style.padding = "30px";
titulo.classList.add("grande"); //aqui podemos añadir otra clase y darle estilos unicos con CSS como podemos ver ne la pestaña de style.css
titulo.classList.remove("grande"); //aqui podemos eliminar dicha clase

let valor = titulo.classList.item(1); //nos devuelve el valor de la clase que ocupa esa posicion en la clase "class"
document.write(valor);
document.write("<br>")
let valor2 = titulo.classList.contains("pajas"); //preguntamos si contiene un valor de la clase por ejemplo preguntamos si existe la clase pajas evidentement no existe por lo tanto mostramos por consola que es un valor false ya que no existe.

document.write(valor2);

titulo.classList.toggle("Millar"); //toggle lo que hace es preguntar si existe una clase, si no existe la pone y si existe la quita y viceversa.

let prueba = titulo.classList.replace("grande", "enorme"); //reemplaza una clase por la siguiente, solamente si existe, en caso contrario arroja falso
document.write("<br>" + prueba);
//08:44:12