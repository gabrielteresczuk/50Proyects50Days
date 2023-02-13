const codigos = document.querySelectorAll('.codigo');

const prueba = document.getElementById('prueba');


codigos.forEach((codigo,idx) =>{

    codigo.addEventListener('keydown',(e)=>{

        if(e.keyCode == '8'){
            setTimeout(()=>{
                if(idx > 0){
                    codigos[idx-1].focus();
                }

            },10)
        }
    });

    codigo.addEventListener('keyup',(e)=>{

        if(e.keyCode != '8'){



            if (codigo.value > 9){
                codigo.value = 9;
            }
    
            setTimeout(()=>{
                if(idx < 5){
                    codigos[idx+1].focus();
                }
                
            },10);

        }



       
    });


});


