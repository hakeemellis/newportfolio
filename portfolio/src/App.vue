<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  // Defining variables for mouse position
  const mouseX = ref(0);
  const mouseY = ref(0);

  // To update mouse position
  const updateMousePosition = (event) => {
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
  };

  // Event listener to update mouse position
  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
  });
</script>

<template>
  <section
    class="bg-custom-gray"
    :style="{
      backgroundImage: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #D6D6D6 5%, #EDEDED 45%, transparent 20%)`,
    }"
  >
    <router-view />
  </section>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
