<script setup>
import { reactive, computed, watch, onMounted } from 'vue'
import { useHomeLifecycle } from './lifecycle'

const appTitle = 'My cool app written in Vue'

const counterData = reactive({
  counter: 0,
  title: 'My counter'
})

watch(() => counterData.counter, (current, prev) => {
  if (counterData.counter >= 20) {
    alert("It's 20")
  }
})

onMounted(() => {
  console.log('LOOK MOM, ITS ONMOUNTED 1!');
})

const oddOrEven = computed(() => {
  return (counterData.counter & 1) === 0 ? 'even' : 'odd'
})

const increment = (amount) => {
  counterData.counter += amount
}
const decrement = (amount) => {
  counterData.counter -= amount
}

onMounted(() => {
  console.log('LOOK MOM, ITS ONMOUNTED 2!');
})

useHomeLifecycle()
</script>

<template>
  <div class="home">

    <h2>{{ counterData.title }}:</h2>

    <h2>{{ appTitle }}</h2>

    <button @click="decrement(2)" class="btn">--</button>
    <button @click="decrement(1)" class="btn">-</button>
    <span class="center">{{ counterData.counter }}</span>
    <button @click="increment(1)" class="btn">+</button>
    <button @click="increment(2)" class="btn">++</button>

    <p>The counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h2>Edit title</h2>
      <input v-model="counterData.title" type=" text" />
    </div>

  </div>
</template>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.center {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>