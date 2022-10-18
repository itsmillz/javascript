class Descargas{

    constructor(cantidad, puntuacion, peso){
        this.cantidad = cantidad;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false; 
    }

    instalar(){
        if(this.instalada == false){           
            this.instalada = true;
            alert("Aplicación instalada exitosamente");
        }    
    }
    desinstalar(){
        if(this.instalada == true){    
            this.instalada = false;       
            alert("Aplicación desinstalada exitosamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){            
            this.iniciada = true;
            alert("La aplicación está iniciada");
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){            
            this.iniciada = false;
            alert("La aplicación está cerrada");
        }
    }

        appInfo(){
        return `
        Cantidad de descargas : <b>${this.cantidad}</b><br>
        Puntuación : <b>${this.puntuacion}</b><br>
        Peso : <b>${this.peso}</b><br>
        `
    }
}

app = new Descargas("20.331", "5 estrellas", "1500 Kb");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();



document.write(`
    ${app.appInfo()} <br>

    `);


