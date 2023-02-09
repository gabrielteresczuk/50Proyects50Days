const pass = document.getElementById('pass');
const body =document.getElementById('body');

pass.addEventListener('keyup',()=>{
    console.log(pass.value);
    body.style.backdropFilter = `blur(${10-parseInt(pass.value.length)}px)`


});