import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectArchive from './views/ProjectArchive.vue';
//Exceptions:
import AdminLogin from './components//Admin/AdminLogin.vue';
import AdminPanel from './components/Admin/AdminPanel.vue';

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
  {
    path: '/login', // setting the path for the admin login
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/adminpanel', // setting the path for the admin panel
    name: 'AdminPanel',
    component: AdminPanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
