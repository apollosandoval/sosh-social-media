<template>
  <v-container>
    
    <v-navigation-drawer
      app
      right
      permanent
      stateless
    >
      <v-list three-line>

        <template v-for="(friend, index) in friends">
          <v-divider v-if="index!==0" :key="`divider-${index}`"></v-divider>
          <v-list-tile
            :key="`friend-${friend.name}`"
            router
            :to="`/messages/${friend.id}`"
          >
            <v-list-tile-avatar>
              <img :src="friend.profilePhotoURL" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{friend.name}}</v-list-tile-title>
              <!-- TODO: display text of most recent message -->
              <v-list-tile-sub-title>{{friend.bio}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

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
      let { users } = this.$store.state;
      return users.allIds.reduce( (acc, cur_id) => {
        if (users.byId[cur_id].id !== this.$store.state.auth.user_id) {
          acc.push(users.byId[cur_id]);
        }
        return acc;
      }, [])
    }
  }
}
</script>