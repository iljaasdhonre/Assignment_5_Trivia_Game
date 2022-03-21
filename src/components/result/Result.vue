<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import Summary from "./Summary.vue";

const store = useStore();
const router = useRouter();

const questions = computed(() => store.state.questions);

const resetGame = (action) => {
  store.commit("reSetScore", 0);
  store.commit("reSetUserAnswers", []);

  if (action === "end") {
    store.commit("setQuestionsUrl", "");
    router.push("/");
  } else {
    router.push("questions");
  }
};
</script>

<template>
  <Summary :questionsProp="questions" />
  <button
    @click="resetGame('end')"
    class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
  >
    End
  </button>
  <button
    @click="resetGame('restart')"
    class="bg-cyan-600 text-white p-3 rounded border-4 border-gray-900"
  >
    Try Again
  </button>
</template>

<style scoped>
button {
  margin: 12px;
}
</style>
