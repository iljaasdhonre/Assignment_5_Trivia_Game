<script setup>
import { ref } from "vue";
import { apiUserRegister } from "../utils/users";

const username = ref("");
const numberOfQuestions = ref("");
const difficulty = ref("");
const category = ref("");
const displayError = ref("");


const onSubmit = async () => {
  const [error, user] = await apiUserRegister(username.value);
  console.log("ERR", error);
  console.log("USER", user);

  if (error !== null) {
    displayError.value = error;
  } else {
    console.log("successful");
  }
};

</script>

<template>
  <main class="container mx-auto">
    <h1 class="mb-3 mt-3 text-2xl">Welcome to the Trivia Game</h1>

    <form @submit.prevent="onSubmit">
      <!-- username field -->
      <fieldset class="mb-3">
        <label for="username" aria-label="Username" class="block m-1 underline">
          Username
        </label>
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
        <label
          for="categories"
          aria-label="Categories"
          class="block m-1 underline"
        >
          Choose your category 
        </label>
        <select id="category" v-model="category" > <!-- inserting a default would be nice -->
          <option value="Any Category" selected="selected">Any category</option>
          <option value="Science">Science</option>
          <option value="General Knowledge">General knowledge</option>
        </select>
      </fieldset>

      <!-- choose difficulty -->
      <fieldset class="mb-5">
        <label class="block m-1 underline"
          >How difficult should the questions be?</label
        >
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
        <label
          for="numberOfQuestions"
          aria-label="numberOfQuestions"
          class="block m-1 underline"
          >Enter the number of questions you would like to have.</label
        >
        <input
          type="text"
          id="nQuestions"
          placeholder="E.g. 15"
          class="m-1 border border-cyan-600 rounded"
          v-model="numberOfQuestions"
        />
      </fieldset>

      <button
        type="submit"
        class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
      >
        Start Trivia Game
      </button>
    </form>
    <div v-if="displayError" class="bg-red-500 text-white p-3 m-3">
      <span class="text-lg">Error</span>
      <p>{{ displayError }}</p>
    </div>

    <p>
      {{ username }} - {{ category }} - {{ difficulty }} -
      {{ numberOfQuestions }}
    </p>
  </main>
</template>

<style></style>
