const boton = document.getElementById('boton');
const toasts = document.getElementById('toasts');


boton.addEventListener('click',()=>{
    console.log('click')
    let template = document.createElement('div');
    template.classList.add('toast');
    template.innerText = 'Mensaje Exitoso!';
    toasts.appendChild(template);

    setTimeout(()=>{
        template.style.opacity = 0;
    },1500);

    setTimeout(()=>{
        template.remove();
    },2000);

})