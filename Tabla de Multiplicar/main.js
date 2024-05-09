const multiplicar = () => {
    let numeroIngresado = parseInt(
        prompt(
            `Ingresa un numero del 1 al 10,  este programa mostrara la tabla de multiplicar del numero que ingresaste.`
        )
    );
    switch (numeroIngresado) {
        case 1:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(1 * i);
                document.write(`1 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 2:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(2 * i);
                document.write(`2 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 3:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(3 * i);
                document.write(` 3 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 4:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(4 * i);
                document.write(`4 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 5:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(5 * i);
                document.write(`5 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 6:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(6 * i);
                document.write(`6 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 7:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(7 * i);
                document.write(`7 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 8:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(8 * i);
                document.write(`8 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 9:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(9 * i);
                document.write(`9 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        case 10:
            for (var i = 0; i <= 10; i++) {
                let multiplicador = +(10 * i);
                document.write(`10 x ${i} = ${multiplicador}<br>`);
            }
            breack;
        default:
            document.write(
                "El numero que ingresaste no esta dentro de los indicados, favor de ingresa un numero valido."
            );
            breack;
    }
};
multiplicar();
