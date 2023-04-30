const imagenPagina= document.querySelector ("#imagen-1");
const inputUsuario= document.querySelector("#nombre-ingresado");
const inputedad= document.querySelector ("#edad");
const inputemail= document.querySelector ("#email");
const inputdni =document.querySelector ("#dni");
const parrafo1= document.querySelector ("#parrafo1");
const parrafo2= document.querySelector ("#parrafo2");
const parrafo3= document.querySelector ("#parrafo3");
const parrafo4= document.querySelector ("#parrafo4");
const parrafo5= document.querySelector ("#parrafo5");
const cuerpoDePagina= document.querySelector ("body");



const MAYORIA_EDAD= 18;

const IMG_1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzidfm0hI_L0AihR4wose-XD1xwGFsJ3M0pDT7QVQo_xY69GQksbDTWC1KSD2MKjs363s&usqp=CAU";

const IMG_2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoG-PFs_8Nfek7xRbMBujEJyJU7Vm0lQsA94tcpnwt9zR2etQed68xi14amR7GKItWCg&usqp=CAU";

const COLOR_PAGINA= "#0d1117";
const COLOR_TIPOGRAFIA= "#e6edf3";
const COLOR_PARRAFO= "#00ffff"
const TIPOGRAFIA_PARRAFO= "monospace"
cuerpoDePagina.style.backgroundColor= COLOR_PAGINA;
cuerpoDePagina.style.color=COLOR_TIPOGRAFIA;


imagenPagina.src=IMG_1;

function verifica() {
    
let valorDeUsuario = inputUsuario.value;
let valorDeEdad = inputedad.value;
let valorDeEmail = inputemail.value;
let valorDedDNI= inputdni.value;


parrafo1.innerHTML="Hola bienvenido "+valorDeUsuario;     
parrafo2.innerHTML= "Que bueno que tienes "+valorDeEdad;
parrafo3.innerHTML= "Ya reguistramos tu email "+valorDeEmail;
parrafo4.innerHTML= "Que lindo numero de DNI= " +valorDedDNI;

parrafo1.style.color=COLOR_PARRAFO;
parrafo2.style.color=COLOR_PARRAFO;
parrafo3.style.color=COLOR_PARRAFO;
parrafo4.style.color=COLOR_PARRAFO;

parrafo1.style.fontFamily=TIPOGRAFIA_PARRAFO;
parrafo2.style.fontFamily=TIPOGRAFIA_PARRAFO;
parrafo3.style.fontFamily=TIPOGRAFIA_PARRAFO;
parrafo4.style.fontFamily=TIPOGRAFIA_PARRAFO;


imagenPagina.src=IMG_2;


if (valorDeEdad>= MAYORIA_EDAD) {
    parrafo5.innerHTML = "Eres mayor de edad felicitaciones"
    parrafo5.style.color=COLOR_PARRAFO;
    parrafo5.style.fontFamily=TIPOGRAFIA_PARRAFO;
    
} else {
    parrafo5.innerHTML = "Eres menor mala noticia"
    parrafo5.style.color=COLOR_PARRAFO;
    parrafo5.style.fontFamily=TIPOGRAFIA_PARRAFO;
}

}

