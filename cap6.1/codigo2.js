
const contenedor = document.querySelector(".contenedor");



const hijos = contenedor.children; //me devuelve todos los elementos hijos

for(let hijo of hijos){
    console.log(hijo);
}


//la coleccion HTML no se puede recorrer con un forEach, a pesar de q si se puede recorrer un
//un nodeList, un HTML Collection no se puede recorrer con un forEach