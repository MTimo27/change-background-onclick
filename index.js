let colors = [
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
  "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
]

let colorsLenght = colors.length
let i = -1
let buttonClicks = 0
let title = document.getElementById("firstTitle")

function changeColor() {
  buttonClicks++

  if (buttonClicks === 1)
    title.textContent = `Yay you pressed the button ${buttonClicks} time`
  else
    title.textContent = `Yay you pressed the button ${buttonClicks} times`

  title.classList.add("clicked")
  i++
  if (i < colorsLenght) {
    document.getElementById("body").style.backgroundImage =
      colors[i]
  } else {
    i = 0
    document.getElementById("body").style.backgroundImage =
      colors[i]
  }
  console.log(i)
}
