<script setup>
import Question from "./Question.vue";
import { ref } from "@vue/reactivity";
import { onBeforeMount, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const currentQuestion = computed(() => store.state.questions[counter.value]);
const counter = ref(0);
const incorrectAnswers = computed(
  () => store.state.questions[counter.value].incorrect_answers
);

onBeforeMount(() => {
  store.dispatch("getQuestions");
});

const increaseCounter = () => {
  if (counter.value == store.state.questions.length - 1) {
    router.push("result");
  } else {
    counter.value += 1;
  }
};

function saveAnswer(value) {
  store.dispatch("addAnswer", [currentQuestion.value, value]);
  if (value === currentQuestion.value.correct_answer) {
    store.dispatch("updateScore");
  }
  increaseCounter();
}
</script>

<template>
  <main class="m-10">
    <Question :questionProp="currentQuestion" />
    <div v-show="currentQuestion.type === 'multiple'">
      <button
        @click="saveAnswer(answer)"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        :value="answer"
      >
        {{ answer }}
      </button>
      <button
        @click="saveAnswer(currentQuestion.correct_answer)"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        :value="currentQuestion.correct_answer"
      >
        {{ currentQuestion.correct_answer }}
      </button>
    </div>

    <div v-show="currentQuestion.type === 'boolean'">
      <button
        @click="saveAnswer('True')"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        :value="true"
      >
        True
      </button>
      <button
        @click="saveAnswer('False')"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        :value="false"
      >
        False
      </button>
    </div>
  </main>
</template>

<style scoped>
button {
  margin: 12px;
}
</style>
