const img = document.getElementById('img');
const heart = document.getElementById('heart');
const cant = document.getElementById('cant');

let like = 0;

img.addEventListener('dblclick',(e)=>{

    like++;
    cant.innerText = like;

    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e);
    //console.log('x',x,'y',y);

    let corazon = document.createElement('span');
    corazon.classList.add('material-symbols-outlined','fav','fav_img');
    corazon.innerText = 'favorite';
    corazon.style.top = y+'px';
    corazon.style.left= x+'px';
    
    
    img.appendChild(corazon);

    setTimeout(()=>{
        corazon.style.opacity = '0';
        corazon.style.transform = `scale(800%)`;
    },10);
    
    setTimeout(()=>{
        img.removeChild(corazon);
    },3000);


});

