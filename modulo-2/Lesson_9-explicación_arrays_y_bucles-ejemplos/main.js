"use strict";

const miLista = ["a", "b", "c", "d", "e"];
console.log("Esta es mi lista primigenia:");
console.log(miLista);


// PUSH --> añade una posición al final del array
miLista.push("f");
console.log("Usando PUSH:");
console.log(miLista);

// POP --> elimina la última posición del array
miLista.pop();
console.log("Usando POP:");
console.log(miLista);


// UNSHIFT --> añade el parámetro como primer elemento del array
miLista.unshift("x");
console.log("Usando UNSHIFT:");
console.log(miLista);

// SHIFT --> elimina la primera posición del array
miLista.shift();
console.log("Usando SHIFT:");
console.log(miLista);


/*  --- NO SÉ CÓMO FUNCIONA SLICE ---
// SLICE ( , ) --> extrae ¿¿?? del array
miLista.slice();
console.log("Usando SLICE:");
console.log(miLista); */


// SPLICE ( , ) --> extrae una porción del array. Podemos trabajar con esos valores extraidos si los metemos en una constante.
const miniLista = miLista.splice(2,1);
console.log("Usando SPLICE:");
console.log("- cómo queda miLista:");
console.log(miLista);
console.log("- creación de miniLista:");
console.log(miniLista);

// SPLICE ( , , ) Tb podemos sustituir incluyendo un tercer parametro
miLista.splice(1,1, "B", "C");
console.log("- para eliminar 1 posición y añadir 2 posiciones nuevas:");
console.log(miLista);


// INDEXOF --> busca el parametr que le demos entre paréntesis, y nos devuelve la posición de ese parametro
miLista.indexOf("a");
console.log("Usando INDEXOF:");
console.log("La posición de 'a' es " + miLista.indexOf("a"));

