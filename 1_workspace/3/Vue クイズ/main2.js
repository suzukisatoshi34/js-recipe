new Vue({
  el: "#app",
  data: {
    feedback: "",
    quiz: {
      text: "この城は何という城でしょう？",
      image: "Maruoka.png",
      choices: [
        {
          text: "松山城",
          isCorrect: false,
          feedback: "残念！松山城は愛媛県にある城だよ。",
        },
        {
          text: "大阪城",
          isCorrect: false,
          feedback: "残念！大阪城は大阪府にある城だよ。",
        },
        {
          text: "姫路城",
          isCorrect: false,
          feedback: "残念！姫路城は兵庫県にある城だよ。",
        },
        {
          text: "丸岡城",
          isCorrect: true,
          feedback: "正解！丸岡城は福井県にある城だよ！",
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
