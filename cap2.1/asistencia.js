
// crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase
// Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes)
// se puede tener un maximo de 10% de ausencias por SVGFEComponentTransferElement, si se tienen mas aclarar que esta reprobado


let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)), 0]; //iterando voy guardando el nombre y la asistencia (0).
}

const tomarAsistencia = (nombre, p)=>{ //p es la posicion en la lista
    let presencia = prompt(nombre);
    if ( presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
 
//en la funcion de arriba, tenemos un arreglo donde guardamos a todos los alumnos de una clase
//por ejemplo: si tenemos 2 alumnos: Jorge y Cristian. Estos dos pertenecen a un arreglo, serian dos elementos.
//Pero dentro de Jorge, hay otros dos subelementos: Jorge y P (asistencia) e igual para Cristian,
// [AlumnosTotales] ---> cantidad = 2 ---> [Jorge][Cristian] ---> por ejemplo si accedemos a Cristian --> [Cristian, Asistencia] 
//entonces voy jugando con esos dos subelementos que están dentro del arreglo general, Cristian posicion CERO y Asistencia posicion 1
//(AlumnosTotales[p][1] <==> AlumnosTotales[posicion][Asistencia])
//(AlumnosTotales[p][0] <==> AlumnosTotales[posicion][Nombre])
// 0 = NOMBRE y 1 = Asistencia
//[ |_| |_| |_| ] = [0][1][2] = i
//[N][A]----[N][A]----[N][A] = [i][1], [1] = ASISTENCIA
// [N][A]----[N][A]----[N][A] = [i][0], [0] = NOMBRE
// document.write("aqui"); 

for (i = 0; i < 30 ; i++){ //ejecutamos 30 veces el bucle (1 x cada dia)
    for(alumno in alumnosTotales){//for para recorrer la lista de alumnos de clase
        tomarAsistencia(alumnosTotales[alumno][0], alumno); //el segundo parametro es la posicion
    }
}

// for (i = 0; i < 30 ; i++){ //ejecutamos 30 veces el bucle (1 x cada dia)
//     for(i = 0 ; i < cantidad ; i++){//for para recorrer la lista de alumnos de clase
//         tomarAsistencia(alumnosTotales[i][0], i); //el segundo parametro es la posicion
//     }
// } NO FUNCIONA

//En el for de arriba, paso lista 30 veces (dias del mes), en el segundo for voy recorriendo la lista de alumnos y voy tomando la asistencia
//llamando a la funcion tomarAsistencia, dentro de esta funcion llamo a 2 parámetros (nombre y p), por lo tanto sería:
//tomarAsistencia(alumnosTotales[alumno "i"][0], alumno"i")
//alumno seria el nombre y el 0 seria la posicion 

for (alumno in alumnosTotales){
    //con esto obtengo el nombre
    let resultado = `${alumnosTotales[alumno][0]}:<br> 
    __________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    __________Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>`;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "<br><b style='color:red'>==>REPROBADO POR INASISTENCIAS</b><br><br>";
    }else{
        resultado += "<p style='color:green'>==>Asistencia superada</p>";
    }
    document.write(resultado);
}

//minuto 03:57:00