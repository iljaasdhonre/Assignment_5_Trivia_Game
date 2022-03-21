<script setup>
import Question from "./Question.vue";
import { ref } from "@vue/reactivity";
import { onBeforeMount, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
let currentQuestion = computed(() => store.state.questions[counter.value]);
let counter = ref(0);
let incorrectAnswers = computed(
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
</script>

<template>
  <main class="m-10">
    <Question :questionProp="currentQuestion" />
    <div v-if="currentQuestion.type === 'multiple'">
      <button
        @click="increaseCounter"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        :value="answer"
      >
        {{ answer }}
      </button>
      <button
        @click="increaseCounter"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        :value="currentQuestion.correct_answer"
      >
        {{ currentQuestion.correct_answer }}
      </button>
    </div>

    <div v-if="currentQuestion.type === 'boolean'">
      <button
        @click="increaseCounter"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        :value="answer"
      >
        {{ answer }}
      </button>
      <button
        @click="increaseCounter"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
        :value="currentQuestion.correct_answer"
      >
        {{ currentQuestion.correct_answer }}
      </button>
    </div>
  </main>
</template>

<style scoped>
button {
  margin: 12px;
}
</style>
