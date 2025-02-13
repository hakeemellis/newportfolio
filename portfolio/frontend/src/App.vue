<template>
  <!-- ROUTER VIEW -->
  <section
    class="bg-custom-gray dark:bg-zinc-950 transition-all duration-500 ease-in-out antialiased"
    :style="{ backgroundImage: backgroundImage }"
  >
    <LoadingScreen v-if="isLoading" />
    <section v-if="!isLoading">
      <router-view />
    </section>
  </section>
  <!-- END OF ROUTER VIEW -->
</template>

<script>
  // Import Reactive Dependencies
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import LoadingScreen from './components/Main/LoadingScreen.vue';

  export default {
    name: 'App',
    components: {
      LoadingScreen,
    },
    setup() {

      // Define Reactive Variable: To look if "dark" class has been added to <html> element in index.html
      const isDarkMode = ref(
        document.documentElement.classList.contains('dark')
      );

      // Assigning Variable: To use MutationObserver to detect changes in <html> element
      const observer = new MutationObserver(() => {
        isDarkMode.value = document.documentElement.classList.contains('dark');
      }); // MutationObserver observes changes in the DOM - allows us to add "dark" class to head when change is observed through my toggle in StagFrame.vue

      // To execute observer through an instance when DOM is loaded
      onMounted(() => {
        observer.observe(document.documentElement, {
          attributes: true, // To observe attribute changes in the specified element above alone - in this case, the head element
          attributeFilter: ['class'], // To further filter, by only observing changes in the "class" section
        });
      });

      // To disconnect observer when DOM is unmounted/destroyed - to avoid memory leaks (like on a page refresh)
      onUnmounted(() => {
        observer.disconnect();
      });
      // End of MutationObserver - to look for changes in <html> element

      // Defining Variables: mouse position
      const mouseX = ref(0); // left to right
      const mouseY = ref(0); // top to bottom

      // To update mouse position
      const updateMousePosition = (event) => {
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;
      };

      // To execute updateMousePosition function on DOM load - through event listener
      onMounted(() => {
        window.addEventListener('mousemove', updateMousePosition);
      });
      onUnmounted(() => {
        window.removeEventListener('mousemove', updateMousePosition);
      });

      // Mouse Hover Effect: Really sets a gradient effect on the background of the page to mimic a "mouse hover" effect
      const backgroundImage = computed(() => {
        if (isDarkMode.value) {
          return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #18181b 5%, #18181b 5%, transparent 20%)`;
        } else {
          return `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, #D6D6D6 5%, #EDEDED 45%, transparent 20%)`;
        }
      }); // "computed" is used to update constant change of my reactive variables - basically the function version of "onMounted" allowing for auto-updating of values when change is detected
      // End of Mouse Hover Effect

      // Loading Screen

      // Define Reactive Variable
      const isLoading = ref(true);

      // Execute function on DOM mount
      onMounted(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 2500);
      });
      // End of Loading Screen

      return {
        isLoading,
        backgroundImage,
        isDarkMode,
      };
    },
  };
</script>

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
