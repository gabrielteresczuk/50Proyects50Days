const contenedor = document.getElementById('contenedor');
const search = document.getElementById('search');

const url = 'https://randomuser.me/api?results=50';


datos();

let datosDB = [];

async function datos(){

    let res = await fetch(url);
    let data = await res.json();

    datosDB = data.results;
    //console.log(data.results[0]);


    cargar(data.results);


}

search.addEventListener('keyup',(e)=>{

    console.log(search.value);

    let newDatos = datosDB.filter( (el,i) =>{

        let texto = el.name.first.toLowerCase()+ ' ' +el.name.last.toLowerCase() + ' ' + el.location.city.toLowerCase() + ' ' + el.location.country.toLowerCase();

        if( texto.includes(search.value) ){
            return el;
        }
    });

    cargar(newDatos);

});


function cargar(data){

    let template = data.map((el,i)=>{
        return `
        <div class="card">
        <img src=${data[i].picture.medium} alt="">
        <div class="datos">
            <h3>${data[i].name.first} ${data[i].name.last}</h3>
            <small>${data[i].location.city}, ${data[i].location.country}</small>
        </div>
        </div>
        `;
    }).join('');

    contenedor.innerHTML = template;

}
