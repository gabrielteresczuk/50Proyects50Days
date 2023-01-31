const frase = document.getElementById('frase');
const boton = document.getElementById('boton');

boton.addEventListener('click',()=>{
    buscarFrase();
});

async function buscarFrase(){

    const config = {
        headers: {
          Accept: 'application/json',
        },
      }

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    frase.innerText = data.joke
}