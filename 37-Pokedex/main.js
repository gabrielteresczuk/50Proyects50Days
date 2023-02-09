const container = document.getElementById('container');

const maximo = 151;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

cargar()



async function cargar(){

        for (let index = 1; index <= maximo; index++) {
            await crearCarta(index);
            
        }




}

async function crearCarta(index){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+index);
    let data = await res.json();

    console.log(data);


    const color = colors[data.types[0].type.name];
    

    let template = document.createElement('div');
    template.classList.add('card');
    template.style.backgroundColor = color;
    template.innerHTML = `
            <img class="img" src=${data.sprites.front_default} alt="">
            <div class="descr">
                <div class="numero">#${data.id.toString().padStart(3,'0')}</div>
                <div class="nombre">${data.name}</div>
                <small class="tipo">Type: ${data.types[0].type.name}</small>
            </div>`;

    container.appendChild(template);

}