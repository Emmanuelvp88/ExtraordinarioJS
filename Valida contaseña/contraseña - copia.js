//Pedimos Al usuario ingresar una contraseña
alert (`Acontinuacion debera ingresar una contraseña que contenga al menos 8 caracteres, una letra MAYUSCULA,una miniscula y un numero.`);


//Funcion para validar contraseña
let validarContraseña =  (contraseña) => {
    //Validar que contenga minimo 8 carecteres
    if (contraseña.length <= 8){
        return false;
    }
let letraMayuscula = false;
let letraMinuscula = false;
let contieneNumero = false;
    //Bucle para recorer numero de caracteres
    for (let i = 0; i < contraseña.length; i++){
        let caracter = contraseña.charAt(i);

        //Validar si contiene mayusculas
        if(caracter >= "A" && caracter <= "Z"){
            letraMayuscula = true;
        }else if(caracter >= "a" && caracter <= "z"){
            letraMinuscula = true;
        }else if(!isNaN(caracter)){
            contieneNumero = true;
        }
    }

    return letraMayuscula && letraMinuscula && contieneNumero;
}

let contraseña = prompt("Ingrese su contraseña");

//Mostramos los resultados al usuario
if (validarContraseña(contraseña)){
    alert("Lacontraseña cumple contodos los requisitos")
}else{
    alert(`La contraseña no cumple con todos los requisitos, favor de revisarla, Contraseña: ${contraseña}`)
};


