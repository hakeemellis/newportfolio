<template>
  <!--Only exists to separate experience section from element -->
  <section
    id="experience"
    class="flex flex-col gap-10 items-center dark:text-custom-white"
  >
    <!-- Start of Experience Section -->
    <section
      class="flex flex-row flex-1 gap-4 roboto-condensed-regular hover:rounded-xl hover:shadow-md dark:hover:shadow-zinc-800 transition-all duration-500 ease-in-out py-4 px-2"
      v-for="(experience, index) in limitedExperience"
      :key="index"
    >
      <!-- Start of Section with Year-->
      <section class="flex-[0.20] roboto-condensed-medium">
        <p>{{ experience.year }}</p>
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
            <p class="roboto-condensed-bold dark:text-rose-400">
              {{ experience.title }}
            </p>
            <p>
              {{ experience.description }}
            </p>
            <!-- Appropriate Tags Section -->
            <section class="flex flex-row flex-wrap gap-2 py-3">
              <section
                v-for="(tag, tagIndex) in getFilteredTags(experience.tags)"
                :key="tagIndex"
                class="tag-icon dark:bg-zinc-900 dark:text-slate-100 dark:shadow-sm dark:shadow-rose-900 shadow-md shadow-zinc-400 transition-all duration-100 ease-in-out"
              >
                <p class="roboto-condensed-regular-tag">{{ tag }}</p>
              </section>
            </section>
            <!-- End of Appropriate Tags Section -->
          </section>
          <!-- End of Company One-->
        </section>
        <!-- End of Inner Child Container with Company Role, Description, and Tags -->
      </section>
      <!-- End of Parent Container with Company Role, Description, and Tags -->
    </section>
    <!-- End of Experience Section -->

    <!-- Text -->
    <a
      v-for="(random, index) in randomContent"
      :key="index"
      :href="random.resume"
      target="_blank"
      class="roboto-condensed-medium hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out"
    >
      View Full Resume
    </a>
  </section>
  <!--End: Only exists to separate experience section from element -->
</template>

<script>
  // Import Application Dependencies
  import axios from 'axios';

  // Import Reactive Dependencies
  import { ref, onMounted, computed } from 'vue';

  export default {
    name: 'ExperienceSection', // Component Name
    // Setup Function
    setup() {
      // Define Reactive Variable
      const experienceContent = ref([]);
      const randomContent = ref([]);

      // Fetch content available for Experience Section through API route - async due to axios request (backend)
      const fetchExperienceContent = async () => {
        try {
          // Fetch content available for Experience Section through API route
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/experience`
          );

          // Check if response contains content - if so, assign it to experienceContent
          if (response.data && response.data.content) {
            experienceContent.value = response.data.content;
          }
        } catch (error) {
          console.error('Error fetching experience content:', error);
        }
      };

      // Execute function on DOM mount i.e. when its finish rendering
      onMounted(fetchExperienceContent);
      // End of Fetch Function

      // Function to Filter Tags - Tags are coming from adminpanel.vue (experience.tags)
      const getFilteredTags = (tags) => {
        return tags.filter((tag) => tag && tag.trim() !== '').slice(0, 13); // Limit tags to 13 (frontend limit)
      };

      // Function to sort experience based on year (entered from backend)
      const sortedExperienceContent = computed(() => {
        return [...experienceContent.value].sort((a, b) => b.year - a.year);
      });
      // End of function to sort experience

      // Function to limit experience shown (forcing users to view resume)
      const limitedExperience = computed(() => {
        return sortedExperienceContent.value.slice(0, 2); // OG was: return experienceContent.value.slice(0, 2);
      });
      // End of function to limit experience

      // Function to fetch content available for Random Section
      const fetchRandomContent = async () => {
        try {
          // Fetch content available for Random Section
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/random`
          );

          // Check if response contains content - if so, assign it to randomContent
          if (response.data && response.data.content) {
            randomContent.value = response.data.content;
          }
        } catch (error) {
          console.error('Error fetching random content:', error);
        }
      };

      // Execute function on DOM mount i.e. when its finish rendering
      onMounted(fetchRandomContent);
      // End of Fetch Function

      // Return everything that should be accessible in the template
      return {
        experienceContent,
        limitedExperience,
        sortedExperienceContent,
        randomContent,
        getFilteredTags,
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
    font-size: 13.5px;
    font-style: normal;
  }

  .roboto-condensed-regular-tag {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;
    font-size: 12px;
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
    font-size: 16px;
    font-style: normal;
  }

  /* TEXT STYLING */

  /* TAGS STYLING */

  /* Tag Icons for Portfolio */
  .tag-icon {
    display: inline-flex; /* to make container flex inline to align with content */
    justify-content: center;
    border-radius: 30px; /* round out border edges */
    padding: 5px 10px;
    width: auto;
    font-size: 12px;
  }

  /* TAGS STYLING */
</style>
