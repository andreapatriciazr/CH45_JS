// Desarrollar un programa que evalue si un numero es par o impar

// Me va a traer el numero a comparar a traves de una entrada de datos (prompt)

// Ese numero lo va a provesar una función que retorne su valor para utilizarlo en la comparación

// Crear estructura if else que me permita realizar la condición que me permita saber si el numero es par o impar

let userInput = prompt("Introduzca un número: ");
userInput = Number(userInput)

function getUserInput(n) {
    return n;
}

if (getUserInput(userInput)%2 === 0) {
    console.log(`El número ${userInput} es par`);
}else{
    console.log(`El número ${userInput} es impar`);
}


