// TODO: make user data render dynamically
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
          <v-avatar size="250">
            <!-- TODO: make avatar component dynamic from auth user -->
            <img
              src="http://www.placepuppy.net/400/400"
            >
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-tile-title>
              Oscar Sandoval
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Phoenix, AZ
            </v-list-tile-sub-title>
          </v-list>
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
        {name: 'Home', icon: 'dashboard', route: '/'},
        {name: 'Friends', icon: 'contacts', route: '/friends'},
        {name: 'Messages', icon: 'chat', route: '/messages/2'},
        {name: 'Settings', icon: 'settings', route: '/settings'}
      ],
    }
  },
  computed: {
    auth() {
      return this.$store.state.users.byId[1]
    }
  }
}
</script>

