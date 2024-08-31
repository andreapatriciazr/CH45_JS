// Desarrolla una función que imprima todos los numeros de 0 al 100 y compare que numeros son divisibles entre 4 y 9
// Asignarle un numero significativo a la funcion declarada
// Si el numero es divisible entre 4, imprima un mensaje alusivo a costado del numero
// Mismo caso para todos los numeros divisibles entre 9

let arrayNumbers = [];
for (let num = 1; num <= 100; num++) {
    arrayNumbers.push(num);
}
    function divisibles4y9 (n) {
        if ((n % 4 === 0) || (n % 9 === 0)) {
            (console.log(`${n} es divisible entre 4 y 9`));
        } else {
            (console.log(`${n} no es divisible entre 4 y 9`));
        }
    }

arrayNumbers.forEach(divisibles4y9);

// Declare una variable y asignale como valor un arreglo vacio
// Elabora una iteracion que ayude a llenar el arreglo con los numeros del 1 al 100
// Se debe obtener un arreglo con los numeros ordenados de manera descendente 10-1
// Asigna un nombre significativo a la variable y utiliza el metodo para arreglos adecuado para cumplir con el objetivo del ejercicio

let numbers = [];
for (let n = 1; n <= 100; n++) {
    numbers.push(n);
}

numbers.reverse(); 
console.log(numbers.slice(90)); 

//Crea un bucle que sume los numeros del 1 al 100, resultado final 5050

let suma = 0; 
for (let i = 1; i <= 100; i++) {
    suma += i; // suma = suma+i
}

console.log(suma);


