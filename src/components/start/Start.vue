<script setup>
import { checkUserName } from "../../utils/user-api";
import { ref } from "vue";
import { onBeforeMount } from "@vue/runtime-core";
import { getCategories } from "../../utils/questions-api";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

let categoriesList = ref([]);
const username = ref("");
const numberOfQuestions = ref("10");
const difficulty = ref("easy");
const category = ref("Any Category");

onBeforeMount(async () => {
  await getCategories().then((categories) => (categoriesList.value = categories));
});

const submitUser = async () => {
  await checkUserName(username.value);
};

const getQuestionsUrl = () => {
  const questionsUrl = "https://opentdb.com/api.php";
  let newUrl = "";

  if (category.value === "Any Category") {
    newUrl = `${questionsUrl}?amount=${numberOfQuestions.value}&difficulty=${difficulty.value}`;
  } else {
    newUrl = `${questionsUrl}?amount=${numberOfQuestions.value}&category=${category.value}&difficulty=${difficulty.value}`;
  }
  return newUrl;
};

async function begin() {
  await submitUser();
  const storedUser = localStorage.getItem("user");
  store.commit("setQuestionsUrl", getQuestionsUrl());
  store.commit("setUser", storedUser);
  console.log(JSON.stringify(storedUser));
  //router.push("questions");
  localStorage.clear();
}
</script>

<template>
  <main class="container mx-auto">
    <h1 class="mb-3 mt-3 text-2xl">Welcome to the Trivia Game</h1>

    <form @submit.prevent="begin">
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
            :value="category.id"
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
          value="easy"
          v-model="difficulty"
          checked="checked"
        />Easy
        <input
          type="radio"
          id="difficulty"
          class="m-2"
          value="medium"
          v-model="difficulty"
        />Medium
        <input
          type="radio"
          id="difficulty"
          class="m-2"
          value="hard"
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
