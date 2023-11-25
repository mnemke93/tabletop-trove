<template>
    <v-app>
      <AdminSidebar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import AdminSidebar from './components/AdminSidebar.vue';
  
  export default {
    name: 'AdminApp',
    components: {
      AdminSidebar,
    }
  };
  </script>
  