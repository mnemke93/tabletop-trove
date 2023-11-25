<template>
    <v-navigation-drawer app permanent>
      <v-list dense>
        <v-list-item v-for="(item, index) in menuItems" :key="index" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: 'AdminSidebar',
    data: () => ({
      menuItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/admin/dashboard' },
        { title: 'User Management', icon: 'mdi-account', link: '/admin/users' },
        { title: 'Product Management', icon: 'mdi-dropbox', link: '/admin/products' },
        // Add other admin sections here
      ]
    })
  };
  </script>