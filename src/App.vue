<template>
  <v-app>
    <LinkMenu></LinkMenu>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterSection></FooterSection>
  </v-app>
</template>

<script>
import LinkMenu from './components/LinkMenu.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    LinkMenu,
    FooterSection,
  },
};
</script>
