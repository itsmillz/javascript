let array1 = ["cristina", "yaiza", "sabrina", "micaela"];
let array2 = ["annika","daniela",  array1, "nicole"];

//el forRancio y el break forRancio es una forma de terminar con el for general
//si solamente pongo break; solo terminaria el segundo ciclo for
// forRancio:
// for(let array in array2){
//     if(array == 2){
//         for(let array of array1){
//             continue;
//             document.write(array + "<br>"); 
//             // break forRancio;
//         }
//     }else{
//         document.write(array2[array] + "<br>");
//     }
// }

// forRancio:
// for(let array in array2){
//     if(array == 2){
//         for(let array of array1){

//             if(array == "yaiza"){
//                 break forRancio;
//             }
//             document.write(array + "<br>"); 
//         }
//     }else{
//         document.write(array2[array] + "<br>");
//     }
// }
//minuto 3:02:15
forRancio:
for(let array in array2){
    if(array == 2){
        for(let array of array1){

            if(array == "micaela"){
                continue forRancio;
            }
            document.write(array + "<br>"); 
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}

// minuto 03:07:00