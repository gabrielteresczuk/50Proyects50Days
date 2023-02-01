const twitter = document.getElementById('twitter');
const youtube = document.getElementById('youtube');
const facebook = document.getElementById('facebook');

const tc = 12000;
const yc = 5000;
const fc = 7500;
const velocidad = 100;

let c = 0;

    let interval = setInterval(()=>{
        c++
        twitter.innerText = Math.round(c * (tc/velocidad)) ;
        youtube.innerText = Math.round (c * (yc/velocidad));
        facebook.innerText = Math.round (c * (fc/velocidad));

        if(c == velocidad){
            clearInterval(interval);
        }
    },10);


    //twitter.innerText = tc;

