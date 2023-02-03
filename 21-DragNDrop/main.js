const objeto = document.getElementById('objeto');
const vacios = document.querySelectorAll('.vacio');



vacios.forEach(vacio => {

    vacio.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })

    vacio.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        vacio.classList.add('seleccionado');
    });

    vacio.addEventListener('dragleave',()=>{
        vacio.classList.remove('seleccionado');
    });

    vacio.addEventListener('drop',()=>{
        vacio.append(objeto);
        vacio.classList.remove('seleccionado');
    })
});