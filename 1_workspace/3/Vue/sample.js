new Vue({
  el: "#app",
  data: {
    text: "",
    list: JSON.parse(localStorage["lis"] || "[]"), // ["こんにちは", "おっす"]
  },
  methods: {
    addCard: function() {
      this.list.push(this.text)
      localStorage["lis"] = JSON.stringify(this.list)
    },
  },
})
