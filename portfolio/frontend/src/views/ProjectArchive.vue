<template>
  <!-- Start of Container for Project Archive Section-->
  <section class="flex flex-col h-screen overflow-y-auto">
    <section v-if="isDesktop">
      <ProjectArchiveComp />
    </section>

    <section v-if="!isDesktop">
      <ProjectArchiveCompMobile />
    </section>
  </section>
  <!-- End of Container for Project Archive Section-->
</template>

<script>
  // Import Reactive Dependencies
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useHead } from '@vueuse/head';

  // Import Modular Dependencies
  import ProjectArchiveComp from '../components/Main/ProjectArchiveComp.vue';
  import ProjectArchiveCompMobile from '../components/Mobile/ProjectArchiveCompMobile.vue';

  export default {
    name: 'ProjectArchive', // Component Name
    // Imported Components
    components: {
      ProjectArchiveComp,
      ProjectArchiveCompMobile,
    },
    // Setup Function
    setup() {
      // Meta Tag Setup - For SEO
      useHead({
        title: `${import.meta.env.VITE_APP_PROJECT_ARCHIVE_NAME}`,
        meta: [
          {
            name: 'description',
            content: `${import.meta.env.VITE_APP_PROJECT_ARCHIVE_DESCRIPTION}`,
          },
          {
            property: 'og:title',
            content: `${import.meta.env.VITE_APP_PROJECT_ARCHIVE_NAME}`,
          },
          {
            property: 'og:description',
            content: `${import.meta.env.VITE_APP_PROJECT_ARCHIVE_DESCRIPTION}`,
          },
          {
            property: 'og:image',
            content: `${import.meta.env.VITE_APP_OG_PROJECT_ARCHIVE_IMAGE}`,
          },
          {
            property: 'og:url',
            content: `${import.meta.env.VITE_APP_OG_PROJECT_ARCHIVE_URL}`,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
        ],
      });

      // Define reactive variable
      const isDesktop = ref(window.innerWidth >= 1024); // Check if the window width is greater than or equal to 1024

      // Function to update screen size based on window width
      const updateScreenSize = () => {
        isDesktop.value = window.innerWidth >= 1024;
      };

      // To listen for changes in window width automatically
      onMounted(() => {
        window.addEventListener('resize', updateScreenSize);
      });

      onUnmounted(() => {
        window.removeEventListener('resize', updateScreenSize);
      });
      // End of function to update screen size

      // Return everything that should be accessible in the template
      return {
        isDesktop,
      };
      // End of Return
    },
  };
</script>

<style scoped>
  /* CONTAINER STYLING */

  /* Style for Outer Container */
  .outer-container-project-archive {
    display: flex;
    flex-direction: column; /* Arrange children in a column */
    gap: 90px; /* Space between elements */
    padding: 20px; /* Padding inside the container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    height: 100%; /* Ensure the container takes the full height */
    min-height: 0; /* Allow the container to shrink properly */
  }

  /* CONTAINER STYLING */

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

  /* TAGS STYLING */

  /* Tag Icons for Portfolio */
  .tag-icon {
    display: inline-flex; /* to make container flex inline to align with content */
    justify-content: center;
    border-radius: 30px; /* round out border edges */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
    padding: 5px 10px;
    width: auto;
    font-size: 14px;
  }

  /* TAGS STYLING */
</style>
