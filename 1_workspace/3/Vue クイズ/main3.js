new Vue({
  el: "#app",
  data: {
    feedback: "",
    quiz: {
      text: "これに勝てるじゃんけんの手は何でしょう？",
      image: "Two.jpeg",
      choices: [
        {
          text: "パー",
          isCorrect: false,
          feedback: "残念！パーだと負けちゃうよ。",
        },
        {
          text: "チョキ",
          isCorrect: false,
          feedback: "残念！チョキだとあいこになっちゃうよ。",
        },

        {
          text: "グー",
          isCorrect: true,
          feedback: "正解！グーだとチョキに勝つことができるよ！",
        },
      ],
    },
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback

      if (choice.isCorrect) {
        // 次の問題へ
      }
    },
  },
  computed: {
    quizImagePath() {
      return "./images/" + this.quiz.image
    },
  },
})
