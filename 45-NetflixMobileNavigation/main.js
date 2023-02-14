const bopen = document.getElementById('open');
const bclose = document.getElementById('close');

const black = document.getElementById('black');
const red = document.getElementById('red');
const white = document.getElementById('white');


bopen.addEventListener('click',()=>{
    console.log('open');
    black.classList.add('active');
    red.classList.add('active');
    white.classList.add('active');
});

bclose.addEventListener('click',()=>{
    console.log('close');
    black.classList.remove('active');
    red.classList.remove('active');
    white.classList.remove('active');
});

