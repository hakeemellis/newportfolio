// router.js

// Defining the Vue Router

// Dependencies:
import { createRouter, createWebHistory } from 'vue-router';

// Pages:
import Home from './views/Home.vue';
import ProjectArchive from './views/ProjectArchive.vue';
import NotFound from './views/NotFound.vue';

//Exceptions:
import AdminLogin from './components//Admin/AdminLogin.vue';
import AdminPanel from './components/Admin/AdminPanel.vue';

// Protection:
import authGuard from './authguard';

const routes = [
  {
    path: '/', // setting the path to the root/homepage of the website
    name: 'Home',
    component: Home,
  },
  {
    path: '/projectarchive', // setting the path to view all projects
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
    meta: { requiresAuth: true }, // to ensure this route requires authentication to access
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for undefined paths
    name: 'NotFound',
    component: NotFound,
  },
];

// To create/load clean route history. eg. https://mypage.com/home - all through defining the Vue router
const router = createRouter({
  history: createWebHistory(), // creates web history
  routes, // loads the routes in keeping with the history
});

// Using Vue Router "beforeEach" instance to protect routes
router.beforeEach(authGuard); // on each route change, authGuard function will be called to verify if authetication is needed

export default router; // to use in main.js
