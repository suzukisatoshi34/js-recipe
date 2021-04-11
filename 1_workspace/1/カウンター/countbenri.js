const display = document.getElementById("display");
const plus1Button = document.getElementById("plus1-button");
const minus1Button = document.getElementById("minus1-button");
const kakeru2Button = document.getElementById("kakeru2-button");
let count = 0;

// ボタン要素のonclickハンドラに関数を代入する
plus1Button.onclick = function () {
  // count を更新
  count += 1;
  // count を表示
  display.textContent = count;
};
minus1Button.onclick = function () {
  // count を更新
  count -= 1;
  // count を表示
  display.textContent = count;
};
kakeru2Button.onclick = function () {
  // count を更新
  count *= 2;
  // count を表示
  display.textContent = count;
};
