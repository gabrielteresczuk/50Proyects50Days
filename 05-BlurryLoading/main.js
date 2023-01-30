const body = document.getElementById('body');
const main =document.getElementById('main');

//body.style.backdropFilter= 'blur(0px)';
let load = 1;
let blur = 99;

const loading = setInterval(()=>{
    load++;
    blur--;
    main.style.opacity = blur/100;
    main.innerText=load+'%';
    body.style.backdropFilter = `blur(${blur}px)`;
    if(load == 99){
        clearInterval(loading);
        main.classList.add('disable')
    }
},20);

