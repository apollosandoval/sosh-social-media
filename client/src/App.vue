<template>
  <v-app>
    <!-- Navbar Component Here -->
    <nav-bar />

    <v-content>
      <!-- router-view component here -->
      <!-- <Dashboard /> -->
      <!-- <ManageFriends /> -->
      <UserProfile />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
// import Dashboard from './views/Dashboard';
// import ManageFriends from './views/ManageFriends';
import UserProfile from './views/UserProfile';

export default {
  name: 'App',
  components: {
    'nav-bar': Navbar,
    // Dashboard,
    // ManageFriends,
    UserProfile,
  },
  
}
</script>
