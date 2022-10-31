let drLivesey = document.querySelector('img#drLivesey')
let inimigo = document.querySelector('img#inimigo')
let gameOver = document.querySelector('#hate')
let count = 0
let alreadyJump = false

const pulo = new Audio()
pulo.src = 'pulo.mp3'
pulo.volume = 0.5
pulo.pause()

const music = new Audio()
music.src = 'Dr.Livesey.music.mp3'
music.play()
music.volume = 0.05

const dead = new Audio()
dead.src = 'dead.song.mp3'

const touch = addEventListener("touchstart", (e) => {
  if (e.changedTouches) {
    jump()
    pulo.play()
  }
})

const control = addEventListener("keydown", (e) => {
  if ((e.code === 'Space') || (e.code === "ArrowUp")) {
    jump()
    pulo.play()
  }
});

function jump() {
  if (!drLivesey.classList.contains("jump")) {
    drLivesey.classList.add("jump")
    alreadyJump === true;
  }

  setTimeout(function () {
    drLivesey.classList.remove("jump")
    alreadyJump === false;
  }, 500)
}

const loop = setInterval(() => {
  const inimigoPosition = inimigo.offsetLeft;
  const drLivese = +window.getComputedStyle(drLivesey).bottom.replace('px', '')
  if (inimigoPosition <= 100 && inimigoPosition > 20 && drLivese < 60) {
    inimigo.style.animation = 'none'
    inimigo.style.left = `${inimigoPosition}px`
    drLivesey.style.animation = 'none'
    drLivesey.style.bottom = `${drLivese}px`
    clearInterval(this.counter)
    clearInterval(this.counter2)
    gameOver.style.display = 'block'
    placar.innerHTML = `GAME OVER<br>Sua pontuação foi: ${count}`
    pulo.pause()
    music.pause()
  }
}, 10)

document.querySelector('#botao').addEventListener('click', function () {
  window.location.reload()
  return false
})

let demais = new Audio()
demais.src = 'demais.sound.mp3'

let countSong = new Audio()
countSong.src = 'count.song.mp3'

this.counter = setInterval(function () {
  if (count <= 200) {
    count++
    test.innerHTML = `${count}`
  }

  if (count >= 100 && count <= 100 || count >= 200 && count <= 200 || count >= 300 && count <= 300 || count >= 400 && count <= 400 || count >= 500 && count <= 500 || count >= 600 && count <= 600 || count >= 700 && count <= 700 || count >= 800 && count <= 800 || count >= 900 && count <= 900) {
    countSong.play()
  } else if (count >= 1000 && count <= 1000) {
    demais.play()
  }

  if (maxCount < count) {
    maxCount = count
  } 
  best.innerHTML = `${count}`
}, 1000)

this.counter2 = setInterval(function () {
  if (count > 200) {
    count++
    test.innerHTML = `${count}`
  }
}, 400)