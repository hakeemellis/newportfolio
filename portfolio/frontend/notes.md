npm create vite@latest my-vue-app --template vue (to establish vite x vue app)
cd my-vue-app

	•	Use Vue CLI (npm install -g @vue/cli & vue create frontend) if you’re working with Vue 2.x, need advanced customizations, or want access to legacy features and Vue CLI plugins (especially for Electron apps or monorepos).

	•	Use Vite (npm create vite@latest my-vue-app --template vue) if you’re working with Vue 3, prefer a faster, more modern setup, and want the simplest, most performant tool for Vue.

File Structure in Vue.js (similar to React)

my-vue-app/                  # Root project directory
├── node_modules/             # Dependencies and node packages
├── public/                   # Static files (index.html, images, etc.)
│   └── index.html            # Main HTML entry point for the app
├── src/                      # Source files for your Vue app
│   ├── assets/               # Static assets (images, fonts, etc.)
│   ├── components/           # Vue components (buttons, headers, etc.)
│   │   ├── Header.vue        # Header component
│   │   └── Footer.vue        # Footer component
│   ├── views/                # Pages for the app (Home, About, etc.)
│   │   ├── Home.vue          # Home page component
│   │   ├── About.vue         # About page component
│   │   └── Contact.vue       # Contact page component
│   ├── router/               # Vue Router configuration
│   │   └── index.js          # Router setup (defines routes for pages)
│   ├── App.vue               # Root Vue component (main entry point)
│   ├── main.js               # Entry JS file that bootstraps the Vue app
│   └── style.css             # Global styles (can be used for Tailwind CSS setup)
├── .gitignore                # Git ignore file to exclude unnecessary files/folders
├── index.html                # Main HTML file (can be found in `public/` too)
├── package.json              # Project metadata and dependency configuration
├── postcss.config.js         # PostCSS configuration (used for Tailwind CSS)
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration file
└── README.md                 # Project documentation (optional, for your reference)

Use npm run format - to forefully make prettier format the code in an ideal way


Gradient Syntax:
background: radial-gradient(shape at position, color-stop1 stop%, color-stop2 stop%, ...);

In Vue, to set routes:

npm install vue-router@next | Make router.js file defining routes | Main.js file referencing the router.js file for the respective routes and place <router-view/> in app.vue to enable global view of routes. 

i.e. use <router-link> (like src="") to link route to file

How to start: npm run dev/serve

FRONTEND WEBSOCKET NOTES

Under Component API structure, if a reactive variable is not defined for something placed in the lifecycle hook it will only execute once but if an element is defined for the reactive variable and something is placed in the lifecycle hook for it its function will be continuous.


When it comes to websockets, io.connect.off is used when we're unmounting for a particular event (like photo syncing due to the function already being done) versus io.connect.disconnection which completely cuts off connection completely which is generally used if a user were to log out of an application and be done with it.

The signleton approach with Websocket is generally preferred due to its component based modularity whereas its global structure while better with regards to global initialization - makes it harder to debug or avoid due to its global use (its better for applications that need that global tie-in like an admin dashboard or notification panel)