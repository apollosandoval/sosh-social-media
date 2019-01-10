<template>
  <v-container>
    
    <v-navigation-drawer
      app
      right
      permanent
      stateless
    >
      <v-layout column align-center>
        <v-flex></v-flex>
      </v-layout>
      <!-- TODO: fix styling for list tiles -->
      <v-list three-line>
        <v-divider></v-divider>
        <v-list-tile v-for="friend in friends" :key="`friend-${friend.name}`">
          <v-list-tile-avatar>
            <img :src="friend.profilePhotoURL" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{friend.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{friend.bio}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-layout column>
      <!-- TODO: add component to post new messages -->
      <chat-bubble />
    </v-layout>
  </v-container>
</template>

<script>
import ChatBubble from '../components/ChatBubble'

export default {
  components: {
    'chat-bubble': ChatBubble,
  },
  computed: {
    friends() {
      return this.$store.state.users.allIds.map(id => this.$store.state.users.byId[id])
    }
  }
}
</script>