<template>
  <v-timeline-item
    hide-dot
    :left="user.id !== 1"
    :right="user.id === 1"
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
        <v-list-tile class="grow">
          <v-list-tile-avatar>
            <v-img
              :src="user.profilePhotoURL"
              class="elevation-6"
            ></v-img>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{user.name}}</v-list-tile-title>
          </v-list-tile-content>
          <v-layout align-center justify-end>
            <span>{{ message.created_at | moment("D MMM YY, hA") }}</span>
          </v-layout>
        </v-list-tile>
      </v-card-actions>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: ['message'],
  computed: {
    user() {
      return this.$store.state.users.byId[this.message.from_user_id];
    }
  }
}
</script>

