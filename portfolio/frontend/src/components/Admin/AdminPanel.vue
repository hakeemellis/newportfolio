<template>
  <!-- Admin Panel -->
  <section class="admin-panel">
    <h1>Admin Panel</h1>
    <button @click="logout">Logout</button>

    <!-- About Section -->
    <form @submit.prevent="updateContent('about')">
      <h2>About Section</h2>
      <textarea v-model="aboutContent" placeholder="About"></textarea>
      <button type="submit">Update About Section</button>
    </form>
    <!-- End of About Section -->

    <!-- Experience Section -->
    <section>
      <h2>Experience Section</h2>
      <section v-for="(experience, index) in experienceContent" :key="index">
        <input type="text" v-model="experience.year" placeholder="Year" />
        <input type="text" v-model="experience.title" placeholder="Title" />
        <textarea
          v-model="experience.description"
          placeholder="Description"
        ></textarea>
        <button @click="updateExperience(index)">Update Experience</button>
        <button @click="removeExperience(index)">Remove</button>
      </section>
      <button @click="addExperience">Add Experience</button>
    </section>
    <!-- End of Experience Section -->

    <!-- Projects Section -->
    <section>
      <h2>Projects Section</h2>
      <section v-for="(project, index) in projectsContent" :key="index">
        <textarea
          v-model="project.content"
          placeholder="Project Content"
        ></textarea>
        <!-- Handle File Upload - $event only given "$" sign because it is a dynamic parameter -->
        <input
          type="file"
          @change="handleFileUpload($event, index)"
          accept="image/*"
        />
        <select v-model="project.photoURL">
          <option
            v-for="photo in photos"
            :key="photo._id"
            :value="photo.photoURL"
          >
            {{ photo.name }}
          </option>
        </select>
        <!-- End of Handle File Upload -->
        <button @click="updateProject(index)">Update Project</button>
        <button @click="removeProject(index)">Remove</button>
      </section>
      <button @click="addProject">Add Project</button>
    </section>
    <!-- End of Projects Section -->
  </section>
  <!-- End of Admin Panel -->
</template>

<script>
  // Import Application Dependencies
  import axios from 'axios'; // Import Axios for HTTP requests - to communicate with backend

  // Import Reactive Dependencies
  import { ref, computed, onMounted } from 'vue'; // Import "ref" for reactive variables
  import { useRouter } from 'vue-router'; // Import "useRouter" for navigation

  export default {
    name: 'AdminPanel',
    // Setup Function
    setup() {
      // Define Reactive Variables
      const aboutContent = ref('');
      const experienceContent = ref([{ year: '', title: '', description: '' }]);
      const projectsContent = ref([{ content: '', photoURL: '' }]);
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
          console.log('Fetched photos:', photos.value);
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
        console.log(event); // to see the information the defined parameter "event" contains
        console.log(event.target); // "target" because an instance due to the input tag - with it triggering our "event" parameter
        console.log(event.target.files); // to see the information the "files" property contains
        console.log(event.target.files[0]); // to select the first file in entirety (to load the file itself)

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

        console.log('Uploading photo...', formData); // storing keys and values as a variable

        try {
          // Define response to assist with uploading to Cloudinary - syntax: axios.post(url, data, config)
          const response = await axios.post(
            `${import.meta.env.VITE_CLOUDINARY_UPLOAD}`,
            formData,
            { withCredentials: false } // set to false to avoid CORS issues (as credentials/authentication is not required to upload files to Cloudinary)
          ); // axios request - syntax: axios.post(url, data, config) - to upload to Cloudinary
          console.log('Cloudinary response:', response); // to see the information the "response" property contains
          console.log('Cloudinary response with data instance:', response.data); // to see the information the "data" property contains

          // Define variable to store the secure URL of the uploaded photo
          const photoURL = response.data.secure_url; // to store the secure URL of the uploaded photo
          projectsContent.value[index].photoURL = photoURL; // to update specific project with the uploaded photo - "index" would be the key for the specific project that the file belongs to
          console.log('Photo uploaded:', photoURL);
        } catch (error) {
          console.error('Error uploading photo:', error);
        }
      };
      // End of Handle File Upload to Cloudinary

      // Function to generate tags with AI based on description
      const generateTags = async (description) => {
        try {
          // Define response to assist with generating tags from {description} parameter - acts as "data" in the syntax: axios.post(url, data, config)
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/openai/generate-tags`,
            { description }
          );

          // To see the information the "data" property contains
          console.log(response.data);

          // Return the generated tags
          return response.data.tags;
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

          // Mapping function within updateProject function to wrap all project content as an array (param/index)
          const updatedProjects = projectsContent.value.map((item, i) => {
            if (i === index) {
              return {
                content: project.content || item.content,
                photoURL: project.photoURL || item.photoURL,
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
            fetchProjectsContent(); // run function once on each update to fetch updated project content
          } else {
            alert('Failed to update project');
          }
        } catch (error) {
          console.error('Error updating project:', error);
          alert('An error occurred while updating project');
        }
      };
      // End of update project function

      // Update about section and dynamically update other sections via updateContent function
      const updateContent = async (section) => {
        try {
          // Define variable to store all content values available as an array in a variable
          const content = {
            // About Content
            about: aboutContent.value, // executed by updateContent("about") - to update about content specifically

            // Experience Content
            experience: experienceContent.value.map((item) => ({
              year: item.year,
              title: item.title,
              description: item.description,
            })),

            // Projects Content
            projects: projectsContent.value.map((item) => ({
              content: item.content,
              photoURL: item.photoURL,
            })),
          }[section]; // For "section", to update content for a specific section - acting as a key

          console.log('Updating content for section:', section);
          console.log('Content to update:', content);

          // FINALLY - update content route through backend (depending on section)
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/content/${section}`, // to update content for specifed section defined by "section"
            {
              content,
            }
          );

          // Assigning response.data to "data" variable (for simplicity)
          const data = response.data;

          if (data.success) {
            fetchExperienceContent(); // run function once on each update to fetch updated experience content
          } else {
            alert('Failed to update content');
          }
        } catch (error) {
          console.error('Error updating content:', error);
          alert('An error occurred while updating content');
        }
      };
      // End of update content function

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
        photos,
        addExperience,
        removeExperience,
        addProject,
        removeProject,
        handleFileUpload,
        updateExperience,
        updateProject,
        updateContent,
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
