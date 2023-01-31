const botones = document.querySelectorAll('.boton');

botones.forEach(boton =>{
    boton.addEventListener('click',()=>{
        console.log('asd');
        if (boton.parentElement.parentElement.classList.contains('show')){
            boton.parentElement.parentElement.classList.remove('show')
            boton.innerHTML = 'expand_more'
        }else{
            boton.parentElement.parentElement.classList.add('show')
            boton.innerHTML = 'close';
        }



    });
})