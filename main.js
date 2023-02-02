console.log(db);

const card_container = document.getElementById('card_container');

let template = db.map((el,i)=>{
    return `
    <div class="card">
        <img class="card_img" src="img/${el.imagen}" alt="">
        <img class="card_gif" src="img/${el.video}" alt="">
        <p class="card_titulo"><b>#${i+1}</b> ${el.nombre}</p>
        <a class="card_a" href="${el.link}" target="_blank" class="btn">
            <span class="material-symbols-outlined">
            open_in_browser</span>
        Abrir</a>
    </div>
    `
}).join('');

card_container.innerHTML = template;