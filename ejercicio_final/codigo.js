//Indicarle las 20 llaves posibles con sus 4 imagenes y cofla debe seleccionar cual llave usar
//Una vez seleccionada enviar los datos al servidor y que otro programador se encargue.

const contenedor = document.querySelector(".flex-container");
//primera forma
// document.querySelector(".send-button").value = "COMPRAR";
// segunda forma
// const boton = document.querySelector(".send-button");
// let valorAntiguo = boton.value;
// boton.value = valorAntiguo.toUpperCase();
//tercera forma
//cuarta forma y mejor, poner "COMPRAR" al value del  segundo input xd
const boton = document.querySelector(".send-button");
boton.value = boton.value.toUpperCase();
function crearLlave(nombre, modelo, precio){
    let img = "<img class='llave-img'src='llave.jpg'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p><b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment(); //aqui se crea para hacerlo en uso en la linea 26
for(let i = 1 ; i <= 20 ; i++){

    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave: ${i}`, `Modelo: ${modeloRandom}`, `Precio: ${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    // contenedor.innerHTML += div; //esto no sirve, ya que aqui solamente estamos trabajando con el DIV y necesitamos trabajarlo con el elemento.
    documentFragment.appendChild(div); //por eso lo q tenemos q hacer es contenedor.appendchild q nos inserta un nuevo nodo dentro del DOM de un documento
    //9
}

contenedor.appendChild(documentFragment);