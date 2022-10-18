// Termino el primer semestre y Cofla no sabe si aprobara las materias
// para lograrlo necesitará:
// -Contar con al menos el 90% de asistencia
// -El promedio por materia debe ser de al menos 7/10
// - Debe tener al menos del 75% de los trabajos practicos entregados

// 1) Solicitar los datos y decirle si aprueba o no
// 2) Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
// 3) Todo esto estructurado como tabla

const materias = {
    fisica: [90, 6, 3, "fisica"],
    matematica: [84, 8, 2, "matematica"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 6, 3, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]
}

const aprobo = ()=>{
    for (let materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        if(asistencias >= 90){
            console.log(materias[materia][3]);
            console.log("%c   Asistencia en orden", "color:green");
        }else{
            console.log(materias[materia][3]);
            console.log("%c   Falta de Asistencias", "color:red");
        }
        if(promedio >= 7){
            console.log("%c   Promedio en orden", "color:green");
        }else{
            console.log("%c   Promedio desaprobado", "color:red");
        }
        if(trabajos >= 3){
            console.log("%c   Trabajos en orden", "color:green");
        }else{
            console.log("%c   Trabajos desaprobados", "color:red");
        }
    }
}

aprobo();

//07:28:00