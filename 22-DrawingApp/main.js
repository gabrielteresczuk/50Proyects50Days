const mas = document.getElementById('mas');
const menos = document.getElementById('menos');
const size = document.getElementById('size');
const color = document.getElementById('color');
const canvas = document.getElementById('canvas');
const borrar = document.getElementById('borrar');


/* ------------- canvas ------------- */
let sizeInicial = 5;
let colorInicial = '#ff0000';
const ctx = canvas.getContext('2d');
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
    //console.log('mousedown',e.offsetX,e.offsetY);
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    //console.log('mousemove',e.offsetX,e.offsetY);
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, sizeInicial, 0, Math.PI * 2)
    ctx.fillStyle = colorInicial
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = colorInicial
    ctx.lineWidth = sizeInicial * 2
    ctx.stroke()
}

/* ------------- botones ------------ */


size.innerHTML = sizeInicial;

mas.addEventListener('click',()=>{

    if (sizeInicial < 20){
        sizeInicial++;
        size.innerHTML = sizeInicial;
    }

});

menos.addEventListener('click',()=>{
    if(sizeInicial > 1){
        sizeInicial--;
        size.innerHTML = sizeInicial;
    }
})

color.addEventListener('change',(e)=>{
    colorInicial = e.target.value;
});

borrar.addEventListener('click',()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height)
});