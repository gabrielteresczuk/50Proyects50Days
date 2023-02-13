const cards = document.querySelectorAll('.card');
const contenedor = document.getElementById('contenedor');
const btn = document.getElementById('btn');

let seleccion = false;


cards.forEach(el=>{

    el.addEventListener('click', ()=>{

        cards.forEach(card =>{
            card.classList.remove('active');
        });

        el.classList.add('active');
        seleccion = true;
    });
});

btn.addEventListener('click',()=>{

    if(seleccion){
        let template = `
        <span class="material-symbols-rounded corazon">
            favorite
        </span>
        <b>Gracias!</b>
        <p class="saludo">Encuesta enviada satisfactoriamente</p>
        <p class='info'>Usaremos estos datos, para mejorar nuestro servicio.</p>
        `;
    
        contenedor.innerHTML = template;
    }



});



