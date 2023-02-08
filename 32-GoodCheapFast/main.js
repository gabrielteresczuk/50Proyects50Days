const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

good.addEventListener('change',()=>{

    console.log(good.checked);

    if(good.checked && cheap.checked){
        fast.checked = false;
    }

});

cheap.addEventListener('change',()=>{

    if(cheap.checked && fast.checked){
        good.checked = false;
    }

});

fast.addEventListener('change',()=>{

    if(fast.checked && good.checked){
        cheap.checked = false;
    }

});