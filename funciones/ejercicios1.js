//Ejercicio 1:

let edad = 15
function mayoriaEdad(edad) {
    return;
}

if (edad >= 18) {
    console.log(`${edad} años ¡Tienes edad suficiente para votar!`);
} else {
    console.log(`${edad} años ¡NO es edad suficiente para votar!`);
}

// Ejercicio 2:

const promedio = (mate, esp, bio, geo) => (mate+esp+bio+geo)/4;
let promedioAlumno = promedio(8, 9, 9, 8);

if (promedioAlumno >= 7) {
    console.log(`Promedio de: ${promedioAlumno} ¡Aprobaste!`);
} else {
    console.log(`Promedio de: ${promedioAlumno} ¡Reprobaste!`)
}

// Ejercicio 3: Programa 1, 56 es el minimo comun multiplo de 7 y 8

function numeroEvaluado(num1, num2, num3, num4, num5, num6) {
    return [num1, num2, num3, num4, num5, num6];
}

let numeros = numeroEvaluado(56, 7, 8, 0, 224, 73);

function divisibles7y8(n) {
    if ((n % 7 === 0) || (n % 8 === 0)) {
        console.log(`${n} es divisible entre 7 o 8`);
    } else {
        console.log(`${n} no es divisible entre 7 ni por 8`);
    }
}

numeros.forEach(divisibles7y8);

// Ejercicio 4: Programa 2, 36 es el minimo comun multiplo de 4 y 9

function numeroEvaluadoAleatorio (mcm, numero) {
    return;
}

let mcm = 36;
let numero = Math.random();

if (numero % mcm === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Ejercicio 6: Crear un programa que funcione como una calculadora que realice las operaciones aritmeticas basicas: suma, resta, multiplicacion, division

function calcularResultado(numero1, numero2, operacion){
    switch (operacion){
        case "suma":
            console.log(numero1+numero2);
        break;
        case "resta":
            console.log(numero1-numero2);
        break;
        case "multiplicacion":
            console.log(numero1*numero2);
        break;
        case "division":
            console.log(numero1/numero2);
        break;
        default: 
            console.log("No has introducido ninguna operación");
        break;
    }
}

calcularResultado(20, 2, "suma");         
calcularResultado(10, 5, "resta");    
calcularResultado(2, 4, "multiplicacion");  
calcularResultado(10, 2, "division");        
calcularResultado(0);    

// Ejercicio 7: Crear un programa que reciba categoria de peliculas

function recomendacion(categoria){
    switch (categoria){
    case "accion":
        console.log("Deadpool");
    break;
    case "drama":
        console.log("Greenbook");
    break;
    case "comedia":
        console.log("Shrek");
    break;
    case "romance":
        console.log("The notebook");
    break;
    case "suspenso":
        console.log("Parasites");
    break;
    case "terror":
        console.log("Hereditary");
    break;
    default:
        console.log("No se encontró recomendación para esta categoría");
}
}

recomendacion("accion");
recomendacion("drama");
recomendacion("comedia");
recomendacion("romance");
recomendacion("suspenso");
recomendacion("documental");

// Ejercicio 8: Crea una interfaz de cajero automatico 

let totalCuenta = 2000;

function transaccion (opcion, monto){
    switch (opcion) {
        case "retirar":
            if (monto<=totalCuenta){
                console.log(`Se ha realizado exitosamente el retiro`);
            }else{
                console.log(`No hay fondos suficientes para completar la transacción`);
            }
        break;
        case "transferencia":
            if (monto<=totalCuenta){
                console.log(`Se ha realizado exitosamente la transferencia`);
            }else{
                console.log(`No hay fondos suficientes para completar la transacción`);
            }
        break;
        case "deposito":
            if (monto>0){
                console.log(`Se ha realizado exitosamente el deposito`);
            }else{
                console.log(`El monto del deposito debe ser positivo`);
            }
        break;
        case "pagoServicios":
            if (monto<=totalCuenta){
                console.log(`Se ha realizado exitosamente el pago de servicio`);
            }else{
                console.log(`No hay fondos suficientes para completar la transacción`);
            }
        break;
        default:
            console.log(`Seleccione una opcion para continuar`)
        break;
    }
}

transaccion("retirar", 500);
transaccion("transferencia", 8000);
transaccion("deposito", 1000);
transaccion("pagoServicios", 2500);








