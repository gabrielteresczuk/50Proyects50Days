const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const colores = 504;

for (let index = 0; index < colores; index++) {
    
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');

    cuadrado.addEventListener('mouseover',()=>{
        let color = colors[Math.floor(Math.random() * colors.length)];
        cuadrado.style.backgroundColor = color;
        cuadrado.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

    });

    cuadrado.addEventListener('mouseout',()=>{
        cuadrado.style.backgroundColor = '#1d1d1d';
        cuadrado.style.boxShadow = '0 0 2px #000';
    });

    container.appendChild(cuadrado);
    
}