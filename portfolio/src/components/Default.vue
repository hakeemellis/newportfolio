<template>
    <div>
      <h1>Component Title</h1>
      <p>Component description or content goes here.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultComponent',
    data() {
      return {
        message: 'This is a default reusable Vue component!'
      };
    }
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