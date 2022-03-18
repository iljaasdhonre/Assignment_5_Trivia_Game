<script setup>
import Question from "./Question.vue";
import { reactive } from "@vue/reactivity";

const currentQuestion = reactive({
  content: "Dit is een testvraag???",
});
</script>

<template>
  <Question :questionProp="currentQuestion" />
</template>

onBeforeMount(() => { // replace url with url from localStorage fetch(); })

<style></style>
