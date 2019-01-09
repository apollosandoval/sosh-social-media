<template>
  <v-timeline>
    <v-timeline-item
      v-for="status in statuses"
      :key="status.id"
      color="red lighten-2"
      large
    >
      <span slot="opposite">{{ status.created_at | moment("from", "now") }}</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">User Id: {{status.user_id}}</v-card-title>
        <v-card-text>
          {{status.status}}
        </v-card-text>
      </v-card>

    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  computed: {
    statuses() {
      return this.$store.state.statuses.all;
    }
  }
}
</script>

