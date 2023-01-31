const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        let sonido = document.getElementById(sound);
        sonido.play();

    })

    document.getElementById('botones').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}