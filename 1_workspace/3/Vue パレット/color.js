new Vue({
  el: "#app",
  data: {
    red: 100,
    green: 0,
    blue: 200,
    alpha: 0.3,
    colors: [
      // { red: 0, green: 0 }
    ],
  },
  methods: {
    // colorchange() {
    //   this.red = choicered
    // },
    // 色を選んでミニパレットに追加する
    pickColor() {
      const newColor = {
        red: this.red,
        green: this.green,
        blue: this.blue,
        alpha: this.alpha,
      }
      this.colors.push(newColor)
    },
    // パレットに指定した色を表示する
    showColor(color) {
      this.red = color.red
      this.green = color.green
      this.blue = color.blue
      this.alpha = color.alpha
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`,
      }
    },
  },
})
