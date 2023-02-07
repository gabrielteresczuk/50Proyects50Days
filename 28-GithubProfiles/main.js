const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.getElementById('container');

const APIURL = 'https://api.github.com/users/'

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let valor = search.value;
    console.log(valor);

    if(valor){

        search.value = '';
        buscar(valor);
    }
});

buscar('gabrielteresczuk');

async function buscar(valor){
        try {
            
            let res = await fetch(APIURL+valor);
            let data = await res.json();
            console.log(data);

            let resRepo = await fetch(APIURL + valor + '/repos?sort=created');
            let dataRepo = await resRepo.json();

            //console.log(dataRepo);

            const dataRepo5 = dataRepo.slice(0, 5);
            console.log(dataRepo5);

            let template = `
            <div>
                <img src="${data.avatar_url}" class="img" alt="">
            </div>
            <div class="info_containter">
                <h1 class="name">${data.name}</h1>

                <p class="text">${data.bio}</p>
                <ul class="statics">
                    <li>${data.followers} <b>Followers</b></li>
                    <li>${data.following} <b>Following</b></li>
                    <li>${dataRepo.length} <b>Repos</b></li>
                </ul>
                <div class="tags">
                    ${dataRepo5.map(el=>{
                        return `<div class="tag">${el.name}</div>`;
                    }).join('')}
                    
                </div>
            </div>
            `;

            container.innerHTML = template;

        } catch (error) {
            
        }
}