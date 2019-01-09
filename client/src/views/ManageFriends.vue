<template>
  <v-container>
    <v-layout>
      <!-- insert search-bar component here -->
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          v-model="searchTerm"
          label="Search..."
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line>
            <template v-for="(friend,index) in friends">
              <v-divider v-if="index !== 0" :key="`divider-${index}`"></v-divider>
              <v-list-tile
                :key="friend.id"
              >
                <v-list-tile-avatar>
                  <img :src="friend.profilePhotoURL">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{friend.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{friend.email}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
  },
  computed: {
    friends() {
      const { user_id } = this.$store.state.auth;
      const { users } = this.$store.state;

      return users.allIds
        .filter( key => key !== user_id)
        .map( id => users.byId[id] )
        .filter( friend => friend.name.includes(this.searchTerm) )
    }
  }
}
</script>

