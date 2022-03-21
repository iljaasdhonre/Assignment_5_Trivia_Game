<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onBeforeMount } from "@vue/runtime-core";
import Summary from "./Summary.vue";

const store = useStore();
const router = useRouter();

const questions = computed(() => store.state.userAnswers);
let user;
const score = computed(() => store.state.score);

onBeforeMount(() => {
  user = store.state.user;
});

const resetGame = (action) => {
  if (score.value > user[0].highScore.value) {
    store.dispatch("updateHighScore", score.value);
  }

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
  <div>
    <h2>Your score: {{ score }}</h2>
  </div>
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
