// main.js

// Where the magic happens baby

// Import Application Dependencies
import { createApp } from 'vue';
import { createHead } from '@vueuse/head'; // to create meta data
import { registerSW } from 'virtual:pwa-register'; // for PWA
import VueGtag from 'vue-gtag'; // Google Analytics
import axios from 'axios';

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

// Configure axios to send cookies with requests
axios.defaults.withCredentials = true; // Ensure cookies are sent with requests (for session management) - this was important for the backend login to work

// Creating Vue Application
const app = createApp(App); // defining the app

// Using VueGtag to track page views
app.use(VueGtag, {
  config: { id: import.meta.env.VITE_GTAG_ID }, // Google Analytics ID
});

// Defining Meta Manager
const head = createHead();
app.use(head); // allowing the app to use the meta manager

// Registering Service Worker for PWA
registerSW({ immediate: true }); // registering the service worker for PWA - immediate registration to start

// Defining Vue Application to Router
app.use(router); // allowing the defined application to use routes defined in router

// Mounting Vue Application to DOM
app.mount('#vueportfolio'); // mounting the app to #vueportfolio element
