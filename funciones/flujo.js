//Control de flujo

// if-else
// Si mi condicion se cumple ejecuto instrucciones del bloque if
// Sino ejecuto instrucciones del bloque else

// Pasos para crear un bloque if-else
// 1. palabra reservada if
// 2. condición ()
// 3. vamos a delimitar el bloque de codigo que se ejecuta si la condición se cumple
// 4. palabra reservada else

// if (condicion){
//      bloque que se ejecuta si la condicion es true
// }else{
//      bloque que se ejecuta si la condicion es false
// }

let n = 9

if (n>=10){
    console.log("Es mayor o igual");
} else {
    console.log("Es menor");
}


if (n > 10){
    console.log(n + " Es mayor");
} else if (n === 10){
    console.log(n + " Es igual");
}else{
    console.log(n + " Es menor");
}


let calificacion = 6
let resutlado = calificacion >= 7 ? console.log("Aprobado") : console.log("Reprobado")


let favoriteColor = "Green";
favoriteColor = favoriteColor.toLowerCase();

switch (favoriteColor) {
    case "red":
        console.log("Red Hot Chilli Peppers");
    break;
    case "green":
        console.log("Shrek");
    break;
    case "purple":
        console.log("Deep purple");
    break;
    default:
        console.log("Black Sabbath")
    break;
}


let favColor = "Pink";
favColor = favColor.toLowerCase();

function showFavoriteColor(favColor) {
    switch (favColor) {
        case "red":
            console.log("Red Hot Chilli Peppers");
        break;
        case "green":
            console.log("Shrek");
        break;
        case "purple":
            console.log("Deep purple");
        break;
        default:
            console.log("Black Sabbath")
        break;
    }
}

showFavoriteColor("purple");
showFavoriteColor("pink");

let x = 9

switch (x) {
    case 0:
        console.log("Caso Cero");
    break;
    case 1:
        console.log("Caso Uno");
    break;
    case 2:
        console.log ("Caso Dos");
    break;
    case 3:
        console.log("Caso Tres");
    break;
    default:
        console.log("No existen Coincidencias");
    break;
}

// let a = false
// let b = false

// if (a === true && b === true){
//     console.log("verdadero and");
// }else{
//     console.log("falso and");
// }

// if (a === true || b === true){
//     console.log("verdadero or");
// }else{
//     console.log("falso or");
// }

// if (!a === true && b === true){
//     console.log("verdadero and");
// }else{
//     console.log("falso and");
// }

// if (!a === true || b === true){
//     console.log("verdadero or");
// }else{
//     console.log("falso or");
// }
