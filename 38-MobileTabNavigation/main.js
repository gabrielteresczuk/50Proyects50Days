const img = document.getElementById('img');

const home = document.getElementById('home');
const work = document.getElementById('work');
const blog = document.getElementById('blog');
const about = document.getElementById('about');


const controles = document.querySelectorAll('.control');

controles.forEach(el => {

    el.addEventListener('click',()=>{

        controles.forEach(el => {
            el.classList.remove('active');
        })

        el.classList.add('active');
    });

});

home.addEventListener('click',()=>{
    img.style.opacity = 0;
    setTimeout(()=>{
        img.style.backgroundImage = "url('https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        img.style.opacity = 1;
    },150)

});

work.addEventListener('click',()=>{
    img.style.opacity = 0;
    setTimeout(()=>{
    img.style.backgroundImage = "url('https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    img.style.opacity = 1;
    },150)

});

blog.addEventListener('click',()=>{
    img.style.opacity = 0;
    setTimeout(()=>{
    img.style.backgroundImage = "url('https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    img.style.opacity = 1;
    },150)
})

about.addEventListener('click',()=>{
    img.style.opacity = 0;
    setTimeout(()=>{
    img.style.backgroundImage = "url('https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    img.style.opacity = 1;
    },150)
});

