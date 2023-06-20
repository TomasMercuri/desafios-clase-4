// desafioNumeroUno();
// desafioNumeroDos();
// desafioNumeroTres();
// desafioNumeroCuatro();
// desafioNumeroCinco();
// desafioNumeroSeis();
// desafioNumeroSiete();
// desafioNumeroOcho();
// desafioNumeroNueve();
// desafioNumeroDiez();
// desafioNumeroOnce();
// desafioNumeroDoce();
// desafioNumeroTrece();
// desafioNumeroCatorce();
// desafioNumeroQuince();
// desafioNumeroDieciseis();
// desafioNumeroDiecisiete();
// desafioNumeroDieciocho();
// desafioNumeroDiecinueve();
// desafioNumeroVeinte();
// desafioNumeroVeintiuno();
// desafioNumeroVeintidos();
// desafioNumeroVeintitres();
// desafioNumeroVeinticuatro();
// desafioNumeroVeinticinco();
// desafioNumeroVeintiseis();
// desafioNumeroVeintisiete();
// desafioNumeroVeintiocho();



// Desafio 1

function desafioNumeroUno () {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Desafio 2

function desafioNumeroDos () {
    for(let i = 1; i <= 100; i+=2){
        console.log(i);
    }
}

// Desafio 3

function desafioNumeroTres () {
    const NUMERO_SIETE = 7;
    let tablaDelSiete;
    for (let i = 0; i <= 10; i++) {
        tablaDelSiete = 0;
        tablaDelSiete = NUMERO_SIETE * i;
        console.log(`${NUMERO_SIETE}x${i} = ${tablaDelSiete}`);
    }
}

// Desafio 4

function desafioNumeroCuatro () {
    for(let i = 1; i <= 10; i++) {
        for (let f = 0; f <= 10; f++) {
            let resultado;
            resultado = i * f;
            console.log(`${i}x${f} = ${resultado}`);
        }
        console.log(`---------------------`); 
    }
}

// Desafio 5

function desafioNumeroCinco () {
    let numerosDelUnoAlDiez = [];
    let sumaTotal = 0;
    for (let i = 0; i < 10; i++) {
        numerosDelUnoAlDiez[i] = i + 1;
        sumaTotal = sumaTotal + numerosDelUnoAlDiez[i];
        console.log(sumaTotal);
    }
}

// Desafio 6

function desafioNumeroSeis () {
    let resultado = 1;

    for (let i = 10; i > 0; i--) {
        resultado *= i;
    }
    console.log(resultado);
}

// Desafio 7

function desafioNumeroSiete () {
    let sumaNumerosImpares = 0;

    for (let i = 10; i <= 30; i++) {
        if (i % 2 > 0) {
            sumaNumerosImpares += i;
        }
    }
    console.log(`La suma de los numeros impares del 10 al 30 es: ` + sumaNumerosImpares);
}

// Desafio 8

function desafioNumeroOcho () {
    function calcularGradosFahrenheit(gradosCelcius) {
        return (gradosCelcius * 9/5) + 32;
    }

    const gradosCelcius = Number(prompt(`Ingrese los grados celcius para convertirlos a fahrenheit`));
    console.log(`${gradosCelcius} grados Celcius, son ${calcularGradosFahrenheit(gradosCelcius)} grados Fahrenheit`);
}

// Desafio 9

function desafioNumeroNueve () {
    function calcularGradosCelcius(gradosFahrenheit) {
        return (gradosFahrenheit - 32) * 5/9;
    }

    const gradosFahrenheit = Number(prompt(`Ingrese los grados Fahrenheit para convertirlos a grados Celcius`));
    console.log(`${gradosFahrenheit} grados Fahrenheit, son ${calcularGradosCelcius(gradosFahrenheit)} grados Celcius`);
}

// Desafio 10

function desafioNumeroDiez () {
    let arrayNumeros = [];
    let sumaTotalDelArray = 0;
    const cantidadNumerosAIngresar = Number(prompt(`Cuantos numeros va a ingresar?`));

    for (let i = 0; i < cantidadNumerosAIngresar; i++) {
        arrayNumeros[i] = Number(prompt(`Ingrese el ${i + 1} numero`));
        console.log(arrayNumeros[i]);
        sumaTotalDelArray += arrayNumeros[i];
    }
    console.log(`----\n` + sumaTotalDelArray);
}

// Desafio 11

function desafioNumeroOnce () {
    function calcularPromedioDeNumeros(arrayNumeros) {
        let sumarNumerosDelArray = 0;
        for (let i = 0; i < arrayNumeros.length; i++) {
            sumarNumerosDelArray += arrayNumeros[i];
        }
        return sumarNumerosDelArray / arrayNumeros.length;
    }

    let arrayNumeros = [];
    const cantidadDeNumerosDentroArray = Number(prompt(`Cuantos numeros va a ingresar?`));

    for(let i = 0; i < cantidadDeNumerosDentroArray; i++) {
        arrayNumeros[i] = Number(prompt(`Ingrese el ${i + 1} numero`));
    }
    console.log(`El promedio de los numeros ingresados es ${calcularPromedioDeNumeros(arrayNumeros)}`);
}

// Desafio 12

function desafioNumeroDoce() {
    function devolverSoloNumerosPositivos(arrayNumeros) {
        let arrayNumerosPositivos = [];
        let f = 0;
            for(let i = 0; i < arrayNumeros.length; i++) {
                if(arrayNumeros[i] >= 0) {
                    arrayNumerosPositivos[f] = arrayNumeros[i];
                    f++; // hacer con array.push();
                }
            }
        
        return arrayNumerosPositivos;
    }

    const cantidadDeNumerosDentroArray = Number(prompt(`Cuantos numeros va a ingresar?`));
    let arrayNumeros = [];

    for(let i = 0; i < cantidadDeNumerosDentroArray; i++) {
        arrayNumeros[i] = Number(prompt(`Ingrese el ${i + 1} numero`));
        console.log(arrayNumeros[i]);
    }

    console.log(`Los numeros positivos del array son: ` + devolverSoloNumerosPositivos(arrayNumeros));
}

// Desafio 13

function desafioNumeroTrece () {
    let cantidadDeNumerosDentroArray = Number(prompt(`Cuantos numeros vas a ingresar?`));
    let arrayNumeros = [];
    let numeroMayor = 0;

    for(let i = 0; i < cantidadDeNumerosDentroArray; i++) {
        arrayNumeros[i] = Number(prompt(`Ingrese el ${i + 1} numero`));
        console.log(arrayNumeros[i]);
        if (arrayNumeros[i] > numeroMayor){
            numeroMayor = arrayNumeros[i];
        }
    }
    console.log(`El numero mayor es ${numeroMayor}`);
}

// Desafio 14

function desafioNumeroCatorce() {
    let fibonacci = 0;
    let fibonacci1 = 0;
    let fibonacci2 = 1;
    cantidadDeFibonacci = 10;

    console.log(fibonacci1);
    console.log(fibonacci2);
    for (let i = 2; i < cantidadDeFibonacci; i++) {
        fibonacci = fibonacci1 + fibonacci2;
        fibonacci1 = fibonacci2;
        fibonacci2 = fibonacci;
        console.log(fibonacci);
    }
}

// Desafio 15

function desafioNumeroQuince () {
    // Funcion recursiva
}

// Desafio 16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function desafioNumeroDieciseis () {
    const numeroParaComprobar = Number(prompt(`Ingrese un numero`));
    console.log(`${numeroParaComprobar}: ${comprobarNumeroPrimo(numeroParaComprobar)}`);

    function comprobarNumeroPrimo (numeroParaComprobar) {
        let cont = 0;
        let respuesta;
        for(let i = 2; i < numeroParaComprobar; i++) {
            if(numeroParaComprobar % i == 0) {
                cont += 1;
            }
        }
        if (cont >= 1) {
            respuesta = false;
        }
        else {
            respuesta = true;
        }
        return respuesta;
    }
}

// Desafio 17: Calcular la suma de los dígitos positivos de un número entero positivo

function desafioNumeroDiecisiete () {

    function sumarNumeros(numeroPositivo) {
        let cantidadDeCaracteres = numeroPositivo.length;
        let sumaTotal = 0;
        for(let i = 0; i < cantidadDeCaracteres; i++) {
            sumaTotal = sumaTotal + Number(numeroPositivo[i]);
        }
        return sumaTotal;
    }

    const numeroPositivo = prompt(`Ingrese un numero positivo`);
    if (numeroPositivo > 0) {
        console.log(`La suma total es ${sumarNumeros(numeroPositivo)}`);
    }
    else {
        alert(`El numero ingresado tiene que ser positivo`);
        desafioNumeroDiecisiete();
    }
}

// Desafio 18: Imprimir los primeros 100 números primos

function desafioNumeroDieciocho () {
    let numeroPrimoCien = 0;
    let f = 2;

    while(numeroPrimoCien != 100){
        comprobarNumeroPrimo(f);
        f++;
    }

    function comprobarNumeroPrimo (numeroParaComprobar) {
        let cont = 0;
        for(let i = 2; i < numeroParaComprobar; i++) {
            if(numeroParaComprobar % i == 0) {
                cont += 1;
            }
        }

        if(cont == 0) {
            console.log(`${numeroPrimoCien + 1}. El numero ${numeroParaComprobar} es un numero primo`);
            numeroPrimoCien += 1;
        }
    }
}

// Desafio 19:Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
// Ejemplo:
// Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

function desafioNumeroDiecinueve () {
    let numeroPrimo = 0;
    const cantidadNumerosPrimos = Number(prompt(`Ingrese la cantidad de numeros primos que desee obtener`));
    const mayorQue = Number(prompt(`${cantidadNumerosPrimos} numeros primos mayores a: `));
    let f = mayorQue + 1;

    while(numeroPrimo < cantidadNumerosPrimos) {
        comprobarNumeroPrimo(f);
        f++;
    }

    function comprobarNumeroPrimo (numeroParaComprobar) {
        let cont = 0;
        for(let i = 2; i < numeroParaComprobar; i++) {
            if(numeroParaComprobar % i == 0) {
                cont += 1;
            }
        }

        if(cont == 0) {
            console.log(`${numeroPrimo + 1}: ${numeroParaComprobar}`);
            numeroPrimo = numeroPrimo + 1;
        }
    }
}

// Desafio 20: Desafío de programación #20: Rotar un array hacia la izquierda una posición
// Ejemplo:
// [9,1,2,3,4] debería quedar como [1,2,3,4,9]
// [5] debería quedar como [5]
// [4,3,2,1] debería quedar como [3,2,1,4]

function desafioNumeroVeinte () {
    let array = [5, 1, 2, 3, 4];
    console.log(rotarIzquierdaUnArray(array));

    function rotarIzquierdaUnArray(array) {
        let elementoEliminado = array.shift();
        array.push(elementoEliminado);
        return array;
    }
}

// Desafio 21: Desafío de programación #21: Rotar un array a la derecha una posición
// Ejemplo:
// [2,3,4,1] debería quedar como [1,2,3,4]
// [2,3] debería quedar como [3,2]

function desafioNumeroVeintiuno () {
    let array = [2, 3, 4, 1];
    console.log(rotarDerechaUnArray(array));

    function rotarDerechaUnArray(array) {
        let elementoEliminado = array.pop();
        array.unshift(elementoEliminado);
        return array;
    }
}

// Desafio 22: Desafío de programación #22: Invertir un array
// Ejemplo:
// [1,2,3,4] debería quedar como [4,3,2,1]
// [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
// [5,6,3] debería quedar como [3,6,5]

function desafioNumeroVeintidos () {
    const array = [1, 2, 3, 4];
    console.log(rotarUnArray(array));

    function rotarUnArray(array) {
        const arrayDadoVuelta = [];
        let f = 0;
        for(let i = array.length - 1; i >= 0; i--) {
            arrayDadoVuelta[f] = array[i];
            f++;
        }
        return arrayDadoVuelta;
    }
}

// Desafio 23: Desafío de programación #23: Invertir una cadena de caracteres
// Ejemplo:
// "bienvenido" debería quedar como "odinevneib"

function desafioNumeroVeintitres () {
    const cadena = `bienvenido`;
    console.log(cadena);
    console.log(`La cadena invertida es: ${rotarUnaCadena(cadena)}`);

    function rotarUnaCadena(cadena) {
        let cadenaInvertida = "";
        for(let i = cadena.length - 1; i >= 0; i--) { // 10
            cadenaInvertida = cadenaInvertida + cadena[i];
        }
        return cadenaInvertida;
    }
}

// Desafio 24: Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
// Ejemplo:
// [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

function desafioNumeroVeinticuatro () {
    const array1 = [1, 2, 3];
    const array2 = [`a`, `b`, `c`];
    console.log(`El resultado de ${array1} + ${array2} es: ${concatenarUnArray(array1, array2)}`);

    function concatenarUnArray(array1, array2) {
        const array3 = array1.concat(array2);
        return array3;
    }
}

// Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
// Ejemplo:
// [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
// [5,10,3] y [10,1] debería quedar como [5,3,1]

function desafioNumeroVeinticinco () {
    const array1 = [1, 2, 3, 10, 5, 3, 14];
    const array2 = [1, 4, 5, 6, 14];
    console.log(`La diferencia simetrica de [${array1}] + [${array2}] es: [${diferenciaSimetrica(array1, array2)}]`);

    function diferenciaSimetrica(array1, array2){
        for(let i = 0; i < array1.length; i++){
            for(let j = 0; j < array2.length; j++){
                if(array1[i] == array2[j]){
                    array1.splice(i, 1);
                    array2.splice(j, 1);
                }
            }
        }

        return array1.concat(array2);
    }
}

// Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
// Nota; Esto se llama "resta" entre conjuntos
// Ejemplo:
//   [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

function desafioNumeroVeintiseis(){
    const array1 = [5, 1, 2, 3, 4];
    const array2 = [3, 4];
    console.log(`La resta entre conjuntos de [${array1}] - [${array2}] es: [${restaEntreConjuntos(array1, array2)}]`);
    
    function restaEntreConjuntos(array1, array2){
        for(let i = 0; i < array1.length; i++){
            for(let j = 0; j < array2.length; j++){
                if(array1[i] == array2[j]){
                    array1.splice(i, 1);
                }
            }
        }

        return array1;
    }
}



// Desafio 27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
// Ejemplo:
// [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

function desafioNumeroVeintisiete () {
    const array = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
    console.log(array);
    console.log(`El array sin elementos repetidos es: ${retornarElementosDistintos(array)}`);

    function retornarElementosDistintos(array) {
        for(let i = 0; i < array.length; i++) {
            for(let f = i + 1; f < array.length; f++) {
                if(array[i] == array[f]) {
                    array.splice(f, 1);
                }
            }
        }
        return array;
    }
}

// Desafío de programación #28: Calcular la suma de los primeros 100 números primos.

function desafioNumeroVeintiocho(){
    let cantidadNumerosPrimos = 0
    let i = 2;
    let sumaTotal = 0;

    while(cantidadNumerosPrimos < 100){
        comprobarNumeroPrimo(i);
        i++;
    }

    function comprobarNumeroPrimo(numero){
        let contadorDivisiones = 0;

        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                contadorDivisiones++;
            }
        }

        if(contadorDivisiones == 0){
            sumaTotal += numero;
            cantidadNumerosPrimos++;
        }
    }

    console.log(`La suma de los primeros 100 numeros primos es: ${sumaTotal}`);
}
