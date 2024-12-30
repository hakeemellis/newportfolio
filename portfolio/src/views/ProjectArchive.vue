<template>
  <section>
    <ProjectArchiveComp />
  </section>
</template>

<script>
  // Importing Components
  import ProjectArchiveComp from '../components/ProjectArchiveComp.vue';

  export default {
    name: 'ProjectArchive',
    components: {
      ProjectArchiveComp,
    }, // End of Components
    data() {
      return {
        message: 'This is a default reusable Vue component!',
      };
    },
  };
</script>

<style scoped>
  /* Default styles for the component */
  h1 {
    color: blue;
    font-size: 2rem;
  }

  p {
    color: gray;
    font-size: 1rem;
  }
</style>
