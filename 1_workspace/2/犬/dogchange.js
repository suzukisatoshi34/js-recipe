const imageElement = document.getElementById("dogchange-image")
const another = document.getElementById("another")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

another.textContent = "他のワンちゃん"

another.onclick = function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
