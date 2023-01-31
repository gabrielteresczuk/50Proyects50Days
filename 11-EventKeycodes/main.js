const main = document.getElementById('main');

window.addEventListener('keypress',(e)=>{

    let template = `
    <div class="contenedor">
        <div class="columna">
            <p>event.key</p>
            <div class="bloque">${e.key}</div>
        </div>
        <div class="columna">
            <p>event.keyCode</p>
            <div class="bloque">${e.keyCode}</div>
        </div>
        <div class="columna">
            <p>event.code</p>
            <div class="bloque">${e.code}</div>
        </div>
    </div>
    `
    main.innerHTML = template;
});