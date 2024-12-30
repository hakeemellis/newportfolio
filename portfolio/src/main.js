import { createApp } from 'vue';
import './styles/tailwind.css';
import './styles/output.css';
import './style.css';
import App from './App.vue';
import router from './router';

// OG createApp(App).mount('#app');

const app = createApp(App); // defining the app

app.use(router);

app.mount('#app');