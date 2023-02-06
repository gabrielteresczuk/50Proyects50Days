const nav = document.getElementById('nav');

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);

    if(window.scrollY > nav.offsetHeight+100){

        nav.classList.add('navactive');
    }else{
        nav.classList.remove('navactive');
    }
})