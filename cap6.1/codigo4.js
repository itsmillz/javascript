
const contenedor = document.querySelector(".contenedor");
const parrafo = document.createElement("P").innerHTML = "Parrafo"; //crea un nuevo elemento parrafo
const h2_nuevo = document.createElement("H2"); //crea un nuevo elemento H2, siempre q se crea, como en el caso anterior, deben ir con MAYUSCULAS!
const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.parentElement);
console.log(contenedor.parentElement);
console.log(h2_antiguo.nextSibling); //aqui tiene en cuenta el texto, no es tan directo
console.log(h2_antiguo.nextElementSibling); //aqui es directo y literalmente me muestra el hermano siguiente del elemento solicitado, en este caso mostraria el elemento hermano del h2_antiguoS





