<template>
  <v-app>
    <!-- Navbar Component Here -->
    <nav-bar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    'nav-bar': Navbar,
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
    this.$store.dispatch('getAllStatuses');
    this.$store.dispatch('getAllMessages');
  }
  
}
</script>
