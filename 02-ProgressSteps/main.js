const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const numeros = document.querySelectorAll('.numero');
const barra = document.getElementById('barra');

let activos = 0;
let maximo = 3;

proximo.addEventListener('click',()=>{
    agregar();
});

anterior.addEventListener('click',()=>{
    restar();
});

function agregar(){

    if(activos < maximo){
        activos= activos+1;
        barra.style.width = (activos/maximo)*100+'%';
        numeros[activos].classList.add('active');
    }
    if(activos>0){
        anterior.classList.add('active');
        anterior.classList.remove('disabled');
    }
    if(activos==maximo){
        proximo.classList.add('disabled');
        proximo.classList.remove('active');
    }
}

function restar(){
    
    if(activos > 0){
        numeros[activos].classList.remove('active');
        activos= activos-1;
        barra.style.width = (activos/maximo)*100+'%';
    }
    if(activos==0){
        anterior.classList.remove('active');
        anterior.classList.add('disabled');
    }
    if(activos<maximo){
        proximo.classList.add('active');
        proximo.classList.remove('disabled');
    }
    
}