<template>
  <!-- Start of Container for About Section-->
  <section
    class="flex flex-col gap roboto-condensed-regular dark:text-custom-white"
  >
    <p v-html="formattedAboutContent"></p>
  </section>
  <!-- End of Container for About Section-->
</template>

<script>
  // Import Application Dependencies
  import axios from 'axios';

  // Import Reactive Dependencies
  import { ref, onMounted, computed } from 'vue';

  export default {
    name: 'AboutSection', // Component Name
    // Setup Function
    setup() {
      // Define Reactive Variable
      const aboutContent = ref('');

      // Fetch content available for About Section through API route - async due to axios request (backend)
      const fetchAboutContent = async () => {
        try {
          // Fetch content available for About Section through API route
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/about`
          );

          // Check if response contains content - if so, assign it to aboutContent
          if (response.data && response.data.content) {
            aboutContent.value = response.data.content;
          } else {
            console.warn('No about content available in the response.');
          }
        } catch (error) {
          console.error('Error fetching about content:', error);
        }
      };

      // Execute function on DOM mount i.e. when its finish rendering
      onMounted(fetchAboutContent);
      // End of Fetch Function

      // Using regular expressions to replace newline (\n - new line) characters with HTML line breaks (<br/>) automatically
      const formattedAboutContent = computed(() => {
        return aboutContent.value.replace(/\n/g, '<br/>');
      });

      // Return everything that should be accessible in the template
      return {
        formattedAboutContent, // sole return due to computed property - computed property is used to update constant change of my reactive variables
      };
      // End of Return Reactive and Functions
    },
    // End of Setup Function
  };
</script>

<style scoped>
  /* TEXT STYLING */

  /* Gap for Text within Frame */
  .gap {
    gap: 4px;
  }

  /* Roboto Condensed Font */
  .roboto-condensed-regular {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;
    font-size: 16px;
    font-style: normal;
  }

  .roboto-condensed-bold {
    font-family: 'Roboto Condensed', serif;
    font-weight: 670;
    font-optical-sizing: auto;
    font-size: 18px;
    font-style: normal;
  }

  /* TEXT STYLING */
</style>
