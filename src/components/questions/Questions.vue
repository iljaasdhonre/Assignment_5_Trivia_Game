<script setup>
import Question from "./Question.vue";
import { ref, reactive } from "@vue/reactivity";
import { onBeforeMount, computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const currentQuestion = computed(() => store.state.questions[0]);
let counter = ref(0);
let answers = reactive([]);

onBeforeMount(() => {
  store.dispatch("getQuestions");

  // currentQuestion.value.incorrect_answers.map((incorrect_answers) =>
  //   answers.push(incorrect_answers)
  // );

  // console.log(answers);
  // answers.push(currentQuestion.correct_answer);
});
</script>

<template>
  <main class="m-10">
    <Question :questionProp="currentQuestion" />
  </main>
</template>

<style></style>
