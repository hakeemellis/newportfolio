<template>
  <!-- Start of Master Container-->
  <section
    class="h-screen flex flex-col gap-7 roboto-condensed-regular dark:text-custom-white px-10"
  >
    <!-- Start of Container for Project Archive Section-->
    <section class="flex flex-col gap-3">
      <!-- Menu Text -->
      <section>
        <router-link to="/">
          <p
            class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out"
            style="font-size: 25px"
          >
            Back to Main
          </p>
        </router-link>
        <h2 style="font-size: 40px">All Projects</h2>
      </section>
      <!-- End of Menu Text -->

      <!-- Appropriate Tags Section for AI -->
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
      <!-- End of Appropriate Tags for AI -->

      <!-- Start of Container for Table Section -->
      <section class="py-5">
        <!-- Start of Table Section -->
        <table class="min-w-full">
          <!-- Table Header -->
          <thead class="dark:text-custom-white">
            <tr>
              <th
                class="px-6 py-3 text-left uppercase tracking-wider"
                style="font-size: 15px"
              >
                Year
              </th>
              <th
                class="px-6 py-3 text-left uppercase tracking-wider"
                style="font-size: 14px"
              >
                Project
              </th>
              <th
                class="px-6 py-3 text-left uppercase tracking-wider"
                style="font-size: 15px"
              >
                Made At
              </th>
              <th
                class="px-6 py-3 text-left uppercase tracking-wider"
                style="font-size: 15px"
              >
                Built With
              </th>
              <th
                class="px-6 py-3 text-left uppercase tracking-wider"
                style="font-size: 15px"
              >
                Link to Project
              </th>
            </tr>
          </thead>
          <!-- End of Table Header -->

          <!-- Table Body -->
          <tbody class="dark:text-custom-white">
            <tr class="border-b border-zinc-600 dark:border-custom-white">
              <td class="px-6 py-4 break-words">
                <p class="text-sm">eskfne2jnfjewn ewdnjewnjef ewadn</p>
              </td>
              <td class="px-6 py-4 break-words">
                <p class="text-sm">eskfne2jnfjewn ewdnjewnjef ewadn</p>
              </td>
              <td class="px-6 py-4 break-words">
                <p class="text-sm">
                  Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                  wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                  jneadkjbecjnnws
                </p>
              </td>
              <td class="px-6 py-4 break-words">
                <p class="text-sm">
                  Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                  wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                  jneadkjbecjnnws
                </p>
              </td>
              <td class="px-6 py-4 break-words">
                <p class="text-sm">
                  Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                  wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                  jneadkjbecjnnws
                </p>
              </td>
            </tr>
            <tr class="border-b border-zinc-600 dark:border-custom-white">
              <td class="px-6 py-4 break-words">Row 2, Cell 1</td>
              <td class="px-6 py-4 break-words">Row 2, Cell 2</td>
              <td class="px-6 py-4 break-words">Row 2, Cell 3</td>
              <td class="px-6 py-4 break-words">Row 2, Cell 4</td>
              <td class="px-6 py-4 break-words">Row 2, Cell 5</td>
            </tr>
            <tr class="border-b border-zinc-600 dark:border-custom-white">
              <td class="px-6 py-4 break-words">Row 3, Cell 1</td>
              <td class="px-6 py-4 break-words">Row 3, Cell 2</td>
              <td class="px-6 py-4 break-words">Row 3, Cell 3</td>
              <td class="px-6 py-4 break-words">Row 3, Cell 4</td>
              <td class="px-6 py-4 break-words">Row 3, Cell 5</td>
            </tr>
            <tr class="border-b border-zinc-600 dark:border-custom-white">
              <td class="px-6 py-4 break-words">Row 4, Cell 1</td>
              <td class="px-6 py-4 break-words">Row 4, Cell 2</td>
              <td class="px-6 py-4 break-words">Row 4, Cell 3</td>
              <td class="px-6 py-4 break-words">Row 4, Cell 4</td>
              <td class="px-6 py-4 break-words">Row 4, Cell 5</td>
            </tr>
            <!-- Blank Row  -->
          </tbody>
          <!-- End of Table Body -->
        </table>
        <!-- End of Table Section -->
      </section>
      <!-- End of Container for Table Section -->
    </section>
    <!-- End of Container for Project Archive Section-->

    <!-- Imported Footer Section -->
    <section>
      <FooterSection />
    </section>
    <!-- End of Imported Footer Section -->
  </section>
  <!-- End of Master Container -->
</template>

<script>
  // Importing Components
  import FooterSection from './FooterSection.vue';

  export default {
    name: 'ProjectArchiveComp',
    components: {
      FooterSection,
    },
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

  /* TAGS STYLING */

  /* Tag Icons for Portfolio */
  .tag-icon {
    display: inline-flex; /* to make container flex inline to align with content */
    justify-content: center;
    border-radius: 30px; /* round out border edges */
    /*box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
    padding: 5px 10px;
    width: auto;
    font-size: 14px;
  }

  /* TAGS STYLING */
</style>
