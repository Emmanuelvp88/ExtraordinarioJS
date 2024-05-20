const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    // document.write("asduasndasdasdasdasds");
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let RegexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,4})$/
    parrafo.innertHTML
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    if (!RegexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    if (pass.value.length < 8) {
        warnings = + `El password no es valido <br>`
        entrar = true;
    }
    if (entrar) {
        parrafo.innertHTML = warnings;
    }
});