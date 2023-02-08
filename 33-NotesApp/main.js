const add = document.getElementById('add');
const note_container = document.getElementById('note_container');


add.addEventListener('click',()=>{

    let nota = document.createElement('div');
    nota.classList.add('note');
    nota.innerHTML = `

    <div class="header" style="background-color: #EF5350;">
        <span class="material-symbols-outlined icon edit">
            edit
        </span>
        <span class="material-symbols-outlined icon delete">
            delete
        </span>
    </div>
    <div class="body">
        <textarea name="texto" class="texto" id="texto"  placeholder="Escribe algo ..."></textarea>
    </div>

    `;

    const edit = nota.querySelector('.edit');
    const borrar = nota.querySelector('.delete');
    const notetext = nota.querySelector('.texto');

    borrar.addEventListener('click',()=>{
        console.log('delete');
        nota.remove();
    });

    edit.addEventListener('click',()=>{
        console.log('edit');
        if(notetext.readOnly){
            edit.innerHTML = 'edit';
            notetext.classList.remove('blocked');
            notetext.readOnly = false
        }else{
            edit.innerHTML = 'edit_off';
            notetext.classList.add('blocked');
            notetext.readOnly = true;
        }
        
    })


    note_container.appendChild(nota);


});