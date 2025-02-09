<template>
  <!-- START OF MASTER CONTAINER -->
  <section
    class="flex flex-row flex-1 justify-center gap-4 h-screen overflow-y-auto"
  >
    <!-- START OF LEFT CONTAINER -->
    <section class="flex-[0.42] sticky top-0 h-screen max-w-4xl">
      <StagFrame />
    </section>
    <!-- END OF LEFT CONTAINER -->

    <!-- START OF RIGHT CONTAINER -->
    <section class="outer-container-home flex-[0.58] mt-4 max-w-2xl">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </section>
    <!-- END OF RIGHT CONTAINER -->
  </section>
  <!-- END OF MASTER CONTAINER -->
</template>

<script>
  // Import Reactive Dependencies
  import { ref } from 'vue';

  // Import Modular Dependencies
  import StagFrame from '../components/Main/StagFrame.vue';
  import AboutSection from '../components/Main/AboutSection.vue';
  import ExperienceSection from '../components/Main/ExperienceSection.vue';
  import ProjectsSection from '../components/Main/ProjectsSection.vue';
  import FooterSection from '../components/Main/FooterSection.vue';

  export default {
    name: 'Home', // Component Name
    // Imported Components
    components: {
      StagFrame,
      AboutSection,
      ExperienceSection,
      ProjectsSection,
      FooterSection,
    },
    // Setup Function
    setup() {
      // Define reactive variable
      const message = ref('This is a default reusable Vue component!');

      // Return everything that should be accessible in the template
      return {
        message,
      };
      // End of Return
    },
    // End of Setup
  };
</script>

<style scoped>
  /* CONTAINER STYLING */

  /* Style for Outer Container */
  .outer-container-home {
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
