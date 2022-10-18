//minuto 02:20:00

let pc1 = {
    nombre: "ASUS Vivobook",
    procesador: "Intel Core I7",
    ram: "32GB",
    espacio: "1TB"
};
document.write(pc1["nombre"]);
document.write("<br>");


let pc2 = ["JorgePC", "Intel Core I5", "32GB"];
document.write(pc2[0]);
document.write("<br>");

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

document.write(pc1["espacio"]);
document.write("<br>");
document.write("<br>");



// codigo bacan
frase = `El nombre de mi PC es: <b>${nombre} </b> <br>
        El procesador de mi PC es: <b>${procesador}</b> <br>
        La RAM de mi PC es de : <b>${ram}</b> <br>
        El espacio de memoria de mi PC es de : <b>${espacio}</b>`;
        document.write(frase);  
