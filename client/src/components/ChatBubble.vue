<template>
  <v-timeline>
    <chat-message
      v-for="message in messages"
      :key="`message-${message.id}`"
      :message="message"
    ></chat-message>
  </v-timeline>
</template>
// TODO: Dynamically populate ChatBubble
<script>
import ChatMessage from './ChatMessage'

export default {
  components: {
    'chat-message': ChatMessage,
  },
  computed: {
    messages() {
      // TODO: make `friendId` param dynamic from route
      return this.$store.getters.conversationByFriendId(2);
    }
  }
}
</script>

