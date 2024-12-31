<template>
  <!-- Start of Container for Project Archive Section-->
  <section
    class="flex flex-col gap-4 roboto-condensed-regular dark:text-custom-white h-screen px-10"
  >
    <!-- Menu Text -->
    <section>
      <router-link to="/">
        <p style="font-size: 25px">Back to Main</p>
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

    <!-- Start of Table Section -->
    <section class="py-5">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Column 1
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Column 2
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Column 3
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Column 4
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Column 5
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <tr>
            <td class="px-6 py-4 break-words">Row 1, Cell 1</td>
            <td class="px-6 py-4 break-words">Row 1, Cell 2</td>
            <td class="px-6 py-4 break-words">
              <p class="text-xs">
                Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                jneadkjbecjnnws
              </p>
            </td>
            <td class="px-6 py-4 break-words">
              <p class="text-xs">
                Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                jneadkjbecjnnws
              </p>
            </td>
            <td class="px-6 py-4 break-words">
              <p class="text-xs">
                Row 1, Cell 3 qendkjb rwhjd bvjherwvkhrwbdvjhb
                wehbvdhewvbhdvbhrwbbfehj bewjfhcbhewbhebvhvb erwhbvhewb
                jneadkjbecjnnws
              </p>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 break-words">Row 2, Cell 1</td>
            <td class="px-6 py-4 break-words">Row 2, Cell 2</td>
            <td class="px-6 py-4 break-words">Row 2, Cell 3</td>
            <td class="px-6 py-4 break-words">Row 2, Cell 4</td>
            <td class="px-6 py-4 break-words">Row 2, Cell 5</td>
          </tr>
          <tr>
            <td class="px-6 py-4 break-words">Row 3, Cell 1</td>
            <td class="px-6 py-4 break-words">Row 3, Cell 2</td>
            <td class="px-6 py-4 break-words">Row 3, Cell 3</td>
            <td class="px-6 py-4 break-words">Row 3, Cell 4</td>
            <td class="px-6 py-4 break-words">Row 3, Cell 5</td>
          </tr>
          <tr>
            <td class="px-6 py-4 break-words">Row 4, Cell 1</td>
            <td class="px-6 py-4 break-words">Row 4, Cell 2</td>
            <td class="px-6 py-4 break-words">Row 4, Cell 3</td>
            <td class="px-6 py-4 break-words">Row 4, Cell 4</td>
            <td class="px-6 py-4 break-words">Row 4, Cell 5</td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- End of Table Section -->
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
