const imageElements = document.getElementById("container")
const button = document.getElementById("button")
const kind = document.getElementById("dog-select")
const maisu = document.getElementById("input-todo2")

const hyouji = function() {
  console.log(kind.value)
  console.log(maisu.value)
  const N = maisu.value
  const code = "https://dog.ceo/api/breed/" + kind.value + "/images/random"
  for (let n = 0; n <= N; n++) {
    const imageElement = document.createElement("img")
    imageElement.src = ""
    fetch(code)
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
      })

    imageElements.appendChild(imageElement)
  }
}
button.onclick = function() {
  hyouji()
}

maisu.addEventListener("keypress", test_ivent)

function test_ivent(e) {
  if (e.keyCode === 13) {
    hyouji()
  }
}

kind.addEventListener("keypress", test_ivent)

function test_ivent(e) {
  if (e.keyCode === 13) {
    hyouji()
  }
}
