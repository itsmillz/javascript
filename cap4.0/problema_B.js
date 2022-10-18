//Problema B
//Que la funcion nos devuelva:
// 1- Profesor asignado / 2- Nombre de los alumnos
//3- Funcion q nos indique en cuantas clases está Cofla
// 4- Nombre de esas clases y sus profesores.

const obtenerInformacion = (materia)=>{
    let materias = {
        fisica : ["Perez", "pedro", "pepito", "cofla", "maria"],  //el primer elemento con mayusculas son los profesores
        programacion : ["Dalto", "pedro", "juan", "pepito"],
        logica : ["Millar", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica : ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias]; //nos devuelve la asignatura y el valor de esta, por ej: fisica
    }else{

        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = obtenerInformacion(materia)[0][0]; // con el primer 0 selecciono [materias[materia] y con el otro 0 selecciono el primer elemento de cada array
        let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift(); //para eliminar el primer elemento, en este caso eliminamos al profesor, ya que queremos mostrar solamente los alumnos.
        document.write(`El profesor de la materia de <b>${informacion[1]}</b>  es: <b style="color:red"> ${profesor} </b><br>
        Los alumnos son : <b style="color:blue">${alumnos}</b> <br><br>`);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let info;
    let clasesPresentes = [];
        for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info); //push agrega un elemento al final del array
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases </b><br>
            <b style='color:green'>Está cursando las clases : ${clasesPresentes} </b> <br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));