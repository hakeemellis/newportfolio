<template>
  <section>
    <h1>Component Title</h1>
    <p>Component description or content goes here.</p>
  </section>
</template>

<script>
  export default {
    name: 'DefaultComponent',
    setup() {
      const message = ref('This is a default reusable Vue component!');
      return {
        message,
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
