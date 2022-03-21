<script setup>
const props = defineProps({ questionsProp: Array });
</script>

<template>
  <main class="container">
    <table
      class="table-auto border-collapse border border-slate-500"
      aria-label="summary-table"
    >
      <tr>
        <th class="border border-slate-500">Question</th>
        <th class="border border-slate-500">Correct answer</th>
        <th class="border border-slate-500">Your answer</th>
      </tr>
      <tr v-for="(question, index) in questionsProp" :key="index">
        <td class="border border-slate-400">{{ question.answeredQuestion.question }}</td>
        <td class="border border-slate-400">
          {{ question.answeredQuestion.correct_answer }}
        </td>
        <td class="border border-slate-400">{{ question.answer }}</td>
      </tr>
    </table>
  </main>
</template>

<style></style>
