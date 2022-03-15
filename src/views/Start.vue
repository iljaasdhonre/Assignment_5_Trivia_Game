<script setup>

import { ref } from "vue";


const username = ref("");
const password = ref("");
const numberOfQuestions = ref("");
const difficulty = ref("");
const category = ref("");

const displayError = ref("");

const onSubmit = async () => {
  const [error, user] = await apiUserRegister(username.value, password.value);
  if (error !== null) {
      displayError.value = error

  }else {
      console.log("login successful")
  }
};

</script>

<template>
  <main class="container mx-auto">
    <h1 class="mb-3 mt-3 text-2xl">Welcome to the Trivia Game</h1>

    <form @submit.prevent="onSubmit">
      <fieldset class="mb-3">
        <label for="username" aria-label="Username" class="block m-1 underline"
          >Username</label
        >
        <input
          type="text"
          id="username"
          placeholder=" E.g. Mr_Dhonre "
          class="m-1 border border-cyan-600 rounded"
          v-model="username"
        />
      </fieldset>

      <fieldset class="mb-3">
        <label for="password" aria-label="Password" class="block m-1 underline"
          >Password</label
        >
        <input
          type="password"
          id="password"
          placeholder=" *****"
          class="mb-10 border border-cyan-600 rounded"
          v-model="password"
        />
      </fieldset>

        <fieldset class="mb-5">
        <label for="password" aria-label="Password" class="block m-1 underline"
          >Choose your category</label>

        <form class="mb-10"><select id="category">
            <option value="Any Category">Any category</option>
            <option value="Science">Science</option>
            <option value="General Knowledge">General knowledge</option>
     
        </select></form>
        </fieldset>

      <fieldset class="mb-5">
        <label for="password" aria-label="Password" class="block m-1 underline"
          >How difficult should the questions be?</label>
        <input type="radio" id="difficulty" class="m-2 " value="Easy" v-model="difficulty" />Easy 
        <input type="radio" id="difficulty" class="m-2 " value="Medium" v-model="difficulty" />Medium 
        <input type="radio" id="difficulty" class="m-2 " value="Hard" v-model="difficulty" />Hard 
      </fieldset>

      <fieldset class="mb-12">
        <label for="password" aria-label="Password" class="block m-1 underline"
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

      <button type="submit" class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900">Start Trivia Game</button>
        
      

    </form>
    <div v-if="displayError" class="bg-red-500 text-white p-3 m-3">
        <span class="text-lg">Error</span>
        <p>{{ displayError }}</p>
    </div>

  </main>
</template>

<style></style>
