<template>
  <!-- Login Section for Admin Panel -->
  <section
    class="flex flex-col justify-center items-center gap-7 h-screen dark:text-custom-white text-cyan-800"
  >
    <h1 class="roboto-condensed-bold text-5xl font-bold">Admin Login</h1>
    <!-- Login Form -->
    <form @submit.prevent="login" class="grid grid-cols-1 gap-5">
      <!-- Username Field-->
      <section class="flex flex-col lg:flex-row gap-4 text-3xl">
        <input
          class="rounded-lg px-3 py-1 dark:bg-zinc-800 dark:text-custom-white"
          placeholder="Username"
          type="text"
          v-model="username"
          required
        />
      </section>
      <!-- Password Field-->
      <section class="flex flex-col lg:flex-row gap-4 text-3xl">
        <input
          class="rounded-lg px-3 py-1 dark:bg-zinc-800 dark:text-custom-white"
          placeholder="Password"
          type="password"
          v-model="password"
          required
        />
      </section>
      <!-- Submit Button -->
      <button class="text-3xl font-semibold" type="submit">Login</button>
    </form>
    <!-- End of Login Button -->
  </section>
  <!-- End of Login Section -->
</template>

<script>
  // Import Application Dependencies
  import axios from 'axios'; // Import Axios for HTTP requests - to communicate with backend

  // Import Reactive Dependencies
  import { ref } from 'vue'; // Import "ref" for reactive variables
  import { useRouter } from 'vue-router'; // Import "useRouter" for navigation

  export default {
    name: 'AdminLogin', // Component name
    // Setup Function
    setup() {
      // Define Reactive Variables
      const username = ref('');
      const password = ref('');

      // Router Instance for Navigation
      const router = useRouter();

      // Login Function - async due to "await" being used for DB operations via Axios (to check backend route for login)
      const login = async () => {
        try {
          // Check if credentials are valid alongside username and password from input fields
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, // Route for: Login (on backend)
            {
              username: username.value, // takes username from input field
              password: password.value, // takes password from input field
            }
          );

          // Assign response data to "data"
          const data = response.data; // "data" is an instance of axios

          // If http response is 200
          if (data.success) {
            alert(`Welcome ${import.meta.env.VITE_ADMIN_NAME}`);
            router.push('/adminpanel');
          } else {
            alert('Login failed');
          }
        } catch (error) {
          // If http response is 500
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      };
      // End of Login Function

      // Return reactive variables and functions
      return {
        username,
        password,
        login,
      };
      // End of Return
    },
    // End of Setup Function
  };
</script>

<style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
