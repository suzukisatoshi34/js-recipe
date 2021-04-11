const figure = document.getElementById("figure")

figure.onclick = function() {
  // figure に rounded クラスを追加する
  figure.classList.toggle("rounded")
}
figure.onmouseover = function() {
  figure.classList.toggle("rounded")
}
