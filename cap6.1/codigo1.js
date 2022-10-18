

const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstChild; //busca el primer nodo que tambien puede ser un texto o un espacio en blanco que tambien es considerado como texto
const primerHijo = contenedor.firstElementChild; // aqui en cambio literalmente si busca el primer elemento hijo que en este caso seria el h2 que esta en el index.html
//con LastElementChild es lo mismo pero el ultimo xd

// console.log(primerHijo);

// const ultimoHijo = contenedor.lastElementChild;
// console.log(ultimoHijo);

const hijos = contenedor.childNodes; //me devuelve todos los hijos
console.log(hijos);

hijos.forEach(hijo => console.log(hijo)); //recorrer el objeto con un for para mostrar los elementos que lo componen