const Agujahora = document.getElementById('hora');
const Agujaminuto = document.getElementById('minuto');
const Agujasegundo = document.getElementById('segundo');
const boton = document.getElementById('boton');
const body = document.getElementById('body');

const campohora = document.getElementById('campohora');
const campofecha = document.getElementById('campofecha');

const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];


setInterval(()=>{

    let date = new Date();

    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let diasem = date.getDay();
    let dia = date.getDate();
    let mes = date.getMonth();
    let ampm = hora <= 12? 'AM' : 'PM';

    
    
    Agujahora.style = `transform: translate(-50%, -100%) rotate(${hora*30}deg)`;
    Agujaminuto.style = `transform: translate(-50%, -100%) rotate(${hora*30+minuto*6}deg)`;
    Agujasegundo.style = `transform: translate(-50%, -100%) rotate(${minuto*360+segundo*6}deg)`;
    
    campohora.innerHTML = `${hora}:${(minuto.toString()).padStart(2,'0')} ${ampm}`;
    campofecha.innerHTML = `${dias[diasem]}, ${meses[mes]} <b>${dia}</b>`;


},1000);

boton.addEventListener('click',()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        boton.innerHTML = `<span class="material-symbols-outlined icono" id="icono">light_mode</span>Tema Claro`;
    }else{
        boton.innerHTML = `<span class="material-symbols-outlined icono" id="icono">dark_mode</span>Tema Oscuro`;
    }


});



