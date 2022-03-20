<script setup>
import Question from "./Question.vue";
import { ref, reactive } from "@vue/reactivity";
import { getQuestions } from "../../utils/questions-api";
import { onBeforeMount } from "@vue/runtime-core";

let currentQuestion = reactive({});
let questionsList = reactive([]);
let counter = ref(0);
let answers = reactive([]);

onBeforeMount(async () => {
  await getQuestions()
    .then((questions) => (questionsList.value = questions))
    .then(() => (currentQuestion = questionsList.value[0]));
  //console.log(questionsList);

  console.log(currentQuestion);

  currentQuestion.incorrect_answers.map((incorrect_answers) =>
    answers.push(incorrect_answers)
  );

  console.log(answers);
  answers.push(currentQuestion.correct_answer);
});
</script>

<template>
  <Question :questionProp="currentQuestion.value" />
</template>

<style></style>
