
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); //crea un elemento

// const textoDelItem = document.createTextNode("Este es un item de la lista");

// item.appendChild(textoDelItem);

for(let i = 0 ; i < 20 ; i++){
    const item = document.createElement("LI"); 
    item.innerHTML = "Este es un item de la lista";
    contenedor.appendChild(item);
}


console.log(item);
