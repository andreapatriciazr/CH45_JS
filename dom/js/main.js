// Regresa un Html Element (obtener un id)
let hobbies = document.getElementById("hobbies");
console.log(hobbies);

let title1 = document.getElementById("title1");
console.log(title1);

let btnMostrar = document.getElementById("btnMostrar");
// console.log(btnMostrar);

// Regresa un Html Collection (obtener etiquetas)
let ul = document.getElementsByTagName("ul");
console.log(ul.item(0));
console.log(ul.item(1));

// Regresa un Html Collection, (obtener una clase)
// Similar a un arreglo (es una colección viva de html)
let lista = document.getElementsByClassName("list-group-item");

// Regresa solamente un elemento (el primero)
const elemento = document.querySelector("ul > li");
// Regresa todos los elementos indicados dentro del ("");
const elementos = document.querySelectorAll("ul > li");
const elementos2 = document.querySelectorAll("ul > li:last-child");

btnMostrar.addEventListener("click", function (event) {
    console.log("click en el boton Mostrar");
    // Si al darle click en mostrar se quiere mostrar un item con posición especifica 
    console.log(hobbies.children.item(0));
    // console.log(hobbies.children.item(1));
    // console.log(hobbies.children.item(2));
    // console.log(hobbies.children.item(3));

    // Si al darle click en mostrar se quiere mostrar un item con posición a partir de una clase
    // console.log(lista.item(0));
    // console.log(lista.item(1));
    // console.log(lista.item(2));
    console.log(lista.item(3));

    // title1.innerText="Modelo de Objetos del Documento (DOM)";
    // El inner text únicamente cambia el texto y el html
    title1.innerHTML="<br/>Modelo de <u>Objetos</u> del Documento (DOM)";

    // Crear un elemento
    let element = document.createElement("li");
    element.innerText="Bailar";
    element.classList.add("list-group-item");
    console.log(element);

    // Agregar el elemento al final de la lista
    // ul.item(0).append(element);
    // ul.item(0).insertAdjacentElement("beforeend", element);
    // ul.item(0).insertAdjacentHTML("beforeend", ` <li class="list-group-item">beforeend</li>`);

    // Agregar el elemento al principio de la lista
    // ul.item(0).prepend(element);
    // ul.item(0).insertAdjacentElement("afterbegin", element);
    // ul.item(0).insertAdjacentHTML("afterbegin", ` <li class="list-group-item">afterbegin</li>`);

    // Agregar el elemento antes (sacandolo de la lista)
    // ul.item(0).before(element);
    // ul.item(0).insertAdjacentElement("beforebegin", element);
    // ul.item(0).insertAdjacentHTML("beforebegin", ` <li class="list-group-item">beforebegin</li>`);



    // Agregar el elemento despues (sacandolo de la lista)
    // ul.item(0).after(element);
    // ul.item(0).insertAdjacentElement("afterend", element);
    ul.item(0).insertAdjacentHTML("afterend", ` <li class="list-group-item">afterend</li>`);

    // Clona el elemento con todo su contenido (por eso es el true)
    // ul.item(0).prepend(element.cloneNode(true));

});

window.addEventListener("load", function (event){
    console.log("Se terminó de cargar la página")
});

