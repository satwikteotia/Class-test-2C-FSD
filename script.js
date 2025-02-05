const startButton = document.getElementById("startButton")
const resetButton = document.getElementById("resetButton")
const modal = document.getElementById("modal")
const doneButton = document.getElementById("doneButton")
const bulbCountInput = document.getElementById("bulbCount")
const bulbContainer = document.getElementById("bulbContainer")

let bulbs = []
let timers = []

startButton.addEventListener("click", () => {
  modal.style.display = "block"
})

doneButton.addEventListener("click", () => {
  const count = Number.parseInt(bulbCountInput.value)
  if (count > 0) {
    createBulbs(count)
    modal.style.display = "none"
    startButton.style.display = "none"
    resetButton.style.display = "inline-block"
  }
})

resetButton.addEventListener("click", () => {
  resetGame()
})

function createBulbs(count) {
  bulbContainer.innerHTML = ""
  bulbs = []
  timers = []

  for (let i = 0; i < count; i++) {
    const bulbWrapper = document.createElement("div")
    bulbWrapper.className = "bulb-wrapper"

    const bulb = document.createElement("div")
    bulb.className = "bulb bulb-off"

    const button = document.createElement("button")
    button.textContent = "OFF"
    button.className = "bulb-button"
    button.addEventListener("click", () => toggleBulb(i))

    const progressContainer = document.createElement("div")
    progressContainer.className = "progress-container"
    const progressBar = document.createElement("div")
    progressBar.className = "progress-bar"
    progressContainer.appendChild(progressBar)

    bulbWrapper.appendChild(bulb)
    bulbWrapper.appendChild(button)
    bulbWrapper.appendChild(progressContainer)

    bulbContainer.appendChild(bulbWrapper)
    bulbs.push({ element: bulb, button: button, progressBar: progressBar })
  }
}

function toggleBulb(index) {
  const { element, button, progressBar } = bulbs[index]
  if (element.classList.contains("bulb-off")) {
    element.classList.remove("bulb-off")
    element.classList.add("bulb-on")
    button.textContent = "ON"
    button.classList.add("on")
    startTimer(index)
  } else {
    turnOffBulb(index)
  }
}

function turnOffBulb(index) {
  const { element, button, progressBar } = bulbs[index]
  element.classList.remove("bulb-on")
  element.classList.add("bulb-off")
  button.textContent = "OFF"
  button.classList.remove("on")
  clearTimeout(timers[index])
  progressBar.style.width = "0"
}

function startTimer(index) {
  const { progressBar } = bulbs[index]
  let width = 0
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval)
      turnOffBulb(index)
    } else {
      width++
      progressBar.style.width = width + "%"
    }
  }, 100)

  timers[index] = setTimeout(() => {
    clearInterval(interval)
    turnOffBulb(index)
  }, 10000)
}

function resetGame() {
  bulbContainer.innerHTML = ""
  startButton.style.display = "inline-block"
  resetButton.style.display = "none"
  timers.forEach((timer) => clearTimeout(timer))
  bulbs = []
  timers = []
}

