// alert(" Este programa te pedira numeros y te regresara la suma de todos ellos.");
// let cantidadNumeros = prompt("cuantos numeros deseas capturar?");
// let numeros = [];
//   // document.write(cantidadNumeros);
function sumarElementos(arreglo) {
  var suma = 0;
  for (var elemento of arreglo) {
      suma += elemento;
  }
  return suma;
}

function llenarArray() {
  var arreglo = []; // Creamos un arreglo vacío
  
  // Pedimos al usuario que ingrese la cantidad de elementos que desea agregar al arreglo
  var cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos que desea agregar al arreglo:"));
  
  // Bucle para ingresar los elementos uno por uno
  for (var i = 0; i < cantidadElementos; i++) {
      // Pedimos al usuario que ingrese un número y lo convertimos a entero
      var numero = parseInt(prompt("Ingrese el elemento número " + (i+1) + ":"));
      
      // Agregamos el número ingresado al arreglo
      arreglo.push(numero);
  }
  
  return arreglo; // Devolvemos el arreglo lleno
}

// Ejemplo de uso
var miArreglo = llenarArray();
console.log("El arreglo ingresado es:", miArreglo);
console.log("La suma de los elementos del arreglo es:", sumarElementos(miArreglo));


// // document.write(numeros);

// const sumarNumeros = (array) => {
//   for (var i = 0; i < cantidadNumeros.length; i++){
//         numeros[i] = prompt("ingresa el numero " + (i+1));
//       }
//   let suma =  0;
//   for (var i of array) {
//     // document.write(iterador);
//     suma += i;
//   }
//   return suma;
// };
// document.write("La suma de todos los elementos del array es: " + sumarNumeros(numeros));
//Pedimos la cantidad de numero que desea sumar al usuario
// let cantidadNumeros = prompt("Cuantos numero deseas sumar?");
//   for (i = 0; i < cantidadNumeros; i++){
//     let iterador = prompt(`dime cua es el numero ${i+1}`);
//     let almacenarNumeros =+ [0][iterador];
//   }


// alert(almacenarNumeros);