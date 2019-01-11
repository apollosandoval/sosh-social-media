<template>
  <v-timeline>
    <v-timeline-item
      v-for="status in statuses"
      :key="`status-${status.id}`"
      color="primary"
      large
    >
      <span slot="opposite">{{ status.created_at | moment("from", "now") }}</span>
      <v-card class="elevation-2">
        <v-card-title>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-img
                :src="users[status.user_id].profilePhotoURL"
              ></v-img>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{users[status.user_id].name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-card-title>
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

