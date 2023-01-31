const texto = document.getElementById("texto");
const elecciones = document.getElementById("elecciones");

texto.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    texto.value = "";
    listo = true;
    elejir();
  } else {
    let palabras = texto.value.split(",");

    let template = palabras
      .map((el) => {
        if (el !== "") {
          return `<div class="eleccion">${el}</div>`;
        }
      })
      .join("");

    elecciones.innerHTML = template;
  }
});

function elejir() {
  const eleccion = document.querySelectorAll(".eleccion");
  //console.log(eleccion.length);

  let contador = 0;
  const veces = 20;

  const intervalo = setInterval(() => {
    contador++;

    let valor = Math.floor(Math.random() * eleccion.length);

    eleccion[valor].classList.add("prueba");
    let timeout = setTimeout(() => {
      eleccion[valor].classList.remove("prueba");
    }, 100);

    if (contador >= veces) {
      clearTimeout(timeout);
      clearInterval(intervalo);
      eleccion[valor].classList.add("prueba");
    }
  }, 150);

  /*eleccion.forEach(el =>{
        el.style.backgroundColor = 'red';
    })*/
  // console.log(eleccion);
}
