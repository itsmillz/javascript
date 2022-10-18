
const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo); //se pone primero el nuevo y despues el elemento antiguo (1 = el nuevo, 2 = el cual se desea reemplazar, el antiguo o el q pusiste x defecto)
contenedor.removeChild(h2_antiguo); //eliminamos un elemento

let respuesta = contenedor.hasChildNodes(); //en caso de que tenga hijos nos dirá que sí.

if(respuesta){
    document.write("El elemento SÍ tiene hijos");
}else{
    document.write("El elemento NO tiene hijos");
}

//9:18:38