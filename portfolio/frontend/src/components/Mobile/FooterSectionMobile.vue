<template>
  <!-- Start of Container for Footer Section -->
  <section class="flex mx-auto px-5 p-7">
    <p class="roboto-condensed-regular gap dark:text-custom-white">
      Designed in <b class="dark:text-rose-500 text-cyan-800">Figma</b>. Coded
      in <b class="dark:text-rose-500 text-cyan-800">Visual Studio Code</b> by
      Me :). Built using
      <b class="dark:text-rose-500 text-cyan-800"
        >MEVN (MongoDB, Express, Vue, Node) Stack </b
      >and styled using
      <b class="dark:text-rose-500 text-cyan-800">TailwindCSS</b>.
      <br />
      <br />
      Also integrated with Open AI API for
      <b class="dark:text-rose-500 text-cyan-800">AI deployment</b>.
      <br />Frontend Deployed with
      <b class="dark:text-rose-500 text-cyan-800">Netlify</b>. Backend Deployed
      with <b class="dark:text-rose-500 text-cyan-800">Render</b>.
      <br />
      <br />
      All Rights Reserved © | Hakeem Romario Ellis
    </p>
    <br />
    <br />
    <br />
  </section>
  <!-- End of Container for Footer Section -->
</template>

<script>
  // Import Reactive Dependencies
  import { ref } from 'vue';

  export default {
    name: 'FooterSectionMobile', // Component Name
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
    font-size: 13px;
    font-style: normal;
  }

  .roboto-condensed-bold {
    font-family: 'Roboto Condensed', serif;
    font-weight: 670;
    font-optical-sizing: auto;
    font-size: 18px;
    font-style: normal;
  }

  .roboto-condensed-medium {
    font-family: 'Roboto Condensed', serif;
    font-weight: 470;
    font-optical-sizing: auto;
    font-size: 18px;
    font-style: normal;
  }

  /* TEXT STYLING */
</style>
