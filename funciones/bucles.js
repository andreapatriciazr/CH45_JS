// Ciclo for tendra tres parametros iniciales: inicialización, condición y contador

// Ejemplo para imprimir los numeros del 1 al 5

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Ejemplo para imprimir los numeros del 1 al 100, pero el conteo es de 5 en 5 
for (let i = 5; i <= 100; i+=5) {
    console.log(i);
}

let shrekMovies = [
    "Shrek"               ,  
    "Shrek 2"             ,  
    "Shrek the Third"     ,  
    "Shrek Forever After" ,  
    "Shrek the Halls"     ,  
    "Scared Shrekless"    ,  
    "Puss in Boots: The Three Diablos"];


for (let x = 0; x < shrekMovies.length; x++) {
    console.log(shrekMovies[x]);
}

// Ejemplo para imprimir los numeros del 5 al 1
for (let z = 5; z >=1; z--){
    console.log(z);
}

//Ejercicio while
let i = 11;
// while(i <=100){
//     console.log(i);
//     i ++
// }

//Ejercicio do while
do {
    console.log(i);
    i++
} while (i<=10);

//Ejercicio for - for 
for (const movies of shrekMovies){
    console.log(movies);
}

//Ejercicio for - in
for (const movies in shrekMovies){
    console.log(movies);
}

