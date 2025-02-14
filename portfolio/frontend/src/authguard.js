// src/authguard.js

// Purpose is to check if user is authenticated before allowing access to certain routes

// Import Application Dependencies
import axios from 'axios';

// Define the authGuard function
const authGuard = async (to, from, next) => {
  // Check if route requires authentication | "record" param becomes the route being navigated to via "to" with "matched" checking alongside array method if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // "some ()" checks if any element (imported through meta) in the array matches the condition - this is an array method not an instance
    try {
      // Check if user is authenticated
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/check-auth`
      );
      const isAuthenticated = response.data.authenticated;

      // If user is not authenticated, redirect to login page
      if (!isAuthenticated) {
        next({ name: 'AdminLogin' }); // Redirect to login page (as written in router.js) if not authenticated | "next ()" acts like a middleman between the route the code is trying to access and the route you want to redirect to
      } else {
        next(); // Proceed to route if authenticated (as per original intent)
      }
    } catch (error) {
      next({ name: 'AdminLogin' }); // Redirect to login page on error
    }
  }
  // Check if: attempt is made to access the admin login page while already logged in
  else if (to.name === 'AdminLogin') {
    try {
      // Check if user is authenticated
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/check-auth`
      );
      const isAuthenticated = response.data.authenticated;

      // If user is already authenticated, redirect to admin panel
      if (isAuthenticated) {
        next({ name: 'AdminPanel' }); // Redirect to admin panel if already logged in
      } else {
        next(); // Proceed to login page if not authenticated (as per original intent)
      }
    } catch (error) {
      next(); // Proceed to login page on error
    }
  } else {
    next(); // Proceed to route requested if no authentication is required i.e. not logged in - which will loop us back to the login page due to logic above
  }
};

export default authGuard;
