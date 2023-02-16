const hero = document.getElementById('hero');
const start_btn = document.getElementById('start-btn');


window.onunload = function(){ window.scrollTo(0,0); }

start_btn.addEventListener('click',()=>{
    /*hero.style.marginTop = '-100vh';*/
    hero.classList.add('up');
});

/* ------------ seleccion ----------- */

const seleccion = document.getElementById('seleccion');
const selecciones = document.querySelectorAll('.seleccion_btn');
const game = document.getElementById('game');

let insecto = {
    nombre:'',
    img:''
}

selecciones.forEach(sel => {
    sel.addEventListener('click',()=>{

        let nombre = sel.querySelector('p');
        let imagen = sel.querySelector('img');
        console.log(nombre.innerText);
        console.log(imagen.src);

        insecto.nombre = nombre.innerText;
        insecto.img = imagen.src;

        //seleccion.style.marginTop = '-100vh';
        seleccion.classList.add('up');

        setTimeout(createInsect, 1000)
        iniciar();
    });
});

/* -------------- game -------------- */

const time = document.getElementById('time');
const scoreEL = document.getElementById('score');
const msg = document.getElementById('msg');
let seconds = 0;
let score = 0;

function iniciar(){
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    time.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${insecto.img}" alt="${insecto.nombre}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        msg.classList.add('msg_visible')
    }
    scoreEL.innerHTML = `Score: ${score}`;
}
