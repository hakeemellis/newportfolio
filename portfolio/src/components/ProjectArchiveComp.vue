<template>
  <!-- Start of Container for Project Archive Section-->
  <section
    class="flex flex-col gap roboto-condensed-regular dark:text-custom-white h-screen"
  >
    <p style="font-size: 25px">Back to Main</p>
    <h2 style="font-size: 40px">
      All Projects
      <br />
      <br />
    </h2>
  </section>
  <!-- End of Container for Project Archive Section-->
</template>

<script>
  export default {
    name: 'ProjectArchiveComp',
    data() {
      return {
        // Until I have something to put here
      };
    },
  };
</script>

<style scoped>
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

  /*Integral CF Font*/
  h2 {
    font-family: 'Integral CF';
    font-weight: 800;
    font-size: 30px;
  }

  .subtitle {
    font-family: 'Integral CF';
    font-weight: 500;
    font-size: 21px;
  }

  /* TEXT STYLING */
</style>
