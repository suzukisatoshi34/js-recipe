const imageElement = document.getElementById("dog-image")
const button = document.getElementById("button")
const kind = document.getElementById("input-todo")
const maisu = document.getElementById("input-todo2")

button.onclick = function() {
  console.log(kind.value)
  console.log(maisu.value)
  const N = maisu.value
  const code = "https://dog.ceo/api/breed/" + kind.value + "/images/random"
  for (let n = 0; n <= N; n++) {
    fetch(code)
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
      })
  }
}

maisu.addEventListener("keypress", test_ivent)

function test_ivent(e) {
  if (e.keyCode === 13) {
    console.log(kind.value)
    console.log(maisu.value)
    const N = maisu.value
    const code = "https://dog.ceo/api/breed/" + kind.value + "/images/random"
    for (let n = 0; n <= N; n++) {
      fetch(code)
        .then((res) => {
          return res.json() // 結果を json として読み込む
        })
        .then((data) => {
          imageElement.src = data.message // 画像を表示する
        })
    }
  }
}

kind.addEventListener("keypress", test_ivent)

function test_ivent(e) {
  if (e.keyCode === 13) {
    console.log(kind.value)
    console.log(maisu.value)
    const N = maisu.value
    const code = "https://dog.ceo/api/breed/" + kind.value + "/images/random"
    for (let n = 0; n <= N; n++) {
      fetch(code)
        .then((res) => {
          return res.json() // 結果を json として読み込む
        })
        .then((data) => {
          imageElement.src = data.message // 画像を表示する
        })
    }
  }
}
