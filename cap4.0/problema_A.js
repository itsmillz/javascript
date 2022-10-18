//Problema A
//Implementar nuevas funciones en la calculadora (potencias, raices cuadradas y cúbicas)
class Calculadora{

    constructor(){
    }

    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }

    potencia(num, exp){
        let numero = num;
        for(var i = 1 ; i < exp ; i++){
            // document.write(numero + " = " + num + " * " + numero + "<br>");
            numero = num * numero;
            // document.write("Aqui numero vale: " + numero + "<br>");
        }
        return numero;
    }

    raizCuadrada(num){
        return Math.sqrt(num);
    }
    
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación deseas realizar con la calculadora para cálculo III?");
let operacion = prompt("1: sumar, 2: restar, 3: división, 4: multiplicación, 5: potencias, 6: raíz cuadrada, 7: raíz cúbica");

if(operacion == 1){
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de sumar : " + numero1 + " + " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
}

else if(operacion == 2){
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1, numero2);
    if(resultado < 0){
        document.write("<p style='color:blue'>" + "El resultado de restar : " + numero1 + " - " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b><p style='color:red'>" + resultado + "</p></b>");
    }else{
        document.write("<p style='color:blue'>" + "El resultado de restar : " + numero1 + " - " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
    }
    
}

else if(operacion == 3){
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de dividir : " + numero1 + " / " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
}

else if(operacion == 4){
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de multiplicar : " + numero1 + " * " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " "+ "<b>" + resultado + "</b>");
}


else if(operacion == 5){
    let numero1 = prompt("Número base");
    let numero2 = prompt("Número Exponente");
    resultado = calculadora.potencia(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de elevar: " + numero1 + " a " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " "+ "<b>" + resultado + "</b>");
}


else if(operacion == 6){
    let numero1 = prompt("Número raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    document.write("<p style='color:blue'>" + "Raíz cuadrada de : " + numero1 + " es " + ":" + "</p>" + "======>" + " "+ "<b>" + resultado + "</b>");
}


else if(operacion == 7){
    let numero1 = prompt("Número raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    document.write("<p style='color:blue'>" + "Raíz cúbica de : " + numero1 + " es " + ":" + "</p>" + "======>" + " "+ "<b>" + resultado + "</b>");
}else{

    document.write("No se encuentra esta operación");

}











