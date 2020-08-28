const squares = document.querySelectorAll('.square')
const moles = document.querySelectorAll('.mole')
const timeleft = document.getElementById('time-left')
let score = document.getElementById('score')
let result = 0
var hitPosition = ''
var currentTime = timeleft.textContent

function randomSquare() {
  squares.forEach(className => {
    className.classList.remove('mole')
  })

  let randomPosition = squares[Math.floor(Math.random() * squares.length)]
  randomPosition.classList.add('mole')

  hitPosition = randomPosition.id
}

squares.forEach(square => {
  square.addEventListener('mouseup', () => {
    if(square.id === hitPosition) {
      result++
      score.textContent = result
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

function countDown() {
  currentTime--
  timeleft.textContent = currentTime > 0 ? currentTime : 0
  if (currentTime === 0) {
    alert('Fim de jogo!!!\nPontuação ' + result)
    clearInterval(timerId)
  }
}

let timerId = setInterval(countDown , 1000)
moveMole()

