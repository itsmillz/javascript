// let free = false;
// const validarCliente = (time)=>{
//     let edad = prompt("Cual es tu edad?");
//     if(edad >= 18){
//         if(time >= 2 && time < 7 && free == false){
//             alert("Puedes pasar gratis porque eres la primera persona que pasa despues de las 2 AM");
//             free = true;
//         }else{
//             alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
//         }
//     }else{
//         alert("Eres menor de edad y no puedes pasar a la fiesta pedazo de imbecil, mejor vete a dormir");
//     }
// }



// 13, 19, 12, 22
//minuto 03:42:53
let free = false;
const validarInvitado = (timezone)=>{
    let edad = prompt("Ingresa tu edad en el sistema para saber si puedes entrar o no a la fiesta");
    if(edad >= 18){
        if(timezone >= 2 && timezone < 7 && free == false){
            alert("Eres la primera persona que pasa despues de las 2 AM, por lo tanto puedes pasar gratis maquina");
            free = true;
        }else{
            alert("Puedes pasar, pero deberás pagar tu entrada");
        }
    }else{
        alert("No puedes pasar porque eres menor de edad pedazo de MAQUINOLA");
    }
}
validarInvitado(23);
validarInvitado(24);
validarInvitado(0.2);
validarInvitado(0.6);
validarInvitado(1);
validarInvitado(2);
validarInvitado(2.4);
validarInvitado(3);