<script setup>
const props = defineProps({ questionProp: Object });
</script>

<template>
  <h5>{{ questionProp.question }}</h5>
</template>

<style></style>
