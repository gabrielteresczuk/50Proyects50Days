const container = document.getElementById('container');
const ant = document.getElementById('ant');
const sig = document.getElementById('sig');

const imagenes = document.querySelectorAll('.img');


let indice = 0;


sig.addEventListener('click',()=>{
    console.log(imagenes.length);
    indice++;
    if(indice == imagenes.length){
        indice = 0;
    }
    mover()
});

ant.addEventListener('click',()=>{
    
    indice--;
    if(indice < 0){
        indice = imagenes.length-1;
    }
    console.log(indice);
    mover()
});

setInterval(()=>{
    indice++;
    if(indice == imagenes.length){
        indice = 0;
    }
    mover();
},2000)

function mover(){
    container.style.transform = `translateX(-${indice*400}px)`;
}

