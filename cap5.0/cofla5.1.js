// Cofla esta sufriendo un poco, ya que a pesar de que cree contar con el 90% de asistencias
// y tener un promedio mayor 7/10, no cree entregar el 75% de trabajos practicos entregados
// ya que necesita dividir las tareas que hará semanalmente
// Cofla debe trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que:
// 24 horas estudiar, 24 horas hacer trabajos practicos
// 56 horas de trabajar y 8 horas de hacer las cosas de la casa


// Organizar las actividades diariamente
// utilizar la consola para organizar todo
// El tiempo por tarea no debe superar las 4 horas.

// 30 min por dia para las cosas de la casa
// 100 min trabajos
// 10 min de descanso
// 100 min estudiar
// 240 min de trabajo

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos prácticos";
let homework = "30 minutos hacer cosas de la casa";
let descanso = "10 minutos de descanso";


console.log("TAREAS");


for(var i = 0 ; i < 14 ; i++){
        if(i == 0){
            console.group("SEMANA 1");
        }
    console.groupCollapsed("DÍA " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
        if(i == 7-1){
            console.groupEnd();
            console.groupCollapsed("SEMANA 2");
        }
}

console.groupEnd();
console.groupEnd();



