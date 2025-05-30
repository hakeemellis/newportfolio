<template>
  <!--Only exists to separate projects section from element -->
  <section
    id="projects"
    class="flex flex-col gap-10 items-center dark:text-custom-white"
  >
    <!-- Start of Projects Section -->
    <section
      v-for="(project, index) in limitedProjects"
      :key="index"
      class="flex flex-row flex-1 gap-5 roboto-condensed-regular hover:rounded-xl hover:shadow-md dark:hover:shadow-zinc-800 transition-all duration-500 ease-in-out px-2 py-2"
    >
      <!-- Start of Section with Year-->
      <section class="flex-[0.20] px-1">
        <img
          :src="project.photoURL"
          class="projects-photo dark:shadow-lg dark:shadow-zinc-800"
        />
      </section>
      <!-- End of Section with Year -->

      <!-- Start of Parent Container with Company Role, Description, and Tags -->
      <a :href="project.link" target="_blank">
        <section class="flex-[0.80] break-words">
          <!-- While flex[0.XX] is enabled, the section becomes its own container
            as such, it becomes better to establish a flex container within it to achieve desired result
            as I have below. Using "flex" in it is not recommended -->

          <!-- Inner Child Container with Company Role, Description, and Tags -->
          <section class="flex flex-col gap-10">
            <!-- Company Section -->
            <section class="flex flex-col gap-2">
              <p class="roboto-condensed-bold dark:text-rose-400">
                {{ project.title }}
              </p>
              <p class="roboto-condensed-regular">
                {{ project.content }}
              </p>
              <!-- Appropriate Tags Section -->
              <section class="flex flex-row flex-wrap gap-2 py-3">
                <section
                  v-for="(tag, tagIndex) in getFilteredTags(project.tags)"
                  :key="tagIndex"
                  class="tag-icon dark:bg-zinc-900 dark:text-slate-100 dark:shadow-sm dark:shadow-rose-900 shadow-md shadow-zinc-400 transition-all duration-100 ease-in-out"
                >
                  <p class="roboto-condensed-regular-tag">{{ tag }}</p>
                </section>
              </section>
              <!-- End of Appropriate Tags Section -->
            </section>
            <!-- End of Company Section-->
          </section>
          <!-- End of Inner Child Container with Company Role, Description, and Tags -->
        </section>
      </a>
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
  // Import Application Dependencies
  import axios from 'axios';

  // Import Reactive Dependencies
  import { ref, onMounted, computed } from 'vue';

  export default {
    name: 'ProjectsSection', // Component Name
    // Setup Function
    setup() {
      // Define reactive variable
      const projectsContent = ref([]);

      // Define function to fetch projects content from backend
      const fetchProjectsContent = async () => {
        try {
          // Fetch content available for Project Section through API route
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/projects`
          );

          // Check if response contains content - if so, assign it to experienceContent
          if (response.data && response.data.content) {
            projectsContent.value = response.data.content;
          }
        } catch (error) {
          console.error('Error fetching projects content:', error);
        }
      };

      // Execute function on DOM load
      onMounted(fetchProjectsContent);
      // End of function to fetch projects

      // Function to Filter Tags - Tags are coming from adminpanel.vue (project.tags)
      const getFilteredTags = (tags) => {
        return tags.filter((tag) => tag && tag.trim() !== '').slice(0, 13); // Limit tags to 13 (frontend limit)
      };
      // End of Function to Filter Tags

      // Function to sort project based on year (entered from backend)
      const sortedProjectsContent = computed(() => {
        return [...projectsContent.value].sort((a, b) => b.year - a.year);
      });
      // End of function to sort projects

      // Function to Limit Projects Shown (forcing users to view archive)
      const limitedProjects = computed(() => {
        return sortedProjectsContent.value.slice(0, 3);
      });
      // End of Function to Limit Projects

      // Return everything that should be accessible in the template
      return {
        projectsContent,
        sortedProjectsContent,
        limitedProjects,
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
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
    padding: 5px 10px;
    width: auto;
    font-size: 12px;
  }

  /* TAGS STYLING */

  /* MEDIA STYLING */

  /* Profile Photo */
  .projects-photo {
    border-radius: 20px; /* rounds edges */
    /*box-shadow:
      0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow */
    width: 18vw; /* Makes the width 50% of the viewport width */
    max-width: 200px; /* maxes the total width it could expand to */
    height: auto; /* Utilizes up to 70% of photo's height/size */
    margin: auto; /* Center the image */
  }

  /* MEDIA STYLING */
</style>
