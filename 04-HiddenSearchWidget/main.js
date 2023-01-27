const search_btn = document.getElementById('search_btn');
const search = document.getElementById('search');

search_btn.addEventListener('click',()=>{

    if(search.classList.contains('activo')){
        search.classList.remove('activo');
    }else{
        search.classList.add('activo');
    }


});

