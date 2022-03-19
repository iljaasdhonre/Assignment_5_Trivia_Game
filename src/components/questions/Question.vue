<script setup>
const props = defineProps({ questionProp: Object });
</script>

<template>
  <h3>Question text</h3>
  <h5>{{ questionProp.content }}</h5>
</template>

<style></style>
