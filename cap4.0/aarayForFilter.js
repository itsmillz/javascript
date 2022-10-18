
let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

resultado = numeros.filter(numero => numero.length > 4);

document.write(resultado);

//El forEach hace lo mismo que el Filter, es una manera de
//recorrer un array, pero filter puede hacer literalmente un filtro
//como podemos ver, podemos decir que solo nos muestre las palabras cuyo largo
//sea mayor que una cantidad X de caracteres, con length
//length nos sirve para determinar en los arrays cuantos elementos tiene y en los string cuantos caracteres tiene.

//06:22:08