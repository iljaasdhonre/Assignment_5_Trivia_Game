<script setup>
const props = defineProps([{ questionsProp: Array }]);
</script>

<template>
  <h1>Summary</h1>
  <table aria-label="summary-table">
    <tr>
      <th>Question</th>
      <th>Correct answer</th>
      <th>Your answer</th>
    </tr>
    <tr v-for="(question, index) in questionsProp" :key="index">
      <td>{{ question.question }}</td>
      <td>{{ question.correct_answer }}</td>
    </tr>
  </table>
</template>

<style></style>
