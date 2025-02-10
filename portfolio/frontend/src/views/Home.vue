<template>
  <!-- START OF MASTER CONTAINER -->
  <section
    class="flex flex-col sm:flex-col lg:flex-row justify-center gap-4 h-screen overflow-y-auto"
  >
    <!-- START OF LEFT CONTAINER -->
    <section
      v-if="isDesktop"
      class="flex-[0.42] lg:sticky top-0 h-screen max-w-4xl"
    >
      <StagFrame />
    </section>
    <!-- END OF LEFT CONTAINER -->

    <!-- START OF RIGHT CONTAINER -->
    <section
      v-if="isDesktop"
      class="outer-container-home flex-[0.58] mt-4 max-w-2xl"
    >
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </section>
    <!-- END OF RIGHT CONTAINER -->

    <!-- START OF MOBILE VERSION FOR FIRST CONTAINER -->
    <section v-if="!isDesktop" class="flex-[0.20] top-0">
      <StagFrameMobile />
    </section>

    <!-- Mobile Nav Frame -->
    <section
      v-if="!isDesktop"
      class="sticky top-5 flex flex-row inner-gap mx-auto p-2 px-8 portfolio-button dark:bg-zinc-950 bg-zinc-100 dark:text-slate-100 dark:shadow-md dark:shadow-slate-400 shadow-md shadow-zinc-400 transition-all duration-500 ease-in-out"
    >
      <button
        @click="scrollToSection('about')"
        class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out robotospecial"
        style="font-size: 20px"
      >
        About
      </button>

      <button
        @click="scrollToSection('experience')"
        class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out robotospecial"
        style="font-size: 20px"
      >
        Experience
      </button>

      <button
        @click="scrollToSection('projects')"
        class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out robotospecial"
        style="font-size: 20px"
      >
        Projects
      </button>
    </section>
    <!-- End of Mobile Nav Frame -->

    <!-- END OF MOBILE VERSION FOR FIRST CONTAINER -->

    <!-- START OF MOBILE VERSION FOR SECOND CONTAINER -->
    <section
      v-if="!isDesktop"
      class="outer-container-home flex-[0.80] mt-4 mx-auto"
    >
      <AboutSectionMobile />
      <ExperienceSectionMobile />
      <ProjectsSectionMobile />
      <FooterSectionMobile />
    </section>
    <!-- END OF MOBILE VERSION FOR SECOND CONTAINER -->
  </section>
  <!-- END OF MASTER CONTAINER -->
</template>

<script>
  // Import Reactive Dependencies
  import { ref, onMounted, onUnmounted } from 'vue';

  // Import Modular Dependencies
  import StagFrame from '../components/Main/StagFrame.vue';
  import AboutSection from '../components/Main/AboutSection.vue';
  import ExperienceSection from '../components/Main/ExperienceSection.vue';
  import ProjectsSection from '../components/Main/ProjectsSection.vue';
  import FooterSection from '../components/Main/FooterSection.vue';

  // Import Mobile Modular Dependencies
  import StagFrameMobile from '../components/Mobile/StagFrameMobile.vue';
  import AboutSectionMobile from '../components/Mobile/AboutSectionMobile.vue';
  import ExperienceSectionMobile from '../components/Mobile/ExperienceSectionMobile.vue';
  import ProjectsSectionMobile from '../components/Mobile/ProjectsSectionMobile.vue';
  import FooterSectionMobile from '../components/Mobile/FooterSectionMobile.vue';

  export default {
    name: 'Home', // Component Name
    // Imported Components
    components: {
      StagFrame,
      AboutSection,
      ExperienceSection,
      ProjectsSection,
      FooterSection,
      StagFrameMobile,
      AboutSectionMobile,
      ExperienceSectionMobile,
      ProjectsSectionMobile,
      FooterSectionMobile,
    },
    // Setup Function
    setup() {
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

      // Function to scroll to desired section
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        console.log('Scrolling to section:', sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      console.log('Scroll to Section Function:', scrollToSection);
      // End of scrollToSection

      // Return everything that should be accessible in the template
      return {
        isDesktop,
        scrollToSection,
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

  /* Inner Frame Gap for Stagnant Frame Elements */
  .inner-gap {
    gap: 20px;
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

  p,
  .robotospecial {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 23px;
  }

  /* TEXT STYLING */

  /* TAGS STYLING */

  /* Button Styling for Portfolio */
  .portfolio-button {
    justify-content: center;
    border-radius: 30px; /* round out border edges */
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
  }

  /* TAGS STYLING */
</style>
