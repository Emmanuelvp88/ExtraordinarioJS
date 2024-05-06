// alert("Este programa te pedira numeros y te regresara la suma de todos ellos.");
let numeros = [4, 5, 7, 8];

const sumarNumeros = (array) => {
  for (var iterador of array) {
    document.write(iterador);
    // suma += iterador;
  }
  return suma;
};
document.write(sumarNumeros(numeros));
//Pedimos la cantidad de numero que desea sumar al usuario
// let cantidadNumeros = prompt("Cuantos numero deseas sumar?");
//   for (i = 0; i < cantidadNumeros; i++){
//     let iterador = prompt(`dime cua es el numero ${i+1}`);
//     let almacenarNumeros =+ [0][iterador];
//   }


// alert(almacenarNumeros);