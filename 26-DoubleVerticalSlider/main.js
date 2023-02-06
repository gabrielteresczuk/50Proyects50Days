const btn_izq = document.getElementById('btn_izq');
const btn_dcha = document.getElementById('btn_dcha');
const cont_izq = document.getElementById('cont_izq');
const cont_dcha = document.getElementById('cont_dcha');
const cont_slider = document.getElementById('cont_slider');

const slidesLength = cont_dcha.querySelectorAll('div').length

let pant = 0;

cont_izq.style.top = `-${(slidesLength - 1) * 100}vh`



btn_izq.addEventListener('click',()=>{
    btn('bajar');

})

btn_dcha.addEventListener('click',()=>{
    btn('subir');

});

function btn(valor){
    console.log('panta',pant,'slide',slidesLength);
    const sliderHeight = cont_slider.clientHeight

    if(valor === 'bajar'){
        if(pant == 0){
            pant = slidesLength-1
        }else{
            pant--;
        }
    }

    if(valor === 'subir'){
        if(pant == slidesLength-1){
            pant = 0
        }else{
            pant++;
        }
    }

    cont_izq.style.transform = `translateY(${+pant*sliderHeight}px)`;
    cont_dcha.style.transform = `translateY(${-pant*sliderHeight}px)`;

}