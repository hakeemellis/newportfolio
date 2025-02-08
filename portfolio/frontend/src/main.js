// main.js

// Where the magic happens baby

// Import Application Dependencies
import { createApp } from 'vue';

// Import Tailwind CSS
import './styles/tailwind.css';
import './styles/output.css';
import './style.css';

// Import Application Components and Routes
import App from './App.vue';
import router from './router';

// Check if dark mode is enabled in localStorage or system preferences
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Creating Vue Application
const app = createApp(App); // defining the app
app.use(router); // allowing the defined application to use routes defined in router
app.mount('#vueportfolio'); // mounting the app to #vueportfolio element
