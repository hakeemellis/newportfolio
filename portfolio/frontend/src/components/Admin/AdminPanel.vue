<template>
  <!-- Admin Panel -->
  <section
    class="flex flex-col justify-center items-center gap-10 dark:text-custom-white text-cyan-800"
  >
    <h1 class="roboto-condensed-bold text-5xl font-bold mt-5">Admin Panel</h1>
    <button class="text-3xl font-semibold" @click="logout">Logout</button>

    <!-- About Section -->
    <form
      class="flex flex-col w-full h-full max-w-3xl gap-5"
      @submit.prevent="updateContent('about')"
    >
      <h2 class="flex text-3xl font-semibold">About Section</h2>
      <textarea
        class="dark:bg-zinc-800 rounded-lg w-full h-full px-3 py-3 flex justify-center"
        v-model="aboutContent"
        placeholder="About"
      ></textarea>
      <button class="text-xl font-semibold" type="submit">
        Update Section
      </button>
    </form>
    <!-- End of About Section -->

    <!-- Experience Section -->
    <section class="flex flex-col w-full h-full max-w-3xl gap-5">
      <h2 class="text-3xl font-semibold">Experience Section</h2>
      <section
        class="flex flex-col gap-7"
        v-for="(experience, index) in experienceContent"
        :key="index"
      >
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="experience.year"
          placeholder="Year"
        />
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="experience.title"
          placeholder="Title"
        />
        <textarea
          class="dark:bg-zinc-800 rounded-lg w-full h-full px-3 py-3 flex justify-center"
          v-model="experience.description"
          placeholder="Description"
        ></textarea>
        <button class="text-xl font-semibold" @click="updateExperience(index)">
          Update Section
        </button>
        <button class="text-xl font-regular" @click="removeExperience(index)">
          Remove
        </button>
      </section>
      <button class="text-xl font-semibold" @click="addExperience">
        Add Experience
      </button>
    </section>
    <!-- End of Experience Section -->

    <!-- Projects Section -->
    <section class="flex flex-col w-full h-full max-w-3xl gap-5 mb-11">
      <h2 class="text-3xl font-semibold">Projects Section</h2>
      <section
        class="flex flex-col gap-7"
        v-for="(project, index) in projectsContent"
        :key="index"
      >
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="project.year"
          placeholder="Year"
        />
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="project.title"
          placeholder="Project Title"
        />
        <textarea
          class="dark:bg-zinc-800 rounded-lg w-full h-full px-3 py-3 flex justify-center"
          v-model="project.content"
          placeholder="Project Content"
        ></textarea>
        <!-- Handle File Upload - $event only given "$" sign because it is a dynamic parameter -->
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="file"
          @change="handleFileUpload($event, index)"
          accept="image/*"
        />
        <select
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          v-model="project.photoURL"
        >
          <option
            class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
            v-for="photo in photos"
            :key="photo._id"
            :value="photo.photoURL"
          >
            {{ photo.name }}
          </option>
        </select>
        <!-- End of Handle File Upload -->
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="project.link"
          placeholder="Project Link"
        />
        <button class="text-xl font-semibold" @click="updateProject(index)">
          Update Project
        </button>
        <button class="text-xl font-regular" @click="removeProject(index)">
          Remove
        </button>
      </section>
      <button class="text-xl font-semibold" @click="addProject">
        Add Project
      </button>
    </section>
    <!-- End of Projects Section -->

    <!-- Random Content Section -->
    <section class="flex flex-col w-full h-full max-w-3xl gap-5">
      <h2 class="text-3xl font-semibold">Random Section</h2>
      <section
        class="flex flex-col gap-7"
        v-for="(random, index) in randomContent"
        :key="index"
      >
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="random.resume"
          placeholder="Resume"
        />
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="random.contactMe"
          placeholder="Contact Me"
        />
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="random.linkedin"
          placeholder="LinkedIn"
        />
        <input
          class="dark:bg-zinc-800 rounded-lg p-2 max-w-xs"
          type="text"
          v-model="random.github"
          placeholder="GitHub"
        />

        <button
          class="text-xl font-semibold"
          @click="updateRandomSection(index)"
        >
          Update Section
        </button>
      </section>
    </section>
    <!-- End of Experience Section -->

    <FooterSection />
  </section>
  <!-- End of Admin Panel -->
</template>

<script>
  // Import Application Dependencies
  import axios from 'axios'; // Import Axios for HTTP requests - to communicate with backend

  // Import Reactive Dependencies
  import { ref, computed, onMounted } from 'vue'; // Import "ref" for reactive variables
  import { useRouter } from 'vue-router'; // Import "useRouter" for navigation

  // Import Modular Dependencies
  import FooterSection from '../Main/FooterSection.vue';

  export default {
    name: 'AdminPanel',
    // Imported Components
    components: {
      FooterSection,
    },
    // Setup Function
    setup() {
      // Define Reactive Variables
      const aboutContent = ref('');
      const experienceContent = ref([{ year: '', title: '', description: '' }]);
      const projectsContent = ref([
        { year: '', title: '', content: '', photoURL: '', link: '' },
      ]);
      const randomContent = ref([
        { resume: '', contactMe: '', linkedin: '', github: '' },
      ]);
      const photos = ref([]); // Photos fetched from Cloudinary - expecting array to be filled with photo objects

      // Router Instance for Navigation
      const router = useRouter();

      // ------ FUNCTIONS ------ //

      // Fetch photos from Cloudinary function
      const fetchPhotos = async () => {
        try {
          // Fetch photos from Cloudinary
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/photos`
          );

          // Assign value to photos reactive variable based on route response
          photos.value = response.data;
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };

      // Fetch photos on component mount - when DOM is ready
      onMounted(fetchPhotos);
      // End of fetch photos function

      // Function to fetch content available for Experience Section
      const fetchAboutContent = async () => {
        try {
          // Fetch content available for Experience Section
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/about`
          );

          // Check if response contains content - if so, assign it to experienceContent
          if (response.data && response.data.content) {
            aboutContent.value = response.data.content;
          }
        } catch (error) {
          console.error('Error fetching about content:', error);
        }
      };

      // Fetch about content on component mount - when DOM is ready
      onMounted(fetchAboutContent);
      // End of fetch about content function

      // Function to fetch content available for Experience Section
      const fetchExperienceContent = async () => {
        try {
          // Fetch content available for Experience Section
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

      // Fetch experience content on component mount - when DOM is ready
      onMounted(fetchExperienceContent);
      // End of fetch experience content function

      // Function to fetch content available for Projects Section
      const fetchProjectsContent = async () => {
        try {
          // Fetch content available for Projects Section
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/projects`
          );

          // Check if response contains content - if so, assign it to projectsContent
          if (response.data && response.data.content) {
            projectsContent.value = response.data.content;
          }
        } catch (error) {
          console.error('Error fetching projects content:', error);
        }
      };

      // Fetch projects content on component mount - when DOM is ready
      onMounted(fetchProjectsContent);
      // End of fetch projects content function

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

      // Fetch random content on component mount - when DOM is ready
      onMounted(fetchRandomContent);
      // End of fetch random content function

      // To create new section for Experience Section in Admin Panel
      const addExperience = () => {
        experienceContent.value.push({ year: '', title: '', description: '' });
      };

      // To remove section for Experience Section in Admin Panel
      const removeExperience = (index) => {
        experienceContent.value.splice(index, 1); // using splice to remove the section, with "1" being the number of elements to remove
        // defined "index" as the parameter to remove the section/s
      };

      // To create new section for Projects Section in Admin Panel
      const addProject = () => {
        projectsContent.value.push({ content: '', photoURL: '' });
      };

      // To remove section for Projects Section in Admin Panel
      const removeProject = (index) => {
        projectsContent.value.splice(index, 1);
      };

      // Function to Handle File Upload to Cloudinary
      const handleFileUpload = async (event, index) => {
        // Define variable for parameter path for file upload
        const file = event.target.files[0];
        if (!file) return console.log('No file selected'); // if false/not true due to "file" not existing, return message

        // To store keys and values to assist with uploading to Cloudinary - had to define it prior to axios request due to it being "data"
        const formData = new FormData();
        formData.append('file', file); // used append to note the key and value without reassigning the variable
        formData.append(
          'upload_preset',
          `${import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET}` // Setting Cloudinary upload preset - to assist with uploading to Cloudinary (used append to not reassign variable)
        );

        try {
          // Define response to assist with uploading to Cloudinary - syntax: axios.post(url, data, config)
          const response = await axios.post(
            `${import.meta.env.VITE_CLOUDINARY_UPLOAD}`,
            formData,
            { withCredentials: false } // set to false to avoid CORS issues (as credentials/authentication is not required to upload files to Cloudinary)
          ); // axios request - syntax: axios.post(url, data, config) - to upload to Cloudinary

          // Define variable to store the secure URL of the uploaded photo
          const photoURL = response.data.secure_url; // to store the secure URL of the uploaded photo
          projectsContent.value[index].photoURL = photoURL; // to update specific project with the uploaded photo - "index" would be the key for the specific project that the file belongs to
        } catch (error) {
          console.error('Error uploading photo:', error);
        }
      };
      // End of Handle File Upload to Cloudinary

      // Function to generate tags with AI based on description
      const generateTags = async (description) => {
        try {
          let tags = [];
          let attempts = 0;
          const maxAttempts = 25; // Set a maximum number of attempts to avoid infinite loops

          while (tags.length <= 1 && attempts < maxAttempts) {
            // Define response to assist with generating tags from {description} parameter - acts as "data" in the syntax: axios.post(url, data, config)
            const response = await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}/api/openai/generate-tags`,
              { description }
            );

            // Assign the generated tags to the tags variable
            tags = response.data.tags;

            // Increment the attempts counter
            attempts++;
          }

          // Return the generated tags
          return tags;
        } catch (error) {
          console.error('Error generating tags:', error);
          return [];
        }
      };
      // End of generate tags function

      // Update experience function
      const updateExperience = async (index) => {
        try {
          // Define variable to store content available for Experience Section
          const experience = experienceContent.value[index];

          // Prevent updating with blank data
          if (
            !experience.year &&
            !experience.title &&
            !experience.description
          ) {
            return;
          }

          // Generate tags for the experience section based on description
          const tags = await generateTags(experience.description);

          // Assign "experience.tags" to "tags" variable to store the generated tags based on the function for tag generation
          experience.tags = tags; // made "experience.tags" take on the value of "tags" - due to "experience" holding the data for experienceContent

          // Mapping function within updateExperience function to wrap all experience content as an array (param/index)
          const updatedExperience = experienceContent.value.map((item, i) => {
            if (i === index) {
              return {
                year: experience.year || item.year,
                title: experience.title || item.title,
                description: experience.description || item.description,
                tags: experience.tags || item.tags,
              };
            }

            // Return mapped (array) experience content
            return item;
          });

          // FINALLY - update content route for Experience Section
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/experience`,
            {
              content: updatedExperience,
            } // specifying the content to be updated
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          // Check if update was successful
          if (data.success) {
            fetchExperienceContent(); // run function once on each update to fetch updated experience content

            alert('Experience updated successfully');
          } else {
            alert('Failed to update experience');
          }
        } catch (error) {
          console.error('Error updating experience:', error);
          alert('An error occurred while updating experience');
        }
      };
      // End of update experience function

      // Update project function
      const updateProject = async (index) => {
        try {
          // Define variable to store content available for Projects Section
          const project = projectsContent.value[index];

          // Prevent updating with blank data
          if (!project.content && !project.photoURL) {
            return;
          }

          // Generate tags for the project section based on project content
          const projecttags = await generateTags(project.content);

          // Assign "project.tags" to "projecttags" variable to store the generated tags based on the function for tag generation
          project.tags = projecttags; // made "project.tags" take on the value of "tags" - due to "project" holding the data for projectContent

          // Mapping function within updateProject function to wrap all project content as an array (param/index)
          const updatedProjects = projectsContent.value.map((item, i) => {
            if (i === index) {
              return {
                year: project.year || item.year,
                title: project.title || item.title,
                content: project.content || item.content,
                photoURL: project.photoURL || item.photoURL,
                tags: project.tags || item.tags,
                link: project.link || item.link,
              };
            }

            // Return mapped (array) project content
            return item;
          });

          // FINALLY - update content route for Projects Section
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/projects`,
            {
              content: updatedProjects,
            }
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          // Check if update was successful
          if (data.success) {
            alert('Project updated successfully');
          } else {
            alert('Failed to update project');
          }
        } catch (error) {
          console.error('Error updating project:', error);
          alert('An error occurred while updating project');
        }
      };
      // End of update project function

      // Update about section function
      const updateContent = async () => {
        try {
          // Define variable to store content available for About Section
          const content = aboutContent.value;

          // FINALLY - update content route for About Section
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/about`,
            {
              content,
            }
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          // Check if update was successful
          if (data.success) {
            fetchAboutContent(); // run function once on each update to fetch updated about content

            alert('About Content updated successfully');
          } else {
            alert('Failed to update content');
          }
        } catch (error) {
          console.error('Error updating content:', error);
          alert('An error occurred while updating content');
        }
      };
      // End of update content function

      // Update Random Section function
      const updateRandomSection = async (index) => {
        try {
          // Define variable to store content available for Random Section
          const random = randomContent.value[index];

          // Prevent updating with blank data
          if (!random.resume && !random.contactMe) {
            return;
          }

          // Mapping function within updateRandomSection function to wrap all random content as an array (param/index)
          const updatedContent = randomContent.value.map((item, i) => {
            if (i === index) {
              return {
                resume: random.resume || item.resume,
                contactMe: random.contactMe || item.contactMe,
                linkedin: random.linkedin || item.linkedin,
                github: random.github || item.github,
              };
            }

            // Return mapped (array) random content
            return item;
          });

          // FINALLY - update content route for Random Section
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/random`,
            {
              content: updatedContent,
            }
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          // Check if update was successful
          if (data.success) {
            alert('Random Content updated successfully');
          } else {
            alert('Failed to update content');
          }
        } catch (error) {
          console.error('Error updating content:', error);
          alert('An error occurred while updating random content');
        }
      };
      // End of update random section function

      // Logout function
      const logout = async () => {
        try {
          // Define response to assist with logging out
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          // Check if logout was successful
          if (data.success) {
            alert(`See you later ${import.meta.env.VITE_ADMIN_NAME} :)`); // Display logout message
            router.push('/'); // Navigate to root
          } else {
            alert('Logout failed');
          }
        } catch (error) {
          console.error('Error during logout:', error);
          alert('An error occurred during logout');
        }
      };
      // End of logout function

      // Computed property to format about content with line breaks
      const formattedAboutContent = computed(() => {
        return aboutContent.value.replace(/\n/g, '<br/>');
      });
      // End of computed property

      // Return everything that should be accessible in the template
      return {
        aboutContent,
        experienceContent,
        projectsContent,
        randomContent,
        photos,
        addExperience,
        removeExperience,
        addProject,
        removeProject,
        handleFileUpload,
        updateExperience,
        updateProject,
        updateContent,
        updateRandomSection,
        logout,
        formattedAboutContent,
      };
      // End of Return
    },
    // End of Setup
  };
</script>

<style scoped>
  .admin-panel {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
