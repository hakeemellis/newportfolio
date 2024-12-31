<template>
  <section>
    <p class="roboto-condensed-regular gap dark:text-white">
      Designed in <b class="dark:text-rose-500 text-cyan-800">Figma</b>. Coded
      in <b class="dark:text-rose-500 text-cyan-800">Visual Studio Code</b> by
      Me :). Built with
      <b class="dark:text-rose-500 text-cyan-800">Vue.js </b>and styled using
      <b class="dark:text-rose-500 text-cyan-800">TailwindCSS</b>. Deployed with
      <b class="dark:text-rose-500 text-cyan-800">Netlify</b>.
      <br />
      <br />
      All Rights Reserved © | Hakeem Romario Ellis
    </p>
    <br />
    <br />
    <br />
  </section>
</template>

<script>
  export default {
    name: 'FooterSection',
    data() {
      return {
        // Until I have something to put here
      };
    },
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

  .roboto-condensed-medium {
    font-family: 'Roboto Condensed', serif;
    font-weight: 470;
    font-optical-sizing: auto;
    font-size: 18px;
    font-style: normal;
  }

  /* TEXT STYLING */
</style>
