<template>
  <nav>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Sosh</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      color="primary"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <img src="http://placekitten.com/200/200">
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-list>
        <!-- Link 1 -->
        <v-list-tile v-for="link in links" :key="`nav-${link.name}`" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ link.name }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      mini: true,
      links: [
        {name: 'Home', icon: 'dashboard', route: '/home'},
        {name: 'Friends', icon: 'contacts', route: '/friends'},
        {name: 'Messages', icon: 'chat', route: '/messages'},
        {name: 'Settings', icon: 'settings', route: '/settings'}
      ],
    }
  },
  computed: {

  }
}
</script>

