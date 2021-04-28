const imageElementoll = document.getElementById("dog-image1")
const button = document.getElementById("button")
const kind = document.getElementById("dog-select")
const maisu = document.getElementById("input-todo2")

button.onclick = function() {
  console.log(kind.value)
  console.log(maisu.value)
  const N = maisu.value
  const code = "https://dog.ceo/api/breed/" + kind.value + "/images/random"
  for (let n = 0; n <= N; n++) {
    const imageElement = document.createElement("img")
    fetch(code)
      .then((res) => {
        return res.json() // 結果を json として読み込む
      })
      .then((data) => {
        imageElement.src = data.message // 画像を表示する
      })
    imageElementoll.appendChild(imageElement)
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
          if (n === 0) {
            imageElement1.src = data.message // 画像を表示する
          }
          if (n === 1) {
            imageElement2.src = data.message
          }
          if (n === 2) {
            imageElement3.src = data.message
          }
          if (n === 3) {
            imageElement4.src = data.message
          }
          if (n === 4) {
            imageElement5.src = data.message
          }
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
          if (n === 0) {
            imageElement1.src = data.message // 画像を表示する
          }
          if (n === 1) {
            imageElement2.src = data.message
          }
          if (n === 2) {
            imageElement3.src = data.message
          }
          if (n === 3) {
            imageElement4.src = data.message
          }
          if (n === 4) {
            imageElement5.src = data.message
          }
        })
    }
  }
}
