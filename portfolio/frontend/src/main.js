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

// Creating Vue Application
const app = createApp(App); // defining the app
app.use(router); // allowing the defined application to use routes defined in router
app.mount('#vueportfolio'); // mounting the app to #vueportfolio element