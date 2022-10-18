//declaramos
//iniciamos
//iteramos
//el IN nos devuelve la posicion en cada iteracion
let animales = ["gato", "perro", "ardi"];

for (animal in animales){
    document.write(animal + "<br>"); 
}
document.write("<br>");


//despues podemos mostrar los elementos:
//lo  q ocurre aqui es que animales contiene dentro a gato, etc, entonces "animal" tiene el indice, por lo tanto
//animales[indice] = 0 -> gato, 1 -> perro, etc.
for (animal in animales){
    document.write(animales[animal] + "<br>"); 
}
document.write("<br>");


//el OF nos muestra directamente el valor que tienen los elementos
for (animal of animales){
    document.write(animal + "<br>");   
}


