
# Reto de 50 proyectos en 50 dias

![preview](./img/preview.png)


**50 Projects in 50 Days**
***HTML - CSS - JAVASCRIPT***

[Ver demo 👀](https://gabrielteresczuk.github.io/50Proyects50Days/)

## Descripción 📑

Se realiza este proyecto a modo de practica, logrando completar todos los desafios propuestos por [50projects50days](https://github.com/bradtraversy/50projects50days)

Los objetivos a lograr son los siguientes:

 1. Realizar una interfaz para administracion y visualizacion de los mini proyectos
 2. Adjuntar todos los proyectos .
 3. Tomar solo la ayuda visual, sin depender de los codigos.
 4. Intentar mejorar la versión original.
 5. Dar alguna otra pequeña opcion extra o cambio en el diseño.
 6. Recopilar todo lo aprendido en esta guía.

  



### Que aprendí 💡

En esta sección se detallaran, algunas técnicas que se aprendieron a lo largo de la realización del proyecto.

1 - insercion de imagen en etiqueta style

```html
<div  
	class="card active"  
	style="background-image: url('https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_960_720.jpg')">
</div>
```

2 - Clase active en html y en css, se escriben diferentes

```html
<div class="card active" ></div>
```
Sin separar el punto y sin :active
```css
.card.active{flex: 5;}
```

3 -  add y remove class from classlist
```js
SELECTOR.classList.add('active');
SELECTOR.classList.remove('active');
```
4 - escala de negros
```css
.black1{color:#111111}
.black2{color:#222222}
.black3{color:#333333}
```

5 - el origen de donde comenzara la transformacion
```css
transform-origin: top left;
```

6 - filtros de backdrop, para imagenes de background
```css
backdrop-filter: blur(40px);
```

7 - style de javascript
```js
SELECTOR.style.opacity = blur/100;
```

8 - metodo const boxTop = box.getBoundingClientRect().top
```js
box.getBoundingClientRect()
//nos devuelve la posicion del objeto en el window
```

9 - creacion de una capa de color, sobre el background
```css
.SELECTOR::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000070;
}
```

10 - separar una palabra en letras
```js
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
```

11 - boton activo, da la sensasion de pulso
```css
.btn:active{
    transform: scale(0.95);
}
```

12 - play de sonido, y diversos metodos y propiedades
```js
    let sonido = document.getElementById(sound);
    sonido.play();
    sonido.pause()
    sonido.currentTime = 0;
```

13 - multisombra
```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
```

14 - enpoint con varios tipos de header
```js
    //especificar el tipo de header, para la respuesta deseada.
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
```

15 - crear una linea con CSS
```html
<div class="line line1"></div>
```
este lo podes rotar o hacer lo que quieras
```css
.icon .line {
  background-color: coral;
  height: 2px;
  width: 20px;
  position: absolute; /*si o si*/
  top: 10px;
  left: 5px;
}
```

16 - cambio de tema con root
```css
html.dark {
  --primary-color: #fff;
  --secondary-color: #333;
}
```

17 - drag and drop
```html
<img draggable="true">
```
```js
vacio.addEventListener('dragstart',()=>{});
vacio.addEventListener('dragover',()=>{});
vacio.addEventListener('dragenter',()=>{});
vacio.addEventListener('dragleave',()=>{});
vacio.addEventListener('drop',()=>{});
```


## Autor 😎

- Linkedin - [in/gabriel-teresczuk](https://www.linkedin.com/in/gabriel-teresczuk/)
