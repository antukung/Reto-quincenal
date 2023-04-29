const inputUsuario= document.querySelector("#nombre-ingresado");
const parrafoUno= document.querySelector ("#parrafo1");

function verifica() {
    
let valorDeUsuario = inputUsuario.value;

parrafoUno.innerHTML("Hola bienvenido"+valorDeUsuario);     


}

