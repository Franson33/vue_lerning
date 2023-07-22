<template>
  <div class="posts-details">
    <h1>Details</h1>
    <p>Display the content with ID - {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show post ID</button>
    </div>
    <div>
      <button @click="goHomeTimeout">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirst">Go to first post</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`The ID of post is - ${route.params.id}`)
}
const goHomeTimeout = () => {
  setInterval(() => {
    router.push("/")
  }, 3000)
}

const goToFirst = () => {
  router.push({
    name: 'postsDetails',
    params: {
      id: 'id1'
    }
  })
}
</script>