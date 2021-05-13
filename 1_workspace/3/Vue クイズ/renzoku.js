new Vue({
  el: "#app",
  data: {
    feedback: "",
    n: 0,
    next: "正解しないと次の問題に進めないよ",
    quiz: {
      text: "この星の名前は何でしょう？",
      image: "Ganymede.jpg",
      choices: [
        {
          text: "ゴリアテ",
          isCorrect: false,
          feedback:
            "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
        },
        {
          text: "ゼニガメ",
          isCorrect: false,
          feedback:
            "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
        },
        {
          text: "ガニメデ",
          isCorrect: true,
          feedback: "正解！ガニメデは、木星の第三惑星だよ！",
        },
      ],
    },
    nextquiz1: {
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
    nextquiz2: {
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
        this.next = "次の問題へ"
      }
    },
    nextquiz(tugi) {
      if (this.next === "次の問題へ") {
        if (this.quiz === this.nextquiz1) {
          this.quiz = this.nextquiz2
        } else if (this.quiz === this.nextquiz2) {
        } else {
          this.quiz = this.nextquiz1
        }
        this.feedback = ""
        this.next = "正解しないと次の問題へ進めないよ"
      }
    },
  },
  computed: {
    quizImagePath() {
      return "./images/" + this.quiz.image
    },
  },
})
