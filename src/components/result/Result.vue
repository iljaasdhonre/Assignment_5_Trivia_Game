<script setup>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Summary from "./Summary.vue";

const store = useStore();

const questions = computed(() => store.state.questions);
</script>

<template>
  <Summary :questionsProp="questions" />
</template>

<style></style>
