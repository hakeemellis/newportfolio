<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <p class="roboto-condensed-bold dark:text-custom-white text-cyan-800 font-medium">Loading...</p>
  </section>
</template>

<script>
export default {
  name: 'LoadingScreen',
};
</script>

<style scoped>

  /* Roboto Condensed Font */
  .roboto-condensed-regular {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;
    font-size: 13.5px;
    font-style: normal;
  }

  .roboto-condensed-regular-tag {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;
    font-size: 11px;
    font-style: normal;
  }

  .roboto-condensed-bold {
    font-family: 'Roboto Condensed', serif;
    font-weight: 670;
    font-optical-sizing: auto;
    font-size: 65px;
    font-style: normal;
  }

  .roboto-condensed-medium {
    font-family: 'Roboto Condensed', serif;
    font-weight: 470;
    font-optical-sizing: auto;
    font-size: 16px;
    font-style: normal;
  }

</style>