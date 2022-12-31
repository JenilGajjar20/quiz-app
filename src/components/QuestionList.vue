<template>
  <div class="py-6 px-8 h-screen">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4>
        Category:
        <span class="font-semibold text-sm">{{
          currentQuestion.category
        }}</span>
      </h4>
      <p class="mt-2 sm:m-0">
        Difficulty:
        <span
          class="text-white py-0.5 px-2 rounded-full text-sm"
          :class="{
            'bg-green-500': currentQuestion.difficulty == 'easy',
            'bg-yellow-500': currentQuestion.difficulty == 'medium',
            'bg-red-500': currentQuestion.difficulty == 'hard',
          }"
          >{{ currentQuestion.difficulty }}</span
        >
      </p>
    </div>
    <div class="space-y-6 py-5">
      <h4 class="font-medium text-xl">{{ currentQuestion.question }}</h4>
      <ul class="space-y-2">
        <li
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          class="hover:bg-gray-200 rounded-md py-2 px-4 cursor-pointer"
          @click="selectAnswer(index)"
          :class="answerClass(index)"
        >
          {{ answer }}
        </li>
      </ul>
      <div class="flex items-center justify-between">
        <button
          class="bg-green-500 rounded py-1 px-4 hover:bg-green-600 text-white"
          :class="{ 'cursor-not-allowed': selectedIndex == null || answered }"
          @click="submitAnswer"
          :disabled="selectedIndex == null || answered"
        >
          Submit
        </button>
        <button
          class="bg-cyan-500 rounded py-1 px-4 hover:bg-cyan-600 text-white"
          @click="nextQuestion"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "QuestionList",
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    increment: Function,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    };
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    shuffleAnswers() {
      this.shuffledAnswers = _.shuffle(this.answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    answerClass(index) {
      let answer = "";
      if (!this.answered && this.selectedIndex === index) {
        answer = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answer = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        console.log("Index: ", index);
        console.log("Selected Index: ", this.selectedIndex);
        console.log("Correct Index: ", this.correctIndex);
        answer = "incorrect";
      }

      return answer;
    },
  },
};
</script>
