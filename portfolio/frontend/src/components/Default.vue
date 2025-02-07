<template>
  <section>
    <h1>Component Title</h1>
    <p>Component description or content goes here.</p>
  </section>
</template>

<script>
  // Composition API Approach
  export default {
    name: 'DefaultComponent',
    setup() {
      const message = ref('This is a default reusable Vue component!');
      return {
        message,
      };
    },
  };

  /* -- Options API Approach (Old Way) --

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

  */
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
