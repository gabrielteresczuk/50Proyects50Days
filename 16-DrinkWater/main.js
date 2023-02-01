const vasitos = document.querySelectorAll('.vasito');
const vaso_lleno = document.getElementById('vaso_lleno');
const vaso_vacio = document.getElementById('vaso_vacio');
const vaso_vacio_texto = document.getElementById('vaso_vacio_texto');

let agua = 0;

vasitos.forEach((vasito)=>{
    vasito.addEventListener('click',()=>{
        let value =parseInt (vasito.getAttribute('data-value'));
        setAgua(value);
    });
});

function setAgua (value){
    console.log('agua = ', agua, 'vaso = ', value);

        if(value === agua){
            agua--;
        }else{
            agua = value;
        }
            vasitos.forEach(el=>{
                el.classList.remove('vasito_activo');
            });
            for (let index = 0; index < agua; index++) {
                vasitos[index].classList.add('vasito_activo');
            }

    vaso_lleno.innerText = (100/8)*(agua)+'%';
    vaso_vacio_texto.innerText = 2-((0.25*agua))+'L'
    vaso_lleno.style.height = (100/8)*(agua)+'%';
    vaso_vacio.style.height = 100-((100/8)*(agua))+'%';
}