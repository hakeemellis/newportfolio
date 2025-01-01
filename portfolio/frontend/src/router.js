import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectArchive from './views/ProjectArchive.vue';

const routes = [
  {
    path: '/', // setting the path to the root/homepage of the website
    name: 'Home',
    component: Home,
  },
  {
    path: '/projectarchive', // setting the path to the root/homepage of the website
    name: 'ProjectArchive',
    component: ProjectArchive,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
