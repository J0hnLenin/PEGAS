<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Счётчик: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>