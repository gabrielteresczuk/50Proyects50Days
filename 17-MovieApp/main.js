const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const card_container = document.getElementById('card_container');
const search = document.getElementById('search');
const form = document.getElementById('form');

cargar();

async function cargar(){

    let response = await fetch(API_URL);
    let data = await response.json();

    cargarCards(data.results);

}

function cargarCards(data){


    let template = data.map(movie =>{
        return `
        <div class="card">
        <img class="card_img" src="${IMG_PATH+movie.poster_path}" alt="">
        <div class="card_info">
          <p class="card_nombre">${movie.title}</p>
          <p class="card_cal">${movie.vote_average}</p>
        </div>
        <div class="card_desc">
          <h4>Descripcion</h4>
          <p>
            ${movie.overview}
          </p>

        </div>
        </div>
        `;
    }).join('');

    card_container.innerHTML = template;

}

form.addEventListener('submit',async(e)=>{
    e.preventDefault();

    if(search.value != ''){
        let res = await fetch(SEARCH_API+search.value);
        let data = await res.json();
        cargarCards(data.results);
    }else{
        cargar();
    }


})