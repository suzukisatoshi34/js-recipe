const inputElement1 = document.getElementById("input1-todo")
const container1 = document.getElementById("cards1-container")
const addButton1 = document.getElementById("add1-button")
const inputElement2 = document.getElementById("input2-todo")
const container2 = document.getElementById("cards2-container")
const addButton2 = document.getElementById("add2-button")
const inputElement3 = document.getElementById("input3-todo")
const container3 = document.getElementById("cards3-container")
const addButton3 = document.getElementById("add3-button")
inputElement1.addEventListener("keypress", test_ivent1)

function test_ivent1(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement1.value)
    container1.append(card)

    // 入力欄を空にする
    inputElement1.value = ""
  }
}
inputElement2.addEventListener("keypress", test_ivent2)

function test_ivent2(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement2.value)
    container2.append(card)

    // 入力欄を空にする
    inputElement2.value = ""
  }
}
inputElement3.addEventListener("keypress", test_ivent3)

function test_ivent3(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement3.value)
    container3.append(card)

    // 入力欄を空にする
    inputElement3.value = ""
  }
}

// 追加ボタンを押したときの処理を登録
addButton1.onclick = function() {
  // カードを作成する
  const card1 = createCard(inputElement1.value)
  container1.append(card1)

  // 入力欄を空にする
  inputElement1.value = ""
}
addButton2.onclick = function() {
  // カードを作成する
  const card2 = createCard(inputElement2.value)
  container2.append(card2)

  // 入力欄を空にする
  inputElement2.value = ""
}
addButton3.onclick = function() {
  // カードを作成する
  const card3 = createCard(inputElement3.value)
  container3.append(card3)

  // 入力欄を空にする
  inputElement3.value = ""
}
// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
