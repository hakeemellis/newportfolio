<template>
  <section
    class="flex flex-row flex-1 justify-center gap-4 overflow-hidden h-screen bg-custom-gray"
  >
    <section class="flex-[0.42] sticky top-0">
      <StagFrame />
    </section>
    <section
      class="outer-container-home flex-[0.58] mt-4 overflow-y-auto h-full"
    >
      <section class="">
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>
            Component description or content goes herekqesndkqwndknqwknwqdkk wkd
            lkewknkewnflkjewqw .
          </p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
        <section class="flex flex-col gap">
          <h1>Component Title</h1>
          <p>kwencske</p>
          <p>Component description or content goes here.</p>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import StagFrame from '../components/StagFrame.vue'; // Adjust the path as necessary

  export default {
    name: 'Home',
    components: {
      StagFrame,
    },
    data() {
      return {
        message: 'This is the Home page!',
      };
    },
  };
</script>

<style scoped>
  /* Default styles for the component */
  .outer-container-home {
    display: flex;
    flex-direction: column; /* Arrange children in a column */
    gap: 30px; /* Space between elements */
    padding: 20px; /* Padding inside the container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    overflow-y: auto; /* Enable vertical scrolling */
    height: 100%; /* Ensure the container takes the full height */
  }

  /* Stagnant Frame Gap Overall */
  .gap {
    gap: 4px;
  }

  /* Inner Frame Gap for Stagnant Frame Elements */
  .inner-gap {
    gap: 2px;
  }
</style>
