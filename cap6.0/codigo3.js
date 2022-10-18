

const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent; //muestra todo el contenido de texto que tiene

let resultado1 = titulo.textContent; //muestra el contenido de texto
alert(resultado1);

let resultado3 = titulo.innerHTML; //muestra todo el contenido HTML
alert(resultado3);

let resultado2 = titulo.outerHTML;//nos devuelve todo el contenido, hasta de las propias etiquetas
alert(resultado2);


// textContent: devuelve el texto de cualquier nodo.
// innerHTML: devuelve el contenido html de un elemento
// outerHTML: devuelve el codigo HTML completo del elemento