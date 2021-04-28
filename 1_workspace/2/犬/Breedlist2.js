const imageElement1 = document.getElementById("dog-image1")
const imageElement2 = document.getElementById("dog-image2")
const imageElement3 = document.getElementById("dog-image3")
const imageElement4 = document.getElementById("dog-image4")
const imageElement5 = document.getElementById("dog-image5")
const button = document.getElementById("button")
const kind = document.getElementById("dog-select")
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
