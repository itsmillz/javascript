const sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) =>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Qué operación deseas realizar con la calculadora para cálculo III?");
let operacion = prompt("1: sumar, 2: restar, 3: división, 4: multiplicación");

if(operacion == 1){
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de sumar : " + numero1 + " + " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
}

else if(operacion == 2){
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1, numero2);
    if(resultado < 0){
        document.write("<p style='color:blue'>" + "El resultado de restar : " + numero1 + " - " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b><p style='color:red'>" + resultado + "</p></b>");
    }else{
        document.write("<p style='color:blue'>" + "El resultado de restar : " + numero1 + " - " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
    }
    
}

else if(operacion == 3){
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de dividir : " + numero1 + " / " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " " + "<b>" + resultado + "</b>");
}

else if(operacion == 4){
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2);
    document.write("<p style='color:blue'>" + "El resultado de multiplicar : " + numero1 + " * " + numero2 + " " + "es" + ":" + "</p>" + "======>" + " "+ "<b>" + resultado + "</b>");
}
else{
    alert("No se ha encontrado esta operación, intentálo de nuevo");
}


