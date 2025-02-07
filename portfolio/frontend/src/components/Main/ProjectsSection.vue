<template>
  <!--Only exists to separate experience section from element -->
  <section class="flex flex-col gap-10 items-center dark:text-custom-white">
    <!-- Start of Experience Section -->
    <section
      class="flex flex-row flex-1 gap-4 roboto-condensed-regular hover:rounded-xl hover:shadow-md dark:hover:shadow-zinc-800 transition-all duration-500 ease-in-out px-2 py-2"
    >
      <!-- Start of Section with Year-->
      <section class="flex-[0.20]">
        <img
          src="../../assets/images/projectphotos/coding.jpg"
          class="projects-photo dark:shadow-lg dark:shadow-zinc-800"
        />
      </section>
      <!-- End of Section with Year -->

      <!-- Start of Parent Container with Company Role, Description, and Tags -->

      <section class="flex-[0.80] break-words">
        <!-- While flex[0.XX] is enabled, the section becomes its own container
            as such, it becomes better to establish a flex container within it to achieve desired result
            as I have below. Using "flex" in it is not recommended -->

        <!-- Inner Child Container with Company Role, Description, and Tags -->
        <section class="flex flex-col gap-10">
          <!-- Company One -->
          <section class="flex flex-col gap-2">
            <p class="roboto-condensed-bold">
              Role for Company | Name of Company
            </p>
            <p>
              wdwjebsjdlwkswsxlcnewdkjcbnejwnsfcjcebijvbwedafve fewwmsdnwqjb ndf
              efdewfefefeijqwebevwijdbvnadlne wodwqdsneqjnffedfeeqfn
            </p>
            <!-- Appropriate Tags Section -->
            <section class="flex flex-row flex-wrap gap-2 py-3">
              <section
                class="tag-icon dark:bg-white dark:text-black dark:shadow-md dark:shadow-slate-400 shadow-md shadow-zinc-400"
              >
                <p>wdwjebsjdlwks</p>
              </section>
              <section
                class="tag-icon dark:bg-white dark:text-black dark:shadow-md dark:shadow-slate-400 shadow-md shadow-zinc-400"
              >
                <p>wdwjebsjdlwks</p>
              </section>
              <section
                class="tag-icon dark:bg-white dark:text-black dark:shadow-md dark:shadow-slate-400 shadow-md shadow-zinc-400"
              >
                <p>wdwjebsjdlwks</p>
              </section>
              <section
                class="tag-icon dark:bg-white dark:text-black dark:shadow-md dark:shadow-slate-400 shadow-md shadow-zinc-400"
              >
                <p>wdwjebsjdlwks</p>
              </section>
            </section>
            <!-- End of Appropriate Tags Section -->
          </section>
          <!-- End of Company One-->

          <!-- Saved as template for reuse for Multi-Role in Same Company

        <section class="flex flex-col gap-2">
          <p class="roboto-condensed-bold">
            Role for Company | Name of Company
          </p>
          <p>
            wdwjebsjdlwkswsxlcnewdkjcbnejwnsfcjcebijvbwedafve fewwmsdnwqjb ndf
            efdewfefefeijqwebevwijdbvnadlne wodwqdsneqjnffedfeeqfn
          </p>
          <section class="flex flex-row flex-wrap gap-2">
            <section class="tag-icon">
              <p>wdwjebsjdlwks</p>
            </section>
            <section class="tag-icon">
              <p>wdwjebsjdlwks</p>
            </section>
            <section class="tag-icon">
              <p>wdwjebsjdlwks</p>
            </section>
            <section class="tag-icon">
              <p>wdwjebsjdlwks</p>
            </section>
          </section>
        </section>

        --></section>
        <!-- End of Inner Child Container with Company Role, Description, and Tags -->
      </section>
      <!-- End of Parent Container with Company Role, Description, and Tags -->
    </section>
    <!-- End of Experience Section -->

    <!-- Text -->
    <router-link to="/projectarchive" class="roboto-condensed-medium">
      <p
        class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out"
      >
        View Project Archive
      </p>
    </router-link>
  </section>
  <!--End: Only exists to separate experience section from element -->
</template>

<script>
  // Import Reactive Dependencies
  import { ref } from 'vue';

  export default {
    name: 'ProjectsSection', // Component Name
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

  /* TAGS STYLING */

  /* Tag Icons for Portfolio */
  .tag-icon {
    display: inline-flex; /* to make container flex inline to align with content */
    justify-content: center;
    border-radius: 30px; /* round out border edges */
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
    padding: 5px 10px;
    width: auto;
    font-size: 14px;
  }

  /* TAGS STYLING */

  /* MEDIA STYLING */

  /* Profile Photo */
  .projects-photo {
    border-radius: 20px; /* rounds edges */
    /*box-shadow:
      0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow */
    width: 50vw; /* Makes the width 50% of the viewport width */
    max-width: 200px; /* maxes the total width it could expand to */
    height: 61%; /* Utilizes up to 70% of photo's height/size */
    margin: auto; /* Center the image */
  }

  /* MEDIA STYLING */
</style>
