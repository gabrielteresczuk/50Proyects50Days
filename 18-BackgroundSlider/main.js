const body = document.getElementById('body');
const img = document.getElementById('img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

db = [
    'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

let imagen = 0;

cargar(imagen);

function cargar(valor){

    imagen = imagen+valor;

    if(imagen > db.length-1){
        imagen=0;
    }else if(imagen < 0){
        imagen=db.length-1;
    }

    console.log(imagen);
    
    body.style.backgroundImage = `url(${db[imagen]})`;

    
    img.src = db[imagen];
    
}

next.addEventListener('click',()=>{
    cargar(1);
});
prev.addEventListener('click',()=>{
    cargar(-1);
});
