// Funciones: Una función es un bloque de codigo que permite resolver una tarea en particular

// Pasos para declarar una función:
// 1. Palabra reservada function
// 2. Nombre de mi función (intuitivo, camelCase, nombres sencillos)
// 3. Parametros de mi función
// 4. cuerpo de mi función

// Ejemplo: Función que calcule el perimetro de un cuadrado

function calculatePerimeter (l) {
    let perimeter = l*4
    console.log(perimeter);
}

calculatePerimeter(4);


const arrowPerimeter = l => console.log(l*4);
arrowPerimeter(4);


function calculatePerimeter1 () {
    let lado = 6
    let perimeter = lado*4
    console.log(perimeter);
}

calculatePerimeter1();

function calculatePerimeter3 (l) {
    let perimeter = l*4
    console.log("Perimetro calculado: " + perimeter + " cm");
}

calculatePerimeter3 (8);

// function greetUser() {
//     console.log("Hola Mundo");
// }

// greetUser();

function greetUser (userName) {
    console.log("Hola " + userName)
}

greetUser ("Lisa");
greetUser ("Luna");
greetUser ("Lilo");

// Función para calcular el voltaje dadas la resistencias (R) y la corriente (i)

function calculateVol (R, i) {
    let voltage = R*i
    console.log(voltage);
}

calculateVol(100, 2);

function calculateVol2 () {
    let resistencia = 100
    let corriente = 2
    let voltaje = resistencia*corriente
    console.log (voltaje);
}

calculateVol2();

// function saludar(){
//     return;
//     let tipoSaludo = "Hasta pronto "
//     let nombre= "Pedro"
//     console.log(tipoSaludo+nombre);
// }

// let tipoSaludo = "Bienvenida " 
// let nombre = "Lisa"
// console.log(tipoSaludo+nombre); 

function saludar(name) {
    return "Hola " + name;
    console.log("Soy un codigo que esta después del return");
}

console.log(saludar("Lisa")); 


function calcDogAge () {
       let conversion = dogAge*dogEquivalent
       return conversion;
}

let dogAge = 5
let dogEquivalent = 7
let humanDogAge = dogAge*dogEquivalent
console.log("Edad de mascota en años humanos: " + humanDogAge);

const calcDogAge1 = (dogAge, dogEquivalent) => console.log(dogAge*dogEquivalent);
calcDogAge1(5, 7); 


function calcDogAge(dogAge, dogEquivalent) {
    let resultDogAge = dogAge*dogEquivalent;
    return resultDogAge;
}

let resultDogAge = calcDogAge(3, 7); 
console.log("Edad de mascota en años humanos: " + resultDogAge);


const arrowCalcDogAge = (dogAge, dogEquivalent) => dogAge*dogEquivalent;
console.log(arrowCalcDogAge(3, 7)); 


// Ejemplo Fer:

// function calculateDogAge (humanAge) {
//     let convert = humanAge/7
//     return convert;
// }

// let result = calculateDogAge(3);
// console.log("Edad de mascota: " + result)


function message (personName, age, hobbie){
    console.log("Hi, my name is " + personName + " I'm " + age + " and my favorite activity is " + hobbie);
}

message ("Lisa", "3", "play ball");


function message(personName, age, hobbie) {
    console.log(`Hi, my name is ${personName}. I'm ${age} and my favorite activity is ${hobbie}.`);
}

message("Lisa", "3", "play ball");


// Calcular el perimetro de un ciculo

function circumference() {
    const pi = 3.1416
    let formulaCircumference = pi*diameter;
    return formulaCircumference;
}

let diameter = 5;
let resultCircumference1 = circumference ();
console.log(`La circunferencia de un círculo con diámetro ${diameter} es ${resultCircumference1}`);


const resultCircumference2 = (diameter, pi) => diameter*pi;
console.log(resultCircumference2(5, 3.1416));

// Calcular area de un rectangulo

function areaRectangle(length, width) {
    let formulaAreaRectangle = length*width;
    return `El área del rectángulo con longitud ${length} y ancho ${width} es ${formulaAreaRectangle}.`;
}

let resultAreaRect1 = areaRectangle (4,2);
console.log(resultAreaRect1);

const resultAreaRect2 = (length, width) => length*width;
console.log(resultAreaRect2(4, 2));


// Calcular el cuadrado de un numero

function square(number) {
    let squareNumFormula = number * number;
    return squareNumFormula;
}

let number = 4; 
let resultSquareNum1 = square(number);
console.log(`El resultado de ${number} al cuadrado es ${resultSquareNum1}`);


const resultSquareNum2 = number => number * number
let result = resultSquareNum2(4); 
console.log(result);


// Calcular la conversion de grados celsius a farenheit

function farenheit (celsius){
    let farenheitToCelsius = celsius * 9 / 5 + 32
    return `La temperatura en farenheit para ${celsius} °C es ${farenheitToCelsius} °F`
}
let convertResult1 = farenheit (50); //50 Celsius
console.log(convertResult1);

const farenheitToCelsius = (celsius) => celsius * 9 / 5 + 32;
let convertResult2 = farenheitToCelsius(50);
console.log (convertResult2);


// Calcular el volumen de una esfera

function sphereVolume (radius) {
    const pi = 3.1416
    let formulaSphereVolume =  4/3 * pi * Math.pow(radius, 3);
    return formulaSphereVolume;
}

let resultSphereVolume1 = sphereVolume(5);
console.log(`El volumen de la esfera con radio ${5} es ${resultSphereVolume1}`);

const formulaSphereVolume = () => 4/3 * pi * Math.pow(radius, 3);
let radius = 5;
const pi = 3.1416
console.log(formulaSphereVolume());
