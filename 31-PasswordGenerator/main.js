const form = document.getElementById('form');

const password = document.getElementById('password');
const copiar = document.getElementById('copiar');

const numero = document.getElementById('numero');
const mayus = document.getElementById('mayus');
const minus = document.getElementById('minus');
const numeros = document.getElementById('numeros');
const simbolos = document.getElementById('simbolos');


copiar.addEventListener('click',()=>{

    let pass = password.innerText;
    if(!password){
        return;
    }

    navigator.clipboard.writeText(pass);
    alert('Password Copiado!');

});

form.addEventListener('submit',(e)=>{
    e.preventDefault();


    let arreglo = [];

    if(mayus.checked){arreglo.push(mayusculas);}
    if(minus.checked){arreglo.push(minusculas);}
    if(numeros.checked){arreglo.push(fnumeros);}
    if(simbolos.checked){arreglo.push(fsimbolos);}

    generar(arreglo)

});

function generar(a){

    let palabra = '';

    for (let index = 0; index < numero.value; index++) {
        
        palabra += a[Math.floor(Math.random()*a.length)]();
        
    }

    password.innerText = palabra;

}


function mayusculas(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function minusculas(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function fnumeros(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function fsimbolos(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}


