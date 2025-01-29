<template>
  <div class="admin-panel">
    <h1>Admin Panel</h1>
    <button @click="logout">Logout</button>
    <form @submit.prevent="updateContent('about')">
      <h2>About Section</h2>
      <textarea v-model="aboutContent"></textarea>
      <button type="submit">Update About Section</button>
    </form>
    <form @submit.prevent="updateContent('experience')">
      <h2>Experience Section</h2>
      <textarea v-model="experienceContent"></textarea>
      <button type="submit">Update Experience Section</button>
    </form>
    <form @submit.prevent="updateContent('projects')">
      <h2>Projects Section</h2>
      <textarea v-model="projectsContent"></textarea>
      <button type="submit">Update Projects Section</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  export default {
    name: 'AdminPanel',
    setup() {
      // Reactive content states
      const aboutContent = ref('');
      const experienceContent = ref('');
      const projectsContent = ref('');

      // Router instance
      const router = useRouter();

      // Update content function
      const updateContent = async (section) => {
        try {
          const content = {
            about: aboutContent.value,
            experience: experienceContent.value,
            projects: projectsContent.value,
          }[section];

          const response = await axios.post(
            `http://localhost:5001/api/content/${section}`,
            {
              content,
            }
          );

          const data = response.data;

          if (!data.success) {
            alert('Failed to update content');
          }
        } catch (error) {
          console.error('Error updating content:', error);
          alert('An error occurred while updating content');
        }
      };

      // Logout function
      const logout = async () => {
        try {
          const response = await axios.post(
            'http://localhost:5001/api/auth/logout'
          ); 

          const data = response.data;

          if (data.success) {
            alert('Logged out successfully'); 
            router.push('/'); 
          } else {
            alert('Logout failed');
          }
        } catch (error) {
          console.error('Error during logout:', error);
          alert('An error occurred during logout');
        }
      };

      return {
        aboutContent,
        experienceContent,
        projectsContent,
        updateContent,
        logout,
      };
    },
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
