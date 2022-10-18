// Crear sistema para mostrarle a Cofla las particularidades de los 3 celulares
// -Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria RAM 
// -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar
//_----------_-__----___------------------
//Alta gama: pueden hacer todo lo anterior, pero pueden también
//grabar en cámara lenta, reconocimiento facial y una cámara extra.
//Implementar todas estas cualidades en los celulares de alta gama.
class Celular{
    constructor(color, peso, respantalla, rescamara, memoria){
        this.color = color;
        this.peso = peso;
        this.respantalla = respantalla;
        this.rescamara = rescamara;
        this.memoria = memoria;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.rescamara}`);
    }

    grabarVideo(){
        alert(`Video grabado con una resolución en ${this.rescamara}`);
    }

    mostrarInfo(){
        return `
        Color : <b>${this.color}</b><br>
        Peso : <b>${this.peso}</b><br>
        Tamaño Pantalla : <b>${this.respantalla}</b><br>
        Resolución de cámara :<b>${this.rescamara}</b><br>
        Memoria RAM : <b>${this.memoria}</b><br>    
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, respantalla, rescamara, memoria, extracam){
        super(color, peso, respantalla, rescamara, memoria)
        this.extracam = extracam;
    }
    grabarVideoLento(){
        alert("Estás grabando en cámara lenta");
    }

    reconocimientoFacial(){
        alert("Tiene reconocimiento facial");
    }
    camaraExtra(){
        alert("Tiene una cámara extra");
    }
    InfoAltaGama(){
        return this.mostrarInfo() + `Resolucion de Camara extra: ${this.extracam} <br>`
    }
}

// celular1 = new Celular("rojo", "150 gramos", "5.5", "Full HD", "18gb");
// celular2 = new Celular("negro", "155 gramos", "5.1", "Full HD", "64gb");
// celular3 = new Celular("plateado", "156 gramos", "5.6", "Full HD", "128gb");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar(); 
// celular1.presionarBotonEncendido();
celular1 = new CelularAltaGama("rojo", "120 gramos", "5.5", "4K", "64gb","Full HD");
celular2 = new CelularAltaGama("negro", "140 gramos", "5.5", "4K", "128gb","Full HD");
document.write(`
${celular1.InfoAltaGama()} <br>
${celular2.InfoAltaGama()} <br>
`); 