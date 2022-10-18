//Cofla ya vió las 12 materias y se decidió en cual se va a inscribir asi que
//en tres dias lo hará, el problema es q se rompió el sistema de inscripciones
//CREAR SOLUCIÓN:
// Crear una función para preguntarle a cofla en que materia se quiere inscribir
//Si ya hay 20 personas en la materia negar inscripción
//Si hay menos, aceptarla y añadirla a la lista de personas inscritos


let materias = {

        fisica : ["Perez ", " pedro ", " pepito ", " cofla ", " maria "],  //el primer elemento con mayusculas son los profesores
        programacion : ["Dalto", "pedro", "juan", "pepito"],
        logica : ["Millar", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica : ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"]
    }

const inscribir = (alumno, materia)=>{
    let personas = materias[materia]; //cantidad de personas o personas que hay
    if(personas.length >= 21){
        document.write(`Lo siento <b> ${alumno} </b>, la asignatura <b> ${materia} </b> ya está llena</b> "<br>"`);
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica : personas,
                programacion : materias['programacion'],
                logica :    materias['logica'],
                quimica : materias['quimica']
            }
        }
        else if(materia == "programacion"){
            materias = {
                fisica : materias['fisica'],
                programacion : personas,
                logica :    materias['logica'],
                quimica : materias['quimica']
            }
        }
        else if(materia == "logica"){
            materias = {
                fisica : materias['fisica'],
                programacion : materias['programacion'],
                logica :    personas,
                quimica : materias['quimica']
            }
        }
        else if(materia == "quimica"){
            materias = {
                fisica : materias['fisica'],
                programacion : materias['programac<ion'],
                logica :    materias['logica'],
                quimica : personas
            }
        }
        document.write(`Felicidades ${alumno} has podido inscribir la asignatura ${materia} perfectamente "<br>"`);
    }
}

document.write(materias['fisica'] + "<br>");
inscribir(" Jorge ", "fisica");
inscribir(" Yaiza ", "fisica");
inscribir(" Cristina ", "fisica");

document.write("<br>" + materias['fisica'])