const contenido = document.querySelectorAll('.contenido');

window.addEventListener('scroll',comprobar);

comprobar();

function comprobar(){
    const triggerBottom = window.innerHeight / 5 * 4

    contenido.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop);
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}