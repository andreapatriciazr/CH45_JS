// Para declarar un arreglo podemios usar palabras reservadas: var, let o const
// 3 posibles maneras de agregar elementos dentro de un arreglo:
// 1. Agregar los elementos de manera manual
// 2. Agregarlo indicando el indice y que elemento se va a agregar dentro de un arreglo
// 3. Mandar a llamar a la clase array para construir un nuevo arreglo

let oddNumbers = [1, 3, 5, 7, 9]
// console.log(oddNumbers);

// let colors = []
// colors [0] = "Rosa"
// colors [1] = "Azul"
// colors [2] = "Lila"
// colors [3] = "Verde"
// colors [4] = "Rojo"
// console.log(colors);

let names = new Array("Lisa", "Lilo", "Luna", "Lola", "Lali");
// console.log(names);

let shopping = ["queso", "pan", "cafe", "tortillas", "leche"]
console.log(shopping);
console.log(shopping[2]); //Elemento especifico de un arreglo
console.log(shopping.length); // Longitud  de un arreglo
console.log(shopping[shopping.length-1]); // Nombre de un elemento si no se conoce la longitud

let colors = ["rosa", "azul", "verde", "rojo", "amarillo"];
colors.pop();
console.log(colors);

colors.push("morado");
console.log(colors);

colors.unshift("morado");
console.log(colors);

colors.shift ();
console.log(colors);

console.log(colors.slice(2));

console.log(colors.at(0));

colors.sort()
console.log(colors);

colors.reverse();
console.log(colors);

console.log(colors.indexOf("rojo"));

colors.forEach((printList) => console.log(printList));

colors.forEach(function (list) {
    console.log(list);
});

let items = colors.map(function(item) {console.log(item);});