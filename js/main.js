let libros = ["El principito", "Blanca nieves", "Luna de Plutón", "La Bella y la Bestia", "Pedro Páramo", "El Alquimista", "Farenheit 451", 
"Stalker"]

console.log(libros.length);


libros.forEach(element => {console.log(element.toUpperCase());
});

let lista1 = document.getElementById("lista1")

libros.push("La comunidad del anillo")
libros.push("La comunidad del anillo")
let libropop = libros.pop()
libropop = libros.shift()
/*

for (let i = 0; i < libros.length; i++){
    lista1.innerHTML += `<li class = "list-group-item"> ${i+1}.- ${libros[i]} </li>`;
}
x

let index = 0;

while (index <libros.length) {

    lista1.innerHTML += `<li class = "list-group-item"> ${index+1}.- ${libros[index]} </li>`;
    index ++;
}

*/

libros.forEach((libro, i) => 
lista1.innerHTML += `<li class = "list-group-item"> ${i+1}.- ${libro} </li>`);

