let dineroCofla = prompt("Cuanto dinero tiene Cofla?");
let dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
let dineroPedro = prompt("Cuanto dinero tiene Pedro?");
dineroCofla = parseInt(dineroCofla); // "3" ---> 3

let agua = "$0.60";
let crema = "$1.00";
let heladix = "$1.60";
let heladovich = "$$1.70";
let helardo = "$1.80";
let potecitoConfite = "$2.90";
let poteUnCuarto = "$2.90";

let aguaDinero = 0.6;
let cremaDinero = 1.0;
let heladixDinero = 1.60;
let heladovichDinero = 1.70;
let helardoDinero = 1.80;
let potecitoDinero =2.90;
let poteDinero = 2.90;
/////COFLA

if(dineroCofla >= 0.6 && dineroCofla < 1){
    document.write("Cofla, puedes comprar el helado de AGUA y cuesta: " + agua);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - aguaDinero) + " dólares");
    }
    
}

else if(dineroCofla >= 1 && dineroCofla < 1.6){
    document.write("Cofla, puedes comprar el helado de CREMA y cuesta : " + crema);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - cremaDinero) + " dólares");
    }
}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    document.write("Cofla, puedes comprar el helado de HELADIX y cuesta : " + heladix);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - heladixDinero) + " dólares");
    }
}

else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    document.write("Cofla, puedes comprar el helado de HELADOVICH y cuesta : " + heladovich);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - heladovichDinero) + " dólares");
    }
}

else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    document.write("Cofla, puedes comprar el helado de HELARDO y cuesta : " + helardo);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - helardoDinero) + " dólares");
    }
}

else if(dineroCofla >= 2.9){
    document.write("Cofla, puedes comprar POTE CONFITES o POTE 1/4 KG y cuestan : " + poteUnCuarto);
    document.write("<br>");
    if(dineroCofla == 0){
        document.write("No te sobra nada de dinero");
    }
    else{
        document.write("Cofla, te sobran: " + (dineroCofla - potecitoDinero) + " dólares");
    }
}

else{
    document.write("Cofla, no tienes suficiente dinero");
}
document.write("<br>");
////////ROBERTO
console.log("\n");
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    document.write("Roberto, puedes comprar el helado de AGUA y cuesta: " + agua);
}

else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    document.write("Roberto, puedes comprar el helado de CREMA y cuesta : " + crema);
}

else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    document.write("Roberto, puedes comprar el helado de HELADIX y cuesta : " + heladix);
}

else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    document.write("Roberto, puedes comprar el helado de HELADOVICH y cuesta : " + heladovich);
}

else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    document.write("Roberto, puedes comprar el helado de HELARDO y cuesta : " + helardo);
}

else if(dineroRoberto >= 2.9){
    document.write("Roberto, puedes comprar POTE CONFITES o POTE 1/4 KG y cuestan : " + poteUnCuarto);
}

else{
    document.write("Roberto, no tienes suficiente dinero");
}
document.write("<br>");
////////PEDRO
console.log("\n");
if(dineroPedro >= 0.6 && dineroPedro < 1){
    document.write("Pedro, puedes comprar el helado de AGUA y cuesta: " + agua);
}

else if(dineroPedro >= 1 && dineroPedro < 1.6){
    document.write("Pedro, puedes comprar el helado de CREMA y cuesta : " + crema);
}

else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    document.write("Pedro, puedes comprar el helado de HELADIX y cuesta : " + heladix);
}

else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    document.write("Pedro, puedes comprar el helado de HELADOVICH y cuesta : " + heladovich);
}

else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    document.write("Pedro, puedes comprar el helado de HELARDO y cuesta : " + helardo);
}

else if(dineroPedro >= 2.9){
    document.write("Pedro, puedes comprar POTE CONFITES o POTE 1/4 KG y cuestan : " + poteUnCuarto);
}

else{
    document.write("Pedro, no tienes suficiente dinero");
}


// --------------------------------------------------------




