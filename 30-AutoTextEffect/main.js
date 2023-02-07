const texto = document.getElementById('texto');
const numero = document.getElementById('numero');

let palabra = 'We love Programming !';
let velocidad = numero.value;
let posicion = 0;


let letras = palabra;
console.log(letras.split(''));


numero.addEventListener('change',()=>{
    velocidad = numero.value;
});

escribir();

function escribir(){

    
    if(palabra[posicion-1] == ' '){
        texto.innerText = texto.innerText + ' ' + palabra[posicion];
    }else{
        texto.innerText = texto.innerText + palabra[posicion];
    }


    if(posicion == palabra.length){
        texto.innerText = '';
        posicion = 0;
    }else{
        posicion++
    }


    setTimeout(escribir,300/velocidad);

}