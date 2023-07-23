<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const isModalVisible = ref(true)

const showModal = () => {
  isModalVisible.value = true
}
</script>

<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal">Show modal</button>
    <Modal v-if="isModalVisible" v-model="isModalVisible" title="Look mom, it's modal">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eaque consequuntur architecto laboriosam eos
        accusamus sed doloremque, autem est soluta enim ab id consectetur tenetur commodi adipisci cum dicta? Inventore!
      </p>
    </Modal>
  </div>
</template>

<style>
.modal {
  background-color: bisque;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>