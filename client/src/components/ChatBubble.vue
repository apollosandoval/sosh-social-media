<template>
  <v-timeline>
    <!-- TODO: Generate chat-message Component -->
    <template v-for="message in messages">
      <v-timeline-item
        :key="`timeline-${message.id}`"
        hide-dot
      >
        <v-card
          class="mx-auto"
          dark
          color="primary"
        >
          <!-- edit here for styling in body of card -->
          <v-card-text class="headline font-weight-light">
            {{message.body}}
          </v-card-text>
          <!-- edit here for styling in footer of card -->
          <v-card-actions>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-img
                  src="http://placehold.it/32x32"
                  class="elevation-6"
                ></v-img>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>From: {{message.from_user_id}}</v-list-tile-title>
                <v-list-tile-sub-title>To: {{message.to_user_id}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </template>
  </v-timeline>
</template>
// TODO: Dynamically populate ChatBubble
<script>
export default {
  computed: {
    messages() {
      return this.$store.getters.conversationByFriendId(7);
    }
  }
}
</script>

