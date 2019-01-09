<template>
  <v-container>
    <!-- Top Section: User's banner, profile picture, and name -->
    <v-layout row justify-center>
      <v-flex xs12 sm6 offset-s3>
        <v-card>
          <v-img></v-img>
          <v-list two-line>
            <!-- email -->
            <v-list-tile>
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>email@email.com</v-list-tile-title>
                <v-list-tile-sub-title>email</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action></v-list-tile-action>
            </v-list-tile>
            <v-divider inset />
            <!-- location -->
            <v-list-tile>
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Whateverland, AZ</v-list-tile-title>
                <v-list-tile-sub-title>location</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action></v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- Bottom Section: Status Timeline -->
    <v-layout row justify-center>
      <v-flex xs12 sm8>
        <status-timeline />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatusTimeline from '../components/StatusTimeline';

export default {
  components: {
    'status-timeline': StatusTimeline,
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
    this.$store.dispatch('getAllStatuses');
  }
}
</script>