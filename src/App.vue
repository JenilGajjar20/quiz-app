<template>
  <div class="font-display">
    <Header :correct-answers="correctAnswers" :total="total" />
    <QuestionList
      v-if="questions.length"
      :current-question="questions[index]"
      :next-question="next"
      :increment="increment"
    />
    <Shimmer v-else />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import QuestionList from "./components/QuestionList.vue";
import Shimmer from "./components/Shimmer.vue";

export default {
  name: "App",
  components: { Header, QuestionList, Footer, Shimmer },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswers: 0,
      total: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.correctAnswers++;
      }
      this.total++;
    },
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.questions = data.results;
      });
  },
};
</script>

