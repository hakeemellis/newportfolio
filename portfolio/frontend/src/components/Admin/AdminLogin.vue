<template>
  <div class="login-container">
    <h1>Admin Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  export default {
    name: 'AdminLogin',
    setup() {
      // Reactive state
      const username = ref('');
      const password = ref('');

      // Router instance
      const router = useRouter();

      // Login function
      const login = async () => {
        try {
          const response = await axios.post(
            'http://localhost:5001/api/auth/login',
            {
              username: username.value,
              password: password.value,
            }
          );

          const data = response.data;

          if (data.success) {
            router.push('/adminpanel'); 
          } else {
            alert('Login failed');
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      };

      return {
        username,
        password,
        login,
      };
    },
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
