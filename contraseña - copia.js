//Pedimos Al usuario ingresar una contraseña
alert (`Acontinuacion debera ingresar una contraseña que 
que contenga al menos 8 caracteres, una letra MAYUSCULA,una miniscula y un numero.`);
let contraseña = prompt("Ingrese su contraseña");


let letraMayuscula = false;
let letraMinuscula = false;
let contieneNumero = false;

//Funcion para validar contraseña
let validaContraseña (contraseña) => {
    //Validar que contenga minimo 8 carecteres
    if (contraseña.length < 8){
        return false;
    }
    //Bucle para recorer numero de caracteres
    for (let i = 0; i < contraseña.length; i++){
        contraseña = contraseña.charAt(i);

        //Validar si contiene mayusculas
        if(contraseña > "A" && contraseña < "Z"){
            letraMayuscula = true;
        }else if(contraseña > "a" && contraseña < "z"){
            letraMinuscula = true;
        }else if(!isNaN(contraseña)){
            contieneNumero = true;
        }

    }
}