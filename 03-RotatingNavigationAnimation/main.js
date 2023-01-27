const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const contenedor = document.getElementById('contenedor');
const circulo = document.getElementById('circulo');
const menu = document.getElementById('menu');

abrir.addEventListener('click',()=>{
    contenedor.classList.add('rotado');
    circulo.classList.add('circulo_rotado');
    menu.classList.add('menu_activo');
})
cerrar.addEventListener('click',()=>{
    contenedor.classList.remove('rotado');
    circulo.classList.remove('circulo_rotado');
    menu.classList.remove('menu_activo');
})