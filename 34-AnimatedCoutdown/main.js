const numero = document.getElementById('numero');
const numero_cont = document.getElementById('numero_cont');
const counter = document.getElementById('counter');
const final = document.getElementById('final');
const replay = document.getElementById('replay');


numero.style.animationIterationCount = 3;



function contar(){
    let contador = 3;
    numero.innerText = contador;
    let inervalo = setInterval(()=>{
        contador--;
        numero.innerText = contador;
    
        if(contador == 0){
            clearInterval(inervalo);
            //numero_cont.style.animationPlayState = 'paused';
        }
    
    },1000);
}

contar();


numero.addEventListener('animationend',()=>{
    console.log('asd');
    counter.style.display = 'none';
    final.style.display = 'flex';
    setTimeout(()=>{
        final.style.transform = 'scale(100%)';
    },100);
    

})


replay.addEventListener('click',()=>{
    console.log('replay');
    final.style.display = 'none';
    counter.style.display = 'flex';
    contar();
});