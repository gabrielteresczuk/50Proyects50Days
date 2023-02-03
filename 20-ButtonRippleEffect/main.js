const btn = document.getElementById('btn');
const circulo = document.getElementById('circulo');

btn.addEventListener('click',(e)=>{


    circulo.style.left = e.layerX+'px';
    circulo.style.top = e.layerY+'px';
    circulo.classList.add('prueba2');
    let timeout = setTimeout(()=>{
        circulo.classList.remove('prueba2');
    },500)
})