<script setup>
import { checkUserName } from "../../utils/user-api";
import { ref } from "vue";
import { onBeforeMount } from "@vue/runtime-core";
import { getCategories } from "../../utils/questions-api";

let categoriesList = ref([]);
const username = ref("");
const numberOfQuestions = ref("");
const difficulty = ref("Easy");
const category = ref("Any Category");

onBeforeMount(() => {
  getCategories().then((categories) => (categoriesList.value = categories));
});

const submitUser = async () => {
  await checkUserName(username.value);
};
</script>

<template>
  <main class="container mx-auto">
    <h1 class="mb-3 mt-3 text-2xl">Welcome to the Trivia Game</h1>

    <form @submit.prevent="submitUser">
      <!-- username field -->
      <fieldset class="mb-3">
        <legend>Username</legend>
        <input
          type="text"
          id="username"
          placeholder=" E.g. Mr_Dhonre "
          class="m-1 border border-cyan-600 rounded"
          v-model="username"
        />
      </fieldset>

      <!-- category field -->
      <fieldset class="mb-5">
        <legend>Pick a category</legend>
        <select id="category" v-model="category">
          <option value="Any Category" selected="selected">Any category</option>
          <option
            v-for="category in categoriesList"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </fieldset>

      <!-- choose difficulty -->
      <fieldset class="mb-5">
        <legend>Choose your difficulty level</legend>
        <input
          type="radio"
          id="difficulty"
          class="m-2"
          value="Easy"
          v-model="difficulty"
          checked="checked"
        />Easy
        <input
          type="radio"
          id="difficulty"
          class="m-2"
          value="Medium"
          v-model="difficulty"
        />Medium
        <input
          type="radio"
          id="difficulty"
          class="m-2"
          value="Hard"
          v-model="difficulty"
        />Hard
      </fieldset>

      <fieldset class="mb-12">
        <legend>How many questions would like to answer?</legend>
        <input
          type="radio"
          id="nQuestions"
          class="m-2"
          value="10"
          v-model="numberOfQuestions"
          checked="checked"
        />10

        <input
          type="radio"
          id="nQuestions"
          class="m-2"
          value="20"
          v-model="numberOfQuestions"
        />20

        <input
          type="radio"
          id="nQuestions"
          class="m-2"
          value="30"
          v-model="numberOfQuestions"
        />30

        <input
          type="radio"
          id="nQuestions"
          class="m-2"
          value="40"
          v-model="numberOfQuestions"
        />40

        <input
          type="radio"
          id="nQuestions"
          class="m-2"
          value="50"
          v-model="numberOfQuestions"
        />50
      </fieldset>

      <button class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900">
        Start Trivia Game
      </button>
    </form>
  </main>
</template>

<style></style>
