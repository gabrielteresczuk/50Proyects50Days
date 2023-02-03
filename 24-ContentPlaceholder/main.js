const imgs = document.querySelectorAll('.img');
const texts = document.querySelectorAll('.text');

imgs.forEach(img => {
    img.classList.add('animated-bg');
});

texts.forEach(text =>{
    text.classList.add('animated-bg');
    text.classList.add('animated-bg-text');
})

setTimeout(()=>{
    imgs.forEach(img => {
        img.classList.remove('animated-bg');
    });
    
    texts.forEach(text =>{
        text.classList.remove('animated-bg');
        text.classList.remove('animated-bg-text');
    })

},2000);