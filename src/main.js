import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router) // Use the router
  .mount('#app');