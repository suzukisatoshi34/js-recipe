const figure = document.getElementById("figure")

const sikakusannkaku = function() {
  // figure に rounded クラスを追加する
  figure.classList.remove("square")
  figure.classList.add("triangle")
}
const sannkakumaru = function() {
  figure.classList.remove("triangle")
  figure.classList.add("square")
  figure.classList.add("rounded")
}
const marusikaku = function() {
  figure.classList.remove("rounded")
}
let n = 1
figure.onclick = function() {
  if (n % 3 === 1) {
    sikakusannkaku()
  }
  if (n % 3 === 2) {
    sannkakumaru()
  }
  if (n % 3 === 0) {
    marusikaku()
  }
  n += 1
  console.log(n)
}
