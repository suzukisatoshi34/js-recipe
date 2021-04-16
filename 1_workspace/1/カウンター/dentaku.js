const display = document.getElementById("display")
const plus1Button = document.getElementById("1-button")
const plus2Button = document.getElementById("2-button")
const plus3Button = document.getElementById("3-button")
const plus4Button = document.getElementById("4-button")
const plus5Button = document.getElementById("5-button")
const plus6Button = document.getElementById("6-button")
const plus7Button = document.getElementById("7-button")
const plus8Button = document.getElementById("8-button")
const plus9Button = document.getElementById("9-button")
const plus0Button = document.getElementById("0-button")
const plusButton = document.getElementById("+-button")
const minusButton = document.getElementById("--button")
const multiButton = document.getElementById("×-button")
const divButton = document.getElementById("÷-button")
const equalButton = document.getElementById("=-button")
let count = 0

// ボタン要素のonclickハンドラに関数を代入する

plus1Button.onclick = function() {
  // count を更新
  count = count * 10 + 1
  // count を表示
  display.textContent = count
}
plus2Button.onclick = function() {
  // count を更新
  count = count * 10 + 2
  // count を表示
  display.textContent = count
}
plus3Button.onclick = function() {
  // count を更新
  count = count * 10 + 3
  // count を表示
  display.textContent = count
}
plus4Button.onclick = function() {
  // count を更新
  count = count * 10 + 4
  // count を表示
  display.textContent = count
}
plus5Button.onclick = function() {
  // count を更新
  count = count * 10 + 5
  // count を表示
  display.textContent = count
}
plus6Button.onclick = function() {
  // count を更新
  count = count * 10 + 6
  // count を表示
  display.textContent = count
}
plus7Button.onclick = function() {
  // count を更新
  count = count * 10 + 7
  // count を表示
  display.textContent = count
}
plus8Button.onclick = function() {
  // count を更新
  count = count * 10 + 8
  // count を表示
  display.textContent = count
}
plus9Button.onclick = function() {
  // count を更新
  count = count * 10 + 9
  // count を表示
  display.textContent = count
}
plus0Button.onclick = function() {
  count = count * 10 + 0
  display.textContent = count
}
plusButton.onclick = function() {
  count1 = count
  count = 0
  display.textContent = "+"
  equalButton.onclick = function() {
    count = count + count1
    display.textContent = count
  }
}
minusButton.onclick = function() {
  count1 = count
  count = 0
  display.textContent = "-"
  equalButton.onclick = function() {
    count = count1 - count
    display.textContent = count
  }
}
multiButton.onclick = function() {
  count1 = count
  count = 0
  display.textContent = "×"
  equalButton.onclick = function() {
    count = count1 * count
    display.textContent = count
  }
}
divButton.onclick = function() {
  count1 = count
  count = 0
  display.textContent = "÷"
  equalButton.onclick = function() {
    count = count1 / count
    display.textContent = count
  }
}
