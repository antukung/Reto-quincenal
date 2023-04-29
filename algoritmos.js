const inputUsuario= document.querySelector("#nombre-ingresado");
const inputedad= document.querySelector ("#edad");
const inputemail= document.querySelector ("#email");
const inputdni =document.querySelector ("#dni");
const parrafo1= document.querySelector ("#parrafo1");
const parrafo2= document.querySelector ("#parrafo2");
const parrafo3= document.querySelector ("#parrafo3");
const parrafo4= document.querySelector ("#parrafo4");

function verifica() {
    
let valorDeUsuario = inputUsuario.value;
let valorDeEdad = inputedad.value;
let valorDeEmail = inputemail.value;
let valorDedDNI= inputdni.value;


parrafo1.innerHTML="Hola bienvenido "+valorDeUsuario;     
parrafo2.innerHTML= "Que bueno que tienes "+valorDeEdad;
parrafo3.innerHTML= "Ya reguistramos tu email "+valorDeEmail;
parrafo4.innerHTML= "Que lindo numero de DNI= " +valorDedDNI;

}

