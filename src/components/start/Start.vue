<script setup>
import { getCategories } from "../../utils/user-api";
import { ref } from "vue";
import { onBeforeMount } from "@vue/runtime-core";

const apiUrl = "https://opentdb.com/api_category.php";
let categoriesList = ref([]);
let category = ref("");

onBeforeMount(() => {
  getCategories()
    .then((categories) => (categoriesList.value = categories))
    .then(console.log(categoriesList));
});
</script>

<template>
  <h1>Start</h1>

  <select placeholder="Select a category" v-model="category">
    <option value="No category selected" disabled selected>Select your category</option>
    <option v-for="category in categoriesList" :key="category.id" value="category.name">
      {{ category.name }}
    </option>
    <p>{{ category }}</p>
  </select>
</template>

<style></style>
