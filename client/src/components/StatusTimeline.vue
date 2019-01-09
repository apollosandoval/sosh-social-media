<template>
  <v-timeline>
    <v-timeline-item
      v-for="status in statuses"
      :key="`status-${status.id}`"
      color="red lighten-2"
      large
    >
      <span slot="opposite">{{ status.created_at | moment("from", "now") }}</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{users[status.user_id].name}}</v-card-title>
        <v-card-text>
          {{status.status}}
        </v-card-text>
      </v-card>

    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ['statuses'],
  computed: {
    users() {
      return this.$store.state.users.byId;
    }
  }
}
</script>

