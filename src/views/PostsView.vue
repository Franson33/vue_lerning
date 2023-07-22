<script setup>
import { vAutofocus } from '@/directives/autofocus'
</script>
    
<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li>
        <RouterLink to="/postsDetails/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postsDetails/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postsDetails/id3">Post 3</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
  </div>
</template>

<style scoped>
ul {
  margin: 20px;
}
</style>