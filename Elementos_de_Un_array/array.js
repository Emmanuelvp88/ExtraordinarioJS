alert("Este programa te pedira numeros y te regresara la suma de todos ellos.");
let cantidadNumeros = prompt("cuantos numeros deseas capturar?");
let numeros = [];

for (let i = 0; i < cantidadNumeros.length; i ++){
    numeros[i] = prompt("ingresa el numero " + (i+1));
}

const sumarNumeros = (array) => {
  var suma =  0;
  for (var iterador of array) {
    // document.write(iterador);
    suma += iterador;
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