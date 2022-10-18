class Animal{
    constructor(especie, edad, color, raza){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} y de raza ${this.raza}`
    }

    verInformacion(){
        document.write(this.info + "<br>");
    }

}

class Perro extends Animal { //heredar
    constructor(especie, edad, color, raza){
        super(especie, edad, color, raza);
        //this.raza = raza;
        this.raza = null;
    }
    //static 
    // ladrar(){
    //     document.write("Guau!");
    // }
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}
//las clases se definen con const
const perro = new Perro("perro", 25, "marrón", "Doberman"); //class Perro heredado de la clase animal.
const gato = new Animal("gato", 2, "amarillo");
const pajaro = new Animal ("pajaro", 2, "azul");


// perro.verInformacion();
perro.setRaza = "Jorge";
document.write(perro.getRaza);

// gato.verInformacion();
// pajaro.verInformacion();
// perro.ladrar();
//Métodos son acciones que podemos hacer, se crean dentro de la clase
//un método es una funcion, la creamos dentro de la clase, asi se llama método
//si la creo fuera de la clase es una función. Un método se refiere a un objeto.

