<template>
  <!-- Start of Container for 404 Page -->
  <section
    class="flex flex-col text-center justify-center gap-4 h-screen overflow-y-auto"
  >
    <h1 class="roboto-condensed-bold text-6xl font-bold">
      404 - Page Not Found
    </h1>
    <img
      class="mx-auto"
      style="width: 200px; height: 200px"
      src="https://media.giphy.com/media/26tn8cc5IQjkWpJhm/giphy.gif?cid=790b7611fh6mgr5df0bfxo4hyfdw5hj75sz38dly6ucbyu2v&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      alt="404"
    />
    <p class="roboto-condensed-regular">
      The page you are looking for does not exist.
    </p>
    <router-link
      to="/"
      class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out text-3xl font-bold"
      >Back to Home</router-link
    >
  </section>
  <!-- End of Container for 404 Page -->
</template>

<script>
  export default {
    name: 'NotFound', // Component Name
  };
</script>

<style scoped>
  .roboto-condensed-regular {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;

    font-style: normal;
  }

  .roboto-condensed-bold {
    font-family: 'Roboto Condensed', serif;
    font-weight: 670;
    font-optical-sizing: auto;
    font-style: normal;
  }
</style>
