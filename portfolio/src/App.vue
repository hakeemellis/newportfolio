<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

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

  /* ORIGINAL ATTEMPT FOR DARK MODE MOUSE HOVER EFFECT
  // Check if dark mode is enabled
  const isDarkMode = computed(() => {
    return document.documentElement.classList.contains('dark');
  });

  // Computed property for background image
  const backgroundImage = computed(() => {
    if (isDarkMode.value) {
      return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #2D3748 5%, #1A202C 45%, transparent 20%)`;
    } else {
      return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #D6D6D6 5%, #EDEDED 45%, transparent 20%)`;
    }
  });
  console.log(isDarkMode.value);
  */

  // Reactive variable to track dark mode state
  const isDarkMode = ref(document.documentElement.classList.contains('dark'));

  // Watch for changes in the dark mode class on the <html> element
  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
  });

  onMounted(() => {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  // Computed property for background image
  const backgroundImage = computed(() => {
    if (isDarkMode.value) {
      return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #18181b 5%, #18181b 5%, transparent 20%)`;
    } else {
      return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #D6D6D6 5%, #EDEDED 45%, transparent 20%)`;
    }
  });
</script>

<template>
  <section
    class="bg-custom-gray dark:bg-zinc-950 transition-all duration-500 ease-in-out"
    :style="{ backgroundImage: backgroundImage }"
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
