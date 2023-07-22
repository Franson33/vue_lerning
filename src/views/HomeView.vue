<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}
</script>

<template>
  <div class="home">
    <button @click="decrement" class="btn">-</button>
    <span class="cntr">{{ counter }}</span>
    <button @click="increment" class="btn">+</button>
  </div>
</template>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.cntr {
  font-size: 40px;
  margin: 10px;
}
</style>