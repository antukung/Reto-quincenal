const inputUsuario= document.querySelector("#nombre-ingresado");
const parrafo1= document.querySelector ("#parrafo1");

function verifica() {
    
let valorDeUsuario = inputUsuario.value;

parrafo1.innerHTML="Hola bienvenido"+valorDeUsuario     


}

